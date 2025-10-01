"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Phone, ArrowRight } from "lucide-react"
import Image from "next/image"

export default function RoskildeClientPage() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <div className="min-h-screen bg-white">
      {/* Navigation */}
      <nav className="bg-white shadow-sm border-b sticky top-0 z-50"></nav>

      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-gray-50 to-gray-100 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <Badge className="bg-red-100 text-red-800 mb-4">Specialiserede Vikarer</Badge>
              <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
                Pædagogisk Vikarbureau i <span className="text-red-600">Roskilde</span> – Specialiserede vikarer til
                botilbud og socialpsykiatri
              </h1>
              <p className="text-xl text-gray-600 mb-8">
                Hos Tryghedspersonale.dk er vi eksperter i at levere kompetente, erfarne og menneskeligt stærke
                pædagogiske vikarer i Roskilde og omegn. Vores vikarer er specialiseret i at indgå i komplekse og
                udfordrende pædagogiske miljøer – fra §108-botilbud til socialpsykiatriske indsatser.
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
                  Læs mere om vores specialer
                  <ArrowRight className="w-5 h-5 ml-2" />
                </Button>
              </div>
            </div>
            <div className="relative">
              <Image
                src="/roskilde-psychiatric-care.png"
                alt="Specialiseret pædagogisk støtte i Roskilde"
                width={600}
                height={400}
                className="rounded-lg shadow-xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Specialiserede områder Section */}
      <section id="services" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              Vi løser komplekse opgaver i det specialpædagogiske felt
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Vi er mere end et almindeligt vikarbureau. Vi arbejder målrettet med borgere i mistrivsel, komplekse
              diagnoser, udadreagerende adfærd og lav forudsigelighed.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="hover:shadow-lg transition-shadow">
              <CardContent className="p-6">
                <h3 className="text-lg font-semibold mb-3">§108-tilbud og døgntilbud</h3>
                <p className="text-gray-600">Specialiseret støtte til komplekse botilbud og døgninstitutioner.</p>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow">
              <CardContent className="p-6">
                <h3 className="text-lg font-semibold mb-3">§85-støtte i borgerens eget hjem</h3>
                <p className="text-gray-600">Individuel støtte og hjælp i borgerens eget miljø.</p>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow">
              <CardContent className="p-6">
                <h3 className="text-lg font-semibold mb-3">Specialpædagogiske opholdssteder</h3>
                <p className="text-gray-600">
                  Erfarne vikarer til specialiserede opholdssteder og behandlingsinstitutioner.
                </p>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow">
              <CardContent className="p-6">
                <h3 className="text-lg font-semibold mb-3">Skærmede enheder og socialpsykiatri</h3>
                <p className="text-gray-600">Kompetent personale til skærmede enheder og socialpsykiatriske tilbud.</p>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow">
              <CardContent className="p-6">
                <h3 className="text-lg font-semibold mb-3">Behandlingsinstitutioner</h3>
                <p className="text-gray-600">
                  Specialiseret støtte til behandlingsinstitutioner og midlertidige pladser.
                </p>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow">
              <CardContent className="p-6">
                <h3 className="text-lg font-semibold mb-3">Botilbud og bosteder</h3>
                <p className="text-gray-600">Kvalificerede vikarer til forskellige typer botilbud og bosteder.</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Rest of the component follows the same structure as other city pages */}
    </div>
  )
}
