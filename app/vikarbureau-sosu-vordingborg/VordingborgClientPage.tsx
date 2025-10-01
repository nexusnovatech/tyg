"use client"

import type React from "react"

import { useState, useEffect } from "react"
import Image from "next/image"
import Link from "next/link"
import { Phone, Mail, Menu, X } from "lucide-react"
import { Button } from "@/components/ui/button"
import { EnhancedHeroSlider } from "@/components/enhanced-hero-slider"

export default function VordingborgClientPage() {
  // Add noindex meta tag
  useEffect(() => {
    const metaRobots = document.createElement("meta")
    metaRobots.name = "robots"
    metaRobots.content = "noindex, nofollow"
    document.head.appendChild(metaRobots)

    return () => {
      document.head.removeChild(metaRobots)
    }
  }, [])
  
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <div className="flex min-h-screen flex-col">
      {/* Navigation */}
      <header className="bg-white shadow-sm sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4">
            <div className="flex items-center">
              <Link href="/">
                <Image src="/logo-full.png" alt="Tryghedspersonale.dk" width={200} height={60} className="h-12 w-auto" />
              </Link>
            </div>

            {/* Desktop Navigation */}
            <nav className="hidden md:flex items-center space-x-8">
              <Link href="/" className="text-gray-700 hover:text-blue-600 transition-colors">
                Forside
              </Link>
              <Link href="/om-os" className="text-gray-700 hover:text-blue-600 transition-colors">
                Om os
              </Link>
              <Link href="/ydelser" className="text-gray-700 hover:text-blue-600 transition-colors">
                Ydelser
              </Link>
              <Link href="/kontakt" className="text-gray-700 hover:text-blue-600 transition-colors">
                Kontakt
              </Link>
              <Button asChild className="bg-blue-500 hover:bg-blue-600 text-white">
                <a href="tel:+4541443333">
                  <Phone className="w-4 h-4 mr-2" />
                  41 44 33 33
                </a>
              </Button>
            </nav>

            {/* Mobile menu button */}
            <button className="md:hidden" onClick={() => setIsMenuOpen(!isMenuOpen)}>
              {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>

          {/* Mobile Navigation */}
          {isMenuOpen && (
            <div className="md:hidden py-4 border-t">
              <div className="flex flex-col space-y-4">
                <Link href="/" className="text-gray-700 hover:text-blue-600 transition-colors">
                  Forside
                </Link>
                <Link href="/om-os" className="text-gray-700 hover:text-blue-600 transition-colors">
                  Om os
                </Link>
                <Link href="/ydelser" className="text-gray-700 hover:text-blue-600 transition-colors">
                  Ydelser
                </Link>
                <Link href="/kontakt" className="text-gray-700 hover:text-blue-600 transition-colors">
                  Kontakt
                </Link>
                <Button asChild className="bg-blue-500 hover:bg-blue-600 text-white w-fit">
                  <a href="tel:+4541443333">
                    <Phone className="w-4 h-4 mr-2" />
                    41 44 33 33
                  </a>
                </Button>
              </div>
            </div>
          )}
        </div>
      </header>
      
      {/* Hero Section with Enhanced Slider */}
      <EnhancedHeroSlider
        slides={[
          {
            image: "/vikarbureau-bench.jpeg",
            alt: "SOSU Vikarbureau Vordingborg - Erfarne og kompetente SOSU-vikarer",
            title: "Din karriere inden for sundhed og omsorg i Vordingborg",
            description:
              "Velkommen til Tryghedspersonale.dk, dit lokale og specialiserede SOSU-vikarbureau i Vordingborg og omegn. Vi leverer fagligt stærke, erfarne og omsorgsfulde SOSU-vikarer til plejehjem, hjemmepleje og bosteder – både kommunale og private.",
            badge: "SOSU Vordingborg",
            buttons: [
              {
                text: "Kontakt os: 41 44 33 33",
                href: "tel:+4541443333",
                icon: <Phone className="mr-2 h-5 w-5" />,
                variant: "default",
              },
              {
                text: "Send en besked",
                href: "/kontakt",
                icon: <Mail className="mr-2 h-5 w-5" />,
                variant: "outline",
              },
            ],
          },
          {
            image: "/vikarbureau-indoor.jpeg",
            alt: "SOSU-medarbejder der støtter ældre borger i Vordingborg",
            title: "Specialiseret i ældrepleje og omsorg",
            description:
              "Vores personale er uddannet til at yde professionel pleje og omsorg til ældre og sårbare borgere. Vi lægger vægt på faglighed, empati og respekt i alle vores opgaver.",
            badge: "SOSU Vordingborg",
            buttons: [
              {
                text: "Kontakt os: 41 44 33 33",
                href: "tel:+4541443333",
                icon: <Phone className="mr-2 h-5 w-5" />,
                variant: "default",
              },
              {
                text: "Send en besked",
                href: "/kontakt",
                icon: <Mail className="mr-2 h-5 w-5" />,
                variant: "outline",
              },
            ],
          },
        ]}
      />

      {/* Main Content */}
      <section className="py-16 md:py-24 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-center">
            Erfarne SOSU-vikarer til plejehjem og hjemmepleje i Vordingborg
          </h2>
          <p className="text-lg text-gray-700 mb-6 text-center max-w-3xl mx-auto">
            Hos Tryghedspersonale.dk i Vordingborg leverer vi kvalificerede SOSU-vikarer til plejehjem, 
            hjemmepleje og bosteder. Vores medarbejdere er nøje udvalgt for deres faglige kompetencer, 
            erfaring og menneskelige egenskaber.
          </p>
        </div>
      </section>
    </div>
  )
}