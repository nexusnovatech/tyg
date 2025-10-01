"use client"

import { useState, useEffect, useRef } from "react"
import { Phone, Mail, Clock, MapPin, ExternalLink, AlertTriangle } from "lucide-react"
import { Button } from "@/components/ui/button"
import { MapboxLoader } from "./mapbox-loader"

// Define the location data type
interface LocationData {
  id: string
  city: string
  address: string
  coordinates: [number, number] // [longitude, latitude]
  services: string[]
}

// Common contact information for all locations
const contactInfo = {
  phone: "41 44 33 33",
  email: "kontakt@tryghedspersonale.dk",
  hours: "Døgnbemanding alle ugens dage",
}

// All available services
const allServices = [
  "Asylcentre",
  "Enkeltmandsprojekter",
  "Psykiatrien",
  "Bosteder",
  "Tryghedsmedarbejder",
  "Plejehjem",
  "Konflikthåndtering",
]

// Sample location data for Hovedstaden departments
const hovedstadenLocations: LocationData[] = [
  {
    id: "kobenhavn",
    city: "København",
    address: "Rådhuspladsen 1, 1550 København",
    coordinates: [12.5683, 55.6761], // Longitude, Latitude
    services: allServices,
  },
  {
    id: "frederiksberg",
    city: "Frederiksberg",
    address: "Frederiksberg Allé 27, 1820 Frederiksberg",
    coordinates: [12.5339, 55.6735],
    services: allServices,
  },
  {
    id: "hvidovre",
    city: "Hvidovre",
    address: "Hvidovrevej 278, 2650 Hvidovre",
    coordinates: [12.4735, 55.6358],
    services: allServices,
  },
  {
    id: "ballerup",
    city: "Ballerup",
    address: "Ballerup Byvej 5, 2750 Ballerup",
    coordinates: [12.3618, 55.7303],
    services: allServices,
  },
  {
    id: "rodovre",
    city: "Rødovre",
    address: "Rødovre Centrum 136, 2610 Rødovre",
    coordinates: [12.4528, 55.6815],
    services: allServices,
  },
  {
    id: "horsholm",
    city: "Hørsholm",
    address: "Hovedgaden 17, 2970 Hørsholm",
    coordinates: [12.5037, 55.8837],
    services: allServices,
  },
  {
    id: "lyngby",
    city: "Lyngby",
    address: "Lyngby Hovedgade 63, 2800 Kongens Lyngby",
    coordinates: [12.5042, 55.7708],
    services: allServices,
  },
  {
    id: "hillerod",
    city: "Hillerød",
    address: "Slotsgade 27, 3400 Hillerød",
    coordinates: [12.3019, 55.9279],
    services: allServices,
  },
]

