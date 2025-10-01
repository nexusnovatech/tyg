"use client"

import { useEffect, useRef, useState } from "react"
import mapboxgl from "mapbox-gl"
import "mapbox-gl/dist/mapbox-gl.css"
import { useMediaQuery } from "@/hooks/use-media-query"

interface Marker {
  longitude: number
  latitude: number
  title: string
  description: string
  address?: string
  phone?: string
  email?: string
  services?: string[]
  manager?: string
}

interface MapboxMapProps {
  initialViewState: {
    longitude: number
    latitude: number
    zoom: number
  }
  markers?: Marker[]
}

export function MapboxMap({ initialViewState, markers = [] }: MapboxMapProps) {
  const mapContainer = useRef<HTMLDivElement>(null)
  const map = useRef<mapboxgl.Map | null>(null)
  const [mapboxToken, setMapboxToken] = useState<string | null>(null)
  const isMobile = useMediaQuery("(max-width: 768px)")

  // The issue is likely caused by markers being recreated on re-renders
  // Let's modify the code to ensure markers are only created once and properly cleaned up

  // First, let's create a ref to track our markers
  const markersRef = useRef<mapboxgl.Marker[]>([])

  useEffect(() => {
    async function getMapboxToken() {
      try {
        const response = await fetch("/api/mapbox-token")
        const data = await response.json()
        setMapboxToken(data.token)
      } catch (error) {
        console.error("Failed to fetch Mapbox token:", error)
      }
    }

    getMapboxToken()
  }, [])

  // Then modify the useEffect that creates the map and markers
  // Replace the entire useEffect that contains the map initialization with this updated version:

  useEffect(() => {
    if (!mapboxToken || !mapContainer.current) return

    // Only initialize the map if it doesn't exist yet
    if (!map.current) {
      mapboxgl.accessToken = mapboxToken

      map.current = new mapboxgl.Map({
        container: mapContainer.current,
        style: "mapbox://styles/mapbox/streets-v12",
        center: [initialViewState.longitude, initialViewState.latitude],
        zoom: initialViewState.zoom,
      })

      // Add navigation control
      map.current.addControl(new mapboxgl.NavigationControl(), "top-right")

      // Add custom CSS for popup styling
      const style = document.createElement("style")
      style.textContent = `
        .mapboxgl-popup-content {
          padding: 16px;
          border-radius: 8px;
          box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
          border: 1px solid #e5e7eb;
        }
        .mapboxgl-popup-close-button {
          font-size: 20px;
          color: #6b7280;
          top: 8px;
          right: 8px;
        }
        .mapboxgl-popup-close-button:hover {
          background: #f3f4f6;
          color: #dc2626;
        }
        .mapboxgl-popup-tip {
          border-top-color: white !important;
          border-bottom-color: white !important;
        }
      `
      document.head.appendChild(style)
    }

    // Clean up existing markers before adding new ones
    markersRef.current.forEach((marker) => marker.remove())
    markersRef.current = []

    // Wait for the map to be loaded before adding markers
    if (map.current) {
      // If map is already loaded, add markers immediately
      if (map.current.loaded()) {
        addMarkers()
      } else {
        // Otherwise wait for the load event
        map.current.once("load", addMarkers)
      }
    }

    function addMarkers() {
      if (!map.current) return

      // Add markers
      markers.forEach((marker) => {
        // Create a DOM element for the marker
        const markerElement = document.createElement("div")
        markerElement.className = "custom-marker"
        markerElement.style.width = "36px"
        markerElement.style.height = "36px"
        markerElement.style.backgroundImage = "url('/logo-icon.png')"
        markerElement.style.backgroundSize = "cover"
        markerElement.style.borderRadius = "50%"
        markerElement.style.border = "3px solid white"
        markerElement.style.boxShadow = "0 3px 6px rgba(0,0,0,0.3)"
        markerElement.style.cursor = "pointer"

        // Remove transition to prevent movement
        // markerElement.style.transition = "transform 0.2s ease";

        // Add hover effect without using transform to avoid movement
        markerElement.addEventListener("mouseenter", () => {
          markerElement.style.boxShadow = "0 4px 8px rgba(0,0,0,0.4)"
          markerElement.style.border = "3px solid #dc2626"
        })
        markerElement.addEventListener("mouseleave", () => {
          markerElement.style.boxShadow = "0 3px 6px rgba(0,0,0,0.3)"
          markerElement.style.border = "3px solid white"
        })

        // Create popup HTML with enhanced information
        let popupHtml = `
          <div class="popup-content" style="font-family: system-ui, -apple-system, sans-serif; max-width: 280px;">
            <h3 style="font-weight: 700; font-size: 16px; margin-bottom: 8px; color: #dc2626; border-bottom: 2px solid #dc2626; padding-bottom: 6px;">${marker.title}</h3>
            <p style="font-weight: 500; margin-bottom: 8px; color: #4b5563;">${marker.description}</p>
        `

        if (marker.address) {
          popupHtml += `
            <div style="margin-bottom: 8px;">
              <div style="font-weight: 600; font-size: 13px; color: #374151; margin-bottom: 2px;">Adresse:</div>
              <p style="margin: 0; color: #4b5563; font-size: 13px;">${marker.address}</p>
            </div>
          `
        }

        if (marker.services && marker.services.length > 0) {
          popupHtml += `
            <div style="margin-bottom: 8px;">
              <div style="font-weight: 600; font-size: 13px; color: #374151; margin-bottom: 2px;">Ydelser:</div>
              <div style="display: flex; flex-wrap: wrap; gap: 4px; margin-top: 4px;">
          `

          marker.services.forEach((service) => {
            popupHtml += `<span style="background-color: #fee2e2; color: #dc2626; font-size: 11px; padding: 2px 6px; border-radius: 12px;">${service}</span>`
          })

          popupHtml += `
              </div>
            </div>
          `
        }

        popupHtml += `
          <div style="display: flex; gap: 8px; margin-top: 12px; border-top: 1px solid #e5e7eb; padding-top: 8px;">
        `

        popupHtml += `
          <a href="tel:+4570605040" style="background-color: #dc2626; color: white; text-decoration: none; padding: 6px 10px; border-radius: 4px; font-size: 12px; font-weight: 500; display: inline-flex; align-items: center;">
            <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style="margin-right: 4px;"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path></svg>
            70 60 50 40
          </a>
        `

        popupHtml += `
          <a href="mailto:kontakt@tryghedspersonale.dk" style="background-color: #4b5563; color: white; text-decoration: none; padding: 6px 10px; border-radius: 4px; font-size: 12px; font-weight: 500; display: inline-flex; align-items: center;">
            <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style="margin-right: 4px;"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path><polyline points="22,6 12,13 2,6"></polyline></svg>
            Email
          </a>
        `

        popupHtml += `
            <a href="/afdelinger/${marker.title.toLowerCase()}" style="background-color: #1d4ed8; color: white; text-decoration: none; padding: 6px 10px; border-radius: 4px; font-size: 12px; font-weight: 500; display: inline-flex; align-items: center;">
              <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style="margin-right: 4px;"><path d="M9 18l6-6-6-6"></path></svg>
              Se afdeling
            </a>
          </div>
        </div>
        `

        // Create popup
        const popup = new mapboxgl.Popup({
          offset: 25,
          closeButton: true,
          closeOnClick: false,
          maxWidth: "300px",
          className: "custom-popup",
        }).setHTML(popupHtml)

        // Add marker to map
        const mapboxMarker = new mapboxgl.Marker(markerElement)
          .setLngLat([marker.longitude, marker.latitude])
          .setPopup(popup)
          .addTo(map.current)

        // Store the marker reference for later cleanup
        markersRef.current.push(mapboxMarker)
      })
    }

    // Clean up on unmount
    return () => {
      if (map.current) {
        map.current.remove()
        map.current = null
      }
    }
  }, [mapboxToken, initialViewState.longitude, initialViewState.latitude, initialViewState.zoom])

  // Keep the markers stable when only the zoom changes
  // Remove the useEffect that adjusts zoom for mobile and replace with this:
  useEffect(() => {
    if (map.current && isMobile !== undefined) {
      const currentZoom = map.current.getZoom()
      const targetZoom = isMobile ? initialViewState.zoom - 1 : initialViewState.zoom

      // Only change zoom if it's significantly different to avoid unnecessary changes
      if (Math.abs(currentZoom - targetZoom) > 0.5) {
        map.current.setZoom(targetZoom)
      }
    }
  }, [isMobile, initialViewState.zoom])

  return <div ref={mapContainer} className="w-full h-full" />
}
