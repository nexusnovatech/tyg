import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { MapPin, Phone, Mail, Clock, Users, Heart, Award, ArrowRight, CheckCircle2 } from "lucide-react"
import Link from "next/link"
import Image from "next/image"

export default function SOSUVallensbaekPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-br from-blue-600 via-blue-700 to-blue-800 text-white">
        <div className="absolute inset-0 bg-[url('/healthcare-professionals-caring.jpg')] bg-cover bg-center opacity-10" />
        <div className="container relative mx-auto px-4 py-24 md:py-32">
          <div className="mx-auto max-w-4xl text-center">
            <Badge className="mb-6 bg-white/20 text-white hover:bg-white/30 backdrop-blur-sm">SOSU Vallensbæk</Badge>
            <h1 className="mb-6 text-4xl font-bold tracking-tight md:text-6xl text-balance">
              Din karriere inden for social- og sundhedsområdet starter her
            </h1>
            <p className="mb-8 text-xl text-blue-100 md:text-2xl text-pretty">
              Bliv en del af Vallensbæks sociale og sundhedsfaglige team og gør en forskel i menneskers liv hver dag
            </p>
            <div className="flex flex-col gap-4 sm:flex-row sm:justify-center">
              <Button size="lg" className="bg-white text-blue-700 hover:bg-blue-50">
                Se ledige stillinger
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
              <Button size="lg" variant="outline" className="border-white text-white hover:bg-white/10 bg-transparent">
                Kontakt os
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Quick Info Section */}
      <section className="container mx-auto px-4 py-16">
        <div className="grid gap-6 md:grid-cols-3">
          <Card className="border-blue-200 bg-white shadow-lg hover:shadow-xl transition-shadow">
            <CardContent className="flex items-start gap-4 p-6">
              <div className="rounded-full bg-blue-100 p-3">
                <MapPin className="h-6 w-6 text-blue-600" />
              </div>
              <div>
                <h3 className="font-semibold text-gray-900">Adresse</h3>
                <p className="text-sm text-gray-600">Vallensbæk Stationstorv 1</p>
                <p className="text-sm text-gray-600">2665 Vallensbæk</p>
              </div>
            </CardContent>
          </Card>

          <Card className="border-blue-200 bg-white shadow-lg hover:shadow-xl transition-shadow">
            <CardContent className="flex items-start gap-4 p-6">
              <div className="rounded-full bg-blue-100 p-3">
                <Phone className="h-6 w-6 text-blue-600" />
              </div>
              <div>
                <h3 className="font-semibold text-gray-900">Telefon</h3>
                <p className="text-sm text-gray-600">+45 46 15 15 15</p>
                <p className="text-sm text-gray-600">Man-Fre: 08:00-16:00</p>
              </div>
            </CardContent>
          </Card>

          <Card className="border-blue-200 bg-white shadow-lg hover:shadow-xl transition-shadow">
            <CardContent className="flex items-start gap-4 p-6">
              <div className="rounded-full bg-blue-100 p-3">
                <Mail className="h-6 w-6 text-blue-600" />
              </div>
              <div>
                <h3 className="font-semibold text-gray-900">Email</h3>
                <p className="text-sm text-gray-600">sosu@vallensbaek.dk</p>
                <p className="text-sm text-gray-600">Vi svarer inden 24 timer</p>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* About Section */}
      <section className="bg-white py-16">
        <div className="container mx-auto px-4">
          <div className="grid gap-12 lg:grid-cols-2 lg:gap-16 items-center">
            <div>
              <Badge className="mb-4 bg-blue-100 text-blue-700">Om SOSU Vallensbæk</Badge>
              <h2 className="mb-6 text-3xl font-bold text-gray-900 md:text-4xl text-balance">
                Et arbejdsmiljø hvor du trives og udvikler dig
              </h2>
              <p className="mb-6 text-lg text-gray-600 leading-relaxed">
                I Vallensbæk Kommune arbejder vi med en helhedsorienteret tilgang til social- og sundhedsområdet. Vi
                tilbyder et moderne arbejdsmiljø med fokus på faglig udvikling og trivsel.
              </p>
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="h-6 w-6 text-blue-600 flex-shrink-0 mt-0.5" />
                  <div>
                    <h3 className="font-semibold text-gray-900">Moderne faciliteter</h3>
                    <p className="text-gray-600">Arbejd med det nyeste udstyr og teknologi</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="h-6 w-6 text-blue-600 flex-shrink-0 mt-0.5" />
                  <div>
                    <h3 className="font-semibold text-gray-900">Kompetenceudvikling</h3>
                    <p className="text-gray-600">Løbende kurser og efteruddannelse</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="h-6 w-6 text-blue-600 flex-shrink-0 mt-0.5" />
                  <div>
                    <h3 className="font-semibold text-gray-900">Godt kollegaskab</h3>
                    <p className="text-gray-600">Et stærkt fællesskab med erfarne kolleger</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="relative h-[400px] lg:h-[500px] rounded-2xl overflow-hidden shadow-2xl">
              <Image
                src="/placeholder.svg?height=500&width=800"
                alt="SOSU team i Vallensbæk"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="mx-auto max-w-3xl text-center mb-12">
            <Badge className="mb-4 bg-blue-100 text-blue-700">Vores områder</Badge>
            <h2 className="mb-4 text-3xl font-bold text-gray-900 md:text-4xl text-balance">
              Arbejdsområder i Vallensbæk
            </h2>
            <p className="text-lg text-gray-600">Vi tilbyder varierede stillinger inden for forskellige fagområder</p>
          </div>

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            <Card className="border-blue-200 bg-white hover:shadow-lg transition-shadow">
              <CardContent className="p-6">
                <div className="mb-4 rounded-full bg-blue-100 p-3 w-fit">
                  <Heart className="h-6 w-6 text-blue-600" />
                </div>
                <h3 className="mb-2 text-xl font-semibold text-gray-900">Hjemmepleje</h3>
                <p className="text-gray-600 mb-4">
                  Hjælp borgere i deres eget hjem med daglige gøremål og personlig pleje
                </p>
                <Link href="#" className="text-blue-600 hover:text-blue-700 font-medium inline-flex items-center">
                  Læs mere <ArrowRight className="ml-1 h-4 w-4" />
                </Link>
              </CardContent>
            </Card>

            <Card className="border-blue-200 bg-white hover:shadow-lg transition-shadow">
              <CardContent className="p-6">
                <div className="mb-4 rounded-full bg-blue-100 p-3 w-fit">
                  <Users className="h-6 w-6 text-blue-600" />
                </div>
                <h3 className="mb-2 text-xl font-semibold text-gray-900">Plejecentre</h3>
                <p className="text-gray-600 mb-4">Arbejd på vores moderne plejecentre med fokus på livskvalitet</p>
                <Link href="#" className="text-blue-600 hover:text-blue-700 font-medium inline-flex items-center">
                  Læs mere <ArrowRight className="ml-1 h-4 w-4" />
                </Link>
              </CardContent>
            </Card>

            <Card className="border-blue-200 bg-white hover:shadow-lg transition-shadow">
              <CardContent className="p-6">
                <div className="mb-4 rounded-full bg-blue-100 p-3 w-fit">
                  <Award className="h-6 w-6 text-blue-600" />
                </div>
                <h3 className="mb-2 text-xl font-semibold text-gray-900">Rehabilitering</h3>
                <p className="text-gray-600 mb-4">Hjælp borgere tilbage til et aktivt liv efter sygdom eller skade</p>
                <Link href="#" className="text-blue-600 hover:text-blue-700 font-medium inline-flex items-center">
                  Læs mere <ArrowRight className="ml-1 h-4 w-4" />
                </Link>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="mx-auto max-w-3xl text-center mb-12">
            <Badge className="mb-4 bg-blue-100 text-blue-700">Fordele</Badge>
            <h2 className="mb-4 text-3xl font-bold text-gray-900 md:text-4xl text-balance">
              Derfor skal du arbejde hos os
            </h2>
          </div>

          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
            <div className="text-center">
              <div className="mx-auto mb-4 rounded-full bg-blue-100 p-4 w-fit">
                <Clock className="h-8 w-8 text-blue-600" />
              </div>
              <h3 className="mb-2 font-semibold text-gray-900">Fleksible vagter</h3>
              <p className="text-sm text-gray-600">Tilpas din arbejdstid til dit liv</p>
            </div>

            <div className="text-center">
              <div className="mx-auto mb-4 rounded-full bg-blue-100 p-4 w-fit">
                <Award className="h-8 w-8 text-blue-600" />
              </div>
              <h3 className="mb-2 font-semibold text-gray-900">Efteruddannelse</h3>
              <p className="text-sm text-gray-600">Løbende kurser og udvikling</p>
            </div>

            <div className="text-center">
              <div className="mx-auto mb-4 rounded-full bg-blue-100 p-4 w-fit">
                <Users className="h-8 w-8 text-blue-600" />
              </div>
              <h3 className="mb-2 font-semibold text-gray-900">Stærkt fællesskab</h3>
              <p className="text-sm text-gray-600">Gode kolleger og teamwork</p>
            </div>

            <div className="text-center">
              <div className="mx-auto mb-4 rounded-full bg-blue-100 p-4 w-fit">
                <Heart className="h-8 w-8 text-blue-600" />
              </div>
              <h3 className="mb-2 font-semibold text-gray-900">Meningsfuldt arbejde</h3>
              <p className="text-sm text-gray-600">Gør en reel forskel hver dag</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-gradient-to-br from-blue-600 to-blue-800 py-16 text-white">
        <div className="container mx-auto px-4">
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="mb-4 text-3xl font-bold md:text-4xl text-balance">
              Klar til at starte din karriere i Vallensbæk?
            </h2>
            <p className="mb-8 text-xl text-blue-100 text-pretty">
              Vi glæder os til at høre fra dig og fortælle mere om mulighederne hos os
            </p>
            <div className="flex flex-col gap-4 sm:flex-row sm:justify-center">
              <Button size="lg" className="bg-white text-blue-700 hover:bg-blue-50">
                Se ledige stillinger
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
              <Button size="lg" variant="outline" className="border-white text-white hover:bg-white/10 bg-transparent">
                Kontakt os
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
