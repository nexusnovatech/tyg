"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Phone, Mail, MapPin, Clock, Users, Heart, Shield, CheckCircle, Star, Menu, X } from "lucide-react"
import Image from "next/image"
import Link from "next/link"

export default function NaestvedClientPage() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="bg-white shadow-sm sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4">
            <div className="flex items-center">
              <Image src="/logo-full.png" alt="Tryghedspersonale.dk" width={200} height={60} className="h-12 w-auto" />
            </div>

            {/* Desktop Navigation */}
            <nav className="hidden md:flex items-center space-x-8">
              <Link href="/" className="text-gray-700 hover:text-red-600 transition-colors">
                Forside
              </Link>
              <Link href="/om-os" className="text-gray-700 hover:text-red-600 transition-colors">
                Om os
              </Link>
              <Link href="/ydelser" className="text-gray-700 hover:text-red-600 transition-colors">
                Ydelser
              </Link>
              <Link href="/kontakt" className="text-gray-700 hover:text-red-600 transition-colors">
                Kontakt
              </Link>
              <Button className="bg-red-600 hover:bg-red-700 text-white">
                <Phone className="w-4 h-4 mr-2" />
                41 44 33 33
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
                <Link href="/" className="text-gray-700 hover:text-red-600 transition-colors">
                  Forside
                </Link>
                <Link href="/om-os" className="text-gray-700 hover:text-red-600 transition-colors">
                  Om os
                </Link>
                <Link href="/ydelser" className="text-gray-700 hover:text-red-600 transition-colors">
                  Ydelser
                </Link>
                <Link href="/kontakt" className="text-gray-700 hover:text-red-600 transition-colors">
                  Kontakt
                </Link>
                <Button className="bg-red-600 hover:bg-red-700 text-white w-fit">
                  <Phone className="w-4 h-4 mr-2" />
                  41 44 33 33
                </Button>
              </div>
            </div>
          )}
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-gray-50 to-gray-100 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <Badge className="bg-red-100 text-red-800 mb-4">Pædagogisk Vikarbureau Næstved</Badge>
              <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
                Fagligt stærke vikarer til komplekse borgerforløb
              </h1>
              <p className="text-xl text-gray-600 mb-8">
                Hos Tryghedspersonale.dk er vi specialister i at levere kompetente, relationsstærke og stabile vikarer
                til pædagogiske og socialfaglige opgaver i hele Næstved Kommune.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button size="lg" className="bg-red-600 hover:bg-red-700 text-white">
                  <Phone className="w-5 h-5 mr-2" />
                  Ring 41 44 33 33
                </Button>
                <Button size="lg" variant="outline">
                  <Mail className="w-5 h-5 mr-2" />
                  Send besked
                </Button>
              </div>
            </div>
            <div className="relative">
              <Image
                src="/koege-elderly-care.png"
                alt="Pædagogisk vikar i Næstved"
                width={600}
                height={400}
                className="rounded-lg shadow-xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Specialiserede Vikarer Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              Vi dækker de mest krævende pædagogiske opgaver i Næstved
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Vores pædagogiske vikarer har solid erfaring med udviklingsforstyrrelser, psykiatriske problemstillinger
              og udadreagerende adfærd.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="border-2 hover:border-red-200 transition-colors">
              <CardHeader>
                <Users className="w-8 h-8 text-red-600 mb-2" />
                <CardTitle>Udviklingsforstyrrelser</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  Erfaring med udviklingsforstyrrelser og kognitive funktionsnedsættelser.
                </p>
              </CardContent>
            </Card>

            <Card className="border-2 hover:border-red-200 transition-colors">
              <CardHeader>
                <Heart className="w-8 h-8 text-red-600 mb-2" />
                <CardTitle>Psykiatriske problemstillinger</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  Psykiatriske problemstillinger og dobbeltdiagnoser med specialiseret tilgang.
                </p>
              </CardContent>
            </Card>

            <Card className="border-2 hover:border-red-200 transition-colors">
              <CardHeader>
                <Shield className="w-8 h-8 text-red-600 mb-2" />
                <CardTitle>Udadreagerende adfærd</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">Håndtering af udadreagerende og selvskadende adfærd med ro og struktur.</p>
              </CardContent>
            </Card>

            <Card className="border-2 hover:border-red-200 transition-colors">
              <CardHeader>
                <CheckCircle className="w-8 h-8 text-red-600 mb-2" />
                <CardTitle>Angst og mistrivsel</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">Støtte til borgere med angst, mistrivsel og lavt selvværd.</p>
              </CardContent>
            </Card>

            <Card className="border-2 hover:border-red-200 transition-colors">
              <CardHeader>
                <Star className="w-8 h-8 text-red-600 mb-2" />
                <CardTitle>Misbrug og udsathed</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">Erfaring med misbrug og social udsathed i komplekse miljøer.</p>
              </CardContent>
            </Card>

            <Card className="border-2 hover:border-red-200 transition-colors">
              <CardHeader>
                <Clock className="w-8 h-8 text-red-600 mb-2" />
                <CardTitle>Struktur og stabilitet</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  Low arousal, konflikthåndtering og stabilitet i samarbejde med fast personale.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Lokalt Fokus Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-6">
                Lokalkendskab og hurtig respons i Næstved og omegn
              </h2>
              <p className="text-lg text-gray-600 mb-6">
                Som lokalt forankret vikarbureau kender vi både geografien og behovene i Næstved Kommune. Det betyder
                hurtig og målrettet levering af vikarer.
              </p>

              <div className="grid sm:grid-cols-2 gap-4 mb-8">
                <div className="flex items-center">
                  <MapPin className="w-5 h-5 text-red-600 mr-2" />
                  <span>Næstved by</span>
                </div>
                <div className="flex items-center">
                  <MapPin className="w-5 h-5 text-red-600 mr-2" />
                  <span>Fensmark</span>
                </div>
                <div className="flex items-center">
                  <MapPin className="w-5 h-5 text-red-600 mr-2" />
                  <span>Glumsø</span>
                </div>
                <div className="flex items-center">
                  <MapPin className="w-5 h-5 text-red-600 mr-2" />
                  <span>Holme-Olstrup</span>
                </div>
                <div className="flex items-center">
                  <MapPin className="w-5 h-5 text-red-600 mr-2" />
                  <span>Tappernøje</span>
                </div>
                <div className="flex items-center">
                  <MapPin className="w-5 h-5 text-red-600 mr-2" />
                  <span>Fuglebjerg</span>
                </div>
                <div className="flex items-center">
                  <MapPin className="w-5 h-5 text-red-600 mr-2" />
                  <span>Mogenstrup</span>
                </div>
                <div className="flex items-center">
                  <MapPin className="w-5 h-5 text-red-600 mr-2" />
                  <span>Herlufmagle</span>
                </div>
                <div className="flex items-center">
                  <MapPin className="w-5 h-5 text-red-600 mr-2" />
                  <span>Karrebæksminde</span>
                </div>
              </div>
            </div>
            <div>
              <Image
                src="/caregiver-interaction.png"
                alt="Lokal vikarbistand i Næstved"
                width={600}
                height={400}
                className="rounded-lg shadow-xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Vores Vikarer Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              Vores vikarer – Trænet til virkelighedens kompleksitet
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Alle vores vikarer bliver grundigt screenet og udvalgt ud fra deres faglige ballast, menneskelige tilgang
              og evne til at håndtere komplekse miljøer.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <Card className="p-6">
              <h3 className="text-xl font-semibold mb-4">Erfaring fra:</h3>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <CheckCircle className="w-5 h-5 text-green-600 mr-3 mt-0.5 flex-shrink-0" />
                  <span>Socialpsykiatri og botilbud</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="w-5 h-5 text-green-600 mr-3 mt-0.5 flex-shrink-0" />
                  <span>Skærmede pædagogiske enheder</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="w-5 h-5 text-green-600 mr-3 mt-0.5 flex-shrink-0" />
                  <span>Institutioner med høj belastning</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="w-5 h-5 text-green-600 mr-3 mt-0.5 flex-shrink-0" />
                  <span>Pædagogisk arbejde med borgere i krise</span>
                </li>
              </ul>
              <p className="mt-4 text-gray-600">
                De møder borgerne med respekt, tydelighed og ro, og bidrager til et trygt og professionelt miljø – også
                når det er svært.
              </p>
            </Card>

            <div>
              <Image
                src="/koege-psychiatric-care.png"
                alt="Specialiseret pædagogisk vikar i Næstved"
                width={600}
                height={400}
                className="rounded-lg shadow-xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-red-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl lg:text-4xl font-bold text-white mb-6">Akut behov for pædagogisk vikar i Næstved?</h2>
          <p className="text-xl text-red-100 mb-8 max-w-3xl mx-auto">
            Vi dækker både akutte vagter, planlagt dækning og længerevarende opgaver, og vi er tilgængelige døgnet rundt
            – også aften og weekend.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-white text-red-600 hover:bg-gray-100">
              <Phone className="w-5 h-5 mr-2" />
              Ring 41 44 33 33
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-white text-white hover:bg-white hover:text-red-600 bg-transparent"
            >
              <Mail className="w-5 h-5 mr-2" />
              kontakt@tryghedspersonale.dk
            </Button>
          </div>
          <p className="text-red-100 mt-6">
            🚨 Vi tilbyder hurtig vikarbistand med høj faglighed – uden at gå på kompromis
          </p>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <Image
                src="/logo-white.png"
                alt="Tryghedspersonale.dk"
                width={200}
                height={60}
                className="h-12 w-auto mb-4"
              />
              <p className="text-gray-400">
                Specialiseret i pædagogiske vikarer til komplekse miljøer i Næstved og omegn.
              </p>
            </div>

            <div>
              <h3 className="text-lg font-semibold mb-4">Kontakt</h3>
              <div className="space-y-2">
                <div className="flex items-center">
                  <Phone className="w-4 h-4 mr-2" />
                  <span>41 44 33 33</span>
                </div>
                <div className="flex items-center">
                  <Mail className="w-4 h-4 mr-2" />
                  <span>kontakt@tryghedspersonale.dk</span>
                </div>
              </div>
            </div>

            <div>
              <h3 className="text-lg font-semibold mb-4">Områder</h3>
              <ul className="space-y-2 text-gray-400">
                <li>Næstved by</li>
                <li>Fensmark</li>
                <li>Glumsø</li>
                <li>Holme-Olstrup</li>
                <li>Tappernøje</li>
              </ul>
            </div>

            <div>
              <h3 className="text-lg font-semibold mb-4">Ydelser</h3>
              <ul className="space-y-2 text-gray-400">
                <li>Pædagogiske vikarer</li>
                <li>Botilbud support</li>
                <li>§108-tilbud</li>
                <li>Akut vikarbistand</li>
                <li>Specialiseret omsorg</li>
              </ul>
            </div>
          </div>

          <div className="border-t border-gray-800 mt-12 pt-8 text-center text-gray-400">
            <p>&copy; 2024 Tryghedspersonale.dk. Alle rettigheder forbeholdes.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}
