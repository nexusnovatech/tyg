"use client"

import Link from "next/link"
import { Phone, Menu, X } from "lucide-react"
import { useState } from "react"
import { Button } from "@/components/ui/button"

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <header className="bg-white shadow-sm border-b border-gray-200 sticky top-0 z-50">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center">
            <img src="/logo-full.png" alt="Tryghedspersonale.dk" className="h-8 w-auto" />
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <Link href="/ydelser" className="text-gray-700 hover:text-red-600 transition-colors">
              Ydelser
            </Link>
            <Link href="/om-os" className="text-gray-700 hover:text-red-600 transition-colors">
              Om os
            </Link>
            <Link href="/kontakt" className="text-gray-700 hover:text-red-600 transition-colors">
              Kontakt
            </Link>
          </nav>

          {/* Contact Button */}
          <div className="hidden md:flex items-center space-x-4">
            <Button className="bg-red-600 hover:bg-red-700">
              <Phone className="mr-2 h-4 w-4" />
              41 44 33 33
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button className="md:hidden p-2" onClick={() => setIsMenuOpen(!isMenuOpen)}>
            {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden py-4 border-t border-gray-200">
            <nav className="flex flex-col space-y-4">
              <Link href="/ydelser" className="text-gray-700 hover:text-red-600 transition-colors">
                Ydelser
              </Link>
              <Link href="/om-os" className="text-gray-700 hover:text-red-600 transition-colors">
                Om os
              </Link>
              <Link href="/kontakt" className="text-gray-700 hover:text-red-600 transition-colors">
                Kontakt
              </Link>
              <Button className="bg-red-600 hover:bg-red-700 w-fit">
                <Phone className="mr-2 h-4 w-4" />
                41 44 33 33
              </Button>
            </nav>
          </div>
        )}
      </div>
    </header>
  )
}
