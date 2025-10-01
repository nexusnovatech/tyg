"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Phone, Mail, MapPin, Clock, Users, Shield, Heart, CheckCircle, Target, Zap } from "lucide-react"
import Image from "next/image"

export default function SoroeClientPage() {
  const [activeService, setActiveService] = useState(0)

  const services = [
    {
      title: "Erfarne Pædagoger",
      description:
        "Vores pædagoger har omfattende erfaring med både voksne og unge med særlige behov. De er eksperter i at skabe trygge rammer og udviklingsmuligheder.",
      icon: <Users className="h-6 w-6" />,
    },
    {
      title: "Social- og Sundhedsassistenter",
      description:
        "Vores SSA'er bidrager med værdifuld pleje- og omsorgserfaring, både med praktiske opgaver og sociale interaktioner.",
      icon: <Heart className="h-6 w-6" />,
    },
    {
      title: "Specialister i Adfærdsforstyrrelser",
      description:
        "Mange af vores vikarer har specialiseret erfaring i at håndtere uforudsigelig adfærd og komplekse psykosociale udfordringer.",
      icon: <Shield className="h-6 w-6" />,
    },
    {
      title: "Ambulancebehandlere",
      description:
        "Disse vikarer tilfører ekspertise inden for akutmedicin og førstehjælp, hvilket sikrer hurtig og kompetent håndtering af akutte situationer.",
      icon: <Zap className="h-6 w-6" />,
    },
  ]

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-slate-50 to-blue-50 py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <Badge className="mb-4 bg-red-100 text-red-800 hover:bg-red-200">Pædagogisk Vikarbureau Sorø</Badge>
              <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
                Kvalificerede vikarer til bosteder og institutioner i Sorø
              </h1>
              <p className="text-xl text-gray-600 mb-8">
                Hos Tryghedspersonale.dk tilbyder vi kompetent personale, der er klar til at skabe et trygt og
                udviklende miljø for både borgere og fast personale. Vi specialiserer os i at støtte voksne og unge med
                særlige behov.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button size="lg" className="bg-red-600 hover:bg-red-700">
                  <Phone className="mr-2 h-5 w-5" />
                  Ring 41 44 33 33
                </Button>
                <Button size="lg" variant="outline">
                  <Mail className="mr-2 h-5 w-5" />
                  Send besked
                </Button>
              </div>
            </div>
            <div className="relative">
              <Image
                src="/handling-challenging-behavior.png"
                alt="Professionel omsorg i Sorø"
                width={600}
                height={400}
                className="rounded-lg shadow-xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Afdelinger Section */}
      <section className="py-16 px-4 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Vores specialiserede afdelinger</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Vi tilbyder skræddersyede vikarløsninger til forskellige typer af institutioner og bosteder i Sorø
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            <Card className="border-2 hover:border-red-200 transition-colors">
              <CardContent className="p-6">
                <Users className="h-12 w-12 text-red-600 mb-4" />
                <h3 className="text-xl font-semibold mb-3">Bosteder & Plejehjem</h3>
                <p className="text-gray-600">
                  Erfarne vikarer til bosteder og plejehjem, der arbejder med mennesker med særlige behov og kræver
                  specialiseret omsorg.
                </p>
              </CardContent>
            </Card>
            <Card className="border-2 hover:border-red-200 transition-colors">
              <CardContent className="p-6">
                <Shield className="h-12 w-12 text-red-600 mb-4" />
                <h3 className="text-xl font-semibold mb-3">Institutioner</h3>
                <p className="text-gray-600">
                  Kvalificerede vikarer til institutioner, der håndterer komplekse pædagogiske opgaver og udfordrende
                  adfærd.
                </p>
              </CardContent>
            </Card>
            <Card className="border-2 hover:border-red-200 transition-colors">
              <CardContent className="p-6">
                <Heart className="h-12 w-12 text-red-600 mb-4" />
                <h3 className="text-xl font-semibold mb-3">Specialiseret Støtte</h3>
                <p className="text-gray-600">
                  Dedikerede fagfolk med erfaring i at arbejde med mennesker, der udviser uforudsigelig adfærd og har
                  komplekse behov.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Om os Section */}
      <section className="py-16 px-4 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Hvorfor vælge Tryghedspersonale.dk i Sorø?</h2>
              <p className="text-lg text-gray-600 mb-6">
                Vi er din foretrukne partner, når du mangler kompetente og pålidelige vikarer i Sorø. Vi tilbyder
                skræddersyede vikarløsninger, der passer perfekt til din institutions eller dit bosteds specifikke
                behov.
              </p>
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <CheckCircle className="h-6 w-6 text-green-600 mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold text-gray-900">Bred faglig palette</h4>
                    <p className="text-gray-600">Pædagoger, SSA'er, ambulancebehandlere og politibetjente</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle className="h-6 w-6 text-green-600 mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold text-gray-900">Fleksible løsninger</h4>
                    <p className="text-gray-600">Både akut hjælp og længerevarende vikarordninger</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle className="h-6 w-6 text-green-600 mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold text-gray-900">Specialiseret erfaring</h4>
                    <p className="text-gray-600">Eksperter i at håndtere udfordrende og komplekse miljøer</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="relative">
              <Image
                src="/caregiver-interaction.png"
                alt="Professionel vikar i Sorø"
                width={500}
                height={400}
                className="rounded-lg shadow-lg"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Ydelser Section */}
      <section className="py-16 px-4 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Vores specialistkompetencer</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Vores vikarer kommer fra mange forskellige fagområder og kan tilbyde en bred vifte af specialiserede
              kompetencer
            </p>
          </div>
          <div className="grid lg:grid-cols-2 gap-8">
            <div className="space-y-6">
              {services.map((service, index) => (
                <Card
                  key={index}
                  className={`cursor-pointer transition-all ${
                    activeService === index ? "border-red-500 shadow-lg" : "border-gray-200 hover:border-red-300"
                  }`}
                  onClick={() => setActiveService(index)}
                >
                  <CardContent className="p-6">
                    <div className="flex items-start gap-4">
                      <div
                        className={`p-3 rounded-lg ${
                          activeService === index ? "bg-red-100 text-red-600" : "bg-gray-100 text-gray-600"
                        }`}
                      >
                        {service.icon}
                      </div>
                      <div>
                        <h3 className="text-xl font-semibold mb-2">{service.title}</h3>
                        <p className="text-gray-600">{service.description}</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
            <div className="bg-gradient-to-br from-red-50 to-orange-50 rounded-lg p-8">
              <div className="text-center">
                <div className="mb-6">{services[activeService].icon}</div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">{services[activeService].title}</h3>
                <p className="text-lg text-gray-600 mb-6">{services[activeService].description}</p>
                <Button className="bg-red-600 hover:bg-red-700">Læs mere om denne service</Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Serviceområder Section */}
      <section className="py-16 px-4 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Serviceområder i Sorø</h2>
            <p className="text-lg text-gray-600">
              Vi leverer kvalificerede vikarer til forskellige typer af institutioner og bosteder
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              "Bosteder",
              "Plejehjem",
              "Institutioner",
              "Specialiserede enheder",
              "Akutafdelinger",
              "Overgangsboliger",
              "Behandlingsinstitutioner",
              "Socialpsykiatriske tilbud",
            ].map((area, index) => (
              <Card key={index} className="text-center hover:shadow-lg transition-shadow">
                <CardContent className="p-6">
                  <Shield className="h-8 w-8 text-red-600 mx-auto mb-3" />
                  <h4 className="font-semibold text-gray-900">{area}</h4>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Lokalt afsnit Section */}
      <section className="py-16 px-4 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Lokalt vikarbureau i Sorø og omegn</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Som lokalt orienteret vikarbureau har vi solid erfaring med at levere kvalificerede vikarer til
              institutioner og bosteder i Sorø-området
            </p>
          </div>
          <div className="grid lg:grid-cols-3 gap-8">
            <Card className="text-center">
              <CardContent className="p-6">
                <MapPin className="h-12 w-12 text-red-600 mx-auto mb-4" />
                <h3 className="text-xl font-semibold mb-3">Lokalkendskab</h3>
                <p className="text-gray-600">
                  Vi kender Sorø-området og har erfaring med lokale institutioner og deres specifikke behov.
                </p>
              </CardContent>
            </Card>
            <Card className="text-center">
              <CardContent className="p-6">
                <Clock className="h-12 w-12 text-red-600 mx-auto mb-4" />
                <h3 className="text-xl font-semibold mb-3">Hurtig respons</h3>
                <p className="text-gray-600">
                  Vi er til stede og klar til hurtig indsats – også ved akutte behov og kortvarslede opgaver.
                </p>
              </CardContent>
            </Card>
            <Card className="text-center">
              <CardContent className="p-6">
                <Target className="h-12 w-12 text-red-600 mx-auto mb-4" />
                <h3 className="text-xl font-semibold mb-3">Målrettet service</h3>
                <p className="text-gray-600">
                  Vi matcher den rette vikar til din institutions specifikke behov og udfordringer.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Mission & Tilgang Section */}
      <section className="py-16 px-4 bg-gradient-to-br from-red-50 to-orange-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Hvordan gør vores vikarer en forskel?</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Vores vikarer er langt mere end bare erstatninger – de er engagerede fagfolk, der brænder for at gøre en
              reel forskel i borgernes liv
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="bg-white rounded-full p-4 w-16 h-16 mx-auto mb-4 shadow-lg">
                <Heart className="h-8 w-8 text-red-600" />
              </div>
              <h3 className="text-lg font-semibold mb-2">Empati og nærvær</h3>
              <p className="text-gray-600 text-sm">
                Vores vikarer forstår betydningen af at opbygge stærke relationer til borgerne
              </p>
            </div>
            <div className="text-center">
              <div className="bg-white rounded-full p-4 w-16 h-16 mx-auto mb-4 shadow-lg">
                <Shield className="h-8 w-8 text-red-600" />
              </div>
              <h3 className="text-lg font-semibold mb-2">Struktur og stabilitet</h3>
              <p className="text-gray-600 text-sm">
                Vi skaber strukturerede og forudsigelige miljøer, der er afgørende for borgernes trivsel
              </p>
            </div>
            <div className="text-center">
              <div className="bg-white rounded-full p-4 w-16 h-16 mx-auto mb-4 shadow-lg">
                <Target className="h-8 w-8 text-red-600" />
              </div>
              <h3 className="text-lg font-semibold mb-2">Deeskalering af konflikter</h3>
              <p className="text-gray-600 text-sm">
                Vores vikarer er trænede i at håndtere konfliktsituationer med ro og respekt
              </p>
            </div>
            <div className="text-center">
              <div className="bg-white rounded-full p-4 w-16 h-16 mx-auto mb-4 shadow-lg">
                <Users className="h-8 w-8 text-red-600" />
              </div>
              <h3 className="text-lg font-semibold mb-2">Individuel støtte</h3>
              <p className="text-gray-600 text-sm">
                Vi tilpasser vores støtte til den enkelte borgers unikke behov og situation
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Kontakt Section */}
      <section className="py-16 px-4 bg-gray-900 text-white">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold mb-6">Kontakt os for pædagogiske vikarer i Sorø</h2>
              <p className="text-lg text-gray-300 mb-8">
                Har du akut eller planlagt behov for kvalificerede pædagogiske vikarer i Sorø? Vi står klar med erfarne
                og dedikerede vikarer, der kan understøtte både dit faste personale og dine borgere.
              </p>
              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <Phone className="h-6 w-6 text-red-400" />
                  <span className="text-lg">41 44 33 33</span>
                </div>
                <div className="flex items-center gap-3">
                  <Mail className="h-6 w-6 text-red-400" />
                  <span className="text-lg">kontakt@tryghedspersonale.dk</span>
                </div>
                <div className="flex items-center gap-3">
                  <Clock className="h-6 w-6 text-red-400" />
                  <span className="text-lg">Døgnservice - alle ugens dage</span>
                </div>
              </div>
            </div>
            <div className="bg-white rounded-lg p-8 text-gray-900">
              <h3 className="text-2xl font-bold mb-6">Få et tilbud i dag</h3>
              <form className="space-y-4">
                <div>
                  <label className="block text-sm font-medium mb-2">Navn</label>
                  <input
                    type="text"
                    className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-transparent"
                    placeholder="Dit navn"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-2">Email</label>
                  <input
                    type="email"
                    className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-transparent"
                    placeholder="din@email.dk"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-2">Telefon</label>
                  <input
                    type="tel"
                    className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-transparent"
                    placeholder="Dit telefonnummer"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-2">Besked</label>
                  <textarea
                    rows={4}
                    className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-transparent"
                    placeholder="Beskriv dine behov..."
                  />
                </div>
                <Button className="w-full bg-red-600 hover:bg-red-700 text-white py-3">Send besked</Button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-black text-white py-12 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <h4 className="text-lg font-semibold mb-4">Tryghedspersonale.dk</h4>
              <p className="text-gray-400 text-sm">
                Professionelle vikarløsninger til institutioner og bosteder i hele Danmark.
              </p>
            </div>
            <div>
              <h4 className="text-lg font-semibold mb-4">Services</h4>
              <ul className="space-y-2 text-sm text-gray-400">
                <li>Pædagogiske vikarer</li>
                <li>Psykiatrisk vikarbureau</li>
                <li>Akut vikarbistand</li>
                <li>Specialiserede løsninger</li>
              </ul>
            </div>
            <div>
              <h4 className="text-lg font-semibold mb-4">Områder</h4>
              <ul className="space-y-2 text-sm text-gray-400">
                <li>Sorø og omegn</li>
                <li>Sjælland</li>
                <li>Hele Danmark</li>
              </ul>
            </div>
            <div>
              <h4 className="text-lg font-semibold mb-4">Kontakt</h4>
              <ul className="space-y-2 text-sm text-gray-400">
                <li>Telefon: 41 44 33 33</li>
                <li>Email: kontakt@tryghedspersonale.dk</li>
                <li>Døgnservice</li>
              </ul>
            </div>
          </div>
          <div className="border-t border-gray-800 mt-8 pt-8 text-center text-sm text-gray-400">
            <p>&copy; 2024 Tryghedspersonale.dk. Alle rettigheder forbeholdes.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}