// The actual map component that uses mapboxgl
function MapComponent({
  activeLocation,
  setActiveLocation,
}: {
  activeLocation: LocationData | null
  setActiveLocation: (location: LocationData | null) => void
}) {
  const [isLoading, setIsLoading] = useState(true)
  const [mapError, setMapError] = useState<string | null>(null)
  const mapContainerRef = useRef<HTMLDivElement>(null)
  const mapInstanceRef = useRef<any>(null)
  const markersRef = useRef<any[]>([])

  // Initialize map on component mount
  useEffect(() => {
    if (!window.mapboxgl || !mapContainerRef.current) {
      console.error("Mapbox GL or map container not available")
      return
    }

    try {
      console.log("Initializing map...")
      const mapboxgl = window.mapboxgl

      // Initialize the map
      const map = new mapboxgl.Map({
        container: mapContainerRef.current,
        style: "mapbox://styles/mapbox/light-v11",
        center: [12.5, 55.7], // Center of Hovedstaden
        zoom: 9, // Initial zoom level
        attributionControl: false,
        pitchWithRotate: false, // Disable pitch with rotate gesture
        minZoom: 7, // Set minimum zoom level
        maxZoom: 15, // Set maximum zoom level
      })

      // Add navigation controls
      map.addControl(new mapboxgl.NavigationControl(), "bottom-right")

      // Add reset view button
      const resetViewButton = document.createElement("button")
      resetViewButton.className = "reset-view-button"
      resetViewButton.innerHTML =
        '<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"></path><polyline points="9 22 9 12 15 12 15 22"></polyline></svg>'
      resetViewButton.title = "Reset view"

      resetViewButton.addEventListener("click", () => {
        // Create bounds object to fit all markers
        const bounds = new mapboxgl.LngLatBounds()

        // Extend bounds to include all markers
        hovedstadenLocations.forEach((location) => {
          bounds.extend(location.coordinates)
        })

        // Fit map to bounds with padding and smooth animation
        map.fitBounds(bounds, {
          padding: { top: 50, bottom: 50, left: 50, right: 50 },
          maxZoom: 9,
          duration: 1200,
          essential: true,
        })

        // Clear active location
        setActiveLocation(null)
      })

      const resetViewControl = document.createElement("div")
      resetViewControl.className = "mapboxgl-ctrl mapboxgl-ctrl-group"
      resetViewControl.appendChild(resetViewButton)

      map.getContainer().appendChild(resetViewControl)

      // Create bounds object to fit all markers
      const bounds = new mapboxgl.LngLatBounds()

      // Wait for map to load before adding markers
      map.on("load", () => {
        console.log("Map loaded successfully")
        setIsLoading(false)

        // Clear any existing markers
        markersRef.current.forEach((marker) => marker && marker.remove())
        markersRef.current = []

        // Add markers for all locations
        hovedstadenLocations.forEach((location) => {
          const markerElement = document.createElement("div")
          markerElement.className = "custom-marker"
          markerElement.innerHTML = `<div class="marker-inner">${location.city.charAt(0)}</div>`

          // Make the active marker larger and different color
          if (activeLocation?.id === location.id) {
            markerElement.classList.add("active")
          }

          const marker = new mapboxgl.Marker(markerElement).setLngLat(location.coordinates).addTo(map)

          // Store marker reference
          markersRef.current.push(marker)

          // Add click event to marker
          markerElement.addEventListener("click", () => {
            setActiveLocation(location)
          })

          // Extend bounds to include this marker
          bounds.extend(location.coordinates)
        })

        // Fit map to bounds with padding and smooth animation
        map.fitBounds(bounds, {
          padding: { top: 50, bottom: 50, left: 50, right: 50 },
          maxZoom: 9,
          duration: 1200, // Smooth transition duration in milliseconds
          essential: true, // This animation is considered essential
        })
      })

      map.on("error", (e: any) => {
        console.error("Mapbox error:", e)
        setMapError(e.error?.message || "Unknown map error")
        setIsLoading(false)
      })

      mapInstanceRef.current = map

      // Update map when activeLocation changes
      if (activeLocation && mapInstanceRef.current) {
        mapInstanceRef.current.flyTo({
          center: activeLocation.coordinates,
          zoom: 12, // Higher zoom level for better view
          speed: 0.8, // Slightly slower for smoother animation
          curve: 1.2, // Smoother curve
          essential: true, // This animation is considered essential
        })

        // Update marker styles
        markersRef.current.forEach((marker, index) => {
          if (!marker) return
          const element = marker.getElement()
          if (hovedstadenLocations[index]?.id === activeLocation.id) {
            element.classList.add("active")
          } else {
            element.classList.remove("active")
          }
        })
      }
    } catch (error) {
      console.error("Error initializing map:", error)
      setMapError(error instanceof Error ? error.message : "Unknown error")
      setIsLoading(false)
    }

    // Cleanup
    return () => {
      if (mapInstanceRef.current) {
        markersRef.current.forEach((marker) => marker && marker.remove())
        mapInstanceRef.current.remove()
      }
    }
  }, [activeLocation])

  return (
    <div className="relative w-full h-full">
      <div ref={mapContainerRef} className="w-full h-full" />

      {/* Loading overlay */}
      {isLoading && (
        <div className="absolute inset-0 flex items-center justify-center bg-white bg-opacity-80 z-10">
          <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-red-600"></div>
        </div>
      )}

      {/* Error overlay */}
      {mapError && (
        <div className="absolute inset-0 flex flex-col items-center justify-center bg-white bg-opacity-90 z-10 p-6">
          <AlertTriangle className="h-12 w-12 text-red-600 mb-4" />
          <h3 className="text-lg font-bold text-red-600 mb-2">Kunne ikke indlæse kortet</h3>
          <p className="text-slate-700 text-center mb-4">
            Vi beklager ulejligheden. Du kan stadig se vores afdelinger i listen til venstre.
          </p>
          <div className="bg-slate-100 p-4 rounded-lg text-sm text-slate-500 max-w-md overflow-auto">{mapError}</div>
        </div>
      )}
    </div>
  )
}

// Fallback component when map can't be loaded
function MapFallback() {
  return (
    <div className="absolute inset-0 flex flex-col items-center justify-center bg-white bg-opacity-90 z-10 p-6">
      <AlertTriangle className="h-12 w-12 text-red-600 mb-4" />
      <h3 className="text-lg font-bold text-red-600 mb-2">Indlæser kort...</h3>
      <p className="text-slate-700 text-center mb-4">
        Hvis kortet ikke indlæses, kan du stadig se vores afdelinger i listen til venstre.
      </p>
    </div>
  )
}

