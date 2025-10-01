"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Phone, Mail, MapPin, Clock, Users, Shield, Heart, CheckCircle, ArrowRight, Menu, X } from "lucide-react"
import Image from "next/image"
import Link from "next/link"

export default function RodovreClientPage() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <div className="min-h-screen bg-white">
      {/* Navigation */}
      <nav className="bg-white shadow-sm border-b sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center">
              <Link href="/" className="flex items-center space-x-2">
                <Image src="/logo-icon.png" alt="Tryghedspersonale.dk" width={40} height={40} className="w-10 h-10" />
                <span className="text-xl font-bold text-gray-900">Tryghedspersonale.dk</span>
              </Link>
            </div>

            <div className="hidden md:block">
              <div className="ml-10 flex items-baseline space-x-4">
                <Link href="/#services" className="text-gray-600 hover:text-red-600 px-3 py-2 text-sm font-medium">
                  Ydelser
                </Link>
                <Link href="/#about" className="text-gray-600 hover:text-red-600 px-3 py-2 text-sm font-medium">
                  Om os
                </Link>
                <Link href="/#contact" className="text-gray-600 hover:text-red-600 px-3 py-2 text-sm font-medium">
                  Kontakt
                </Link>
                <Button className="bg-red-600 hover:bg-red-700 text-white">
                  <Phone className="w-4 h-4 mr-2" />
                  41 44 33 33
                </Button>
              </div>
            </div>

            <div className="md:hidden">
              <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="text-gray-600 hover:text-red-600">
                {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </button>
            </div>
          </div>
        </div>

        {isMenuOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-white border-t">
              <Link
                href="/#services"
                className="text-gray-600 hover:text-red-600 block px-3 py-2 text-base font-medium"
              >
                Ydelser
              </Link>
              <Link href="/#about" className="text-gray-600 hover:text-red-600 block px-3 py-2 text-base font-medium">
                Om os
              </Link>
              <Link href="/#contact" className="text-gray-600 hover:text-red-600 block px-3 py-2 text-base font-medium">
                Kontakt
              </Link>
              <Button className="bg-red-600 hover:bg-red-700 text-white w-full mt-2">
                <Phone className="w-4 h-4 mr-2" />
                41 44 33 33
              </Button>
            </div>
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-gray-50 to-gray-100 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <Badge className="bg-red-100 text-red-800 mb-4">Pædagogisk Vikarbureau</Badge>
              <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
                Din partner i <span className="text-red-600">Rødovre</span> til pædagogisk støtte og kvalitet
              </h1>
              <p className="text-xl text-gray-600 mb-8">
                At finde den rette pædagogiske vikar til dit bosted eller din institution i Rødovre kan være en
                udfordring, især når du arbejder med unge og voksne med særlige behov og uforudsigelig adfærd. Hos
                Tryghedspersonale.dk forstår vi, at det kræver både faglige kvalifikationer og en stor portion empati.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button size="lg" className="bg-red-600 hover:bg-red-700 text-white">
                  <Phone className="w-5 h-5 mr-2" />
                  Ring 41 44 33 33
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  className="border-red-600 text-red-600 hover:bg-red-50 bg-transparent"
                >
                  Læs mere om vores ydelser
                  <ArrowRight className="w-5 h-5 ml-2" />
                </Button>
              </div>
            </div>
            <div className="relative">
              <Image
                src="/caregiver-interaction.png"
                alt="Pædagogisk støtte i Rødovre"
                width={600}
                height={400}
                className="rounded-lg shadow-xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Afdelinger Section */}
      <section id="services" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              Hvorfor vælge Tryghedspersonale.dk i Rødovre?
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Hos Tryghedspersonale.dk har vi stor erfaring med at finde de rette pædagogiske vikarer til institutioner
              og bosteder i Rødovre. Vi er specialiserede i at arbejde med unge og voksne med særlige behov.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <Card className="hover:shadow-lg transition-shadow">
              <CardContent className="p-8">
                <Users className="w-12 h-12 text-red-600 mb-4" />
                <h3 className="text-xl font-semibold mb-4">Kvalificerede og erfarne vikarer</h3>
                <p className="text-gray-600">
                  Vore vikarer kommer fra en bred vifte af fagområder og har mange års erfaring med at arbejde med
                  mennesker med særlige behov. De er dygtige til at skabe strukturerede og trygge rammer.
                </p>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow">
              <CardContent className="p-8">
                <Clock className="w-12 h-12 text-red-600 mb-4" />
                <h3 className="text-xl font-semibold mb-4">Fleksibilitet og hurtighed</h3>
                <p className="text-gray-600">
                  Vi forstår, at behovet for vikarer kan opstå akut, og vi er klar til at hjælpe hurtigt. Vore vikarer
                  er fleksible og kan træde til på kort varsel.
                </p>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow">
              <CardContent className="p-8">
                <Heart className="w-12 h-12 text-red-600 mb-4" />
                <h3 className="text-xl font-semibold mb-4">Empati og menneskelig forståelse</h3>
                <p className="text-gray-600">
                  Vore vikarer er ikke kun fagligt kvalificerede – de har også en dyb forståelse for de udfordringer,
                  der følger med arbejdet med mennesker med særlige behov.
                </p>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow">
              <CardContent className="p-8">
                <Shield className="w-12 h-12 text-red-600 mb-4" />
                <h3 className="text-xl font-semibold mb-4">Pædagogisk og praktisk støtte</h3>
                <p className="text-gray-600">
                  Vore vikarer tilbyder både pædagogisk og praktisk støtte. De skaber struktur i hverdagen og sikrer, at
                  borgerne får den støtte, de behøver for at trives.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Vikarer fra mange fagområder Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">Vore vikarer – fra mange fagområder</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Vore vikarer kommer fra en række forskellige fagområder, hvilket gør det muligt for os at matche den helt
              rette vikar til dine behov i Rødovre.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <Card className="hover:shadow-lg transition-shadow">
              <CardContent className="p-6 text-center">
                <Users className="w-12 h-12 text-red-600 mx-auto mb-4" />
                <h3 className="text-xl font-semibold mb-2">Pædagoger</h3>
                <p className="text-gray-600">
                  Pædagoger med erfaring i at arbejde med unge og voksne med særlige behov. De er vant til at skabe
                  trygge og udviklende rammer.
                </p>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow">
              <CardContent className="p-6 text-center">
                <Heart className="w-12 h-12 text-red-600 mx-auto mb-4" />
                <h3 className="text-xl font-semibold mb-2">SSA'er</h3>
                <p className="text-gray-600">
                  Social- og sundhedsassistenter har både sundhedsfaglig og pædagogisk erfaring. De kan håndtere både
                  fysiske og psykiske behov.
                </p>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow">
              <CardContent className="p-6 text-center">
                <Shield className="w-12 h-12 text-red-600 mx-auto mb-4" />
                <h3 className="text-xl font-semibold mb-2">Ambulancebehandlere</h3>
                <p className="text-gray-600">
                  Ambulancebehandlere er vant til at arbejde under pres og i akutte situationer. De bringer ro og
                  stabilitet i pressede øjeblikke.
                </p>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow">
              <CardContent className="p-6 text-center">
                <CheckCircle className="w-12 h-12 text-red-600 mx-auto mb-4" />
                <h3 className="text-xl font-semibold mb-2">Politibetjente</h3>
                <p className="text-gray-600">
                  Politibetjente har stor erfaring med at håndtere konflikter og skabe ro i stressfulde situationer.
                  Deres evne til at agere roligt er en stor fordel.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Hvordan gør vore vikarer en forskel Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              Hvordan gør vore vikarer en forskel i Rødovre?
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Alle vores vikarer er her for at gøre en forskel i borgernes liv. Det handler ikke kun om at opfylde
              arbejdsopgaver – det handler om at være en støtte og en ressource.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="hover:shadow-lg transition-shadow">
              <CardContent className="p-8 text-center">
                <Heart className="w-12 h-12 text-red-600 mx-auto mb-4" />
                <h3 className="text-xl font-semibold mb-4">Empatisk støtte</h3>
                <p className="text-gray-600">
                  Vore vikarer møder borgerne med empati og forståelse. De arbejder målrettet for at skabe en tryg og
                  positiv hverdag.
                </p>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow">
              <CardContent className="p-8 text-center">
                <Shield className="w-12 h-12 text-red-600 mx-auto mb-4" />
                <h3 className="text-xl font-semibold mb-4">Konsistens og stabilitet</h3>
                <p className="text-gray-600">
                  Når man arbejder med uforudsigelig adfærd, er det vigtigt at skabe stabilitet. Vore vikarer sikrer
                  kontinuitet og struktur.
                </p>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow">
              <CardContent className="p-8 text-center">
                <CheckCircle className="w-12 h-12 text-red-600 mx-auto mb-4" />
                <h3 className="text-xl font-semibold mb-4">Akut og praktisk hjælp</h3>
                <p className="text-gray-600">
                  Mange af vore vikarer er vant til at træde til hurtigt og håndtere akutte situationer. De er fleksible
                  og klar til at hjælpe.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Kontakt Section */}
      <section id="contact" className="py-20 bg-red-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-white mb-4">
              Kontakt os i dag og få den rette vikar i Rødovre
            </h2>
            <p className="text-xl text-red-100 max-w-3xl mx-auto">
              Er du på udkig efter kvalificerede pædagogiske vikarer til din institution i Rødovre, er
              Tryghedspersonale.dk den rette partner for dig.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            <Card className="bg-white/10 border-white/20">
              <CardContent className="p-6 text-center">
                <Phone className="w-12 h-12 text-white mx-auto mb-4" />
                <h3 className="text-xl font-semibold text-white mb-2">Ring til os</h3>
                <p className="text-red-100 mb-4">Vi er klar til at hjælpe dig</p>
                <Button className="bg-white text-red-600 hover:bg-gray-100">41 44 33 33</Button>
              </CardContent>
            </Card>

            <Card className="bg-white/10 border-white/20">
              <CardContent className="p-6 text-center">
                <Mail className="w-12 h-12 text-white mx-auto mb-4" />
                <h3 className="text-xl font-semibold text-white mb-2">Send en email</h3>
                <p className="text-red-100 mb-4">Vi svarer hurtigt på dine henvendelser</p>
                <Button className="bg-white text-red-600 hover:bg-gray-100">Kontakt os</Button>
              </CardContent>
            </Card>

            <Card className="bg-white/10 border-white/20">
              <CardContent className="p-6 text-center">
                <Clock className="w-12 h-12 text-white mx-auto mb-4" />
                <h3 className="text-xl font-semibold text-white mb-2">Åbningstider</h3>
                <p className="text-red-100 mb-4">Vi er her når du har brug for os</p>
                <p className="text-white font-semibold">24/7 akut service</p>
              </CardContent>
            </Card>
          </div>

          <div className="text-center">
            <Button size="lg" className="bg-white text-red-600 hover:bg-gray-100">
              <Phone className="w-5 h-5 mr-2" />
              Ring nu - 41 44 33 33
            </Button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center space-x-2 mb-4">
                <Image src="/logo-white.png" alt="Tryghedspersonale.dk" width={40} height={40} className="w-10 h-10" />
                <span className="text-xl font-bold">Tryghedspersonale.dk</span>
              </div>
              <p className="text-gray-400">Din pålidelige partner for pædagogiske vikarer i Rødovre og omegn.</p>
            </div>

            <div>
              <h4 className="text-lg font-semibold mb-4">Ydelser</h4>
              <ul className="space-y-2 text-gray-400">
                <li>Pædagogiske vikarer</li>
                <li>Akut vikarbistand</li>
                <li>Langvarige vikarløsninger</li>
                <li>Specialiseret støtte</li>
              </ul>
            </div>

            <div>
              <h4 className="text-lg font-semibold mb-4">Områder</h4>
              <ul className="space-y-2 text-gray-400">
                <li>Rødovre</li>
                <li>Bosteder</li>
                <li>Plejehjem</li>
                <li>Institutioner</li>
              </ul>
            </div>

            <div>
              <h4 className="text-lg font-semibold mb-4">Kontakt</h4>
              <div className="space-y-2 text-gray-400">
                <div className="flex items-center space-x-2">
                  <Phone className="w-4 h-4" />
                  <span>41 44 33 33</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Mail className="w-4 h-4" />
                  <span>info@tryghedspersonale.dk</span>
                </div>
                <div className="flex items-center space-x-2">
                  <MapPin className="w-4 h-4" />
                  <span>Rødovre og omegn</span>
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
