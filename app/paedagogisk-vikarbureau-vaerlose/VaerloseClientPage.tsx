"use client"

import { useState } from "react"
import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Phone, Mail, MapPin, ArrowRight, Menu, X } from "lucide-react"

export default function VaerloseClientPage() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <div className="min-h-screen bg-white">
      {/* Navigation */}
      <nav className="bg-white shadow-sm border-b sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center">
              <Link href="/" className="flex items-center space-x-2">
                <Image src="/logo-full.png" alt="Tryghedspersonale.dk" width={200} height={40} className="h-8 w-auto" />
              </Link>
            </div>

            <div className="hidden md:block">
              <div className="ml-10 flex items-baseline space-x-4">
                <Link
                  href="/"
                  className="text-gray-700 hover:text-red-600 px-3 py-2 text-sm font-medium transition-colors"
                >
                  Forside
                </Link>
                <Link
                  href="/om-os"
                  className="text-gray-700 hover:text-red-600 px-3 py-2 text-sm font-medium transition-colors"
                >
                  Om Os
                </Link>
                <Link
                  href="/ydelser"
                  className="text-gray-700 hover:text-red-600 px-3 py-2 text-sm font-medium transition-colors"
                >
                  Ydelser
                </Link>
                <Link
                  href="/kontakt"
                  className="text-gray-700 hover:text-red-600 px-3 py-2 text-sm font-medium transition-colors"
                >
                  Kontakt
                </Link>
                <Button className="bg-red-600 hover:bg-red-700 text-white">Ring 41 44 33 33</Button>
              </div>
            </div>

            <div className="md:hidden">
              <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="text-gray-700 hover:text-red-600 p-2">
                {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile menu */}
        {isMenuOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-white border-t">
              <Link href="/" className="text-gray-700 hover:text-red-600 block px-3 py-2 text-base font-medium">
                Forside
              </Link>
              <Link href="/om-os" className="text-gray-700 hover:text-red-600 block px-3 py-2 text-base font-medium">
                Om Os
              </Link>
              <Link href="/ydelser" className="text-gray-700 hover:text-red-600 block px-3 py-2 text-base font-medium">
                Ydelser
              </Link>
              <Link href="/kontakt" className="text-gray-700 hover:text-red-600 block px-3 py-2 text-base font-medium">
                Kontakt
              </Link>
              <div className="px-3 py-2">
                <Button className="w-full bg-red-600 hover:bg-red-700 text-white">Ring 41 44 33 33</Button>
              </div>
            </div>
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-red-50 to-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <Badge className="bg-red-100 text-red-800 mb-4">Pædagogisk Vikarbureau Værløse</Badge>
              <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                Pædagogisk støtte og <span className="text-red-600">tryghed</span> med kvalificerede vikarer i Værløse
              </h1>
              <p className="text-xl text-gray-600 mb-8">
                Vi tilbyder erfarne pædagogiske vikarer, der kan sikre tryghed og udvikling i hverdagene for mennesker
                med særlige behov i Værløse.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button size="lg" className="bg-red-600 hover:bg-red-700 text-white">
                  <Phone className="mr-2 h-5 w-5" />
                  Ring 41 44 33 33
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  className="border-red-600 text-red-600 hover:bg-red-50 bg-transparent"
                >
                  Læs mere om vores ydelser
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </div>
            </div>
            <div className="relative">
              <Image
                src="/caregiver-interaction.png"
                alt="Pædagogisk støtte i Værløse"
                width={600}
                height={400}
                className="rounded-lg shadow-xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Rest of the sections follow the same pattern as Kalundborg but with Værløse-specific content */}

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <Image
                src="/logo-white.png"
                alt="Tryghedspersonale.dk"
                width={200}
                height={40}
                className="h-8 w-auto mb-4"
              />
              <p className="text-gray-400">
                Din betroede partner til pædagogisk støtte og tryghedspersonale i hele Danmark.
              </p>
            </div>
            <div>
              <h4 className="text-lg font-semibold mb-4">Ydelser</h4>
              <ul className="space-y-2 text-gray-400">
                <li>
                  <Link href="/ydelser/paedagogisk-vikarbureau" className="hover:text-white transition-colors">
                    Pædagogisk Vikarbureau
                  </Link>
                </li>
                <li>
                  <Link href="/ydelser/psykiatrisk-vikarbureau" className="hover:text-white transition-colors">
                    Psykiatrisk Vikarbureau
                  </Link>
                </li>
                <li>
                  <Link href="/ydelser/tryghedspersonale" className="hover:text-white transition-colors">
                    Tryghedspersonale
                  </Link>
                </li>
                <li>
                  <Link href="/ydelser/akut-indsats" className="hover:text-white transition-colors">
                    Akut Indsats
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="text-lg font-semibold mb-4">Områder</h4>
              <ul className="space-y-2 text-gray-400">
                <li>
                  <Link href="/omraader/koebenhavn" className="hover:text-white transition-colors">
                    København
                  </Link>
                </li>
                <li>
                  <Link href="/omraader/aarhus" className="hover:text-white transition-colors">
                    Aarhus
                  </Link>
                </li>
                <li>
                  <Link href="/omraader/odense" className="hover:text-white transition-colors">
                    Odense
                  </Link>
                </li>
                <li>
                  <Link href="/omraader/aalborg" className="hover:text-white transition-colors">
                    Aalborg
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="text-lg font-semibold mb-4">Kontakt</h4>
              <div className="space-y-2 text-gray-400">
                <div className="flex items-center space-x-2">
                  <Phone className="h-4 w-4" />
                  <span>41 44 33 33</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Mail className="h-4 w-4" />
                  <span>info@tryghedspersonale.dk</span>
                </div>
                <div className="flex items-center space-x-2">
                  <MapPin className="h-4 w-4" />
                  <span>Hele Danmark</span>
                </div>
              </div>
            </div>
          </div>
          <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
            <p>&copy; 2024 Tryghedspersonale.dk. Alle rettigheder forbeholdes.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}