export function InteractiveMap() {
  const [activeLocation, setActiveLocation] = useState<LocationData | null>(null)

  // Function to handle location selection from the sidebar
  const handleLocationSelect = (location: LocationData) => {
    setActiveLocation(location)
  }

  return (
    <div className="map-container">
      <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
        <div className="lg:col-span-1">
          <div className="bg-white rounded-xl shadow-md p-4 h-full">
            <h3 className="text-lg font-bold mb-4 flex items-center">
              <MapPin className="h-5 w-5 text-red-600 mr-2" />
              Vores afdelinger
            </h3>
            <div className="space-y-3 max-h-[400px] overflow-y-auto pr-2">
              {hovedstadenLocations.map((location) => (
                <div
                  key={location.id}
                  className={`p-3 rounded-lg cursor-pointer transition-all duration-200 ${
                    activeLocation?.id === location.id
                      ? "bg-red-50 border-l-4 border-red-600"
                      : "bg-slate-50 hover:bg-slate-100"
                  }`}
                  onClick={() => handleLocationSelect(location)}
                >
                  <div className="font-medium text-slate-900">{location.city}</div>
                  <div className="text-sm text-slate-500 mt-1">{location.address}</div>
                </div>
              ))}
            </div>
            <div className="mt-4 pt-4 border-t border-slate-200">
              <Button
                asChild
                variant="outline"
                size="sm"
                className="w-full text-red-600 border-red-200 hover:bg-red-50"
              >
                <a href="/kontakt" className="flex items-center justify-center">
                  <Mail className="mr-2 h-4 w-4" />
                  Kontakt alle afdelinger
                </a>
              </Button>
            </div>
          </div>
        </div>

        <div className="lg:col-span-3">
          {/* Map Container */}
          <div className="w-full h-[500px] rounded-xl overflow-hidden bg-slate-100 shadow-md relative">
            {/* Dynamic Mapbox Map with Fallback */}
            <MapboxLoader fallback={<MapFallback />}>
              <MapComponent activeLocation={activeLocation} setActiveLocation={setActiveLocation} />
            </MapboxLoader>
          </div>

          {activeLocation && (
            <div className="mt-4 bg-white p-4 rounded-xl shadow-md border border-slate-100">
              <h3 className="font-bold text-lg text-slate-900 mb-2">{activeLocation.city}</h3>
              <div className="space-y-2 mb-4">
                <div className="flex items-start">
                  <MapPin className="h-5 w-5 text-red-600 mr-2 mt-0.5 flex-shrink-0" />
                  <span className="text-slate-700">{activeLocation.address}</span>
                </div>
                <div className="flex items-center">
                  <Phone className="h-5 w-5 text-red-600 mr-2 flex-shrink-0" />
                  <a href={`tel:${contactInfo.phone.replace(/\s/g, "")}`} className="text-red-600">
                    {contactInfo.phone}
                  </a>
                </div>
                <div className="flex items-center">
                  <Mail className="h-5 w-5 text-red-600 mr-2 flex-shrink-0" />
                  <a href={`mailto:${contactInfo.email}`} className="text-red-600">
                    {contactInfo.email}
                  </a>
                </div>
                <div className="flex items-center">
                  <Clock className="h-5 w-5 text-red-600 mr-2 flex-shrink-0" />
                  <span className="text-slate-700">{contactInfo.hours}</span>
                </div>
              </div>
              <div className="flex flex-wrap gap-2 mb-4">
                {activeLocation.services.slice(0, 4).map((service, idx) => (
                  <span key={idx} className="text-xs bg-slate-100 px-2 py-1 rounded-full text-slate-600">
                    {service}
                  </span>
                ))}
                {activeLocation.services.length > 4 && (
                  <span className="text-xs bg-slate-100 px-2 py-1 rounded-full text-slate-600">
                    +{activeLocation.services.length - 4} mere
                  </span>
                )}
              </div>
              <div className="flex gap-3">
                <Button asChild size="sm" className="flex-1 bg-red-600 hover:bg-red-700">
                  <a href={`tel:${contactInfo.phone.replace(/\s/g, "")}`}>
                    <Phone className="mr-2 h-4 w-4" /> Ring nu
                  </a>
                </Button>
                <Button asChild variant="outline" size="sm" className="flex-1">
                  <a href={`/kontakt?location=${activeLocation.id}`}>
                    <ExternalLink className="mr-2 h-4 w-4" /> Kontakt
                  </a>
                </Button>
              </div>
            </div>
          )}
        </div>
      </div>
      <style jsx global>{`
        .custom-marker {
          background-color: #e11d48;
          width: 28px;
          height: 28px;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          color: white;
          font-weight: bold;
          cursor: pointer;
          box-shadow: 0 2px 8px rgba(0, 0, 0, 0.3);
          border: 2px solid white;
          transition: all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275);
          transform-origin: center bottom;
        }

        .custom-marker.active {
          width: 40px;
          height: 40px;
          background-color: #ff0000;
          z-index: 10;
          transform: scale(1.1);
          box-shadow: 0 4px 12px rgba(0, 0, 0, 0.4);
        }
        
        .marker-inner {
          font-size: 12px;
        }

        .reset-view-button {
          background: white;
          border: none;
          border-radius: 4px;
          cursor: pointer;
          display: flex;
          align-items: center;
          justify-content: center;
          width: 30px;
          height: 30px;
          padding: 5px;
          box-shadow: 0 0 0 2px rgba(0,0,0,.1);
          position: absolute;
          bottom: 95px;
          right: 10px;
          z-index: 1;
        }

        .reset-view-button:hover {
          background-color: #f0f0f0;
        }
      `}</style>
    </div>
  )
}
