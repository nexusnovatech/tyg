"use client"

import { useState } from "react"
import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Phone, Mail, MapPin, Clock, Users, Shield, Heart, CheckCircle, Star, ArrowRight, Menu, X } from "lucide-react"

export default function PsykiatriskVikarClientPage() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="bg-white shadow-sm sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center">
              <Image src="/logo-full.png" alt="Tryghedspersonale.dk" width={200} height={40} className="h-8 w-auto" />
            </div>

            {/* Desktop Navigation */}
            <nav className="hidden md:flex space-x-8">
              <Link href="#services" className="text-gray-700 hover:text-red-600 transition-colors">
                Ydelser
              </Link>
              <Link href="#about" className="text-gray-700 hover:text-red-600 transition-colors">
                Om os
              </Link>
              <Link href="#contact" className="text-gray-700 hover:text-red-600 transition-colors">
                Kontakt
              </Link>
            </nav>

            {/* Mobile menu button */}
            <div className="md:hidden">
              <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="text-gray-700 hover:text-red-600">
                {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden bg-white border-t">
            <div className="px-2 pt-2 pb-3 space-y-1">
              <Link
                href="#services"
                className="block px-3 py-2 text-gray-700 hover:text-red-600"
                onClick={() => setIsMenuOpen(false)}
              >
                Ydelser
              </Link>
              <Link
                href="#about"
                className="block px-3 py-2 text-gray-700 hover:text-red-600"
                onClick={() => setIsMenuOpen(false)}
              >
                Om os
              </Link>
              <Link
                href="#contact"
                className="block px-3 py-2 text-gray-700 hover:text-red-600"
                onClick={() => setIsMenuOpen(false)}
              >
                Kontakt
              </Link>
            </div>
          </div>
        )}
      </header>

      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-slate-50 to-blue-50 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <Badge className="mb-4 bg-red-100 text-red-800 hover:bg-red-100">Psykiatrisk Vikarbureau</Badge>
              <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
                Kvalificerede psykiatriske vikarer til
                <span className="text-red-600"> psykiatri, plejehjem og bosteder</span>
              </h1>
              <p className="text-xl text-gray-600 mb-8">
                Som et erfarent psykiatrisk vikarbureau tilbyder Tryghedspersonale.dk kvalificerede psykiatriske vikarer
                til både psykiatriske institutioner, bosteder og plejehjem. Vi sikrer dig fleksible og professionelle
                løsninger til dine behov – hurtigt og effektivt.
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
                src="/general-psychiatric-care.png"
                alt="Psykiatrisk vikarbureau - kvalificerede vikarer"
                width={600}
                height={400}
                className="rounded-lg shadow-xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section id="about" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              Hvorfor vælge Tryghedspersonale.dk som dit psykiatriske vikarbureau?
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Når du står over for akut behov for psykiatriske vikarer, er det vigtigt at finde en partner, du kan stole
              på. Hos Tryghedspersonale.dk er vi eksperter i at levere kvalificerede vikarer til både psykiatrien,
              bosteder og plejehjem.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <Card className="text-center p-6 hover:shadow-lg transition-shadow">
              <CardContent className="pt-6">
                <Shield className="h-12 w-12 text-red-600 mx-auto mb-4" />
                <h3 className="text-xl font-semibold mb-3">Specialisering i psykiatrien</h3>
                <p className="text-gray-600">
                  Som et dedikeret psykiatrisk vikarbureau har vi et stærkt netværk af vikarer med erfaring fra både
                  psykiatriske afdelinger, bosteder og plejehjem.
                </p>
              </CardContent>
            </Card>

            <Card className="text-center p-6 hover:shadow-lg transition-shadow">
              <CardContent className="pt-6">
                <Users className="h-12 w-12 text-red-600 mx-auto mb-4" />
                <h3 className="text-xl font-semibold mb-3">Erfarne vikarer</h3>
                <p className="text-gray-600">
                  Alle vores vikarer er nøje udvalgt, og vi sikrer, at de har de nødvendige faglige kvalifikationer og
                  praktisk erfaring med psykisk syge patienter.
                </p>
              </CardContent>
            </Card>

            <Card className="text-center p-6 hover:shadow-lg transition-shadow">
              <CardContent className="pt-6">
                <Clock className="h-12 w-12 text-red-600 mx-auto mb-4" />
                <h3 className="text-xl font-semibold mb-3">Fleksible løsninger</h3>
                <p className="text-gray-600">
                  Uanset om du har brug for korttids- eller langtidsvikarer, tilbyder vi skræddersyede løsninger, der
                  opfylder dine specifikke behov.
                </p>
              </CardContent>
            </Card>

            <Card className="text-center p-6 hover:shadow-lg transition-shadow">
              <CardContent className="pt-6">
                <Heart className="h-12 w-12 text-red-600 mx-auto mb-4" />
                <h3 className="text-xl font-semibold mb-3">Hurtig reaktion</h3>
                <p className="text-gray-600">
                  Vi ved, hvor vigtigt det er at få de rette medarbejdere hurtigt, især når du står med akut behov. Vi
                  reagerer hurtigt og effektivt.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              Hvordan finder vi den rette psykiatriske vikar til din institution?
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              At finde den rette psykiatriske vikar handler om mere end bare at matche kvalifikationer. Det handler om
              at finde en person, der passer ind i din institution og kan arbejde effektivt med både patienter og
              kollegaer.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="bg-red-600 text-white rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-6 text-2xl font-bold">
                1
              </div>
              <h3 className="text-xl font-semibold mb-4">Kontakt os</h3>
              <p className="text-gray-600">
                Udfyld vores kontaktformular, eller ring direkte til os, så vi kan få en forståelse af din institution
                og dine behov for psykiatriske vikarer. Vi er tilgængelige døgnet rundt for at hjælpe.
              </p>
            </div>

            <div className="text-center">
              <div className="bg-red-600 text-white rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-6 text-2xl font-bold">
                2
              </div>
              <h3 className="text-xl font-semibold mb-4">Vi matcher vikarerne</h3>
              <p className="text-gray-600">
                Når vi har forstået dine behov, udvælger vi de rette vikarer fra vores netværk. Vi sikrer, at de har
                erfaring i den relevante del af psykiatrien.
              </p>
            </div>

            <div className="text-center">
              <div className="bg-red-600 text-white rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-6 text-2xl font-bold">
                3
              </div>
              <h3 className="text-xl font-semibold mb-4">Hurtig opstart</h3>
              <p className="text-gray-600">
                Når vi har fundet den rette vikar, sørger vi for en hurtig opstart, så din institution ikke oplever
                driftforstyrrelser. Vi forbereder vikarerne grundigt.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Qualifications Section */}
      <section id="services" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-6">
                Vores psykiatriske vikarer er kvalificerede og professionelle
              </h2>
              <p className="text-xl text-gray-600 mb-8">
                Alle vores vikarer gennemgår en grundig screeningproces, der sikrer, at de har de rette kompetencer og
                erfaring. De arbejder professionelt og med respekt for både patienters og institutionens behov.
              </p>

              <div className="space-y-4">
                <div className="flex items-start">
                  <CheckCircle className="h-6 w-6 text-green-600 mr-3 mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold text-gray-900">Uddannelse og kvalifikationer</h4>
                    <p className="text-gray-600">
                      Alle vikarer er uddannet indenfor psykiatri og relaterede fagområder, herunder psykiatriske
                      sygeplejersker, social- og sundhedsassistenter, psykologer og andre relevante fagpersoner.
                    </p>
                  </div>
                </div>

                <div className="flex items-start">
                  <CheckCircle className="h-6 w-6 text-green-600 mr-3 mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold text-gray-900">Erfaring</h4>
                    <p className="text-gray-600">
                      Vore vikarer har solid erfaring fra både psykiatrisk behandling, plejehjem og bosteder. De har
                      arbejdet med alt fra akut psykiatrisk behandling til langsigtede plejeopgaver.
                    </p>
                  </div>
                </div>

                <div className="flex items-start">
                  <CheckCircle className="h-6 w-6 text-green-600 mr-3 mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold text-gray-900">Fleksibilitet og tilpasning</h4>
                    <p className="text-gray-600">
                      Vore vikarer er vant til at arbejde i skiftende og krævende arbejdsmiljøer, og de tilpasser sig
                      hurtigt din institutions behov.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="relative">
              <Image
                src="/vallensbæk-psychiatric-care.png"
                alt="Kvalificerede psykiatriske vikarer"
                width={600}
                height={400}
                className="rounded-lg shadow-xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              Vigtige fordele ved at bruge et psykiatrisk vikarbureau
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              At vælge et psykiatrisk vikarbureau som Tryghedspersonale.dk giver dig en lang række fordele, som sikrer,
              at du får den bedst mulige hjælp til dit behov.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <Card className="p-6 hover:shadow-lg transition-shadow">
              <CardContent className="pt-6">
                <Clock className="h-10 w-10 text-red-600 mb-4" />
                <h3 className="text-lg font-semibold mb-3">Fleksibilitet i ansættelsen</h3>
                <p className="text-gray-600">
                  Du kan bruge psykiatriske vikarer, når du har brug for dem, uden at være forpligtet til langsigtede
                  ansættelser.
                </p>
              </CardContent>
            </Card>

            <Card className="p-6 hover:shadow-lg transition-shadow">
              <CardContent className="pt-6">
                <Users className="h-10 w-10 text-red-600 mb-4" />
                <h3 className="text-lg font-semibold mb-3">Effektiv rekruttering</h3>
                <p className="text-gray-600">
                  Vi tager os af hele rekrutteringsprocessen og reducerer din administrative byrde og sparer dig for tid
                  og ressourcer.
                </p>
              </CardContent>
            </Card>

            <Card className="p-6 hover:shadow-lg transition-shadow">
              <CardContent className="pt-6">
                <Shield className="h-10 w-10 text-red-600 mb-4" />
                <h3 className="text-lg font-semibold mb-3">Specialiseret hjælp</h3>
                <p className="text-gray-600">
                  Vi tilbyder specialiseret hjælp til psykiatrien, plejehjem, bosteder og andre institutioner, der
                  arbejder med psykisk syge patienter.
                </p>
              </CardContent>
            </Card>

            <Card className="p-6 hover:shadow-lg transition-shadow">
              <CardContent className="pt-6">
                <Heart className="h-10 w-10 text-red-600 mb-4" />
                <h3 className="text-lg font-semibold mb-3">Hurtig løsning</h3>
                <p className="text-gray-600">
                  Uanset om du står over for akut behov eller har langtidsholdbare behov, kan vi hurtigt finde den rette
                  vikar.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              Kundecases – sådan har vi hjulpet andre
            </h2>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <Card className="p-8">
              <CardContent className="pt-6">
                <div className="flex items-center mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="h-5 w-5 text-yellow-400 fill-current" />
                  ))}
                </div>
                <blockquote className="text-lg text-gray-700 mb-6">
                  "Tryghedspersonale.dk har været en afgørende partner for os. Vi har ofte brug for psykiatriske vikarer
                  til både akutte opgaver på vores psykiatriske afdeling og på vores plejehjem, og deres hurtige service
                  og kvalificerede vikarer har givet os stor tryghed."
                </blockquote>
                <cite className="text-sm font-semibold text-gray-900">
                  – Psykiatrisk Afdeling, Aarhus Universitetshospital
                </cite>
              </CardContent>
            </Card>

            <Card className="p-8">
              <CardContent className="pt-6">
                <div className="flex items-center mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="h-5 w-5 text-yellow-400 fill-current" />
                  ))}
                </div>
                <blockquote className="text-lg text-gray-700 mb-6">
                  "Vi har haft et godt samarbejde med Tryghedspersonale.dk, som har hjulpet os med at finde erfarne og
                  professionelle vikarer til vores bosted. Vikarerne har haft stor erfaring med psykisk sygdom og har
                  bidraget positivt til vores pleje og behandling."
                </blockquote>
                <cite className="text-sm font-semibold text-gray-900">– Ledelse, Mindehaven Bosted</cite>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-red-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl lg:text-4xl font-bold text-white mb-4">
            Er du interesseret i at blive psykiatrisk vikar hos os?
          </h2>
          <p className="text-xl text-red-100 mb-8 max-w-3xl mx-auto">
            Er du en erfaren psykiatrisk vikar og ønsker at arbejde med et af de mest anerkendte vikarbureauer i
            Danmark? Vi tilbyder fleksible arbejdsforhold og spændende opgaver inden for både psykiatrien, plejehjem og
            bosteder.
          </p>
          <Button size="lg" variant="secondary" className="bg-white text-red-600 hover:bg-gray-100">
            Læs mere om at blive vikar
            <ArrowRight className="ml-2 h-5 w-5" />
          </Button>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">Kontakt os i dag for at få hjælp</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Er du klar til at finde den rette psykiatriske vikar til din institution? Tryghedspersonale.dk er klar til
              at hjælpe dig. Udfyld vores kontaktformular, eller ring direkte, så vi kan finde den bedste løsning til
              dine behov.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 mb-12">
            <Card className="text-center p-8">
              <CardContent className="pt-6">
                <Phone className="h-12 w-12 text-red-600 mx-auto mb-4" />
                <h3 className="text-xl font-semibold mb-2">Ring til os</h3>
                <p className="text-2xl font-bold text-red-600 mb-2">41 44 33 33</p>
                <p className="text-gray-600">Døgnet rundt, alle dage</p>
              </CardContent>
            </Card>

            <Card className="text-center p-8">
              <CardContent className="pt-6">
                <Mail className="h-12 w-12 text-red-600 mx-auto mb-4" />
                <h3 className="text-xl font-semibold mb-2">Send en email</h3>
                <p className="text-lg text-red-600 mb-2">info@tryghedspersonale.dk</p>
                <p className="text-gray-600">Vi svarer inden for 2 timer</p>
              </CardContent>
            </Card>

            <Card className="text-center p-8">
              <CardContent className="pt-6">
                <MapPin className="h-12 w-12 text-red-600 mx-auto mb-4" />
                <h3 className="text-xl font-semibold mb-2">Besøg os</h3>
                <p className="text-gray-600 mb-2">Hovedkontor København</p>
                <p className="text-gray-600">Afdelinger i hele Danmark</p>
              </CardContent>
            </Card>
          </div>

          <div className="text-center">
            <Button size="lg" className="bg-red-600 hover:bg-red-700 text-white">
              <Phone className="mr-2 h-5 w-5" />
              Kontakt os nu
            </Button>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              FAQ – ofte stillede spørgsmål om psykiatrisk vikarbureau
            </h2>
          </div>

          <div className="space-y-8">
            <Card className="p-6">
              <CardContent className="pt-6">
                <h3 className="text-xl font-semibold mb-3">
                  1. Hvordan fungerer processen, når vi behøver en psykiatrisk vikar?
                </h3>
                <p className="text-gray-600">
                  Når du kontakter os, vil vi hurtigt få en forståelse af dine behov og matche dig med den rette
                  psykiatriske vikar fra vores netværk. Vi sikrer en hurtig opstart for at minimere eventuelle
                  driftsforstyrrelser.
                </p>
              </CardContent>
            </Card>

            <Card className="p-6">
              <CardContent className="pt-6">
                <h3 className="text-xl font-semibold mb-3">2. Hvad koster det at hyre en psykiatrisk vikar?</h3>
                <p className="text-gray-600">
                  Prisen afhænger af flere faktorer som vikarens erfaring og opgavens omfang. Kontakt os for et
                  skræddersyet tilbud, der passer til dit budget og behov.
                </p>
              </CardContent>
            </Card>

            <Card className="p-6">
              <CardContent className="pt-6">
                <h3 className="text-xl font-semibold mb-3">3. Er vikarerne hos Tryghedspersonale.dk certificerede?</h3>
                <p className="text-gray-600">
                  Ja, alle vores vikarer har de nødvendige faglige kvalifikationer og erfaring, som kræves for at
                  arbejde inden for psykiatri, plejehjem og bosteder.
                </p>
              </CardContent>
            </Card>
          </div>
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
                height={40}
                className="h-8 w-auto mb-4"
              />
              <p className="text-gray-400">Danmarks førende vikarbureau inden for psykiatri, sikkerhed og sundhed.</p>
            </div>

            <div>
              <h4 className="text-lg font-semibold mb-4">Ydelser</h4>
              <ul className="space-y-2 text-gray-400">
                <li>
                  <Link href="#" className="hover:text-white transition-colors">
                    Psykiatriske vikarer
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-white transition-colors">
                    Sikkerhedspersonale
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-white transition-colors">
                    Sundhedspersonale
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-white transition-colors">
                    Pædagogiske vikarer
                  </Link>
                </li>
              </ul>
            </div>

            <div>
              <h4 className="text-lg font-semibold mb-4">Områder</h4>
              <ul className="space-y-2 text-gray-400">
                <li>
                  <Link href="#" className="hover:text-white transition-colors">
                    København
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-white transition-colors">
                    Aarhus
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-white transition-colors">
                    Odense
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-white transition-colors">
                    Aalborg
                  </Link>
                </li>
              </ul>
            </div>

            <div>
              <h4 className="text-lg font-semibold mb-4">Kontakt</h4>
              <ul className="space-y-2 text-gray-400">
                <li className="flex items-center">
                  <Phone className="h-4 w-4 mr-2" />
                  41 44 33 33
                </li>
                <li className="flex items-center">
                  <Mail className="h-4 w-4 mr-2" />
                  info@tryghedspersonale.dk
                </li>
                <li className="flex items-center">
                  <MapPin className="h-4 w-4 mr-2" />
                  København, Danmark
                </li>
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
