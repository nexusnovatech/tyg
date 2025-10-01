"use client"

import Link from "next/link"
import { Phone, Mail, MapPin, Facebook, Linkedin } from "lucide-react"

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="container mx-auto px-4 py-12">
        <div className="grid md:grid-cols-4 gap-8">
          {/* Company Info */}
          <div>
            <img src="/logo-white.png" alt="Tryghedspersonale.dk" className="h-8 w-auto mb-4" />
            <p className="text-gray-300 text-sm leading-relaxed">
              Professionel vikardækning til sundhedssektoren med fokus på kvalitet, tryghed og kontinuitet.
            </p>
          </div>

          {/* Services */}
          <div>
            <h3 className="font-semibold text-lg mb-4">Ydelser</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/ydelser/psykiatrien" className="text-gray-300 hover:text-white transition-colors">
                  Psykiatrisk vikarbureau
                </Link>
              </li>
              <li>
                <Link href="/ydelser/plejehjem" className="text-gray-300 hover:text-white transition-colors">
                  Vikar til plejehjem
                </Link>
              </li>
              <li>
                <Link href="/ydelser/botilbud" className="text-gray-300 hover:text-white transition-colors">
                  Vikar til botilbud
                </Link>
              </li>
              <li>
                <Link href="/ydelser/krisecentre" className="text-gray-300 hover:text-white transition-colors">
                  Vikar til krisecentre
                </Link>
              </li>
            </ul>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-semibold text-lg mb-4">Links</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/om-os" className="text-gray-300 hover:text-white transition-colors">
                  Om os
                </Link>
              </li>
              <li>
                <Link href="/kontakt" className="text-gray-300 hover:text-white transition-colors">
                  Kontakt
                </Link>
              </li>
              <li>
                <Link href="/privatlivspolitik" className="text-gray-300 hover:text-white transition-colors">
                  Privatlivspolitik
                </Link>
              </li>
              <li>
                <Link href="/handelsbetingelser" className="text-gray-300 hover:text-white transition-colors">
                  Handelsbetingelser
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="font-semibold text-lg mb-4">Kontakt</h3>
            <div className="space-y-3 text-sm">
              <div className="flex items-center gap-2">
                <Phone className="h-4 w-4 text-red-500" />
                <span>41 44 33 33</span>
              </div>
              <div className="flex items-center gap-2">
                <Mail className="h-4 w-4 text-red-500" />
                <span>info@tryghedspersonale.dk</span>
              </div>
              <div className="flex items-start gap-2">
                <MapPin className="h-4 w-4 text-red-500 mt-0.5" />
                <span>Dækker hele Danmark</span>
              </div>
            </div>

            {/* Social Links */}
            <div className="flex gap-4 mt-6">
              <Link href="#" className="text-gray-300 hover:text-white transition-colors">
                <Facebook className="h-5 w-5" />
              </Link>
              <Link href="#" className="text-gray-300 hover:text-white transition-colors">
                <Linkedin className="h-5 w-5" />
              </Link>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-800 mt-8 pt-8 text-center text-sm text-gray-400">
          <p>&copy; 2024 Tryghedspersonale.dk. Alle rettigheder forbeholdes.</p>
        </div>
      </div>
    </footer>
  )
}
