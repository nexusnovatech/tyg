"use client"

import { useState } from "react"
import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Phone, Mail, MapPin, Clock, Users, Shield, Heart, CheckCircle, Star, ArrowRight, Menu, X } from "lucide-react"

export default function KalundborgClientPage() {
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
              <Badge className="bg-red-100 text-red-800 mb-4">Pædagogisk Vikarbureau Kalundborg</Badge>
              <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                Din betroede partner til <span className="text-red-600">pædagogisk støtte</span> i Kalundborg
              </h1>
              <p className="text-xl text-gray-600 mb-8">
                Vi tilbyder erfarne og kvalificerede pædagogiske vikarer, der skaber tryghed og udvikling for unge og
                voksne med særlige behov – hver dag.
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
                src="/koege-elderly-care.png"
                alt="Pædagogisk støtte i Kalundborg"
                width={600}
                height={400}
                className="rounded-lg shadow-xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Afdelinger Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Vore specialiserede afdelinger</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Vi tilbyder målrettede løsninger til forskellige aldersgrupper og behov
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="hover:shadow-lg transition-shadow">
              <CardContent className="p-6">
                <Users className="h-12 w-12 text-red-600 mb-4" />
                <h3 className="text-xl font-semibold mb-3">Unge- og Børneområdet</h3>
                <p className="text-gray-600 mb-4">Specialiseret i udadreagerende adfærd hos børn og unge</p>
                <Badge className="bg-red-100 text-red-800">0-18 år</Badge>
              </CardContent>
            </Card>
            <Card className="hover:shadow-lg transition-shadow">
              <CardContent className="p-6">
                <Heart className="h-12 w-12 text-red-600 mb-4" />
                <h3 className="text-xl font-semibold mb-3">Voksne- og Ældreområdet</h3>
                <p className="text-gray-600 mb-4">Erfaren støtte til voksne og ældre med særlige behov</p>
                <Badge className="bg-red-100 text-red-800">18+ år</Badge>
              </CardContent>
            </Card>
            <Card className="hover:shadow-lg transition-shadow">
              <CardContent className="p-6">
                <Shield className="h-12 w-12 text-red-600 mb-4" />
                <h3 className="text-xl font-semibold mb-3">Psykiatrisk Område</h3>
                <p className="text-gray-600 mb-4">
                  Specialiseret i komplekse borgerforløb og psykiatriske udfordringer
                </p>
                <Badge className="bg-red-100 text-red-800">Alle aldre</Badge>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Om Os Section */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">
                Hvorfor vælge Tryghedspersonale.dk i Kalundborg?
              </h2>
              <p className="text-lg text-gray-600 mb-6">
                Hos Tryghedspersonale.dk er vi mere end bare et vikarbureau – vi er en partner, der er dedikeret til at
                gøre en positiv forskel for både de borgere, vi støtter, og de institutioner, vi arbejder sammen med.
              </p>
              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <CheckCircle className="h-6 w-6 text-green-600 mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold text-gray-900">Erfarne og kompetente vikarer</h4>
                    <p className="text-gray-600">
                      Vore vikarer er uddannede og erfarne i at arbejde med mennesker med særlige behov
                    </p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <CheckCircle className="h-6 w-6 text-green-600 mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold text-gray-900">Fleksible løsninger</h4>
                    <p className="text-gray-600">
                      Vi kan hurtigt finde den rette vikar til dit bosted eller din institution
                    </p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <CheckCircle className="h-6 w-6 text-green-600 mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold text-gray-900">Empati og respekt</h4>
                    <p className="text-gray-600">Vore vikarer møder borgerne med forståelse og respekt</p>
                  </div>
                </div>
              </div>
            </div>
            <div>
              <Image
                src="/caregiver-interaction.png"
                alt="Professionel omsorg i Kalundborg"
                width={500}
                height={400}
                className="rounded-lg shadow-lg"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Ydelser Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Vore vikarer – Professionelle fra mange fagområder
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Vi tilbyder vikarer fra et bredt udvalg af fagområder for at matche dine specifikke behov
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <Card className="text-center hover:shadow-lg transition-shadow">
              <CardContent className="p-6">
                <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Users className="h-8 w-8 text-red-600" />
                </div>
                <h3 className="font-semibold text-gray-900 mb-2">Pædagoger</h3>
                <p className="text-sm text-gray-600">
                  Eksperter i at skabe tryghed og struktur for mennesker med særlige behov
                </p>
              </CardContent>
            </Card>
            <Card className="text-center hover:shadow-lg transition-shadow">
              <CardContent className="p-6">
                <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Heart className="h-8 w-8 text-red-600" />
                </div>
                <h3 className="font-semibold text-gray-900 mb-2">SSA'er</h3>
                <p className="text-sm text-gray-600">
                  Social- og sundhedsassistenter med både sundhedsfaglige og pædagogiske kompetencer
                </p>
              </CardContent>
            </Card>
            <Card className="text-center hover:shadow-lg transition-shadow">
              <CardContent className="p-6">
                <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Shield className="h-8 w-8 text-red-600" />
                </div>
                <h3 className="font-semibold text-gray-900 mb-2">Ambulancebehandlere</h3>
                <p className="text-sm text-gray-600">
                  Erfarne i at håndtere akutte situationer og træffe hurtige beslutninger
                </p>
              </CardContent>
            </Card>
            <Card className="text-center hover:shadow-lg transition-shadow">
              <CardContent className="p-6">
                <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Star className="h-8 w-8 text-red-600" />
                </div>
                <h3 className="font-semibold text-gray-900 mb-2">Politibetjente</h3>
                <p className="text-sm text-gray-600">
                  Specialister i konflikthåndtering og deeskalering af spændte situationer
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Serviceområder Section */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Serviceområder i Kalundborg</h2>
            <p className="text-xl text-gray-600">Vi betjener en bred vifte af institutioner og bosteder</p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4">
            {[
              "Plejehjem",
              "Bosteder",
              "Institutioner",
              "Krisecentre",
              "Psykiatri",
              "Botilbud",
              "Asylcentre",
              "Dagcentre",
              "Aktivitetscentre",
              "Specialskoler",
              "Værested",
              "Behandlingscentre",
            ].map((service, index) => (
              <div key={index} className="text-center p-4 bg-gray-50 rounded-lg hover:bg-red-50 transition-colors">
                <p className="font-medium text-gray-900">{service}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Lokalt Afsnit */}
      <section className="py-16 bg-red-600 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-4">Kalundborg og omegn</h2>
          <p className="text-xl mb-8 max-w-3xl mx-auto">
            Vi betjener Kalundborg og de omkringliggende områder med dedikerede, lokale vikarer der kender området og
            dets behov.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <MapPin className="h-12 w-12 mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-2">Lokal tilstedeværelse</h3>
              <p>Vikarer der kender Kalundborg og omegn</p>
            </div>
            <div className="text-center">
              <Clock className="h-12 w-12 mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-2">Hurtig respons</h3>
              <p>Vi kan hurtigt mobilisere vikarer i lokalområdet</p>
            </div>
            <div className="text-center">
              <Users className="h-12 w-12 mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-2">Lokalt netværk</h3>
              <p>Stærke forbindelser til institutioner i området</p>
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Tilgang */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Hvordan gør vore vikarer en forskel i Kalundborg?</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Vore vikarer arbejder hver dag for at skabe positive forandringer i borgernes liv
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Heart className="h-8 w-8 text-red-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Empati og nærvær</h3>
              <p className="text-gray-600">
                Vore vikarer møder borgerne med forståelse og nærvær, og arbejder for at opbygge tillid
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Shield className="h-8 w-8 text-red-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Struktur og forudsigelighed</h3>
              <p className="text-gray-600">
                Vi skaber et struktureret og forudsigeligt miljø, som er afgørende for borgernes tryghed
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Star className="h-8 w-8 text-red-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Akut intervention</h3>
              <p className="text-gray-600">
                Når situationen kræver det, håndterer vore vikarer uforudsigelige situationer med ro og overblik
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Kontakt Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Kontakt os i dag</h2>
            <p className="text-xl text-gray-600">
              Få den rette pædagogiske vikar til dit bosted eller din institution i Kalundborg
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            <Card className="text-center hover:shadow-lg transition-shadow">
              <CardContent className="p-6">
                <Phone className="h-12 w-12 text-red-600 mx-auto mb-4" />
                <h3 className="text-xl font-semibold mb-2">Ring til os</h3>
                <p className="text-gray-600 mb-4">Vi er klar til at hjælpe dig</p>
                <Button className="bg-red-600 hover:bg-red-700 text-white">41 44 33 33</Button>
              </CardContent>
            </Card>
            <Card className="text-center hover:shadow-lg transition-shadow">
              <CardContent className="p-6">
                <Mail className="h-12 w-12 text-red-600 mx-auto mb-4" />
                <h3 className="text-xl font-semibold mb-2">Send en email</h3>
                <p className="text-gray-600 mb-4">Vi svarer hurtigt på dine henvendelser</p>
                <Button variant="outline" className="border-red-600 text-red-600 hover:bg-red-50 bg-transparent">
                  Send besked
                </Button>
              </CardContent>
            </Card>
            <Card className="text-center hover:shadow-lg transition-shadow">
              <CardContent className="p-6">
                <MapPin className="h-12 w-12 text-red-600 mx-auto mb-4" />
                <h3 className="text-xl font-semibold mb-2">Besøg os</h3>
                <p className="text-gray-600 mb-4">Kom forbi vores kontor</p>
                <Button variant="outline" className="border-red-600 text-red-600 hover:bg-red-50 bg-transparent">
                  Se adresse
                </Button>
              </CardContent>
            </Card>
          </div>
          <div className="text-center">
            <Button size="lg" className="bg-red-600 hover:bg-red-700 text-white">
              <Phone className="mr-2 h-5 w-5" />
              Ring 41 44 33 33 - Vi er klar til at hjælpe
            </Button>
          </div>
        </div>
      </section>

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
