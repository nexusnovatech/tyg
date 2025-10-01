"use client"

import { useState, useEffect } from "react"
import { X, Check, Cookie } from "lucide-react"
import Link from "next/link"

type CookiePreferences = {
  necessary: boolean
  functional: boolean
  statistics: boolean
  marketing: boolean
  accepted: boolean
  timestamp: number
}

const defaultPreferences: CookiePreferences = {
  necessary: true, // Always required
  functional: false,
  statistics: false,
  marketing: false,
  accepted: false,
  timestamp: 0,
}

export function CookieConsent() {
  const [isOpen, setIsOpen] = useState(false)
  const [showDetails, setShowDetails] = useState(false)
  const [preferences, setPreferences] = useState<CookiePreferences>(defaultPreferences)
  const [initialized, setInitialized] = useState(false)

  // Load saved preferences on component mount
  useEffect(() => {
    const savedPreferences = localStorage.getItem("cookiePreferences")

    if (savedPreferences) {
      try {
        const parsed = JSON.parse(savedPreferences) as CookiePreferences
        setPreferences(parsed)
        setIsOpen(!parsed.accepted)
      } catch (e) {
        setIsOpen(true)
      }
    } else {
      setIsOpen(true)
    }

    setInitialized(true)
  }, [])

  // Save preferences to localStorage whenever they change
  useEffect(() => {
    if (initialized) {
      localStorage.setItem("cookiePreferences", JSON.stringify(preferences))

      // Apply cookie preferences here
      // This is where you would enable/disable various tracking scripts based on preferences
    }
  }, [preferences, initialized])

  const acceptAll = () => {
    setPreferences({
      necessary: true,
      functional: true,
      statistics: true,
      marketing: true,
      accepted: true,
      timestamp: Date.now(),
    })
    setIsOpen(false)
  }

  const savePreferences = () => {
    setPreferences({
      ...preferences,
      accepted: true,
      timestamp: Date.now(),
    })
    setIsOpen(false)
  }

  const openSettings = () => {
    setIsOpen(true)
    setShowDetails(true)
  }

  // Toggle cookie settings button
  const CookieSettingsButton = () => (
    <button
      onClick={openSettings}
      className="fixed bottom-6 left-6 z-40 bg-gray-200 text-gray-700 p-2 rounded-full shadow-lg hover:bg-gray-300 transition-all"
      aria-label="Cookie indstillinger"
    >
      <Cookie className="w-5 h-5" />
    </button>
  )

  if (!isOpen && initialized) {
    return <CookieSettingsButton />
  }

  return (
    <>
      {/* Cookie banner */}
      <div className="fixed bottom-0 left-0 right-0 z-50 bg-white shadow-lg border-t border-gray-200 animate-slide-up">
        <div className="container mx-auto p-4">
          {!showDetails ? (
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
              <div className="flex-1">
                <h3 className="text-lg font-semibold text-gray-900 mb-2">Vi bruger cookies</h3>
                <p className="text-sm text-gray-700">
                  Vi bruger cookies for at forbedre din oplevelse, vise relevante annoncer og analysere vores trafik. Du
                  kan læse mere om vores brug af cookies i vores{" "}
                  <Link href="/cookies" className="text-red-600 hover:underline">
                    cookie-politik
                  </Link>
                  .
                </p>
              </div>
              <div className="flex flex-col sm:flex-row gap-2">
                <button
                  onClick={() => setShowDetails(true)}
                  className="px-4 py-2 text-sm font-medium text-gray-700 bg-gray-100 rounded-md hover:bg-gray-200 transition-colors"
                >
                  Tilpas indstillinger
                </button>
                <button
                  onClick={acceptAll}
                  className="px-4 py-2 text-sm font-medium text-white bg-red-600 rounded-md hover:bg-red-700 transition-colors flex items-center justify-center"
                >
                  <Check className="w-4 h-4 mr-1" />
                  Acceptér alle
                </button>
              </div>
            </div>
          ) : (
            <div>
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-lg font-semibold text-gray-900">Cookie indstillinger</h3>
                <button
                  onClick={() => setShowDetails(false)}
                  className="p-1 rounded-full hover:bg-gray-100"
                  aria-label="Luk cookie indstillinger"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              <div className="space-y-4 mb-6">
                {/* Necessary cookies - always enabled */}
                <div className="p-4 border border-gray-200 rounded-lg">
                  <div className="flex items-center justify-between mb-2">
                    <h4 className="font-medium text-gray-900">Nødvendige cookies</h4>
                    <div className="bg-gray-200 px-2 py-1 rounded text-xs font-medium text-gray-800">Altid aktiv</div>
                  </div>
                  <p className="text-sm text-gray-600">
                    Disse cookies er nødvendige for, at hjemmesiden kan fungere og kan ikke deaktiveres.
                  </p>
                </div>

                {/* Functional cookies */}
                <div className="p-4 border border-gray-200 rounded-lg">
                  <div className="flex items-center justify-between mb-2">
                    <h4 className="font-medium text-gray-900">Funktionelle cookies</h4>
                    <label className="relative inline-flex items-center cursor-pointer">
                      <input
                        type="checkbox"
                        checked={preferences.functional}
                        onChange={() => setPreferences({ ...preferences, functional: !preferences.functional })}
                        className="sr-only peer"
                      />
                      <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-2 peer-focus:ring-red-300 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-red-600"></div>
                    </label>
                  </div>
                  <p className="text-sm text-gray-600">
                    Disse cookies giver mulighed for at huske dine præferencer og forbedre din brugeroplevelse.
                  </p>
                </div>

                {/* Statistics cookies */}
                <div className="p-4 border border-gray-200 rounded-lg">
                  <div className="flex items-center justify-between mb-2">
                    <h4 className="font-medium text-gray-900">Statistik cookies</h4>
                    <label className="relative inline-flex items-center cursor-pointer">
                      <input
                        type="checkbox"
                        checked={preferences.statistics}
                        onChange={() => setPreferences({ ...preferences, statistics: !preferences.statistics })}
                        className="sr-only peer"
                      />
                      <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-2 peer-focus:ring-red-300 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-red-600"></div>
                    </label>
                  </div>
                  <p className="text-sm text-gray-600">
                    Disse cookies hjælper os med at forstå, hvordan besøgende interagerer med hjemmesiden ved at
                    indsamle og rapportere information anonymt.
                  </p>
                </div>

                {/* Marketing cookies */}
                <div className="p-4 border border-gray-200 rounded-lg">
                  <div className="flex items-center justify-between mb-2">
                    <h4 className="font-medium text-gray-900">Marketing cookies</h4>
                    <label className="relative inline-flex items-center cursor-pointer">
                      <input
                        type="checkbox"
                        checked={preferences.marketing}
                        onChange={() => setPreferences({ ...preferences, marketing: !preferences.marketing })}
                        className="sr-only peer"
                      />
                      <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-2 peer-focus:ring-red-300 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-red-600"></div>
                    </label>
                  </div>
                  <p className="text-sm text-gray-600">
                    Disse cookies bruges til at spore besøgende på tværs af hjemmesider og vise relevante annoncer
                    baseret på dine interesser.
                  </p>
                </div>
              </div>

              <div className="flex justify-end gap-2">
                <button
                  onClick={() => setShowDetails(false)}
                  className="px-4 py-2 text-sm font-medium text-gray-700 bg-gray-100 rounded-md hover:bg-gray-200 transition-colors"
                >
                  Tilbage
                </button>
                <button
                  onClick={savePreferences}
                  className="px-4 py-2 text-sm font-medium text-white bg-red-600 rounded-md hover:bg-red-700 transition-colors"
                >
                  Gem præferencer
                </button>
                <button
                  onClick={acceptAll}
                  className="px-4 py-2 text-sm font-medium text-white bg-red-600 rounded-md hover:bg-red-700 transition-colors"
                >
                  Acceptér alle
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
    </>
  )
}
