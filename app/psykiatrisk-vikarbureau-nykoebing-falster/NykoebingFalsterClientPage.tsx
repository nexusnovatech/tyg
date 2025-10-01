"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Phone, Mail, MapPin, Clock, Users, Heart, Shield, CheckCircle, Star, ArrowRight, Menu, X } from "lucide-react"
import Image from "next/image"
import Link from "next/link"

export default function NykoebingFalsterClientPage() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <div className="min-h-screen bg-white">
      {/* Navigation */}
      <nav className="bg-white shadow-sm border-b sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center">
              <Link href="/" className="text-2xl font-bold text-red-600">
                Tryghedspersonale.dk
              </Link>
            </div>

            {/* Desktop Navigation */}
            <div className="hidden md:block">
              <div className="ml-10 flex items-baseline space-x-4">
                <Link href="#forside" className="text-gray-900 hover:text-red-600 px-3 py-2 text-sm font-medium">
                  Forside
                </Link>
                <Link href="#om-os" className="text-gray-900 hover:text-red-600 px-3 py-2 text-sm font-medium">
                  Om os
                </Link>
                <Link href="#ydelser" className="text-gray-900 hover:text-red-600 px-3 py-2 text-sm font-medium">
                  Ydelser
                </Link>
                <Link href="#kontakt" className="text-gray-900 hover:text-red-600 px-3 py-2 text-sm font-medium">
                  Kontakt
                </Link>
                <Button className="bg-red-600 hover:bg-red-700 text-white">
                  <Phone className="w-4 h-4 mr-2" />
                  41 44 33 33
                </Button>
              </div>
            </div>

            {/* Mobile menu button */}
            <div className="md:hidden">
              <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="text-gray-900 hover:text-red-600">
                {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-white border-t">
              <Link href="#forside" className="text-gray-900 hover:text-red-600 block px-3 py-2 text-base font-medium">
                Forside
              </Link>
              <Link href="#om-os" className="text-gray-900 hover:text-red-600 block px-3 py-2 text-base font-medium">
                Om os
              </Link>
              <Link href="#ydelser" className="text-gray-900 hover:text-red-600 block px-3 py-2 text-base font-medium">
                Ydelser
              </Link>
              <Link href="#kontakt" className="text-gray-900 hover:text-red-600 block px-3 py-2 text-base font-medium">
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
      <section id="forside" className="relative bg-gradient-to-br from-blue-50 to-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <Badge className="bg-red-100 text-red-800 mb-4">Psykiatrisk Vikarbureau</Badge>
              <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                Psykiatrisk Vikarbureau i <span className="text-red-600">Nykøbing Falster</span>
              </h1>
              <p className="text-xl text-gray-600 mb-8">
                Din specialist i psykiatriske vikarer til komplekse borgerforløb. Vi leverer professionelle og erfarne
                psykiatriske vikarer med særlig ekspertise i komplekse borgerforløb i Nykøbing Falster og hele Lolland
                Kommune.
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
                  <Mail className="w-5 h-5 mr-2" />
                  Send besked
                </Button>
              </div>
            </div>
            <div className="relative">
              <Image
                src="/nykoebing-falster-hero.png"
                alt="Psykiatrisk vikarbureau i Nykøbing Falster - Specialiseret i komplekse borgerforløb"
                width={600}
                height={400}
                className="rounded-lg shadow-xl"
                priority
              />
            </div>
          </div>
        </div>
      </section>

      {/* Afdelinger Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Specialiseret indsats til komplekse borgerforløb</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              At arbejde med borgere i komplekse borgerforløb kræver både faglig ekspertise og menneskelig indsigt
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <Card className="text-center hover:shadow-lg transition-shadow">
              <CardContent className="p-6">
                <div className="w-12 h-12 bg-red-100 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <Users className="w-6 h-6 text-red-600" />
                </div>
                <h3 className="text-lg font-semibold mb-2">Psykiatriske diagnoser</h3>
                <p className="text-gray-600 text-sm">Skizofreni, personlighedsforstyrrelser, angst og PTSD</p>
              </CardContent>
            </Card>
            <Card className="text-center hover:shadow-lg transition-shadow">
              <CardContent className="p-6">
                <div className="w-12 h-12 bg-red-100 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <Heart className="w-6 h-6 text-red-600" />
                </div>
                <h3 className="text-lg font-semibold mb-2">Demens</h3>
                <p className="text-gray-600 text-sm">Udadreagerende adfærd og psykotiske symptomer</p>
              </CardContent>
            </Card>
            <Card className="text-center hover:shadow-lg transition-shadow">
              <CardContent className="p-6">
                <div className="w-12 h-12 bg-red-100 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <Shield className="w-6 h-6 text-red-600" />
                </div>
                <h3 className="text-lg font-semibold mb-2">Socialpædagogik</h3>
                <p className="text-gray-600 text-sm">Børn, unge og voksne med udviklingsforstyrrelser</p>
              </CardContent>
            </Card>
            <Card className="text-center hover:shadow-lg transition-shadow">
              <CardContent className="p-6">
                <div className="w-12 h-12 bg-red-100 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <Clock className="w-6 h-6 text-red-600" />
                </div>
                <h3 className="text-lg font-semibold mb-2">Akut indsats</h3>
                <p className="text-gray-600 text-sm">Stabilitet i uforudsigelige og krævende situationer</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Om os Section */}
      <section id="om-os" className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Område og lokal forankring</h2>
              <p className="text-lg text-gray-600 mb-6">
                Vi dækker hele Nykøbing Falster samt omkringliggende områder i Lolland Kommune. Vores kendskab til de
                lokale forhold sikrer en smidig og hurtig indsats, tilpasset de specifikke behov.
              </p>
              <div className="space-y-4">
                <div className="flex items-start">
                  <CheckCircle className="w-6 h-6 text-green-600 mr-3 mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold text-gray-900">Erfaring med psykiatri</h4>
                    <p className="text-gray-600">Socialpædagogik og demens i kommunale og private tilbud</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <CheckCircle className="w-6 h-6 text-green-600 mr-3 mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold text-gray-900">Vikarer med faglighed</h4>
                    <p className="text-gray-600">Empati og robusthed tilpasset komplekse behov</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <CheckCircle className="w-6 h-6 text-green-600 mr-3 mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold text-gray-900">Hurtig reaktionstid</h4>
                    <p className="text-gray-600">Fleksibilitet også uden for almindelig arbejdstid</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="relative">
              <div className="bg-red-50 rounded-lg p-8">
                <h3 className="text-xl font-semibold text-gray-900 mb-4">Fleksibel og pålidelig vikarhjælp</h3>
                <p className="text-gray-600 mb-6">
                  Vi tilbyder akut vikarhjælp med kort varsel, midlertidig støtte og aflastning til faste teams samt
                  langsigtet samarbejde.
                </p>
                <div className="flex items-center">
                  <Star className="w-5 h-5 text-yellow-500 mr-1" />
                  <Star className="w-5 h-5 text-yellow-500 mr-1" />
                  <Star className="w-5 h-5 text-yellow-500 mr-1" />
                  <Star className="w-5 h-5 text-yellow-500 mr-1" />
                  <Star className="w-5 h-5 text-yellow-500 mr-3" />
                  <span className="text-sm text-gray-600">Fokus på relationer og konflikthåndtering</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Ydelser Section */}
      <section id="ydelser" className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Vores ydelser</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Vi tilbyder specialiseret vikarhjælp til forskellige typer af institutioner og situationer
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="hover:shadow-lg transition-shadow">
              <CardContent className="p-6">
                <h3 className="text-lg font-semibold mb-3">Plejehjem</h3>
                <p className="text-gray-600 mb-4">
                  Specialiseret i demenspleje og udadreagerende adfærd hos ældre borgere
                </p>
                <Button variant="outline" size="sm" className="w-full bg-transparent">
                  Læs mere <ArrowRight className="w-4 h-4 ml-2" />
                </Button>
              </CardContent>
            </Card>
            <Card className="hover:shadow-lg transition-shadow">
              <CardContent className="p-6">
                <h3 className="text-lg font-semibold mb-3">Bosteder</h3>
                <p className="text-gray-600 mb-4">
                  Socialpsykiatriske bosteder og §108-tilbud med komplekse borgerforløb
                </p>
                <Button variant="outline" size="sm" className="w-full bg-transparent">
                  Læs mere <ArrowRight className="w-4 h-4 ml-2" />
                </Button>
              </CardContent>
            </Card>
            <Card className="hover:shadow-lg transition-shadow">
              <CardContent className="p-6">
                <h3 className="text-lg font-semibold mb-3">Akutteams</h3>
                <p className="text-gray-600 mb-4">Kommunale akutteams og krisecentre med behov for hurtig indsats</p>
                <Button variant="outline" size="sm" className="w-full bg-transparent">
                  Læs mere <ArrowRight className="w-4 h-4 ml-2" />
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Lokalt afsnit */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Dækningsområde i Lolland Kommune</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Vi dækker hele Nykøbing Falster samt omkringliggende områder i Lolland Kommune
            </p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 text-center">
            <div className="p-4">
              <MapPin className="w-8 h-8 text-red-600 mx-auto mb-2" />
              <h4 className="font-semibold text-gray-900">Nykøbing Falster</h4>
            </div>
            <div className="p-4">
              <MapPin className="w-8 h-8 text-red-600 mx-auto mb-2" />
              <h4 className="font-semibold text-gray-900">Stubbekøbing</h4>
            </div>
            <div className="p-4">
              <MapPin className="w-8 h-8 text-red-600 mx-auto mb-2" />
              <h4 className="font-semibold text-gray-900">Maribo</h4>
            </div>
            <div className="p-4">
              <MapPin className="w-8 h-8 text-red-600 mx-auto mb-2" />
              <h4 className="font-semibold text-gray-900">Sakskøbing</h4>
            </div>
            <div className="p-4">
              <MapPin className="w-8 h-8 text-red-600 mx-auto mb-2" />
              <h4 className="font-semibold text-gray-900">Lolland-Falster</h4>
            </div>
          </div>
        </div>
      </section>

      {/* Akut indsats */}
      <section className="py-16 bg-red-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Hvorfor vælge Tryghedspersonale.dk i Nykøbing Falster?
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Vi arbejder målrettet med konfliktnedtrapning, relationsopbygning og skaber trygge rammer
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="text-center">
              <div className="w-16 h-16 bg-red-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <Shield className="w-8 h-8 text-white" />
              </div>
              <h4 className="font-semibold text-gray-900 mb-2">Erfaring med psykiatri</h4>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-red-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <Users className="w-8 h-8 text-white" />
              </div>
              <h4 className="font-semibold text-gray-900 mb-2">Vikarer med faglighed</h4>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-red-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <Heart className="w-8 h-8 text-white" />
              </div>
              <h4 className="font-semibold text-gray-900 mb-2">Hurtig reaktionstid</h4>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-red-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <Clock className="w-8 h-8 text-white" />
              </div>
              <h4 className="font-semibold text-gray-900 mb-2">Fokus på relationer</h4>
            </div>
          </div>
        </div>
      </section>

      {/* SEO Keywords Section */}
      <section className="py-12 bg-green-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">Søgeord</h3>
          </div>
          <div className="flex flex-wrap justify-center gap-2">
            <Badge variant="secondary" className="bg-green-100 text-green-800">
              psykiatrisk vikarbureau Nykøbing Falster
            </Badge>
            <Badge variant="secondary" className="bg-green-100 text-green-800">
              vikar psykiatri Lolland Kommune
            </Badge>
            <Badge variant="secondary" className="bg-green-100 text-green-800">
              socialpsykiatrisk vikar Nykøbing Falster
            </Badge>
            <Badge variant="secondary" className="bg-green-100 text-green-800">
              vikar demens Nykøbing Falster
            </Badge>
            <Badge variant="secondary" className="bg-green-100 text-green-800">
              vikarbureau til bosted Nykøbing Falster
            </Badge>
            <Badge variant="secondary" className="bg-green-100 text-green-800">
              støtte ved komplekse borgerforløb Nykøbing Falster
            </Badge>
          </div>
        </div>
      </section>

      {/* Kontakt Section */}
      <section id="kontakt" className="py-16 bg-gray-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Kontakt os for professionel psykiatrisk vikarhjælp</h2>
            <p className="text-lg text-gray-300 max-w-3xl mx-auto">
              Har I brug for kvalificerede vikarer til komplekse borgerforløb, akut indsats eller længerevarende
              aflastning?
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            <div>
              <Phone className="w-12 h-12 text-red-500 mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-2">Ring til os</h3>
              <p className="text-gray-300 mb-4">Vi er klar til at hjælpe</p>
              <Button className="bg-red-600 hover:bg-red-700">41 44 33 33</Button>
            </div>
            <div>
              <Mail className="w-12 h-12 text-red-500 mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-2">Send en besked</h3>
              <p className="text-gray-300 mb-4">Vi svarer hurtigt</p>
              <Button
                variant="outline"
                className="border-red-600 text-red-600 hover:bg-red-600 hover:text-white bg-transparent"
              >
                info@tryghedspersonale.dk
              </Button>
            </div>
            <div>
              <Clock className="w-12 h-12 text-red-500 mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-2">Akut vikarhjælp</h3>
              <p className="text-gray-300 mb-4">Alle ugens dage</p>
              <Button
                variant="outline"
                className="border-white text-white hover:bg-white hover:text-gray-900 bg-transparent"
              >
                24/7 beredskab
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-800 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <h3 className="text-lg font-semibold mb-4">Tryghedspersonale.dk</h3>
              <p className="text-gray-300 text-sm">Psykiatrisk vikarbureau med specialister i komplekse borgerforløb</p>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Ydelser</h4>
              <ul className="space-y-2 text-sm text-gray-300">
                <li>Psykiatriske vikarer</li>
                <li>Demenspleje</li>
                <li>Socialpædagogik</li>
                <li>Akut stabilisering</li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Områder</h4>
              <ul className="space-y-2 text-sm text-gray-300">
                <li>Nykøbing Falster</li>
                <li>Stubbekøbing</li>
                <li>Maribo</li>
                <li>Lolland Kommune</li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Kontakt</h4>
              <ul className="space-y-2 text-sm text-gray-300">
                <li>Telefon: 41 44 33 33</li>
                <li>Email: info@tryghedspersonale.dk</li>
                <li>24/7 akut beredskab</li>
              </ul>
            </div>
          </div>
          <div className="border-t border-gray-700 mt-8 pt-8 text-center text-sm text-gray-400">
            <p>&copy; 2024 Tryghedspersonale.dk. Alle rettigheder forbeholdes.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}
