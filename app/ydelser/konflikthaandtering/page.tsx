import type { Metadata } from "next"
import { Button } from "@/components/ui/button"
import { Phone, Mail, Check } from "lucide-react"
import Link from "next/link"

export const metadata: Metadata = {
  title:
    "Fastvagt til bosted og botilbud | Håndtering af udadreagerende adfærd | Professionelle sikkerhedsassistenter i hele Danmark",
  description:
    "Vi tilbyder fastvagter og sikkerhedsassistenter til bosteder, specialiseret i håndtering af udadreagerende adfærd, psykotiske episoder, trusler om fysisk overgreb og verbale eskalationer. Vores indsats tilpasses individuelt efter borgerens sygdomsbillede og situation. Skab ro, tryghed og aflast jeres personale – kontakt os i dag.",
}

export default function BostedOgBotilbud() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="relative bg-slate-900 text-white">
        <div className="absolute inset-0 overflow-hidden">
          <div
            className="absolute inset-0 bg-cover bg-center opacity-20"
            style={{ backgroundImage: "url('/tryghedspersonale-faellesrum.jpeg')" }}
          ></div>
          <div className="absolute inset-0 bg-gradient-to-r from-slate-900 via-slate-900/95 to-slate-900/80"></div>
        </div>
        <div className="container mx-auto px-4 py-16 md:py-24 relative z-10">
          <div className="max-w-4xl">
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 leading-tight">Bosted- og botilbud</h1>
            <h2 className="text-xl md:text-2xl text-slate-300 mb-8">Sikkerhedsassistenter til bosteder og botilbud</h2>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button asChild size="lg" className="bg-red-600 hover:bg-red-700 text-white">
                <a href="tel:41443333" className="flex items-center">
                  <Phone className="mr-2 h-5 w-5" /> Ring 41 44 33 33
                </a>
              </Button>
              <Button asChild size="lg" className="bg-white text-slate-900 hover:bg-slate-100">
                <Link href="/kontakt">Få et uforpligtende tilbud</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Introduction Section */}
      <section className="py-12 md:py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <p className="text-lg text-slate-700 mb-6">
              I bosteder og botilbud kan hverdagen hurtigt blive udfordret, når beboere oplever uro, krise eller
              udadreagerende adfærd.
            </p>
            <p className="text-lg text-slate-700 mb-6">
              Hos sikkerhedsassistent.dk tilbyder vi professionelle sikkerhedsassistenter, der skaber ro, struktur og
              støtte – på beboernes præmisser.
            </p>
            <p className="text-lg text-slate-700">
              Vores sikkerhedsassistenter arbejder i civil påklædning for at fremstå naturlige og tillidsvækkende i
              miljøet. Det mindsker risikoen for optrapning af konflikter og hjælper beboerne med at bevare trygheden i
              hverdagen.
            </p>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-12 md:py-16 bg-slate-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-2xl md:text-3xl font-bold text-slate-900 mb-8">
              Hvad tilbyder vi bosteder og botilbud?
            </h2>
            <p className="text-lg text-slate-700 mb-8">Vi leverer specialuddannede sikkerhedsassistenter, der kan:</p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="bg-white p-6 rounded-xl shadow-sm border border-slate-100">
                <h3 className="text-xl font-bold text-slate-900 mb-3">Forebygge uro og konflikter</h3>
                <p className="text-slate-700">
                  Ved at være tilstede, aflæse situationer tidligt og reagere roligt og respektfuldt, kan vi dæmpe
                  konflikter, før de udvikler sig.
                </p>
              </div>

              <div className="bg-white p-6 rounded-xl shadow-sm border border-slate-100">
                <h3 className="text-xl font-bold text-slate-900 mb-3">
                  Understøtte beboere i psykisk sårbare situationer
                </h3>
                <p className="text-slate-700">
                  Vores assistenter er vant til at støtte borgere med psykiske lidelser, kognitive udfordringer, angst,
                  udviklingsforstyrrelser eller udadreagerende adfærd.
                </p>
              </div>

              <div className="bg-white p-6 rounded-xl shadow-sm border border-slate-100">
                <h3 className="text-xl font-bold text-slate-900 mb-3">
                  Sikre en tryg hverdag for både beboere og personale
                </h3>
                <p className="text-slate-700">
                  Når hverdagen er præget af uro, kan en ekstra voksen i miljøet gøre en afgørende forskel – både for
                  stemningen blandt beboere og arbejdsmiljøet for medarbejderne.
                </p>
              </div>

              <div className="bg-white p-6 rounded-xl shadow-sm border border-slate-100">
                <h3 className="text-xl font-bold text-slate-900 mb-3">Aflaste det faste personale</h3>
                <p className="text-slate-700">
                  Vores assistenter går aktivt ind i det daglige arbejde, så jeres pædagoger, socialrådgivere eller
                  plejepersonale kan fokusere på relationsarbejde, dokumentation og udvikling.
                </p>
              </div>

              <div className="bg-white p-6 rounded-xl shadow-sm border border-slate-100 md:col-span-2">
                <h3 className="text-xl font-bold text-slate-900 mb-3">Håndtere akutte situationer</h3>
                <p className="text-slate-700">
                  Skulle en situation eskalere, arbejder vores folk med afeskaleringsteknikker, rolig kommunikation og
                  inddragelse af det faste team, altid med beboernes værdighed i fokus.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* When to Use Section */}
      <section className="py-12 md:py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-2xl md:text-3xl font-bold text-slate-900 mb-8">
              Hvornår giver det mening at bruge en sikkerhedsassistent?
            </h2>

            <div className="space-y-4">
              <div className="flex items-start">
                <div className="bg-red-50 rounded-full p-2 mr-4 mt-1">
                  <Check className="h-5 w-5 text-red-600" />
                </div>
                <p className="text-slate-700">Når en beboer gennemgår en psykisk krise.</p>
              </div>

              <div className="flex items-start">
                <div className="bg-red-50 rounded-full p-2 mr-4 mt-1">
                  <Check className="h-5 w-5 text-red-600" />
                </div>
                <p className="text-slate-700">
                  Ved øget uro på bostedet, f.eks. ved nye beboere eller belastede perioder.
                </p>
              </div>

              <div className="flex items-start">
                <div className="bg-red-50 rounded-full p-2 mr-4 mt-1">
                  <Check className="h-5 w-5 text-red-600" />
                </div>
                <p className="text-slate-700">Ved behov for fastvagt, ekstra overvågning eller særlig støtte.</p>
              </div>

              <div className="flex items-start">
                <div className="bg-red-50 rounded-full p-2 mr-4 mt-1">
                  <Check className="h-5 w-5 text-red-600" />
                </div>
                <p className="text-slate-700">Når der er risiko for udadreagerende adfærd eller selvskade.</p>
              </div>

              <div className="flex items-start">
                <div className="bg-red-50 rounded-full p-2 mr-4 mt-1">
                  <Check className="h-5 w-5 text-red-600" />
                </div>
                <p className="text-slate-700">
                  For at skabe tryghed ved aktiviteter uden for bostedet (fx transport, udflugter).
                </p>
              </div>
            </div>

            <p className="text-lg text-slate-700 mt-8">
              Uanset om I har brug for akut støtte i få dage eller en længerevarende løsning, kan vi hurtigt og
              fleksibelt stille med en sikkerhedsassistent, der matcher jeres behov.
            </p>
          </div>
        </div>
      </section>

      {/* Approach Section */}
      <section className="py-12 md:py-16 bg-slate-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-2xl md:text-3xl font-bold text-slate-900 mb-6">Vores tilgang</h2>
            <p className="text-lg text-slate-700 mb-6">
              Vi arbejder tæt sammen med jeres faste personale og tilpasser os jeres pædagogiske retning.
            </p>
            <p className="text-lg text-slate-700">
              Vi tror på, at tryghed skabes gennem relationer, forudsigelighed og respekt for den enkelte – ikke gennem
              konfrontation eller kontrol.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-12 md:py-16 bg-gradient-to-br from-slate-900 to-slate-800 text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-2xl md:text-3xl font-bold mb-6">
              Vil I høre mere om, hvordan vi kan støtte jeres bosted eller botilbud?
            </h2>
            <p className="text-lg text-slate-300 mb-8">
              Kontakt os i dag for en uforpligtende samtale om, hvordan vi bedst kan hjælpe jer og jeres beboere.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 max-w-3xl mx-auto">
              <Button asChild size="lg" className="bg-red-600 hover:bg-red-700 text-white">
                <a href="tel:41443333" className="flex items-center justify-center">
                  <Phone className="mr-2 h-5 w-5" /> Ring 41 44 33 33
                </a>
              </Button>
              <Button
                asChild
                size="lg"
                variant="outline"
                className="border-white text-white bg-slate-800/50 hover:bg-white hover:text-slate-900"
              >
                <a href="mailto:kontakt@tryghedspersonale.dk" className="flex items-center justify-center">
                  <Mail className="mr-2 h-5 w-5" /> Send en e-mail
                </a>
              </Button>
              <Button asChild size="lg" className="bg-white text-slate-900 hover:bg-slate-100">
                <Link href="/kontakt">Få et uforpligtende tilbud</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* SEO Keywords Section */}
      <section className="py-8 bg-slate-100 border-t border-slate-200">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="flex flex-wrap gap-2 justify-center opacity-70">
              <span className="bg-slate-200 text-slate-600 px-3 py-1 rounded-full text-sm">fastvagt til bosted</span>
              <span className="bg-slate-200 text-slate-600 px-3 py-1 rounded-full text-sm">fastvagt bosted</span>
              <span className="bg-slate-200 text-slate-600 px-3 py-1 rounded-full text-sm">fastvagt botilbud</span>
              <span className="bg-slate-200 text-slate-600 px-3 py-1 rounded-full text-sm">
                sikkerhedsassistent bosted
              </span>
              <span className="bg-slate-200 text-slate-600 px-3 py-1 rounded-full text-sm">
                sikkerhedsassistent botilbud
              </span>
              <span className="bg-slate-200 text-slate-600 px-3 py-1 rounded-full text-sm">tryghedsvagt bosted</span>
              <span className="bg-slate-200 text-slate-600 px-3 py-1 rounded-full text-sm">støtteperson bosted</span>
              <span className="bg-slate-200 text-slate-600 px-3 py-1 rounded-full text-sm">
                ekstra personale bosted
              </span>
              <span className="bg-slate-200 text-slate-600 px-3 py-1 rounded-full text-sm">
                konflikthåndtering bosted
              </span>
              <span className="bg-slate-200 text-slate-600 px-3 py-1 rounded-full text-sm">akut fastvagt bosted</span>
              <span className="bg-slate-200 text-slate-600 px-3 py-1 rounded-full text-sm">personale til bosted</span>
              <span className="bg-slate-200 text-slate-600 px-3 py-1 rounded-full text-sm">
                sikkerhedsassistent til botilbud
              </span>
              <span className="bg-slate-200 text-slate-600 px-3 py-1 rounded-full text-sm">fastvagt til botilbud</span>
              <span className="bg-slate-200 text-slate-600 px-3 py-1 rounded-full text-sm">
                fastvagt bosted Midtjylland
              </span>
              <span className="bg-slate-200 text-slate-600 px-3 py-1 rounded-full text-sm">
                fastvagt bosted Østjylland
              </span>
              <span className="bg-slate-200 text-slate-600 px-3 py-1 rounded-full text-sm">
                fastvagt bosted Nordjylland
              </span>
              <span className="bg-slate-200 text-slate-600 px-3 py-1 rounded-full text-sm">
                fastvagt bosted Syddanmark
              </span>
              <span className="bg-slate-200 text-slate-600 px-3 py-1 rounded-full text-sm">
                fastvagt bosted Sjælland
              </span>
              <span className="bg-slate-200 text-slate-600 px-3 py-1 rounded-full text-sm">
                fastvagt bosted København
              </span>
              <span className="bg-slate-200 text-slate-600 px-3 py-1 rounded-full text-sm">fastvagt bosted Aarhus</span>
              <span className="bg-slate-200 text-slate-600 px-3 py-1 rounded-full text-sm">fastvagt bosted Odense</span>
              <span className="bg-slate-200 text-slate-600 px-3 py-1 rounded-full text-sm">
                fastvagt bosted Aalborg
              </span>
              <span className="bg-slate-200 text-slate-600 px-3 py-1 rounded-full text-sm">
                fastvagt bosted Esbjerg
              </span>
              <span className="bg-slate-200 text-slate-600 px-3 py-1 rounded-full text-sm">
                fastvagt bosted Randers
              </span>
              <span className="bg-slate-200 text-slate-600 px-3 py-1 rounded-full text-sm">fastvagt bosted Vejle</span>
              <span className="bg-slate-200 text-slate-600 px-3 py-1 rounded-full text-sm">
                fastvagt bosted Roskilde
              </span>
              <span className="bg-slate-200 text-slate-600 px-3 py-1 rounded-full text-sm">
                fastvagt bosted Hillerød
              </span>
              <span className="bg-slate-200 text-slate-600 px-3 py-1 rounded-full text-sm">
                fastvagt bosted Herning
              </span>
              <span className="bg-slate-200 text-slate-600 px-3 py-1 rounded-full text-sm">
                fastvagt bosted Horsens
              </span>
              <span className="bg-slate-200 text-slate-600 px-3 py-1 rounded-full text-sm">
                fastvagt bosted Kolding
              </span>
              <span className="bg-slate-200 text-slate-600 px-3 py-1 rounded-full text-sm">fastvagt bosted Viborg</span>
              <span className="bg-slate-200 text-slate-600 px-3 py-1 rounded-full text-sm">
                fastvagt bosted Næstved
              </span>
              <span className="bg-slate-200 text-slate-600 px-3 py-1 rounded-full text-sm">fastvagt bosted Holbæk</span>
            </div>
          </div>
        </div>
      </section>

      {/* Hidden SEO Content */}
      <div className="sr-only">
        <h2>SEO Information</h2>
        <p>
          Meta Title: Fastvagt til bosted og botilbud | Håndtering af udadreagerende adfærd | Professionelle
          sikkerhedsassistenter i hele Danmark
        </p>
        <p>
          Meta Description: Vi tilbyder fastvagter og sikkerhedsassistenter til bosteder, specialiseret i håndtering af
          udadreagerende adfærd, psykotiske episoder, trusler om fysisk overgreb og verbale eskalationer. Vores indsats
          tilpasses individuelt efter borgerens sygdomsbillede og situation. Skab ro, tryghed og aflast jeres personale
          – kontakt os i dag.
        </p>
      </div>
    </div>
  )
}
