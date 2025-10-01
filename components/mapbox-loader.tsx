"use client"

import { useState, useEffect, type ReactNode } from "react"
import Script from "next/script"

interface MapboxLoaderProps {
  children: ReactNode
  fallback?: ReactNode
}

export const MapboxLoader = ({ children, fallback }: MapboxLoaderProps) => {
  const [mapboxLoaded, setMapboxLoaded] = useState(false)
  const [mapboxToken, setMapboxToken] = useState<string | null>(null)
  const [error, setError] = useState<string | null>(null)

  // Load Mapbox token from API
  useEffect(() => {
    const fetchMapboxToken = async (retryCount = 0) => {
      let response: Response
      try {
        // Try the secure endpoint first
        response = await fetch("/api/mapbox-token")

        // If that fails, try the dev endpoint as fallback
        if (!response.ok) {
          console.log("Falling back to dev token endpoint")
          response = await fetch("/api/mapbox-token-dev")
        }

        if (!response.ok) {
          throw new Error(`Failed to fetch Mapbox token: ${response.status}`)
        }

        const data = await response.json()
        if (data.token) {
          setMapboxToken(data.token)
          console.log("Mapbox token loaded successfully")
        } else {
          throw new Error("No token in response")
        }
      } catch (err) {
        console.error("Error fetching Mapbox token:", err)
        console.error("Response status:", response?.status)
        console.error("Response text:", await response?.text().catch(() => "Could not read response"))
        if (retryCount < 3) {
          console.log(`Retrying token fetch, attempt ${retryCount + 1}`)
          setTimeout(() => fetchMapboxToken(retryCount + 1), 1000)
        } else {
          setError(err instanceof Error ? err.message : "Failed to load Mapbox token")
        }
      }
    }

    fetchMapboxToken()
  }, [])

  // Initialize Mapbox when token is available and script is loaded
  useEffect(() => {
    if (mapboxToken && typeof window !== "undefined" && window.mapboxgl) {
      try {
        window.mapboxgl.accessToken = mapboxToken
        setMapboxLoaded(true)
        console.log("Mapbox GL initialized successfully")
      } catch (err) {
        console.error("Error initializing Mapbox GL:", err)
        setError(err instanceof Error ? err.message : "Failed to initialize Mapbox")
      }
    }
  }, [mapboxToken])

  // If there's an error, show it
  if (error) {
    console.error("Mapbox loader error:", error)
    return fallback || <div>Failed to load map: {error}</div>
  }

  return (
    <>
      {/* Load Mapbox GL JS script */}
      <Script
        src="https://api.mapbox.com/mapbox-gl-js/v2.15.0/mapbox-gl.js"
        onLoad={() => console.log("Mapbox script loaded")}
        onError={(e) => {
          console.error("Error loading Mapbox script:", e)
          setError("Failed to load Mapbox script")
        }}
      />

      {/* Add Mapbox CSS */}
      <style jsx global>{`
        @import 'https://api.mapbox.com/mapbox-gl-js/v2.15.0/mapbox-gl.css';
      `}</style>

      {/* Show children only when Mapbox is fully loaded */}
      {mapboxLoaded ? children : fallback || <div>Loading map...</div>}
    </>
  )
}

// Also export as default for backward compatibility
export default MapboxLoader
