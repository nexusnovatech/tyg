"use client"

import { useState, useEffect } from "react"
import { X, MessageSquare } from "lucide-react"
import Image from "next/image"
import Link from "next/link"

export function WelcomePopup() {
  const [isOpen, setIsOpen] = useState(false)
  const [hasInitialized, setHasInitialized] = useState(false)

  useEffect(() => {
    // Only run the initialization once
    if (!hasInitialized) {
      setHasInitialized(true)

      // Show popup after 10 seconds
      const timer = setTimeout(() => {
        setIsOpen(true)
      }, 10000)

      return () => clearTimeout(timer)
    }
  }, [hasInitialized])

  const closePopup = () => {
    setIsOpen(false)
  }

  const openPopup = () => {
    setIsOpen(true)
  }

  return (
    <>
      {/* Popup */}
      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-2 sm:p-4 bg-black/70 backdrop-blur-sm animate-fade-in">
          <div className="relative w-full max-w-xs sm:max-w-md md:max-w-2xl bg-white rounded-lg sm:rounded-xl shadow-2xl overflow-hidden animate-scale-in">
            {/* Close button */}
            <button
              onClick={closePopup}
              className="absolute top-2 right-2 p-1.5 rounded-full bg-red-600 hover:bg-red-700 text-white transition-colors z-10 shadow-md"
              aria-label="Luk popup"
            >
              <X className="w-4 h-4 sm:w-5 sm:h-5" />
            </button>

            <div className="grid sm:grid-cols-5">
              {/* Image section - hidden on smallest screens, 2/5 width on larger screens */}
              <div className="hidden sm:block sm:col-span-2 bg-red-600 relative min-h-[120px] sm:min-h-[160px] md:min-h-full">
                <Image
                  src="/tryghedspersonale-forside-medarbejder.jpeg"
                  alt="Tryghedspersonale medarbejder"
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-red-600/20 mix-blend-multiply" />
                <div className="absolute bottom-0 left-0 w-full p-3">
                  <Image
                    src="/logo-white.png"
                    alt="Tryghedspersonale logo"
                    width={120}
                    height={30}
                    className="w-auto h-6 sm:h-8"
                  />
                </div>
              </div>

              {/* Content section - full width on smallest screens, 3/5 width on larger screens */}
              <div className="sm:col-span-3 p-4 sm:p-5 md:p-6">
                {/* Logo for smallest screens only */}
                <div className="sm:hidden mb-3 flex justify-center">
                  <Image
                    src="/logo-icon.png"
                    alt="Tryghedspersonale logo"
                    width={40}
                    height={40}
                    className="h-8 w-auto"
                  />
                </div>

                <div className="space-y-2 sm:space-y-3">
                  <h2 className="text-xl sm:text-2xl font-bold text-red-600 text-center sm:text-left">
                    Velkommen til Tryghedspersonale
                  </h2>

                  <p className="text-sm sm:text-base text-gray-700">
                    Vi er specialister i at skabe tryghed og sikkerhed i udfordrende miljøer.
                  </p>

                  <div className="bg-red-50 p-2.5 sm:p-3 rounded-lg border border-red-100">
                    <h3 className="font-semibold text-sm sm:text-base text-red-700 mb-1.5">Vores services:</h3>
                    <ul className="space-y-1.5">
                      <li className="flex items-start">
                        <span className="inline-flex items-center justify-center w-4 h-4 rounded-full bg-red-600 text-white text-xs mr-2 mt-0.5">
                          ✓
                        </span>
                        <span className="text-sm">Specialiseret bemanding til psykiatrien</span>
                      </li>
                      <li className="flex items-start">
                        <span className="inline-flex items-center justify-center w-4 h-4 rounded-full bg-red-600 text-white text-xs mr-2 mt-0.5">
                          ✓
                        </span>
                        <span className="text-sm">Fastvagt til bosteder og plejehjem</span>
                      </li>
                      <li className="flex items-start">
                        <span className="inline-flex items-center justify-center w-4 h-4 rounded-full bg-red-600 text-white text-xs mr-2 mt-0.5">
                          ✓
                        </span>
                        <span className="text-sm">Professionel konflikthåndtering</span>
                      </li>
                    </ul>
                  </div>

                  <div className="pt-1 sm:pt-2 flex flex-row gap-2 sm:gap-3">
                    <Link
                      href="/kontakt"
                      className="flex-1 inline-flex justify-center items-center px-3 py-1.5 sm:px-4 sm:py-2 rounded-md bg-red-600 text-white text-sm font-medium hover:bg-red-700 transition-colors"
                      onClick={closePopup}
                    >
                      Kontakt os
                    </Link>
                    <Link
                      href="/ydelser"
                      className="flex-1 inline-flex justify-center items-center px-3 py-1.5 sm:px-4 sm:py-2 rounded-md border border-red-600 text-red-600 text-sm font-medium hover:bg-red-50 transition-colors"
                      onClick={closePopup}
                    >
                      Se ydelser
                    </Link>
                  </div>

                  <div className="text-xs text-gray-500 pt-1">
                    <p>
                      Ved at bruge vores hjemmeside accepterer du vores{" "}
                      <Link href="/cookies" className="underline hover:text-red-600" onClick={closePopup}>
                        cookie-politik
                      </Link>
                      .
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Reopen popup button */}
      {!isOpen && (
        <button
          onClick={openPopup}
          className="fixed bottom-6 right-6 z-40 bg-red-600 text-white p-3 rounded-full shadow-lg hover:bg-red-700 transition-all group"
          aria-label="Åbn velkomstbesked"
        >
          <MessageSquare className="w-6 h-6 group-hover:animate-pulse" />
        </button>
      )}
    </>
  )
}
