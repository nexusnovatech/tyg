"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Phone, Mail, MapPin, Clock, Users, Heart, Shield, CheckCircle, Star, Menu, X } from "lucide-react"
import Image from "next/image"
import Link from "next/link"

export default function VallensbaekClientPage() {
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
              <Badge className="bg-red-100 text-red-800 mb-4">SOSU Vikarbureau Vallensbæk</Badge>
              <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
                SOSU vikarer med nærvær, erfaring og specialviden
              </h1>
              <p className="text-xl text-gray-600 mb-8">
                Hos Tryghedspersonale.dk er vi specialiseret i at levere SOSU vikarer til det komplekse område.
                Vi hjælper institutioner i Vallensbæk og omegn med at finde stabile, kompetente og menneskeligt stærke
                vikarer.
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
                alt="SOSU vikar i Vallensbæk"
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
              Specialiserede SOSU vikarer til komplekse indsatser
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Vi ved, at nogle borgere og beboere har behov, der ikke kan dækkes af alle. Hos os finder I vikarer, der
              er vant til at arbejde i miljøer præget af psykosociale udfordringer.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="border-2 hover:border-red-200 transition-colors">
              <CardHeader>
                <Users className="w-8 h-8 text-red-600 mb-2" />
                <CardTitle>Plejehjem og plejecentre</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  Erfaring fra plejehjem og plejecentre for ældre med komplekse behov.
                </p>
              </CardContent>
            </Card>

            <Card className="border-2 hover:border-red-200 transition-colors">
              <CardHeader>
                <Heart className="w-8 h-8 text-red-600 mb-2" />
                <CardTitle>Hjemmepleje</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  Hjemmepleje for borgere med demens eller andre kognitive udfordringer.
                </p>
              </CardContent>
            </Card>

            <Card className="border-2 hover:border-red-200 transition-colors">
              <CardHeader>
                <Shield className="w-8 h-8 text-red-600 mb-2" />
                <CardTitle>Hospitaler</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  Hospital afdelinger med behov for specialiseret SOSU assistance.
                </p>
              </CardContent>
            </Card>

            <Card className="border-2 hover:border-red-200 transition-colors">
              <CardHeader>
                <CheckCircle className="w-8 h-8 text-red-600 mb-2" />
                <CardTitle>Rehabilitering</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">Rehabiliteringscentre med behov for ro, struktur og tryghed.</p>
              </CardContent>
            </Card>

            <Card className="border-2 hover:border-red-200 transition-colors">
              <CardHeader>
                <Star className="w-8 h-8 text-red-600 mb-2" />
                <CardTitle>Aflastning og stabilisering</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  Aflastning i pressede teams og stabilisering i konfliktfyldte situationer.
                </p>
              </CardContent>
            </Card>

            <Card className="border-2 hover:border-red-200 transition-colors">
              <CardHeader>
                <Clock className="w-8 h-8 text-red-600 mb-2" />
                <CardTitle>Akut og planlagt</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">Vi dækker både akutte og planlagte behov med hurtig responstid.</p>
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
                SOSU vikarbureau i Vallensbæk – med specialviden og lokalt fokus
              </h2>
              <p className="text-lg text-gray-600 mb-6">
                Vi dækker SOSU vikarbehov i hele Vallensbæk Kommune med lokalt kendskab og hurtig respons.
              </p>

              <div className="grid sm:grid-cols-2 gap-4 mb-8">
                <div className="flex items-center">
                  <MapPin className="w-5 h-5 text-red-600 mr-2" />
                  <span>Vallensbæk</span>
                </div>
                <div className="flex items-center">
                  <MapPin className="w-5 h-5 text-red-600 mr-2" />
                  <span>Vallensbæk Strand</span>
                </div>
                <div className="flex items-center">
                  <MapPin className="w-5 h-5 text-red-600 mr-2" />
                  <span>Ishøj</span>
                </div>
                <div className="flex items-center">
                  <MapPin className="w-5 h-5 text-red-600 mr-2" />
                  <span>Brøndby</span>
                </div>
                <div className="flex items-center">
                  <MapPin className="w-5 h-5 text-red-600 mr-2" />
                  <span>Hundige</span>
                </div>
                <div className="flex items-center">
                  <MapPin className="w-5 h-5 text-red-600 mr-2" />
                  <span>Øvrige Vallensbæk Kommune</span>
                </div>
              </div>

              <p className="text-gray-600">
                Vores lokale kendskab gør, at vi kan handle hurtigt – og samtidig bringe en forståelse for stedets
                kultur og struktur.
              </p>
            </div>
            <div>
              <Image
                src="/caregiver-interaction.png"
                alt="Lokal vikarbistand i Vallensbæk"
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
              Vores vikarer – Skabt til komplekse miljøer
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Tryghedspersonale.dk's vikarer udvælges ikke kun ud fra deres erfaring, men også deres evne til at skabe
              stabilitet i uforudsigelige og krævende miljøer.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <Card className="p-6">
              <h3 className="text-xl font-semibold mb-4">Specialiseret træning i:</h3>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <CheckCircle className="w-5 h-5 text-green-600 mr-3 mt-0.5 flex-shrink-0" />
                  <span>Relationsarbejde med borgere, der har mistillid til systemet</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="w-5 h-5 text-green-600 mr-3 mt-0.5 flex-shrink-0" />
                  <span>Arbejde i tværfaglige teams, hvor kommunikation og grænsesætning er afgørende</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="w-5 h-5 text-green-600 mr-3 mt-0.5 flex-shrink-0" />
                  <span>Håndtering af udadreagerende eller selvskadende adfærd</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="w-5 h-5 text-green-600 mr-3 mt-0.5 flex-shrink-0" />
                  <span>Balance mellem struktur, rummelighed og tydelighed</span>
                </li>
              </ul>
            </Card>

            <div>
              <Image
                src="/koege-psychiatric-care.png"
                alt="Specialiseret SOSU vikar"
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
          <h2 className="text-3xl lg:text-4xl font-bold text-white mb-6">
            Brug for specialiseret SOSU vikarhjælp i Vallensbæk?
          </h2>
          <p className="text-xl text-red-100 mb-8 max-w-3xl mx-auto">
            Uanset om det drejer sig om én beboer, en presset enhed eller længerevarende dækning, så finder vi en
            løsning.
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
              Send besked
            </Button>
          </div>
          <p className="text-red-100 mt-6">🚨 Vi tilbyder hurtig og tryg vikarbistand i Vallensbæk og omegn</p>
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
                Specialiseret i SOSU vikarer til komplekse miljøer i Vallensbæk og omegn.
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
                <li>Vallensbæk</li>
                <li>Vallensbæk Strand</li>
                <li>Ishøj</li>
                <li>Brøndby</li>
                <li>Hundige</li>
              </ul>
            </div>

            <div>
              <h3 className="text-lg font-semibold mb-4">Ydelser</h3>
              <ul className="space-y-2 text-gray-400">
                <li>SOSU vikarer</li>
                <li>Plejehjem support</li>
                <li>Hjemmepleje</li>
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