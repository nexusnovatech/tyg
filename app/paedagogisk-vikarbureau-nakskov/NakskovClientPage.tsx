"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Phone, Mail, MapPin, Clock, Users, Shield, Heart, CheckCircle, Target, Zap } from "lucide-react"
import Image from "next/image"

export default function NakskovClientPage() {
  const [activeTab, setActiveTab] = useState("overview")

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-red-50">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-blue-900 via-blue-800 to-red-600 text-white py-20 overflow-hidden">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <div className="space-y-4">
                <Badge className="bg-white/20 text-white border-white/30 hover:bg-white/30">
                  Pædagogisk Vikarbureau Nakskov
                </Badge>
                <h1 className="text-4xl lg:text-6xl font-bold leading-tight">
                  Kvalificerede vikarer til bosteder og institutioner
                </h1>
                <p className="text-xl text-blue-100 leading-relaxed">
                  Hos Tryghedspersonale.dk leverer vi kompetent personale, der er klar til at skabe et trygt, stabilt og
                  udviklende miljø for både borgere og dit faste personale i Nakskov.
                </p>
              </div>

              <div className="flex flex-col sm:flex-row gap-4">
                <Button size="lg" className="bg-white text-blue-900 hover:bg-blue-50 font-semibold">
                  <Phone className="mr-2 h-5 w-5" />
                  Ring 41 44 33 33
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  className="border-white text-white hover:bg-white hover:text-blue-900 bg-transparent"
                >
                  Få et tilbud
                </Button>
              </div>

              <div className="grid grid-cols-3 gap-6 pt-8">
                <div className="text-center">
                  <div className="text-3xl font-bold">24/7</div>
                  <div className="text-blue-200">Tilgængelighed</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold">100+</div>
                  <div className="text-blue-200">Erfarne vikarer</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold">15+</div>
                  <div className="text-blue-200">Års erfaring</div>
                </div>
              </div>
            </div>

            <div className="relative">
              <div className="relative rounded-2xl overflow-hidden shadow-2xl">
                <Image
                  src="/caregiver-interaction.png"
                  alt="Professionel pædagogisk vikar i Nakskov"
                  width={600}
                  height={400}
                  className="w-full h-auto"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Afdelinger Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">Vores specialiserede afdelinger</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Vi tilbyder skræddersyede vikarløsninger til forskellige institutioner og bosteder i Nakskov
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="group hover:shadow-xl transition-all duration-300 border-l-4 border-l-blue-500">
              <CardContent className="p-6">
                <div className="flex items-center mb-4">
                  <Users className="h-8 w-8 text-blue-600 mr-3" />
                  <h3 className="text-xl font-semibold">Voksne- og Ældreområdet</h3>
                </div>
                <p className="text-gray-600 mb-4">
                  Specialiseret i udadreagerende adfærd og komplekse borgerforløb for voksne og ældre borgere.
                </p>
                <Badge variant="secondary">Erfarne pædagoger</Badge>
              </CardContent>
            </Card>

            <Card className="group hover:shadow-xl transition-all duration-300 border-l-4 border-l-red-500">
              <CardContent className="p-6">
                <div className="flex items-center mb-4">
                  <Heart className="h-8 w-8 text-red-600 mr-3" />
                  <h3 className="text-xl font-semibold">Unge- og Børneområdet</h3>
                </div>
                <p className="text-gray-600 mb-4">
                  Fokus på unge og børn med særlige behov og udfordrende adfærdsmønstre.
                </p>
                <Badge variant="secondary">Specialpædagogik</Badge>
              </CardContent>
            </Card>

            <Card className="group hover:shadow-xl transition-all duration-300 border-l-4 border-l-green-500">
              <CardContent className="p-6">
                <div className="flex items-center mb-4">
                  <Shield className="h-8 w-8 text-green-600 mr-3" />
                  <h3 className="text-xl font-semibold">Psykiatrisk Område</h3>
                </div>
                <p className="text-gray-600 mb-4">
                  Håndtering af udadreagerende, voldsomme og psykotiske borgere med specialiseret tilgang.
                </p>
                <Badge variant="secondary">Akut stabilisering</Badge>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Om os Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-6">
                Hvorfor vælge Tryghedspersonale.dk i Nakskov?
              </h2>
              <p className="text-lg text-gray-600 mb-8">
                Vi er din foretrukne og pålidelige partner, når du mangler kompetente og pålidelige pædagogiske vikarer
                i Nakskov. Vores fokus på tryghed, faglighed og kontinuitet betyder, at vores vikarer hurtigt bliver en
                integreret og værdifuld del af dit team.
              </p>

              <div className="space-y-6">
                <div className="flex items-start">
                  <CheckCircle className="h-6 w-6 text-green-600 mr-3 mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-2">Erfarne pædagoger</h3>
                    <p className="text-gray-600">
                      Omfattende erfaring med både voksne og unge med særlige behov, eksperter i at skabe trygge rammer
                      og udviklingsmuligheder.
                    </p>
                  </div>
                </div>

                <div className="flex items-start">
                  <CheckCircle className="h-6 w-6 text-green-600 mr-3 mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-2">Social- og sundhedsassistenter</h3>
                    <p className="text-gray-600">
                      Værdifuld pleje- og omsorgserfaring samt kompetence inden for praktiske opgaver og sociale
                      interaktioner.
                    </p>
                  </div>
                </div>

                <div className="flex items-start">
                  <CheckCircle className="h-6 w-6 text-green-600 mr-3 mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-2">Specialister i adfærdsforstyrrelser</h3>
                    <p className="text-gray-600">
                      Specialiseret erfaring i at håndtere uforudsigelig adfærd og komplekse psykosociale udfordringer.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="relative">
              <Image
                src="/professional-man-suit.png"
                alt="Professionel vikar i Nakskov"
                width={500}
                height={600}
                className="rounded-2xl shadow-xl w-full h-auto"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Ydelser Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">Vores ydelser i Nakskov</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Vi tilbyder omfattende vikarløsninger til institutioner, bosteder og plejehjem
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <Card className="text-center p-6 hover:shadow-lg transition-shadow">
              <Clock className="h-12 w-12 text-blue-600 mx-auto mb-4" />
              <h3 className="font-semibold mb-2">Akut vikarbistand</h3>
              <p className="text-gray-600 text-sm">Hurtig indsats når behovet opstår</p>
            </Card>

            <Card className="text-center p-6 hover:shadow-lg transition-shadow">
              <Users className="h-12 w-12 text-red-600 mx-auto mb-4" />
              <h3 className="font-semibold mb-2">Langvarige forløb</h3>
              <p className="text-gray-600 text-sm">Kontinuitet og stabilitet over tid</p>
            </Card>

            <Card className="text-center p-6 hover:shadow-lg transition-shadow">
              <Shield className="h-12 w-12 text-green-600 mx-auto mb-4" />
              <h3 className="font-semibold mb-2">Specialiseret støtte</h3>
              <p className="text-gray-600 text-sm">Målrettet indsats for særlige behov</p>
            </Card>

            <Card className="text-center p-6 hover:shadow-lg transition-shadow">
              <Heart className="h-12 w-12 text-purple-600 mx-auto mb-4" />
              <h3 className="font-semibold mb-2">Empatisk tilgang</h3>
              <p className="text-gray-600 text-sm">Menneskeligt nærvær og forståelse</p>
            </Card>
          </div>
        </div>
      </section>

      {/* Serviceområder Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">Serviceområder i Nakskov</h2>
            <p className="text-xl text-gray-600">Vi betjener alle typer af institutioner og bosteder</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              "Bosteder for voksne",
              "Plejehjem og ældrecentre",
              "Institutioner for unge",
              "Psykiatriske afdelinger",
              "Krisecentre",
              "Botilbud for særlige behov",
            ].map((service, index) => (
              <div key={index} className="flex items-center p-4 bg-white rounded-lg shadow-sm">
                <CheckCircle className="h-5 w-5 text-green-600 mr-3 flex-shrink-0" />
                <span className="font-medium">{service}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Lokalt afsnit */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">Nakskov og omegn</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Vi kender det lokale område og forstår de specifikke behov i Nakskov kommune
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h3 className="text-2xl font-semibold mb-6">Lokal forankring og ekspertise</h3>
              <p className="text-gray-600 mb-6">
                Som lokalt forankret vikarbureau i Nakskov har vi dyb forståelse for de udfordringer og muligheder, der
                findes i området. Vi arbejder tæt sammen med lokale institutioner og bosteder for at sikre den bedst
                mulige service.
              </p>

              <div className="space-y-4">
                <div className="flex items-center">
                  <MapPin className="h-5 w-5 text-blue-600 mr-3" />
                  <span>Dækker hele Nakskov kommune</span>
                </div>
                <div className="flex items-center">
                  <Clock className="h-5 w-5 text-blue-600 mr-3" />
                  <span>Hurtig responstid lokalt</span>
                </div>
                <div className="flex items-center">
                  <Users className="h-5 w-5 text-blue-600 mr-3" />
                  <span>Kendskab til lokale forhold</span>
                </div>
              </div>
            </div>

            <div className="bg-blue-50 p-8 rounded-2xl">
              <h4 className="text-xl font-semibold mb-4">Kontakt os i Nakskov</h4>
              <div className="space-y-3">
                <div className="flex items-center">
                  <Phone className="h-5 w-5 text-blue-600 mr-3" />
                  <span className="font-semibold">41 44 33 33</span>
                </div>
                <div className="flex items-center">
                  <Mail className="h-5 w-5 text-blue-600 mr-3" />
                  <span>nakskov@tryghedspersonale.dk</span>
                </div>
                <div className="flex items-center">
                  <MapPin className="h-5 w-5 text-blue-600 mr-3" />
                  <span>Nakskov og omegn</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Tilgang */}
      <section className="py-16 bg-gradient-to-r from-blue-900 to-red-600 text-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold mb-4">Vores mission og tilgang</h2>
            <p className="text-xl text-blue-100 max-w-3xl mx-auto">
              Vi brænder for at gøre en reel og varig forskel i borgernes liv gennem professionel og empatisk støtte
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <Target className="h-12 w-12 mx-auto mb-4 text-blue-200" />
              <h3 className="text-xl font-semibold mb-3">Målrettet indsats</h3>
              <p className="text-blue-100">Individuelt tilpasset støtte til hver enkelt borgers behov</p>
            </div>

            <div className="text-center">
              <Heart className="h-12 w-12 mx-auto mb-4 text-red-200" />
              <h3 className="text-xl font-semibold mb-3">Empati og nærvær</h3>
              <p className="text-blue-100">Opbygning af tillidsfulde relationer og tryg kontakt</p>
            </div>

            <div className="text-center">
              <Shield className="h-12 w-12 mx-auto mb-4 text-green-200" />
              <h3 className="text-xl font-semibold mb-3">Stabilitet og tryghed</h3>
              <p className="text-blue-100">Strukturerede og forudsigelige rammer for udvikling</p>
            </div>

            <div className="text-center">
              <Zap className="h-12 w-12 mx-auto mb-4 text-yellow-200" />
              <h3 className="text-xl font-semibold mb-3">Proaktiv tilgang</h3>
              <p className="text-blue-100">Forebyggelse og professionel håndtering af udfordringer</p>
            </div>
          </div>
        </div>
      </section>

      {/* Kontakt Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              Kontakt os for pædagogiske vikarer i Nakskov
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Har du akut eller planlagt behov for kvalificerede pædagogiske vikarer? Vi står klar med erfarne og
              dedikerede vikarer.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12">
            <div className="space-y-8">
              <div>
                <h3 className="text-2xl font-semibold mb-6">Få et uforpligtende tilbud</h3>
                <p className="text-gray-600 mb-6">
                  Kontakt os i dag for at drøfte jeres specifikke behov og finde den optimale løsning for din
                  institution i Nakskov.
                </p>

                <div className="space-y-4">
                  <div className="flex items-center p-4 bg-blue-50 rounded-lg">
                    <Phone className="h-6 w-6 text-blue-600 mr-4" />
                    <div>
                      <div className="font-semibold">Ring direkte</div>
                      <div className="text-blue-600 font-bold text-lg">41 44 33 33</div>
                    </div>
                  </div>

                  <div className="flex items-center p-4 bg-gray-50 rounded-lg">
                    <Mail className="h-6 w-6 text-gray-600 mr-4" />
                    <div>
                      <div className="font-semibold">Send en email</div>
                      <div className="text-gray-600">nakskov@tryghedspersonale.dk</div>
                    </div>
                  </div>

                  <div className="flex items-center p-4 bg-green-50 rounded-lg">
                    <MapPin className="h-6 w-6 text-green-600 mr-4" />
                    <div>
                      <div className="font-semibold">Besøg os</div>
                      <div className="text-gray-600">Nakskov og omegn</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-br from-blue-50 to-red-50 p-8 rounded-2xl">
              <h3 className="text-2xl font-semibold mb-6">Hvad kan vi hjælpe med?</h3>

              <div className="space-y-4">
                <div className="flex items-center">
                  <CheckCircle className="h-5 w-5 text-green-600 mr-3" />
                  <span>Akut vikarbistand samme dag</span>
                </div>
                <div className="flex items-center">
                  <CheckCircle className="h-5 w-5 text-green-600 mr-3" />
                  <span>Planlagte længerevarende forløb</span>
                </div>
                <div className="flex items-center">
                  <CheckCircle className="h-5 w-5 text-green-600 mr-3" />
                  <span>Specialiseret støtte til særlige behov</span>
                </div>
                <div className="flex items-center">
                  <CheckCircle className="h-5 w-5 text-green-600 mr-3" />
                  <span>Rådgivning om vikarløsninger</span>
                </div>
                <div className="flex items-center">
                  <CheckCircle className="h-5 w-5 text-green-600 mr-3" />
                  <span>Fleksible aftaler tilpasset jeres behov</span>
                </div>
              </div>

              <div className="mt-8">
                <Button className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3">
                  <Phone className="mr-2 h-5 w-5" />
                  Ring 41 44 33 33 nu
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
