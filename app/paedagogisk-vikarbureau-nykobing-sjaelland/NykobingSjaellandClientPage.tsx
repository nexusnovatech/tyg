"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Phone, Mail, MapPin, Clock, Users, Shield, Heart, CheckCircle, ArrowRight, Menu, X } from "lucide-react"
import Image from "next/image"
import Link from "next/link"

export default function NykobingSjaellandClientPage() {
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
                Kvalificerede pædagogiske vikarer i <span className="text-red-600">Nykøbing Sjælland</span>
              </h1>
              <p className="text-xl text-gray-600 mb-8">
                Hos Tryghedspersonale.dk leverer vi kompetent personale, der er klar til at skabe et trygt, stabilt og
                udviklende miljø for både borgere og dit faste personale. Vi specialiserer os i at støtte voksne og unge
                med særlige behov.
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
                src="/handling-challenging-behavior.png"
                alt="Pædagogisk støtte i Nykøbing Sjælland"
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
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">Vores specialiserede afdelinger</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Vi tilbyder erfarne vikarer fra forskellige fagområder, der alle er specialiseret i at arbejde med
              mennesker med særlige behov.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <Card className="hover:shadow-lg transition-shadow">
              <CardContent className="p-6 text-center">
                <Users className="w-12 h-12 text-red-600 mx-auto mb-4" />
                <h3 className="text-xl font-semibold mb-2">Pædagoger</h3>
                <p className="text-gray-600">
                  Erfarne pædagoger med omfattende erfaring i at arbejde med voksne og unge med særlige behov.
                </p>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow">
              <CardContent className="p-6 text-center">
                <Heart className="w-12 h-12 text-red-600 mx-auto mb-4" />
                <h3 className="text-xl font-semibold mb-2">SSA'er</h3>
                <p className="text-gray-600">Social- og sundhedsassistenter med værdifuld pleje- og omsorgserfaring.</p>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow">
              <CardContent className="p-6 text-center">
                <Shield className="w-12 h-12 text-red-600 mx-auto mb-4" />
                <h3 className="text-xl font-semibold mb-2">Ambulancebehandlere</h3>
                <p className="text-gray-600">
                  Ekspertise inden for akutmedicin og førstehjælp til hurtig håndtering af akutte situationer.
                </p>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow">
              <CardContent className="p-6 text-center">
                <CheckCircle className="w-12 h-12 text-red-600 mx-auto mb-4" />
                <h3 className="text-xl font-semibold mb-2">Politibetjente</h3>
                <p className="text-gray-600">
                  Tidligere politibetjente med stor erfaring inden for konfliktløsning og deeskalering.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Om os Section */}
      <section id="about" className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-6">
                Hvorfor vælge Tryghedspersonale.dk i Nykøbing Sjælland?
              </h2>
              <p className="text-lg text-gray-600 mb-6">
                Vi er din foretrukne og pålidelige partner, når du mangler kompetente og pålidelige pædagogiske vikarer
                i Nykøbing Sjælland. Vi tilbyder skræddersyede vikarløsninger, der passer perfekt til din institutions
                eller dit bosteds specifikke behov.
              </p>

              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <CheckCircle className="w-6 h-6 text-green-600 mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold text-gray-900">Specialiseret erfaring</h4>
                    <p className="text-gray-600">
                      Vores vikarer har specialiseret erfaring i at håndtere uforudsigelig adfærd og komplekse
                      psykosociale udfordringer.
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-3">
                  <CheckCircle className="w-6 h-6 text-green-600 mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold text-gray-900">Fleksible løsninger</h4>
                    <p className="text-gray-600">
                      Vi tilbyder både akut hjælp og planlagte, langvarige vikarordninger tilpasset dine behov.
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-3">
                  <CheckCircle className="w-6 h-6 text-green-600 mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold text-gray-900">Kontinuitet og stabilitet</h4>
                    <p className="text-gray-600">
                      Vores vikarer skaber stabilitet og tryghed, hvilket er vitalt for borgernes trivsel og udvikling.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="relative">
              <Image
                src="/caregiver-interaction.png"
                alt="Professionel pædagogisk støtte"
                width={600}
                height={400}
                className="rounded-lg shadow-xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Ydelser Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              Hvordan gør vores vikarer en varig forskel?
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Vores vikarer er langt mere end bare afløsere; de er engagerede fagfolk, der brænder for at gøre en reel
              og varig forskel i borgernes liv.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <Card className="hover:shadow-lg transition-shadow">
              <CardContent className="p-8">
                <Heart className="w-12 h-12 text-red-600 mb-4" />
                <h3 className="text-xl font-semibold mb-4">Opbygning af tillid og nærvær</h3>
                <p className="text-gray-600">
                  Vores vikarer forstår betydningen af at etablere en stærk og vedvarende relation til borgerne. De
                  arbejder med et nærvær, der får borgerne til at føle sig set, hørt og trygge i deres dagligdag.
                </p>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow">
              <CardContent className="p-8">
                <Shield className="w-12 h-12 text-red-600 mb-4" />
                <h3 className="text-xl font-semibold mb-4">Vedvarende struktur og stabilitet</h3>
                <p className="text-gray-600">
                  Mange af de mennesker, vi arbejder med, trives bedst i et struktureret og forudsigeligt miljø. Vores
                  vikarer er eksperter i at skabe stabilitet og tryghed i hverdagen.
                </p>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow">
              <CardContent className="p-8">
                <CheckCircle className="w-12 h-12 text-red-600 mb-4" />
                <h3 className="text-xl font-semibold mb-4">Proaktiv deeskalering</h3>
                <p className="text-gray-600">
                  Vores vikarer er trænede i at håndtere konfliktsituationer med ro og respekt, og de bidrager dermed
                  til et mere harmonisk og trygt miljø for alle på lang sigt.
                </p>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow">
              <CardContent className="p-8">
                <Users className="w-12 h-12 text-red-600 mb-4" />
                <h3 className="text-xl font-semibold mb-4">Individuelt tilpasset støtte</h3>
                <p className="text-gray-600">
                  Vores vikarer tilpasser deres støtte til den enkelte borgers unikke behov og arbejder målrettet med at
                  støtte borgerne i deres daglige liv og personlige udvikling.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Serviceområder Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">Serviceområder i Nykøbing Sjælland</h2>
            <p className="text-xl text-gray-600">
              Vi leverer både kortvarig og langvarig vikarbistand til forskellige typer institutioner
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card>
              <CardContent className="p-6">
                <h3 className="text-lg font-semibold mb-3">Bosteder</h3>
                <p className="text-gray-600">Specialiseret støtte til bosteder for voksne og unge med særlige behov.</p>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6">
                <h3 className="text-lg font-semibold mb-3">Plejehjem</h3>
                <p className="text-gray-600">Kvalificeret personale til plejehjem med fokus på omsorg og tryghed.</p>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6">
                <h3 className="text-lg font-semibold mb-3">Institutioner</h3>
                <p className="text-gray-600">
                  Erfarne vikarer til forskellige typer institutioner og behandlingssteder.
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
              Kontakt os for pædagogiske vikarer i Nykøbing Sjælland
            </h2>
            <p className="text-xl text-red-100 max-w-3xl mx-auto">
              Har du akut eller planlagt behov for kvalificerede pædagogiske vikarer? Vi står klar med erfarne og
              dedikerede vikarer.
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
              <p className="text-gray-400">
                Din pålidelige partner for pædagogiske vikarer i Nykøbing Sjælland og omegn.
              </p>
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
                <li>Nykøbing Sjælland</li>
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
                  <span>Nykøbing Sjælland og omegn</span>
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
