"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Phone, Mail, MapPin, Clock, Users, CheckCircle, Target, Zap } from "lucide-react"
import Image from "next/image"

export default function SjaellandClientPage() {
  const [activeService, setActiveService] = useState(0)

  const services = [
    {
      title: "Regionale Vikarløsninger",
      description:
        "Vi dækker hele Sjælland med kvalificerede pædagogiske vikarer til institutioner og bosteder i alle kommuner.",
      icon: <MapPin className="h-6 w-6" />,
    },
    {
      title: "Specialiseret Fagpersonale",
      description:
        "Vores vikarer har bred erfaring fra forskellige fagområder og kan håndtere komplekse pædagogiske opgaver.",
      icon: <Users className="h-6 w-6" />,
    },
    {
      title: "Fleksibel Dækning",
      description: "Vi tilbyder både akut vikarbistand og planlagte længerevarende løsninger til hele Sjælland.",
      icon: <Zap className="h-6 w-6" />,
    },
    {
      title: "Lokalt Kendskab",
      description:
        "Med vores regionale tilstedeværelse kender vi de lokale behov og udfordringer på tværs af Sjælland.",
      icon: <Target className="h-6 w-6" />,
    },
  ]

  const regions = [
    "Københavns Kommune",
    "Frederiksberg Kommune",
    "Albertslund Kommune",
    "Allerød Kommune",
    "Ballerup Kommune",
    "Bornholms Kommune",
    "Brøndby Kommune",
    "Dragør Kommune",
    "Egedal Kommune",
    "Fredensborg Kommune",
    "Frederikssund Kommune",
    "Furesø Kommune",
    "Gentofte Kommune",
    "Gladsaxe Kommune",
    "Glostrup Kommune",
    "Gribskov Kommune",
    "Halsnæs Kommune",
    "Helsingør Kommune",
    "Herlev Kommune",
    "Hillerød Kommune",
    "Hvidovre Kommune",
    "Høje-Taastrup Kommune",
    "Hørsholm Kommune",
    "Ishøj Kommune",
    "Lyngby-Taarbæk Kommune",
    "Rudersdal Kommune",
    "Rødovre Kommune",
    "Tårnby Kommune",
    "Vallensbæk Kommune",
  ]

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-slate-50 to-blue-50 py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <Badge className="mb-4 bg-red-100 text-red-800 hover:bg-red-200">Pædagogisk Vikarbureau Sjælland</Badge>
              <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
                Erfarne pædagogiske vikarer til hele Sjælland
              </h1>
              <p className="text-xl text-gray-600 mb-8">
                Hos Tryghedspersonale.dk tilbyder vi omfattende pædagogisk vikardækning til institutioner og bosteder på
                tværs af hele Sjælland. Vi specialiserer os i at støtte voksne og unge med særlige behov med
                kvalificerede og erfarne fagfolk.
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
                src="/caregiver-interaction.png"
                alt="Professionel omsorg på Sjælland"
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
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Regional dækning på tværs af Sjælland</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Vi leverer kvalificerede pædagogiske vikarer til institutioner og bosteder i alle kommuner på Sjælland
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            <Card className="border-2 hover:border-red-200 transition-colors">
              <CardContent className="p-6">
                <MapPin className="h-12 w-12 text-red-600 mb-4" />
                <h3 className="text-xl font-semibold mb-3">Hele Sjælland</h3>
                <p className="text-gray-600">
                  Vi dækker alle kommuner på Sjælland med erfarne pædagogiske vikarer til bosteder og institutioner.
                </p>
              </CardContent>
            </Card>
            <Card className="border-2 hover:border-red-200 transition-colors">
              <CardContent className="p-6">
                <Users className="h-12 w-12 text-red-600 mb-4" />
                <h3 className="text-xl font-semibold mb-3">Specialiserede Vikarer</h3>
                <p className="text-gray-600">
                  Kvalificerede fagfolk med erfaring i at arbejde med mennesker med særlige behov og komplekse
                  udfordringer.
                </p>
              </CardContent>
            </Card>
            <Card className="border-2 hover:border-red-200 transition-colors">
              <CardContent className="p-6">
                <Clock className="h-12 w-12 text-red-600 mb-4" />
                <h3 className="text-xl font-semibold mb-3">Døgnservice</h3>
                <p className="text-gray-600">
                  Vi tilbyder akut vikarbistand og planlagte løsninger alle ugens dage på tværs af hele Sjælland.
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
              <h2 className="text-3xl font-bold text-gray-900 mb-6">
                Din regionale partner for pædagogiske vikarløsninger
              </h2>
              <p className="text-lg text-gray-600 mb-6">
                Med vores omfattende netværk på tværs af Sjælland kan vi levere kvalificerede pædagogiske vikarer til
                institutioner og bosteder i alle kommuner. Vi forstår de lokale behov og udfordringer og kan hurtigt
                mobilisere de rette ressourcer.
              </p>
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <CheckCircle className="h-6 w-6 text-green-600 mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold text-gray-900">Regional tilstedeværelse</h4>
                    <p className="text-gray-600">Dækning af alle kommuner på Sjælland med lokalt kendskab</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle className="h-6 w-6 text-green-600 mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold text-gray-900">Bred faglig ekspertise</h4>
                    <p className="text-gray-600">Pædagoger, SSA'er, ambulancebehandlere og andre specialister</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle className="h-6 w-6 text-green-600 mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold text-gray-900">Fleksible løsninger</h4>
                    <p className="text-gray-600">Både akut hjælp og længerevarende vikarordninger</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="relative">
              <Image
                src="/handling-challenging-behavior.png"
                alt="Professionel vikar på Sjælland"
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
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Vores regionale serviceområder</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Vi tilbyder specialiserede vikarløsninger til institutioner og bosteder på tværs af hele Sjælland
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
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Kommuner vi dækker på Sjælland</h2>
            <p className="text-lg text-gray-600">
              Vi leverer kvalificerede pædagogiske vikarer til alle kommuner på Sjælland
            </p>
          </div>
          <div className="grid md:grid-cols-3 lg:grid-cols-4 gap-4">
            {regions.slice(0, 16).map((region, index) => (
              <Card key={index} className="text-center hover:shadow-lg transition-shadow">
                <CardContent className="p-4">
                  <MapPin className="h-6 w-6 text-red-600 mx-auto mb-2" />
                  <h4 className="font-medium text-gray-900 text-sm">{region}</h4>
                </CardContent>
              </Card>
            ))}
          </div>
          <div className="text-center mt-8">
            <p className="text-gray-600 mb-4">Og mange flere kommuner på tværs af Sjælland</p>
            <Button variant="outline" className="border-red-600 text-red-600 hover:bg-red-50 bg-transparent">
              Se alle dækningsområder
            </Button>
          </div>
        </div>
      </section>

      {/* Lokalt afsnit Section */}
      <section className="py-16 px-4 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Regional ekspertise på tværs af Sjælland</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Med vores regionale tilstedeværelse og lokale kendskab kan vi levere målrettede vikarløsninger til hele
              Sjælland
            </p>
          </div>
          <div className="grid lg:grid-cols-3 gap-8">
            <Card className="text-center">
              <CardContent className="p-6">
                <MapPin className="h-12 w-12 text-red-600 mx-auto mb-4" />
                <h3 className="text-xl font-semibold mb-3">Regional dækning</h3>
                <p className="text-gray-600">
                  Vi dækker alle kommuner på Sjælland og kender de lokale behov og udfordringer.
                </p>
              </CardContent>
            </Card>
            <Card className="text-center">
              <CardContent className="p-6">
                <Clock className="h-12 w-12 text-red-600 mx-auto mb-4" />
                <h3 className="text-xl font-semibold mb-3">Hurtig mobilisering</h3>
                <p className="text-gray-600">
                  Vi kan hurtigt mobilisere kvalificerede vikarer til akutte behov på tværs af hele regionen.
                </p>
              </CardContent>
            </Card>
            <Card className="text-center">
              <CardContent className="p-6">
                <Target className="h-12 w-12 text-red-600 mx-auto mb-4" />
                <h3 className="text-xl font-semibold mb-3">Målrettede løsninger</h3>
                <p className="text-gray-600">
                  Vi tilpasser vores service til de specifikke behov i hver kommune og institution.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Mission & Tilgang Section */}
      <section className="py-16 px-4 bg-gradient-to-br from-red-50 to-orange-50">
        <div className="max-w-7xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">Vores mission på Sjælland</h2>
          <p className="text-xl text-gray-600 max-w-4xl mx-auto mb-12">
            Vi arbejder for at sikre kontinuitet og kvalitet i omsorgen for mennesker med særlige behov på tværs af hele
            Sjælland. Vores erfarne vikarer bidrager til at opretholde den nødvendige støtte og omsorg, uanset hvor på
            Sjælland behovet opstår.
          </p>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="bg-white rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4 shadow-lg">
                <Users className="h-8 w-8 text-red-600" />
              </div>
              <h3 className="font-semibold text-gray-900 mb-2">Erfarne fagfolk</h3>
              <p className="text-gray-600 text-sm">Kvalificerede vikarer med bred erfaring</p>
            </div>
            <div className="text-center">
              <div className="bg-white rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4 shadow-lg">
                <MapPin className="h-8 w-8 text-red-600" />
              </div>
              <h3 className="font-semibold text-gray-900 mb-2">Regional dækning</h3>
              <p className="text-gray-600 text-sm">Service til hele Sjælland</p>
            </div>
            <div className="text-center">
              <div className="bg-white rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4 shadow-lg">
                <Clock className="h-8 w-8 text-red-600" />
              </div>
              <h3 className="font-semibold text-gray-900 mb-2">Døgnservice</h3>
              <p className="text-gray-600 text-sm">Altid klar til at hjælpe</p>
            </div>
            <div className="text-center">
              <div className="bg-white rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4 shadow-lg">
                <Target className="h-8 w-8 text-red-600" />
              </div>
              <h3 className="font-semibold text-gray-900 mb-2">Målrettet service</h3>
              <p className="text-gray-600 text-sm">Tilpasset lokale behov</p>
            </div>
          </div>
        </div>
      </section>

      {/* Kontakt Section */}
      <section className="py-16 px-4 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Kontakt os for vikarløsninger på Sjælland</h2>
            <p className="text-lg text-gray-600">
              Vi er klar til at hjælpe med kvalificerede pædagogiske vikarer til hele Sjælland
            </p>
          </div>
          <div className="grid lg:grid-cols-2 gap-12">
            <div>
              <h3 className="text-2xl font-semibold text-gray-900 mb-6">Få et tilbud i dag</h3>
              <div className="space-y-6">
                <div className="flex items-center gap-4">
                  <div className="bg-red-100 p-3 rounded-lg">
                    <Phone className="h-6 w-6 text-red-600" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900">Ring til os</h4>
                    <p className="text-gray-600">41 44 33 33 - Vi svarer alle hverdage</p>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <div className="bg-red-100 p-3 rounded-lg">
                    <Mail className="h-6 w-6 text-red-600" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900">Send en besked</h4>
                    <p className="text-gray-600">Vi vender tilbage inden for 2 timer</p>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <div className="bg-red-100 p-3 rounded-lg">
                    <MapPin className="h-6 w-6 text-red-600" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900">Regional service</h4>
                    <p className="text-gray-600">Dækning af hele Sjælland</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="bg-gray-50 rounded-lg p-8">
              <h3 className="text-xl font-semibold text-gray-900 mb-6">Hvad kan vi hjælpe med?</h3>
              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <CheckCircle className="h-5 w-5 text-green-600" />
                  <span className="text-gray-700">Akut vikarbistand til bosteder</span>
                </div>
                <div className="flex items-center gap-3">
                  <CheckCircle className="h-5 w-5 text-green-600" />
                  <span className="text-gray-700">Planlagte vikarordninger</span>
                </div>
                <div className="flex items-center gap-3">
                  <CheckCircle className="h-5 w-5 text-green-600" />
                  <span className="text-gray-700">Specialiserede fagfolk</span>
                </div>
                <div className="flex items-center gap-3">
                  <CheckCircle className="h-5 w-5 text-green-600" />
                  <span className="text-gray-700">Regional dækning på Sjælland</span>
                </div>
                <div className="flex items-center gap-3">
                  <CheckCircle className="h-5 w-5 text-green-600" />
                  <span className="text-gray-700">Døgnservice alle ugens dage</span>
                </div>
              </div>
              <Button className="w-full mt-6 bg-red-600 hover:bg-red-700">
                <Phone className="mr-2 h-5 w-5" />
                Ring 41 44 33 33 nu
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-3 gap-8">
            <div>
              <h3 className="text-xl font-semibold mb-4">Tryghedspersonale.dk</h3>
              <p className="text-gray-300 mb-4">Professionelle pædagogiske vikarløsninger til hele Sjælland</p>
              <div className="flex items-center gap-2 text-gray-300">
                <Phone className="h-4 w-4" />
                <span>41 44 33 33</span>
              </div>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Serviceområder</h4>
              <ul className="space-y-2 text-gray-300">
                <li>Hele Sjælland</li>
                <li>Københavns område</li>
                <li>Nordsjælland</li>
                <li>Vestsjælland</li>
                <li>Sydsjælland</li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Specialer</h4>
              <ul className="space-y-2 text-gray-300">
                <li>Pædagogiske vikarer</li>
                <li>Specialiseret fagpersonale</li>
                <li>Akut vikarbistand</li>
                <li>Planlagte løsninger</li>
                <li>Regional dækning</li>
              </ul>
            </div>
          </div>
          <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
            <p>&copy; 2024 Tryghedspersonale.dk - Pædagogisk Vikarbureau Sjælland</p>
          </div>
        </div>
      </footer>
    </div>
  )
}
