import { HandHeart, Phone, Shield, Users } from "lucide-react"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import Image from "next/image"

export const metadata = {
  title: "Tryghedsmedarbejder | Tryghedspersonale.dk",
  description:
    "Hos Tryghedspersonale.dk tilbyder vi professionelle tryghedsmedarbejdere, der skaber ro og sikkerhed i udfordrende situationer på bosteder og institutioner.",
}

export default function TryghedsmedarbejderPage() {
  return (
    <div>
      {/* Hero Section */}
      <section className="relative bg-slate-900 text-white py-16 md:py-24 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-slate-900 via-slate-800 to-slate-900">
          <div className="absolute inset-0 bg-slate-900 opacity-60"></div>
          <div
            className="absolute inset-0 bg-gradient-to-b from-slate-900/0 via-slate-900/0 to-slate-900"
            style={{ mixBlendMode: "multiply" }}
          ></div>
        </div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Tryghedsmedarbejder</h1>
            <p className="text-xl md:text-2xl mb-8 text-slate-200">
              Professionel støtte til at skabe ro og sikkerhed i udfordrende situationer
            </p>
            <div className="flex flex-col sm:flex-row gap-8 mt-12">
              <Button asChild size="lg" className="bg-red-600 hover:bg-red-700">
                <Link href="/kontakt">Kontakt os</Link>
              </Button>
              <Button
                asChild
                size="lg"
                variant="outline"
                className="bg-black/30 text-white border-white hover:bg-white/20"
              >
                <Link href="tel:41443333">
                  <Phone className="mr-2 h-5 w-5" /> Ring 41 44 33 33
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Introduction Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold mb-6 text-center">Hvad er en Tryghedsmedarbejder?</h2>
            <div className="prose prose-lg max-w-none">
              <p>
                En tryghedsmedarbejder er en nøgleperson, der skaber ro og sikkerhed i udfordrende situationer på
                bosteder og institutioner, hvor beboerne ofte har særlige behov. De arbejder med mennesker, der kan
                udvise udadreagerende adfærd, og deres primære opgave er at sikre både fysisk og psykisk tryghed for
                alle i miljøet.
              </p>

              <div className="relative h-[400px] rounded-lg overflow-hidden shadow-xl">
                <Image
                  src="/tryghedspersonale-samtale-udendoers.jpeg"
                  alt="Tryghedsmedarbejder i samtale med borger i udendørs miljø - empatisk og støttende tilgang"
                  fill
                  className="object-cover"
                />
              </div>

              <p>
                Tryghedsmedarbejderen er ikke kun til stede for at håndtere fysiske konflikter eller sikre trygheden i
                pressede situationer – deres vigtigste rolle er at skabe en stabil og tryg atmosfære, hvor alle kan føle
                sig set, hørt og respekteret. Dette kræver en særlig empati og forståelse for borgerens baggrund og
                behov, samt evnen til at reagere professionelt og respektfuldt, uanset situationens alvor.
              </p>
              <p>
                Gennem tålmodighed, empati og afledningsteknikker hjælper en tryghedsmedarbejder med at afværge
                konflikter, mindske stress og skabe et trygt miljø for både borgere og personale. Deres tilstedeværelse
                giver ikke kun fysisk sikkerhed, men også følelsesmæssig tryghed, hvilket er essentielt for at forebygge
                eskalation og skabe et stabilt og funktionelt miljø.
              </p>
              <p>
                En tryghedsmedarbejder er en uundværlig støtteperson, der hjælper med at opbygge tillid og respekt i et
                miljø, hvor det kan være svært at navigere. De er der for at skabe et rum, hvor beboerne kan trives og
                udvikle sig, samtidig med at de sikrer, at personalet kan udføre deres arbejde uden frygt for konflikter
                eller utryghed.
              </p>
              <p>
                Hos <strong>tryghedspersonale.dk</strong> tilbyder vi professionelle tryghedsmedarbejdere, der er
                uddannet og erfarne i at håndtere udfordrende adfærd og skabe et sikkert og trygt miljø for både borgere
                og personale. Vi er din pålidelige partner til at sikre en stabil og tryg hverdag på bosteder og
                institutioner.
              </p>
            </div>
            <div className="mt-12 text-center">
              <Button asChild size="lg" className="bg-red-600 hover:bg-red-700">
                <Link href="/kontakt">Kontakt os for mere information</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Services Overview */}
      <section className="py-16 bg-slate-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Tryghedsmedarbejderens rolle</h2>
            <p className="text-slate-600 max-w-3xl mx-auto">
              Vores tryghedsmedarbejdere har flere vigtige funktioner, der alle bidrager til at skabe et sikkert og
              trygt miljø
            </p>
          </div>

          <div className="relative h-80 rounded-xl overflow-hidden shadow-lg mb-8">
            <Image
              src="/tryghedspersonale-eskort.jpeg"
              alt="Tryghedspersonale medarbejder følger en borger - sikker ledsagelse på gangen"
              fill
              className="object-cover"
            />
          </div>
          <div className="flex flex-col justify-center">
            <h3 className="text-2xl font-bold mb-4">Professionel støtte i alle situationer</h3>
            <p className="text-slate-600">
              Vores tryghedsmedarbejdere er uddannede til at håndtere selv de mest udfordrende situationer med ro og
              professionalisme. De skaber tryghed for både beboere og personale, og sikrer at alle føler sig set, hørt
              og respekteret.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-lg shadow-md">
              <div className="bg-red-100 w-16 h-16 rounded-full flex items-center justify-center mb-6">
                <Shield className="h-8 w-8 text-red-600" />
              </div>
              <h3 className="text-xl font-bold mb-3">Sikkerhed og tryghed</h3>
              <p className="text-slate-600">
                Gennem tålmodighed, empati og afledningsteknikker hjælper en tryghedsmedarbejder med at afværge
                konflikter, mindske stress og skabe et trygt miljø for både borgere og personale.
              </p>
            </div>

            <div className="bg-white p-8 rounded-lg shadow-md">
              <div className="bg-red-100 w-16 h-16 rounded-full flex items-center justify-center mb-6">
                <Users className="h-8 w-8 text-red-600" />
              </div>
              <h3 className="text-xl font-bold mb-3">Støtte og forståelse</h3>
              <p className="text-slate-600">
                En tryghedsmedarbejder er en uundværlig støtteperson, der hjælper med at opbygge tillid og respekt i et
                miljø, hvor det kan være svært at navigere.
              </p>
            </div>

            <div className="bg-white p-8 rounded-lg shadow-md">
              <div className="bg-red-100 w-16 h-16 rounded-full flex items-center justify-center mb-6">
                <HandHeart className="h-8 w-8 text-red-600" />
              </div>
              <h3 className="text-xl font-bold mb-3">Professionel assistance</h3>
              <p className="text-slate-600">
                Hos tryghedspersonale.dk tilbyder vi professionelle tryghedsmedarbejdere, der er uddannet og erfarne i
                at håndtere udfordrende adfærd og skabe et sikkert og trygt miljø.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Causes Section with Accordion */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold mb-6 text-center">
              Situationer hvor en tryghedsmedarbejder gør en forskel
            </h2>
            <p className="text-slate-600 mb-8 text-center">
              En tryghedsmedarbejder kan være afgørende i mange forskellige situationer. Her er nogle eksempler på hvor
              vores medarbejdere kan gøre en betydelig forskel:
            </p>

            <Accordion type="single" collapsible className="w-full">
              <AccordionItem value="item-1">
                <AccordionTrigger className="text-left font-medium">Ved udadreagerende adfærd</AccordionTrigger>
                <AccordionContent className="text-slate-600">
                  Når borgere udviser aggressiv eller udadreagerende adfærd, kan en tryghedsmedarbejder hjælpe med at
                  deeskalere situationen og sikre, at alle forbliver trygge. De har værktøjerne til at håndtere
                  konflikter på en professionel og respektfuld måde.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-2">
                <AccordionTrigger className="text-left font-medium">I perioder med øget stress</AccordionTrigger>
                <AccordionContent className="text-slate-600">
                  Under perioder med forandringer eller øget stress på institutionen kan en tryghedsmedarbejder være med
                  til at skabe stabilitet og ro. De kan hjælpe med at håndtere de følelsesmæssige reaktioner, der kan
                  opstå i disse situationer.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-3">
                <AccordionTrigger className="text-left font-medium">
                  Ved særlige aktiviteter eller udgange
                </AccordionTrigger>
                <AccordionContent className="text-slate-600">
                  Ved særlige aktiviteter, udflugter eller udgange kan en tryghedsmedarbejder være med til at sikre, at
                  alt forløber sikkert og trygt. De kan hjælpe med at håndtere uventede situationer og sikre, at alle
                  har en god oplevelse.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-4">
                <AccordionTrigger className="text-left font-medium">
                  Ved personaleudskiftning eller sygdom
                </AccordionTrigger>
                <AccordionContent className="text-slate-600">
                  Ved personaleudskiftning eller sygdom kan en tryghedsmedarbejder være med til at opretholde
                  kontinuiteten og trygheden på institutionen. De kan hurtigt tilpasse sig nye omgivelser og arbejde
                  sammen med det eksisterende personale.
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-red-600 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Har du brug for en tryghedsmedarbejder?</h2>
          <p className="text-xl mb-8 max-w-3xl mx-auto">
            Kontakt os i dag for at høre mere om, hvordan vi kan hjælpe med at skabe tryghed og sikkerhed på jeres
            institution
          </p>
          <div className="flex flex-col sm:flex-row gap-8 justify-center mt-12">
            <Button asChild size="lg" className="bg-white text-red-600 hover:bg-gray-100">
              <Link href="/kontakt">
                <Phone className="mr-2 h-5 w-5" /> Kontakt os nu
              </Link>
            </Button>
            <Button
              asChild
              size="lg"
              variant="outline"
              className="border-white text-red-600 hover:bg-red-700 hover:text-white bg-transparent"
            >
              <Link href="tel:41443333">Ring 41 44 33 33</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Emergency Help Section */}
      <section className="py-12 bg-slate-50">
        <div className="container mx-auto px-4">
          <div className="bg-white rounded-lg shadow-lg p-16 flex flex-col md:flex-row items-center justify-between">
            <div className="mb-6 md:mb-0 md:mr-8">
              <h3 className="text-2xl font-bold mb-2">Akut behov for hjælp?</h3>
              <p className="text-slate-600">
                Vi kan stille tryghedsmedarbejdere til rådighed med kort varsel - døgnet rundt, alle ugens dage.
              </p>
            </div>
            <Button asChild size="lg" className="bg-red-600 hover:bg-red-700 whitespace-nowrap">
              <Link href="tel:41443333">
                <Phone className="mr-2 h-5 w-5" /> Ring 41 44 33 33
              </Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}
