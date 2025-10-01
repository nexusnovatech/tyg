"use client"

import { useState, useEffect, useRef } from "react"
import { MapPinIcon, PhoneIcon, MailIcon, ClockIcon, CheckCircleIcon } from "lucide-react"
import Link from "next/link"

const KontaktPageClient = () => {
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [formSubmitted, setFormSubmitted] = useState(false)
  const [formError, setFormError] = useState<string | null>(null)
  const [mapLoaded, setMapLoaded] = useState(false)
  const mapContainerRef = useRef<HTMLDivElement>(null)
  const mapInstanceRef = useRef<any>(null)

  const locations = [
    {
      longitude: 12.5683,
      latitude: 55.6761,
      title: "København",
      description: "Hovedstadsområdet",
      address: "Hovedstadsområdet",
      phone: "+45 41 44 33 33",
      email: "kontakt@tryghedspersonale.dk",
      services: ["Fastvagt", "Tryghedspersonale", "Konflikthåndtering"],
    },
    {
      longitude: 10.3833,
      latitude: 55.4038,
      title: "Odense",
      description: "Fyn",
      address: "Fyn region",
      phone: "+45 41 44 33 33",
      email: "kontakt@tryghedspersonale.dk",
      services: ["Fastvagt", "Tryghedspersonale", "Konflikthåndtering", "Psykiatri-støtte"],
    },
    {
      longitude: 9.9187,
      latitude: 57.0488,
      title: "Aalborg",
      description: "Nordjylland",
      address: "Nordjylland region",
      phone: "+45 41 44 33 33",
      email: "kontakt@tryghedspersonale.dk",
      services: ["Fastvagt", "Tryghedspersonale", "Konflikthåndtering"],
    },
    {
      longitude: 10.2039,
      latitude: 56.1629,
      title: "Aarhus",
      description: "Midtjylland",
      address: "Midtjylland region",
      phone: "+45 41 44 33 33",
      email: "kontakt@tryghedspersonale.dk",
      services: ["Fastvagt", "Tryghedspersonale", "Konflikthåndtering", "Bosteder"],
    },
    {
      longitude: 9.5018,
      latitude: 55.708,
      title: "Vejle",
      description: "Sydjylland",
      address: "Sydjylland region",
      phone: "+45 41 44 33 33",
      email: "kontakt@tryghedspersonale.dk",
      services: ["Fastvagt", "Tryghedspersonale", "Konflikthåndtering"],
    },
    {
      longitude: 11.7891,
      latitude: 55.4426,
      title: "Næstved",
      description: "Sjælland",
      address: "Sjælland region",
      phone: "+45 41 44 33 33",
      email: "kontakt@tryghedspersonale.dk",
      services: ["Fastvagt", "Tryghedspersonale", "Konflikthåndtering"],
    },
    {
      longitude: 12.0991,
      latitude: 55.6417,
      title: "Roskilde",
      description: "Sjælland",
      address: "Sjælland region",
      phone: "+45 41 44 33 33",
      email: "kontakt@tryghedspersonale.dk",
      services: ["Fastvagt", "Tryghedspersonale"],
    },
    {
      longitude: 9.7458,
      latitude: 55.4904,
      title: "Middelfart",
      description: "Fyn",
      address: "Fyn region",
      phone: "+45 41 44 33 33",
      email: "kontakt@tryghedspersonale.dk",
      services: ["Fastvagt", "Tryghedspersonale"],
    },
  ]

  // Initialize Mapbox map
  useEffect(() => {
    if (!mapContainerRef.current || mapLoaded) return

    // Load Mapbox script dynamically
    const loadMapbox = async () => {
      try {
        // Check if mapboxgl is already loaded
        if (window.mapboxgl) {
          initializeMap()
          return
        }

        // Load Mapbox CSS
        const linkEl = document.createElement("link")
        linkEl.rel = "stylesheet"
        linkEl.href = "https://api.mapbox.com/mapbox-gl-js/v2.15.0/mapbox-gl.css"
        document.head.appendChild(linkEl)

        // Load Mapbox JS
        const scriptEl = document.createElement("script")
        scriptEl.src = "https://api.mapbox.com/mapbox-gl-js/v2.15.0/mapbox-gl.js"
        scriptEl.async = true

        scriptEl.onload = () => {
          initializeMap()
        }

        scriptEl.onerror = (err) => {
          console.error("Failed to load Mapbox:", err)
        }

        document.body.appendChild(scriptEl)
      } catch (error) {
        console.error("Error loading Mapbox:", error)
      }
    }

    const initializeMap = async () => {
      try {
        // Get Mapbox token
        const response = await fetch("/api/mapbox-token")
        const data = await response.json()

        if (!data.token) {
          console.error("No Mapbox token available")
          return
        }

        // Initialize Mapbox
        window.mapboxgl.accessToken = data.token

        const map = new window.mapboxgl.Map({
          container: mapContainerRef.current,
          style: "mapbox://styles/mapbox/streets-v12",
          center: [10.3333, 55.6703], // Center of Denmark
          zoom: 6,
        })

        map.addControl(new window.mapboxgl.NavigationControl(), "bottom-right")

        // Add markers for each location
        locations.forEach((location) => {
          // Create custom marker element
          const markerEl = document.createElement("div")
          markerEl.className = "custom-marker"
          markerEl.style.width = "30px"
          markerEl.style.height = "30px"
          markerEl.style.borderRadius = "50%"
          markerEl.style.backgroundColor = "#dc2626"
          markerEl.style.border = "2px solid white"
          markerEl.style.boxShadow = "0 2px 4px rgba(0,0,0,0.3)"
          markerEl.style.cursor = "pointer"

          // Create popup
          const popup = new window.mapboxgl.Popup({ offset: 25, maxWidth: "300px" }).setHTML(`
<div style="padding: 12px; font-family: system-ui, -apple-system, sans-serif;">
  <h3 style="font-weight: bold; font-size: 16px; margin-bottom: 8px; color: #dc2626; border-bottom: 1px solid #f1f1f1; padding-bottom: 8px;">${location.title}</h3>
  <div style="margin-bottom: 8px;">
    <p style="font-weight: 500; margin-bottom: 4px; color: #374151;">${location.description}</p>
    <p style="color: #6b7280; font-size: 14px;">Dækker hele ${location.address}</p>
  </div>
  <div style="display: flex; flex-direction: column; gap: 6px; margin-top: 12px;">
    <a href="tel:+4541443333" style="color: #dc2626; display: flex; align-items: center; font-weight: 500; text-decoration: none; font-size: 14px;">
      <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style="margin-right: 6px;">
        <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
      </svg>
      41 44 33 33
    </a>
    <a href="mailto:kontakt@tryghedspersonale.dk" style="color: #dc2626; display: flex; align-items: center; font-weight: 500; text-decoration: none; font-size: 14px;">
      <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style="margin-right: 6px;">
        <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
        <polyline points="22,6 12,13 2,6"></polyline>
      </svg>
      Send email
    </a>
  </div>
  <div style="margin-top: 12px; display: flex; flex-wrap: wrap; gap: 4px;">
    ${location.services.map((service) => `<span style="background-color: #fee2e2; color: #dc2626; font-size: 12px; padding: 2px 8px; border-radius: 12px;">${service}</span>`).join("")}
  </div>
</div>
`)

          // Add marker to map
          new window.mapboxgl.Marker(markerEl)
            .setLngLat([location.longitude, location.latitude])
            .setPopup(popup)
            .addTo(map)
        })

        mapInstanceRef.current = map
        setMapLoaded(true)
      } catch (error) {
        console.error("Error initializing map:", error)
      }
    }

    loadMapbox()

    // Cleanup
    return () => {
      if (mapInstanceRef.current) {
        mapInstanceRef.current.remove()
      }
    }
  }, [])

  // Simplified function to handle form submission
  async function handleSubmit(formData: FormData) {
    try {
      setIsSubmitting(true)
      setFormError(null)

      // Simple success response for now
      setFormSubmitted(true)
      const form = document.getElementById("contactForm") as HTMLFormElement
      form?.reset()
    } catch (error) {
      setFormError("Der opstod en uventet fejl. Prøv igen senere.")
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <div className="bg-white">
      {/* Hero Section */}
      <div className="relative bg-red-600 text-white">
        <div className="absolute inset-0 overflow-hidden opacity-20">
          <img src="/abstract-geometric-flow.png" alt="Background pattern" className="object-cover w-full h-full" />
        </div>
        <div className="container mx-auto px-4 py-16 relative z-10">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Kontakt os</h1>
            <p className="text-xl opacity-90">
              Vi står klar til at hjælpe dig med professionel bemanding og sikkerhedsløsninger i hele Danmark.
            </p>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Contact Information */}
          <div className="lg:col-span-1">
            <div className="bg-gray-50 p-6 rounded-lg shadow-sm mb-8">
              <h2 className="text-2xl font-bold mb-6 text-gray-900">Kontaktinformation</h2>

              <div className="space-y-6">
                <div className="flex items-start">
                  <div className="flex-shrink-0 h-10 w-10 rounded-full bg-red-100 flex items-center justify-center">
                    <PhoneIcon className="h-5 w-5 text-red-600" />
                  </div>
                  <div className="ml-4">
                    <h3 className="text-lg font-medium text-gray-900">Telefon</h3>
                    <p className="mt-1 text-gray-600">
                      <a href="tel:+4541443333" className="hover:text-red-600 transition-colors">
                        +45 41 44 33 33
                      </a>
                    </p>
                    <p className="text-sm text-gray-500 mt-1">Døgnbemandet vagttelefon</p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="flex-shrink-0 h-10 w-10 rounded-full bg-red-100 flex items-center justify-center">
                    <MailIcon className="h-5 w-5 text-red-600" />
                  </div>
                  <div className="ml-4">
                    <h3 className="text-lg font-medium text-gray-900">E-mail</h3>
                    <p className="mt-1 text-gray-600">
                      <a href="mailto:kontakt@tryghedspersonale.dk" className="hover:text-red-600 transition-colors">
                        kontakt@tryghedspersonale.dk
                      </a>
                    </p>
                    <p className="text-sm text-gray-500 mt-1">Vi svarer inden for 24 timer</p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="flex-shrink-0 h-10 w-10 rounded-full bg-red-100 flex items-center justify-center">
                    <ClockIcon className="h-5 w-5 text-red-600" />
                  </div>
                  <div className="ml-4">
                    <h3 className="text-lg font-medium text-gray-900">Åbningstider</h3>
                    <div className="mt-1 text-gray-600">
                      <p>Mandag - Fredag: 08:00 - 16:00</p>
                      <p>Lørdag - Søndag: Lukket</p>
                    </div>
                    <p className="text-sm text-gray-500 mt-1">Vagttelefon er åben 24/7</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-red-600 text-white p-6 rounded-lg shadow-sm">
              <h2 className="text-xl font-bold mb-4">Akut behov?</h2>
              <p className="mb-4">
                Har du akut behov for tryghedspersonale eller fastvagt? Ring direkte til vores vagttelefon, som er
                bemandet døgnet rundt.
              </p>
              <a
                href="tel:+4541443333"
                className="inline-flex items-center justify-center px-5 py-3 border border-transparent text-base font-medium rounded-md text-red-600 bg-white hover:bg-gray-100 transition-colors"
              >
                <PhoneIcon className="h-5 w-5 mr-2" />
                Ring nu: 41 44 33 33
              </a>
            </div>
          </div>

          {/* Contact Form */}
          <div className="lg:col-span-2">
            <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100">
              <h2 className="text-2xl font-bold mb-6 text-gray-900">Send os en besked</h2>

              {formSubmitted ? (
                <div className="bg-green-50 border border-green-200 rounded-lg p-6 text-center">
                  <div className="mx-auto flex items-center justify-center h-12 w-12 rounded-full bg-green-100 mb-4">
                    <CheckCircleIcon className="h-6 w-6 text-green-600" />
                  </div>
                  <h3 className="text-lg font-medium text-green-900 mb-2">Tak for din henvendelse!</h3>
                  <p className="text-green-700">Vi har modtaget din besked og vender tilbage hurtigst muligt.</p>
                  <button
                    onClick={() => setFormSubmitted(false)}
                    className="mt-4 inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md text-white bg-red-600 hover:bg-red-700"
                  >
                    Send ny besked
                  </button>
                </div>
              ) : (
                <form
                  id="contactForm"
                  onSubmit={(e) => {
                    e.preventDefault()
                    handleSubmit(new FormData(e.currentTarget))
                  }}
                >
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                    <div>
                      <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                        Navn <span className="text-red-600">*</span>
                      </label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-md focus:ring-red-500 focus:border-red-500 block w-full p-2.5"
                        placeholder="Dit fulde navn"
                        required
                      />
                    </div>

                    <div>
                      <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                        E-mail <span className="text-red-600">*</span>
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-md focus:ring-red-500 focus:border-red-500 block w-full p-2.5"
                        placeholder="din@email.dk"
                        required
                      />
                    </div>

                    <div>
                      <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">
                        Telefonnummer
                      </label>
                      <input
                        type="tel"
                        id="phone"
                        name="phone"
                        className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-md focus:ring-red-500 focus:border-red-500 block w-full p-2.5"
                        placeholder="Dit telefonnummer"
                      />
                    </div>

                    <div>
                      <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-1">
                        Emne <span className="text-red-600">*</span>
                      </label>
                      <select
                        id="subject"
                        name="subject"
                        className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-md focus:ring-red-500 focus:border-red-500 block w-full p-2.5"
                        required
                      >
                        <option value="">Vælg et emne</option>
                        <option value="Forespørgsel om fastvagt">Forespørgsel om fastvagt</option>
                        <option value="Forespørgsel om tryghedspersonale">Forespørgsel om tryghedspersonale</option>
                        <option value="Forespørgsel om konflikthåndtering">Forespørgsel om konflikthåndtering</option>
                        <option value="Job hos Tryghedspersonale">Job hos Tryghedspersonale</option>
                        <option value="Andet">Andet</option>
                      </select>
                    </div>
                  </div>

                  <div className="mb-6">
                    <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
                      Besked <span className="text-red-600">*</span>
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      rows={6}
                      className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-md focus:ring-red-500 focus:border-red-500 block w-full p-2.5"
                      placeholder="Skriv din besked her..."
                      required
                    ></textarea>
                  </div>

                  <div className="mb-6">
                    <div className="flex items-start">
                      <div className="flex items-center h-5">
                        <input
                          id="consent"
                          name="consent"
                          type="checkbox"
                          className="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-red-300"
                          required
                        />
                      </div>
                      <label htmlFor="consent" className="ml-2 text-sm text-gray-600">
                        Jeg accepterer, at Tryghedspersonale.dk må kontakte mig vedrørende min henvendelse og gemme mine
                        oplysninger i henhold til{" "}
                        <Link href="/privatlivspolitik" className="text-red-600 hover:underline">
                          privatlivspolitikken
                        </Link>
                        .
                      </label>
                    </div>
                  </div>

                  {formError && (
                    <div className="p-4 mb-6 text-sm text-red-700 bg-red-100 rounded-lg" role="alert">
                      <span className="font-medium">Fejl!</span> {formError}
                    </div>
                  )}

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="text-white bg-red-600 hover:bg-red-700 focus:ring-4 focus:outline-none focus:ring-red-300 font-medium rounded-md text-sm px-5 py-3 text-center disabled:opacity-75 disabled:cursor-not-allowed transition-all duration-200 ease-in-out"
                  >
                    {isSubmitting ? "Sender..." : "Send besked"}
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>

        {/* Map Section */}
        <div className="mt-12">
          <h2 className="text-2xl font-bold mb-6 text-gray-900">Find os i hele Danmark</h2>
          <div className="bg-white rounded-lg shadow-sm border border-gray-100 overflow-hidden">
            <div className="h-[500px] w-full" ref={mapContainerRef}>
              {!mapLoaded && (
                <div className="h-full w-full flex items-center justify-center bg-gray-100">
                  <div className="text-center">
                    <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-red-600 mx-auto mb-4"></div>
                    <p className="text-gray-600">Indlæser kort...</p>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>

        {/* Locations Grid */}
        <div className="mt-12">
          <h2 className="text-2xl font-bold mb-6 text-gray-900">Vores afdelinger</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {locations.map((location, index) => (
              <div
                key={index}
                className="bg-white p-6 rounded-lg shadow-sm border border-gray-100 hover:border-red-300 transition-colors"
              >
                <div className="flex items-center mb-4">
                  <div className="h-10 w-10 rounded-full bg-red-100 flex items-center justify-center mr-3">
                    <MapPinIcon className="h-5 w-5 text-red-600" />
                  </div>
                  <h3 className="text-lg font-medium text-gray-900">{location.title}</h3>
                </div>
                <p className="text-gray-600 mb-2">{location.description}</p>
                <p className="text-gray-600 text-sm mb-3">Dækker hele {location.address}</p>
                <div className="mt-4 pt-4 border-t border-gray-100">
                  <a
                    href="tel:+4541443333"
                    className="text-red-600 hover:text-red-800 font-medium text-sm inline-flex items-center mr-4"
                  >
                    <PhoneIcon className="h-4 w-4 mr-1" />
                    Ring
                  </a>
                  <a
                    href="mailto:kontakt@tryghedspersonale.dk"
                    className="text-red-600 hover:text-red-800 font-medium text-sm inline-flex items-center"
                  >
                    <MailIcon className="h-4 w-4 mr-1" />
                    Email
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* FAQ Section */}
        <div className="mt-12">
          <h2 className="text-2xl font-bold mb-6 text-gray-900">Ofte stillede spørgsmål</h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100">
              <h3 className="text-lg font-medium text-gray-900 mb-2">
                Hvor hurtigt kan I stille personale til rådighed?
              </h3>
              <p className="text-gray-600">
                Vi har døgnbemandet vagttelefon og kan i mange tilfælde stille personale til rådighed med meget kort
                varsel - ofte inden for få timer. Ved akutte situationer anbefaler vi at ringe direkte til vores
                vagttelefon.
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100">
              <h3 className="text-lg font-medium text-gray-900 mb-2">Hvilke områder dækker I?</h3>
              <p className="text-gray-600">
                Vi er landsdækkende med personale i alle regioner: Hovedstaden, Sjælland, Fyn og Jylland. Vi kan derfor
                levere tryghedspersonale og fastvagter i hele Danmark.
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100">
              <h3 className="text-lg font-medium text-gray-900 mb-2">Hvad koster jeres ydelser?</h3>
              <p className="text-gray-600">
                Prisen afhænger af opgavens art, varighed og kompleksitet. Kontakt os for et uforpligtende tilbud
                tilpasset netop jeres behov og situation.
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100">
              <h3 className="text-lg font-medium text-gray-900 mb-2">Hvilke kvalifikationer har jeres personale?</h3>
              <p className="text-gray-600">
                Vores personale har relevant baggrund inden for bl.a. pædagogik, socialt arbejde, psykiatri og
                konflikthåndtering. Alle gennemgår grundig oplæring i vores metoder og tilgange.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default KontaktPageClient
