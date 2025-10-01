"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Phone, Mail, MapPin, Clock, Users, Shield, Heart, CheckCircle, Target, Zap } from "lucide-react"
import Image from "next/image"

export default function SlagelseClientPage() {
  const [activeService, setActiveService] = useState(0)

  const services = [
    {
      title: "§108-botilbud og Bosteder",
      description:
        "Erfaring fra §108-botilbud og bosteder i socialpsykiatrien med fokus på komplekse borgersituationer.",
      icon: <Users className="h-6 w-6" />,
    },
    {
      title: "Skærmede Institutioner",
      description: "Specialiseret erfaring fra skærmede institutioner for unge og voksne med udfordrende adfærd.",
      icon: <Shield className="h-6 w-6" />,
    },
    {
      title: "Døgntilbud med Høj Kompleksitet",
      description:
        "Erfaring fra døgntilbud med lav forudsigelighed og høj kompleksitet, hvor struktur og ro er afgørende.",
      icon: <Target className="h-6 w-6" />,
    },
    {
      title: "Udadreagerende Borgere",
      description: "Specialiseret i arbejdet med borgere i udadreagerende eller stærkt mistrivende tilstand.",
      icon: <Zap className="h-6 w-6" />,
    },
  ]

  const coverageAreas = [
    "Slagelse by",
    "Korsør",
    "Skælskør",
    "Dalmose",
    "Sørbymagle",
    "Svenstrup",
    "Vemmelev",
    "Eggeslevmagle",
  ]

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-slate-50 to-blue-50 py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <Badge className="mb-4 bg-red-100 text-red-800 hover:bg-red-200">Pædagogisk Vikarbureau Slagelse</Badge>
              <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
                Faglighed, tryghed og hurtig levering i Slagelse
              </h1>
              <p className="text-xl text-gray-600 mb-8">
                Hos Tryghedspersonale.dk er vi specialister i pædagogisk vikardækning til komplekse borgersituationer i
                Slagelse og omegn. Vi leverer dygtige, menneskeligt stærke og relationskompetente vikarer til
                institutioner, botilbud og §108-tilbud.
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
                alt="Professionel omsorg i Slagelse"
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
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Vi dækker de specialiserede pædagogiske behov</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Vi samarbejder med en række fagmiljøer og institutioner i Slagelse Kommune, hvor borgerne ofte har
              komplekse psykosociale, udviklingsmæssige eller adfærdsmæssige udfordringer
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              "Botilbud og §108-enheder",
              "Socialpsykiatriske tilbud",
              "Specialpædagogiske opholdssteder",
              "Akutte afdelinger",
              "Udadreagerende børn og unge",
              "Voksne med misbrug",
              "Angst og ADHD",
              "Autismespektrumforstyrrelser",
            ].map((area, index) => (
              <Card key={index} className="text-center hover:shadow-lg transition-shadow border-2 hover:border-red-200">
                <CardContent className="p-6">
                  <Shield className="h-8 w-8 text-red-600 mx-auto mb-3" />
                  <h4 className="font-semibold text-gray-900 text-sm">{area}</h4>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Om os Section */}
      <section className="py-16 px-4 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">
                Vores vikarer – Klar til virkelighedens kompleksitet
              </h2>
              <p className="text-lg text-gray-600 mb-6">
                Alle vores vikarer er nøje udvalgt og uddannet i at håndtere komplekse pædagogiske opgaver, ofte i
                samarbejde med andre faggrupper og med høj grad af selvstændighed.
              </p>
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <CheckCircle className="h-6 w-6 text-green-600 mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold text-gray-900">Fokus på ro, tydelighed og tillid</h4>
                    <p className="text-gray-600">
                      Vikarerne arbejder med struktur og forstår vigtigheden af at skabe trygge rammer
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle className="h-6 w-6 text-green-600 mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold text-gray-900">Erfaring fra komplekse miljøer</h4>
                    <p className="text-gray-600">
                      Skærmede institutioner, døgntilbud med lav forudsigelighed og høj kompleksitet
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle className="h-6 w-6 text-green-600 mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold text-gray-900">Specialiseret i udadreagerende adfærd</h4>
                    <p className="text-gray-600">
                      Erfaring med borgere i udadreagerende eller stærkt mistrivende tilstand
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="relative">
              <Image
                src="/caregiver-interaction.png"
                alt="Professionel vikar i Slagelse"
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
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Specialiseret erfaring fra forskellige miljøer</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Vores vikarer har bred erfaring fra forskellige typer af institutioner og kan håndtere komplekse
              pædagogiske opgaver
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
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Lokalkendskab i Slagelse og omegn</h2>
            <p className="text-lg text-gray-600">
              Som lokalt orienteret vikarbureau har vi solid erfaring med at samarbejde med botilbud og institutioner i
              Slagelse Kommune
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {coverageAreas.map((area, index) => (
              <Card key={index} className="text-center hover:shadow-lg transition-shadow">
                <CardContent className="p-6">
                  <MapPin className="h-8 w-8 text-red-600 mx-auto mb-3" />
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
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Akut pædagogisk vikarbistand i Slagelse</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Vores pædagogiske vikarer i Slagelse står klar til både planlagte og akutte opgaver – dag, aften, nat og
              weekend
            </p>
          </div>
          <div className="grid lg:grid-cols-3 gap-8">
            <Card className="text-center">
              <CardContent className="p-6">
                <Clock className="h-12 w-12 text-red-600 mx-auto mb-4" />
                <h3 className="text-xl font-semibold mb-3">Døgnservice</h3>
                <p className="text-gray-600">
                  Vi er tilgængelige alle ugens dage og kan levere akut vikarbistand med kort varsel.
                </p>
              </CardContent>
            </Card>
            <Card className="text-center">
              <CardContent className="p-6">
                <Zap className="h-12 w-12 text-red-600 mx-auto mb-4" />
                <h3 className="text-xl font-semibold mb-3">Hurtig respons</h3>
                <p className="text-gray-600">
                  Vi ved, at personalemangel i pressede pædagogiske miljøer hurtigt kan få alvorlige konsekvenser.
                </p>
              </CardContent>
            </Card>
            <Card className="text-center">
              <CardContent className="p-6">
                <Target className="h-12 w-12 text-red-600 mx-auto mb-4" />
                <h3 className="text-xl font-semibold mb-3">Høj faglighed</h3>
                <p className="text-gray-600">
                  Vores service er tilpasset jeres behov med fokus på høj faglighed og professionel håndtering.
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
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Vores tilgang til komplekse pædagogiske opgaver</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Vi forstår hverdagen i pressede miljøer, og vi ved, at tryghed og tydelighed er afgørende
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="bg-white rounded-full p-4 w-16 h-16 mx-auto mb-4 shadow-lg">
                <Shield className="h-8 w-8 text-red-600" />
              </div>
              <h3 className="text-lg font-semibold mb-2">Konflikthåndtering</h3>
              <p className="text-gray-600 text-sm">
                Trænede i konflikthåndtering og arbejder respektfuldt i krævende situationer
              </p>
            </div>
            <div className="text-center">
              <div className="bg-white rounded-full p-4 w-16 h-16 mx-auto mb-4 shadow-lg">
                <Users className="h-8 w-8 text-red-600" />
              </div>
              <h3 className="text-lg font-semibold mb-2">Teamintegration</h3>
              <p className="text-gray-600 text-sm">Kan indgå direkte i eksisterende teams og arbejde selvstændigt</p>
            </div>
            <div className="text-center">
              <div className="bg-white rounded-full p-4 w-16 h-16 mx-auto mb-4 shadow-lg">
                <Target className="h-8 w-8 text-red-600" />
              </div>
              <h3 className="text-lg font-semibold mb-2">Ro og tydelighed</h3>
              <p className="text-gray-600 text-sm">
                Fokus på at skabe trygge rammer med ro, tydelighed, tillid og struktur
              </p>
            </div>
            <div className="text-center">
              <div className="bg-white rounded-full p-4 w-16 h-16 mx-auto mb-4 shadow-lg">
                <Heart className="h-8 w-8 text-red-600" />
              </div>
              <h3 className="text-lg font-semibold mb-2">Menneskeligt stærke</h3>
              <p className="text-gray-600 text-sm">Dygtige, menneskeligt stærke og relationskompetente vikarer</p>
            </div>
          </div>
        </div>
      </section>

      {/* Kontakt Section */}
      <section className="py-16 px-4 bg-gray-900 text-white">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold mb-6">Akut pædagogisk vikarbistand i Slagelse</h2>
              <p className="text-lg text-gray-300 mb-8">
                Ring direkte og få hurtig, professionel vikarbistand til komplekse pædagogiske opgaver i Slagelse
                Kommune. Vi tilbyder akut vikarbistand med kort varsel og høj faglighed.
              </p>
              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <Phone className="h-6 w-6 text-red-400" />
                  <span className="text-lg font-semibold">41 44 33 33</span>
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
              <h3 className="text-2xl font-bold mb-6">Få akut vikarbistand</h3>
              <form className="space-y-4">
                <div>
                  <label className="block text-sm font-medium mb-2">Institution/Bosted</label>
                  <input
                    type="text"
                    className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-transparent"
                    placeholder="Navn på institution"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-2">Kontaktperson</label>
                  <input
                    type="text"
                    className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-transparent"
                    placeholder="Dit navn"
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
                  <label className="block text-sm font-medium mb-2">Behov</label>
                  <textarea
                    rows={4}
                    className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-transparent"
                    placeholder="Beskriv jeres vikarbehov..."
                  />
                </div>
                <Button className="w-full bg-red-600 hover:bg-red-700 text-white py-3">Send forespørgsel</Button>
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
                Specialister i pædagogisk vikardækning til komplekse borgersituationer i hele Danmark.
              </p>
            </div>
            <div>
              <h4 className="text-lg font-semibold mb-4">Specialområder</h4>
              <ul className="space-y-2 text-sm text-gray-400">
                <li>§108-tilbud</li>
                <li>Socialpsykiatriske tilbud</li>
                <li>Skærmede institutioner</li>
                <li>Udadreagerende adfærd</li>
              </ul>
            </div>
            <div>
              <h4 className="text-lg font-semibold mb-4">Slagelse Kommune</h4>
              <ul className="space-y-2 text-sm text-gray-400">
                <li>Slagelse by</li>
                <li>Korsør</li>
                <li>Skælskør</li>
                <li>Og øvrige lokalområder</li>
              </ul>
            </div>
            <div>
              <h4 className="text-lg font-semibold mb-4">Kontakt</h4>
              <ul className="space-y-2 text-sm text-gray-400">
                <li>Telefon: 41 44 33 33</li>
                <li>Email: kontakt@tryghedspersonale.dk</li>
                <li>Akut vikarbistand</li>
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
