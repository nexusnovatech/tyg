"use client"

import { useState, useEffect, useRef } from "react"
import { MapPin, Phone, Mail, Clock, ExternalLink, AlertTriangle, ChevronLeft } from "lucide-react"
import { Button } from "@/components/ui/button"
import { MapboxLoader } from "./mapbox-loader"
import { useMediaQuery } from "@/hooks/use-media-query"

// Define the location data type
interface LocationData {
  id: string
  region: string
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

// Sample location data for all regions
const locations: LocationData[] = [
  // Hovedstaden
  {
    id: "kobenhavn",
    region: "hovedstaden",
    city: "København",
    address: "Rådhuspladsen 1, 1550 København",
    coordinates: [12.5683, 55.6761], // Longitude, Latitude
    services: allServices,
  },
  {
    id: "frederiksberg",
    region: "hovedstaden",
    city: "Frederiksberg",
    address: "Frederiksberg Allé 27, 1820 Frederiksberg",
    coordinates: [12.5339, 55.6735],
    services: allServices,
  },
  {
    id: "hvidovre",
    region: "hovedstaden",
    city: "Hvidovre",
    address: "Hvidovrevej 278, 2650 Hvidovre",
    coordinates: [12.4735, 55.6358],
    services: allServices,
  },
  {
    id: "ballerup",
    region: "hovedstaden",
    city: "Ballerup",
    address: "Ballerup Byvej 5, 2750 Ballerup",
    coordinates: [12.3618, 55.7303],
    services: allServices,
  },

  // Sjælland
  {
    id: "roskilde",
    region: "sjaelland",
    city: "Roskilde",
    address: "Stændertorvet 1, 4000 Roskilde",
    coordinates: [12.0803, 55.6427],
    services: allServices,
  },
  {
    id: "koge",
    region: "sjaelland",
    city: "Køge",
    address: "Torvet 1, 4600 Køge",
    coordinates: [12.1827, 55.4567],
    services: allServices,
  },
  {
    id: "naestved",
    region: "sjaelland",
    city: "Næstved",
    address: "Teatergade 8, 4700 Næstved",
    coordinates: [11.7693, 55.2306],
    services: allServices,
  },

  // Fyn
  {
    id: "odense",
    region: "fyn",
    city: "Odense",
    address: "Vesterbro 21, 5000 Odense",
    coordinates: [10.3874, 55.4038],
    services: allServices,
  },
  {
    id: "svendborg",
    region: "fyn",
    city: "Svendborg",
    address: "Havnepladsen 5, 5700 Svendborg",
    coordinates: [10.6122, 55.0603],
    services: allServices,
  },
  {
    id: "middelfart",
    region: "fyn",
    city: "Middelfart",
    address: "Havnegade 8, 5500 Middelfart",
    coordinates: [9.7361, 55.5069],
    services: allServices,
  },

  // Jylland
  {
    id: "aarhus",
    region: "jylland",
    city: "Aarhus",
    address: "Banegårdspladsen 16, 8000 Aarhus",
    coordinates: [10.2039, 56.1496],
    services: allServices,
  },
  {
    id: "aalborg",
    region: "jylland",
    city: "Aalborg",
    address: "Vesterbro 27, 9000 Aalborg",
    coordinates: [9.9187, 57.0488],
    services: allServices,
  },
  {
    id: "vejle",
    region: "jylland",
    city: "Vejle",
    address: "Dæmningen 58, 7100 Vejle",
    coordinates: [9.5357, 55.709],
    services: allServices,
  },
  {
    id: "esbjerg",
    region: "jylland",
    city: "Esbjerg",
    address: "Kongensgade 34, 6700 Esbjerg",
    coordinates: [8.4599, 55.4668],
    services: allServices,
  },
]

// Group locations by region
const locationsByRegion = {
  hovedstaden: locations.filter((loc) => loc.region === "hovedstaden"),
  sjaelland: locations.filter((loc) => loc.region === "sjaelland"),
  fyn: locations.filter((loc) => loc.region === "fyn"),
  jylland: locations.filter((loc) => loc.region === "jylland"),
}

// Region data for tabs
const regions = [
  { id: "hovedstaden", name: "Hovedstaden", path: "/afdelinger/hovedstaden" },
  { id: "sjaelland", name: "Sjælland", path: "/afdelinger/sjaelland" },
  { id: "fyn", name: "Fyn", path: "/afdelinger/fyn" },
  { id: "jylland", name: "Jylland", path: "/afdelinger/jylland" },
]

// The actual map component that uses mapboxgl
function MapComponent({
  activeLocation,
  setActiveLocation,
  activeRegion,
}: {
  activeLocation: LocationData | null
  setActiveLocation: (location: LocationData | null) => void
  activeRegion: string
}) {
  const [isLoading, setIsLoading] = useState(true)
  const [mapError, setMapError] = useState<string | null>(null)
  const mapContainerRef = useRef<HTMLDivElement>(null)
  const mapInstanceRef = useRef<any>(null)
  const markersRef = useRef<any[]>([])
  const isMobile = useMediaQuery("(max-width: 768px)")

  // Get locations for the active region
  const regionLocations = locationsByRegion[activeRegion as keyof typeof locationsByRegion] || []

  // Initialize map on component mount
  useEffect(() => {
    if (!window.mapboxgl || !mapContainerRef.current) {
      console.error("Mapbox GL or map container not available")
      setMapError("Mapbox not available")
      setIsLoading(false)
      return
    }

    try {
      console.log("Initializing map...")
      const mapboxgl = window.mapboxgl

      // Check if we have a valid token
      if (!mapboxgl.accessToken) {
        console.error("No Mapbox access token available")
        setMapError("Map configuration error")
        setIsLoading(false)
        return
      }

      // Get center coordinates based on region
      let centerCoords: [number, number] = [10.5, 56.0] // Default center (Denmark)
      let zoomLevel = 6

      switch (activeRegion) {
        case "hovedstaden":
          centerCoords = [12.5, 55.7]
          zoomLevel = 9
          break
        case "sjaelland":
          centerCoords = [11.8, 55.4]
          zoomLevel = 8
          break
        case "fyn":
          centerCoords = [10.2, 55.3]
          zoomLevel = 9
          break
        case "jylland":
          centerCoords = [9.5, 56.2]
          zoomLevel = 7
          break
      }

      // Initialize the map
      const map = new mapboxgl.Map({
        container: mapContainerRef.current,
        style: "mapbox://styles/mapbox/light-v11",
        center: centerCoords,
        zoom: zoomLevel,
        attributionControl: false,
        pitchWithRotate: false, // Disable pitch with rotate gesture
        minZoom: 5, // Set minimum zoom level
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
        regionLocations.forEach((location) => {
          bounds.extend(location.coordinates)
        })

        // Fit map to bounds with padding and smooth animation
        map.fitBounds(bounds, {
          padding: { top: 50, bottom: 50, left: 50, right: 50 },
          maxZoom: zoomLevel,
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
        regionLocations.forEach((location) => {
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
          maxZoom: zoomLevel,
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
          if (regionLocations[index]?.id === activeLocation.id) {
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
  }, [activeLocation, activeRegion, regionLocations, setActiveLocation])

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
    <div className="absolute inset-0 flex flex-col items-center justify-center bg-slate-100 z-10 p-6">
      <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-red-600 mb-4"></div>
      <h3 className="text-lg font-bold text-slate-700 mb-2">Indlæser kort...</h3>
      <p className="text-slate-600 text-center">
        Hvis kortet ikke indlæses, kan du stadig se vores afdelinger i listen til venstre.
      </p>
    </div>
  )
}

export function AfdelingerMap() {
  const [activeLocation, setActiveLocation] = useState<LocationData | null>(null)
  const [activeRegion, setActiveRegion] = useState<string>("hovedstaden")
  const [mobileView, setMobileView] = useState<"list" | "map">("list")
  const isMobile = useMediaQuery("(max-width: 768px)")

  // Function to handle location selection from the sidebar
  const handleLocationSelect = (location: LocationData) => {
    setActiveLocation(location)
    if (isMobile) {
      setMobileView("map")
    }
  }

  // Function to handle region selection
  const handleRegionSelect = (region: string) => {
    setActiveRegion(region)
    setActiveLocation(null)
  }

  // Get locations for the active region
  const regionLocations = locationsByRegion[activeRegion as keyof typeof locationsByRegion] || []

  return (
    <div className="afdelinger-map-container">
      {/* Region tabs */}
      <div className="flex overflow-x-auto mb-6 bg-white rounded-lg shadow-md p-1">
        {regions.map((region) => (
          <button
            key={region.id}
            onClick={() => handleRegionSelect(region.id)}
            className={`px-4 py-2 whitespace-nowrap transition-colors duration-200 rounded-md ${
              activeRegion === region.id ? "bg-red-600 text-white" : "text-slate-700 hover:bg-slate-100"
            }`}
          >
            {region.name}
          </button>
        ))}
      </div>

      {/* Mobile view toggle */}
      {isMobile && (
        <div className="flex mb-4">
          <button
            onClick={() => setMobileView("list")}
            className={`flex-1 py-2 px-4 ${
              mobileView === "list" ? "bg-red-600 text-white" : "bg-slate-100 text-slate-700"
            } rounded-l-lg flex items-center justify-center`}
          >
            <MapPin className="h-4 w-4 mr-2" /> Afdelinger
          </button>
          <button
            onClick={() => setMobileView("map")}
            className={`flex-1 py-2 px-4 ${
              mobileView === "map" ? "bg-red-600 text-white" : "bg-slate-100 text-slate-700"
            } rounded-r-lg flex items-center justify-center`}
          >
            <MapPin className="h-4 w-4 mr-2" /> Kort
          </button>
        </div>
      )}

      <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
        {/* Location list - hidden on mobile when map is active */}
        <div className={`lg:col-span-1 ${isMobile && mobileView === "map" ? "hidden" : "block"}`}>
          <div className="bg-white rounded-xl shadow-md p-4 h-full">
            <h3 className="text-lg font-bold mb-4 flex items-center">
              <MapPin className="h-5 w-5 text-red-600 mr-2" />
              Vores afdelinger i {regions.find((r) => r.id === activeRegion)?.name}
            </h3>
            <div className="space-y-3 max-h-[400px] overflow-y-auto pr-2">
              {regionLocations.map((location) => (
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
                <a
                  href={regions.find((r) => r.id === activeRegion)?.path || "/afdelinger"}
                  className="flex items-center justify-center"
                >
                  <ExternalLink className="mr-2 h-4 w-4" />
                  Se alle afdelinger i {regions.find((r) => r.id === activeRegion)?.name}
                </a>
              </Button>
            </div>
          </div>
        </div>

        {/* Map Container - hidden on mobile when list is active */}
        <div className={`lg:col-span-3 ${isMobile && mobileView === "list" ? "hidden" : "block"}`}>
          <div className="w-full h-[500px] rounded-xl overflow-hidden bg-slate-100 shadow-md relative min-h-[400px]">
            {/* Dynamic Mapbox Map with Fallback */}
            <MapboxLoader fallback={<MapFallback />}>
              <MapComponent
                activeLocation={activeLocation}
                setActiveLocation={setActiveLocation}
                activeRegion={activeRegion}
              />
            </MapboxLoader>
          </div>

          {/* Location details - shown when a location is selected */}
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

          {/* Mobile navigation buttons */}
          {isMobile && activeLocation && (
            <div className="mt-4 flex justify-between">
              <Button variant="outline" size="sm" onClick={() => setMobileView("list")} className="flex items-center">
                <ChevronLeft className="mr-1 h-4 w-4" /> Tilbage til listen
              </Button>
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
