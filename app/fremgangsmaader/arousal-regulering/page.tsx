import type { Metadata } from "next"
import Image from "next/image"
import Link from "next/link"
import { ArrowRight, Check, Brain, Shield, Users, Heart } from "lucide-react"

export const metadata: Metadata = {
  title: "Low Arousal | Plejehjem | Bosteder | Psykiatrien | Tryghedspersonale.dk",
  description:
    "Lær hvordan Tryghedspersonale.dk anvender low arousal-metoden til at skabe balance mellem stimuli og ro. Vi arbejder proaktivt for at sikre, at borgerne ikke bliver overstimuleret eller understimuleret, og fremmer deres trivsel og velvære.",
}

export default function ArousalReguleringPage() {
  return (
    <main className="min-h-screen">
      {/* Hero Section with Background Image */}
      <section className="relative bg-slate-900 text-white">
        <div className="absolute inset-0 z-0 opacity-40">
          <Image
            src="/tryghedspersonale-samtale-udendoers.jpeg"
            alt="Arousal regulering hos Tryghedspersonale.dk"
            fill
            className="object-cover"
            priority
          />
        </div>
        <div className="absolute inset-0 bg-slate-900/60"></div>
        <div className="container mx-auto px-4 py-24 md:py-32 relative z-10">
          <div className="max-w-3xl">
            <div className="inline-block bg-red-600/20 backdrop-blur-sm px-4 py-2 rounded-full text-sm font-medium mb-6">
              Professionel metode til balance
            </div>
            <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
              Arousal-regulering: Balancen mellem stimuli og ro
            </h1>
            <p className="text-xl md:text-2xl text-white/80 mb-8 leading-relaxed">
              Hos Tryghedspersonale.dk arbejder vi med at skabe den rette balance mellem stimulering og ro for at sikre
              borgerens trivsel og velvære.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                href="#hvad-er-arousal"
                className="bg-red-600 hover:bg-red-700 text-white px-8 py-4 rounded-md font-medium transition-colors inline-flex items-center justify-center"
              >
                Lær mere om metoden
              </Link>
              <Link
                href="/kontakt"
                className="bg-white/10 hover:bg-white/20 backdrop-blur-sm text-white px-8 py-4 rounded-md font-medium transition-colors inline-flex items-center justify-center"
              >
                Kontakt os
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Introduction Section */}
      <section id="hvad-er-arousal" className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold mb-6 text-slate-800">Hvad er arousal-regulering?</h2>
              <div className="text-lg text-slate-700 space-y-6">
                <p>
                  Hos <strong>Tryghedspersonale.dk</strong> arbejder vi med <strong>arousal-regulering</strong>, en
                  metode, der handler om at skabe den rette balance mellem stimuli og ro. Mennesker er forskellige, og
                  deres behov for stimulering kan variere i løbet af dagen. Vores tilgang fokuserer på at sikre, at en
                  borger hverken bliver <strong>overstimuleret</strong> eller <strong>understimuleret</strong>, da begge
                  tilstande kan have negative konsekvenser for deres trivsel og velvære.
                </p>
                <p>
                  Arousal-regulering er baseret på forståelsen af, at alle mennesker har et optimalt niveau af arousal –
                  eller aktivering – hvor de fungerer bedst. Dette niveau er individuelt og kan variere fra person til
                  person. Nogle borgere trives med et højt aktivitetsniveau, mens andre har brug for mere ro og færre
                  stimuli for at have det godt.
                </p>
                <p>
                  Når borgeren er i balance, trives de bedre, føler sig mere trygge og har større mulighed for at
                  håndtere deres følelser og adfærd. De oplever mindre stress, angst og uro, og de har lettere ved at
                  deltage i hverdagens aktiviteter og sociale interaktioner. Dette skaber grundlag for en bedre
                  livskvalitet og personlig udvikling.
                </p>
                <p>
                  Vores erfaring viser, at når vi hjælper borgeren med at finde og opretholde deres optimale
                  arousal-niveau, reduceres risikoen for udadreagerende adfærd, konflikter og andre problematiske
                  situationer markant. Dette gavner ikke kun borgeren selv, men også personalet og de øvrige beboere i
                  miljøet.
                </p>
              </div>
            </div>

            {/* Stats Row */}
            <div className="mt-12 mb-16">
              <div className="bg-slate-50 p-8 rounded-xl">
                <h3 className="text-xl font-bold mb-4 text-slate-800">Arousal-regulering: Dokumenterede resultater</h3>
                <p className="text-slate-700 mb-4">
                  Arousal-regulering er en af de mest effektive metoder til at forbedre borgernes trivsel og reducere
                  udadreagerende adfærd. Vores interne undersøgelser viser, at langt de fleste borgere oplever markant
                  forbedret trivsel, når deres arousal-niveau holdes inden for det optimale område. Dette skyldes, at
                  borgeren hverken bliver overstimuleret eller understimuleret, men i stedet oplever en tilstand af
                  balance, hvor de kan fungere optimalt.
                </p>
                <p className="text-slate-700 mb-4">
                  En af de mest betydningsfulde effekter ved korrekt arousal-regulering er den markante reduktion i
                  konfliktsituationer. Når borgeren befinder sig i en tilstand af optimal arousal, er risikoen for
                  udadreagerende adfærd væsentligt reduceret. Dette skaber et mere harmonisk miljø for både borgeren og
                  personalet, hvilket igen forstærker den positive udvikling.
                </p>
                <p className="text-slate-700 mb-4">
                  Vores systematiske arbejde med arousal-regulering har vist sig særligt effektivt for borgere med
                  komplekse udfordringer, herunder personer med autismespektrumforstyrrelser, ADHD, psykiske lidelser og
                  kognitive funktionsnedsættelser. For disse borgere kan det være særligt udfordrende at regulere deres
                  eget arousal-niveau, og de har derfor stor gavn af professionel støtte til dette.
                </p>
                <p className="text-slate-700">
                  For at sikre kontinuitet i arbejdet med arousal-regulering har vi sammensat et team af specialister,
                  der er grundigt uddannet i disse teknikker. Vi prioriterer, at der altid er kvalificeret personale til
                  rådighed, som kan implementere disse metoder korrekt og konsekvent, uanset hvornår behovet opstår.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* High Arousal Section */}
      <section className="py-20 bg-slate-50">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <div className="bg-white rounded-xl shadow-md overflow-hidden mb-16">
              <div className="md:flex">
                <div className="md:w-1/3 relative h-64 md:h-auto">
                  <Image
                    src="/tryghedspersonale-aktivitet.jpeg"
                    alt="High Arousal - Aktivitet hos Tryghedspersonale"
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="md:w-2/3 p-8 md:p-10">
                  <div className="flex items-center mb-4">
                    <div className="bg-red-100 p-3 rounded-full mr-4">
                      <Brain className="h-6 w-6 text-red-600" />
                    </div>
                    <h3 className="text-2xl font-bold text-slate-800">Hvad er High Arousal?</h3>
                  </div>
                  <div className="text-slate-600 space-y-4">
                    <p>
                      <strong>High arousal</strong> opstår, når en person er stærkt stimuleret – fysisk, følelsesmæssigt
                      eller kognitivt. I denne tilstand er borgeren ofte præget af høj energi, intens aktivitet eller
                      stærke følelser. De kan vise tegn på stress, frustration eller irritation, som kan føre til{" "}
                      <strong>uro</strong>, <strong>opfarende adfærd</strong> eller <strong>konflikter</strong>.
                    </p>
                    <p>
                      Eksempler på høj arousal kan være, at en borger bliver hurtigt ophidset, har svært ved at fokusere
                      eller reagerer på en impulsiv måde. De kan have svært ved at sidde stille, tale højt eller
                      hurtigt, eller have svært ved at følge almindelige sociale regler. Deres tanker kan være kaotiske,
                      og de kan have svært ved at træffe beslutninger eller overskue konsekvenserne af deres handlinger.
                    </p>
                    <p>
                      Fysiske tegn på høj arousal kan omfatte øget hjerterytme, hurtig vejrtrækning, svedige håndflader,
                      spændte muskler og rastløshed. Borgeren kan også udvise tegn på angst, panik eller frygt, som kan
                      komme til udtryk gennem deres kropssprog og adfærd.
                    </p>
                    <p>
                      Når vi arbejder med høj arousal, er det vigtigt at reagere hurtigt og effektivt for at undgå, at
                      situationen udvikler sig til noget mere stressende eller konfliktfyldt. Det kan være at give
                      borgeren mulighed for at tage en pause, finde et stille rum, eller tilbyde beroligende aktiviteter
                      som afspænding, vejrtrækningsteknikker eller blot en rolig samtale. Vi hjælper borgeren med at{" "}
                      <strong>genvinde kontrollen</strong> og reducere stimuli, så de kan finde ro og balance igen.
                    </p>
                  </div>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-3 mt-6 mb-6">
                    <div className="flex items-start">
                      <Check className="h-5 w-5 text-green-500 mt-0.5 mr-2 flex-shrink-0" />
                      <span className="text-sm text-slate-700">Hurtig identifikation af tegn på overstimulering</span>
                    </div>
                    <div className="flex items-start">
                      <Check className="h-5 w-5 text-green-500 mt-0.5 mr-2 flex-shrink-0" />
                      <span className="text-sm text-slate-700">Beroligende aktiviteter og teknikker</span>
                    </div>
                    <div className="flex items-start">
                      <Check className="h-5 w-5 text-green-500 mt-0.5 mr-2 flex-shrink-0" />
                      <span className="text-sm text-slate-700">Skærmning fra overstimulerende miljøer</span>
                    </div>
                    <div className="flex items-start">
                      <Check className="h-5 w-5 text-green-500 mt-0.5 mr-2 flex-shrink-0" />
                      <span className="text-sm text-slate-700">Støtte til at genvinde kontrol og balance</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Low Arousal Section */}
            <div className="bg-white rounded-xl shadow-md overflow-hidden mb-16">
              <div className="md:flex">
                <div className="md:w-1/3 relative h-64 md:h-auto md:order-last">
                  <Image
                    src="/tryghedspersonale-park.jpeg"
                    alt="Low Arousal - Rolige omgivelser hos Tryghedspersonale"
                    fill
                    className="object-cover"
                    loading="lazy"
                  />
                </div>
                <div className="md:w-2/3 p-8 md:p-10">
                  <div className="flex items-center mb-4">
                    <div className="bg-red-100 p-3 rounded-full mr-4">
                      <Brain className="h-6 w-6 text-red-600" />
                    </div>
                    <h3 className="text-2xl font-bold text-slate-800">Hvad er Low Arousal?</h3>
                  </div>
                  <div className="text-slate-600 space-y-4">
                    <p>
                      På den anden side har vi <strong>low arousal</strong>, hvor en person er{" "}
                      <strong>understimuleret</strong>. Dette betyder, at borgeren ikke får den nødvendige mængde
                      stimuli til at holde sig engageret eller aktiv. Det kan føre til <strong>rastløshed</strong>,{" "}
                      <strong>kedsomhed</strong> eller <strong>vandreuro</strong> – hvor borgeren føler behov for at
                      bevæge sig uden mål eller bliver let distraheret.
                    </p>
                    <p>
                      I denne tilstand mangler de den energi og aktivitet, der hjælper dem med at føle sig engagerede i
                      deres omgivelser. De kan virke apatiske, uinteresserede eller fraværende. Deres reaktionstid kan
                      være langsom, og de kan have svært ved at koncentrere sig eller følge med i samtaler og
                      aktiviteter.
                    </p>
                    <p>
                      Fysiske tegn på low arousal kan omfatte langsom vejrtrækning, lav energi, sløvhed og manglende
                      motivation. Borgeren kan også udvise tegn på tristhed, depression eller følelsesmæssig afladning,
                      som kan komme til udtryk gennem deres kropssprog og adfærd.
                    </p>
                    <p>
                      Når vi opdager, at en borger er i low arousal, er vores mål at{" "}
                      <strong>aktivere deres sanser</strong> og give dem den stimulans, de behøver for at føle sig mere
                      til stede og engagerede. Vi tilbyder aktiviteter, som kan vække deres interesse, som f.eks. en
                      gåtur, et spil, en kreativ opgave eller en samtale, der skaber interaktion og aktivitet. Det
                      handler om at finde den rette balance – så borgeren ikke bliver passive eller træder tilbage, men
                      aktiveres på en måde, der skaber positiv energi og trivsel.
                    </p>
                  </div>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-3 mt-6 mb-6">
                    <div className="flex items-start">
                      <Check className="h-5 w-5 text-green-500 mt-0.5 mr-2 flex-shrink-0" />
                      <span className="text-sm text-slate-700">Aktiviteter der stimulerer og engagerer</span>
                    </div>
                    <div className="flex items-start">
                      <Check className="h-5 w-5 text-green-500 mt-0.5 mr-2 flex-shrink-0" />
                      <span className="text-sm text-slate-700">Sanseaktivering og meningsfuld interaktion</span>
                    </div>
                    <div className="flex items-start">
                      <Check className="h-5 w-5 text-green-500 mt-0.5 mr-2 flex-shrink-0" />
                      <span className="text-sm text-slate-700">Forebyggelse af passivitet og tilbagetrækning</span>
                    </div>
                    <div className="flex items-start">
                      <Check className="h-5 w-5 text-green-500 mt-0.5 mr-2 flex-shrink-0" />
                      <span className="text-sm text-slate-700">Individuelt tilpassede aktivitetsplaner</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Our Approach Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold mb-6 text-slate-800">
                Hvordan arbejder vi med Arousal-regulering hos Tryghedspersonale.dk?
              </h2>
              <p className="text-lg text-slate-700 max-w-3xl mx-auto">
                Vores tilgang til arousal-regulering er både proaktiv og fleksibel, tilpasset den enkelte borgers unikke
                behov.
              </p>
            </div>

            <div className="bg-white rounded-xl shadow-md overflow-hidden mb-16">
              <div className="p-8 md:p-10">
                <div className="text-slate-600 space-y-6">
                  <p>
                    Hos <strong>Tryghedspersonale.dk</strong> er vores tilgang til <strong>arousal-regulering</strong>{" "}
                    både <strong>proaktiv</strong> og <strong>fleksibel</strong>. Vi forstår, at hver borger er unik og
                    kan have forskellige behov afhængigt af deres situation, dag og miljø. Derfor tilpasser vi konstant
                    vores tilgang for at finde den rette balance mellem stimuli og ro.
                  </p>
                  <p>
                    Vi er opmærksomme på borgerens adfærd hele dagen igennem og søger tidlige tegn på både høj og lav
                    arousal. Hvis vi ser, at en borger bliver overstimuleret – f.eks. bliver hurtigt irriteret eller
                    urolig – tager vi skridt til at reducere stimuli. Det kan være ved at tilbyde en pause, skærme
                    borgeren fra stressende situationer eller give dem tid til at trække sig tilbage i et stille rum.
                  </p>
                  <p>
                    Hvis vi derimod ser tegn på understimulering – f.eks. at borgeren bliver rastløs, keder sig eller
                    udviser vandreuro – griber vi ind med aktiviteter, der engagerer dem og bringer dem tilbage i en
                    mere aktiv og opmærksom tilstand. Det kan være noget så simpelt som at tage en gåtur sammen, spille
                    et spil eller finde en opgave, der aktiverer deres tanker og sanser.
                  </p>
                  <p>
                    En vigtig del af vores arbejde er at forstå, at <strong>arousal</strong> ikke er statisk. Det ændrer
                    sig i løbet af dagen, afhængigt af borgerens aktiviteter, følelser og omgivelser. Derfor tilpasser
                    vi løbende vores tilgang og skaber en fleksibel plan, hvor både aktivitet og hvile indgår. Dette
                    sikrer, at borgeren har de bedste betingelser for at trives og undgår både overstimulering og
                    understimulering.
                  </p>
                  <p>
                    Vi arbejder også tæt sammen med borgeren selv, når det er muligt, for at hjælpe dem med at genkende
                    deres egne tegn på høj eller lav arousal. Ved at øge deres selvbevidsthed og give dem værktøjer til
                    selvregulering, kan vi støtte dem i at tage mere kontrol over deres eget velvære og trivsel.
                  </p>
                  <p>
                    Vores personale er uddannet til at observere og reagere på selv subtile tegn på ændringer i
                    arousal-niveau. Dette kræver en høj grad af opmærksomhed, empati og forståelse for den enkelte
                    borgers unikke udtryk og behov. Vi prioriterer derfor kontinuerlig uddannelse og supervision af
                    vores personale for at sikre, at de har de nødvendige kompetencer til at arbejde effektivt med
                    arousal-regulering.
                  </p>
                </div>
              </div>
            </div>

            {/* Proactive Approach Section */}
            <div className="bg-white rounded-xl shadow-md overflow-hidden">
              <div className="p-8 md:p-10">
                <div className="flex items-center mb-6">
                  <div className="bg-red-100 p-3 rounded-full mr-4">
                    <Shield className="h-6 w-6 text-red-600" />
                  </div>
                  <h3 className="text-2xl font-bold text-slate-800">Proaktiv tilgang og justering</h3>
                </div>
                <div className="text-slate-600 space-y-6">
                  <p>
                    I arbejdet med arousal-regulering er vi <strong>proaktive</strong>. Det betyder, at vi ikke venter
                    på, at problemer opstår, men reagerer tidligt og justerer vores støtte, så vi kan undgå, at
                    situationer eskalerer. Dette kræver en konstant opmærksomhed på borgerens adfærd, følelser og behov.
                    Vi forsøger at forudse, hvornår en borger måske er på vej til at blive overstimuleret eller
                    understimuleret, og tager handling, før problemerne opstår.
                  </p>
                  <p>
                    Vores proaktive tilgang omfatter også planlægning af borgerens dag med henblik på at skabe en god
                    balance mellem aktivitet og hvile. Vi strukturerer dagen, så der er perioder med stimulerende
                    aktiviteter og perioder med ro og afslapning. Dette hjælper borgeren med at opretholde et stabilt
                    arousal-niveau gennem hele dagen.
                  </p>
                  <p>
                    Vi arbejder også med at identificere og forstå de faktorer, der påvirker borgerens arousal-niveau.
                    Dette kan være alt fra fysiske faktorer som lyd, lys og temperatur til sociale faktorer som antallet
                    af mennesker i rummet eller typen af social interaktion. Ved at forstå disse faktorer kan vi bedre
                    tilpasse miljøet og aktiviteterne til borgerens behov.
                  </p>
                  <p>
                    Vores mål er at skabe et trygt og balanceret miljø for borgeren, hvor de har kontrol over deres egne
                    behov for stimuli og ro. Vi er der for at støtte dem, når det er nødvendigt, og hjælper dem med at
                    finde den rette balance, der gør, at de kan have en stabil og positiv hverdag.
                  </p>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
                  <div className="bg-slate-50 p-6 rounded-xl">
                    <div className="flex items-center mb-4">
                      <div className="bg-red-100 w-12 h-12 rounded-full flex items-center justify-center mr-4">
                        <Users className="h-6 w-6 text-red-600" />
                      </div>
                      <h4 className="text-lg font-bold text-slate-800">Individuelt tilpasset</h4>
                    </div>
                    <p className="text-slate-600">
                      Vores tilgang er altid skræddersyet til den enkelte borgers behov, præferencer og udfordringer. Vi
                      anerkender, at hver person er unik og kræver en individuelt tilpasset strategi. Dette omfatter en
                      grundig vurdering af borgerens arousal-profil, herunder deres typiske reaktionsmønstre, triggere
                      og foretrukne reguleringsstrategier. På baggrund af denne vurdering udvikler vi en personlig plan
                      for arousal-regulering, som løbende evalueres og justeres efter behov.
                    </p>
                  </div>
                  <div className="bg-slate-50 p-6 rounded-xl">
                    <div className="flex items-center mb-4">
                      <div className="bg-red-100 w-12 h-12 rounded-full flex items-center justify-center mr-4">
                        <Heart className="h-6 w-6 text-red-600" />
                      </div>
                      <h4 className="text-lg font-bold text-slate-800">Respektfuld støtte</h4>
                    </div>
                    <p className="text-slate-600">
                      Vi møder altid borgeren med respekt og værdighed. Vores mål er at støtte dem i at opnå større
                      selvregulering og kontrol over deres eget liv og velvære. Vi anerkender, at borgeren er ekspert i
                      deres eget liv og oplevelser, og vi inddrager dem aktivt i processen, når det er muligt. Vi lytter
                      til deres feedback og præferencer og tilpasser vores tilgang derefter. Vores støtte er altid
                      baseret på empati, tålmodighed og en dyb respekt for borgerens autonomi og integritet.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-slate-900 text-white relative">
        <div className="absolute inset-0 z-0 opacity-40">
          <Image
            src="/tryghedspersonale-dk-forside-medarbejder.jpeg"
            alt="Professionelt team hos Tryghedspersonale"
            fill
            className="object-cover"
            loading="lazy"
          />
        </div>
        <div className="absolute inset-0 bg-slate-900/70"></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Få professionel støtte til arousal-regulering</h2>
            <p className="text-xl text-white/80 mb-10 max-w-2xl mx-auto">
              Kontakt os i dag for at høre mere om, hvordan vores ekspertise inden for arousal-regulering kan hjælpe
              jeres institution og borgere.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/kontakt"
                className="bg-red-600 hover:bg-red-700 text-white px-8 py-4 rounded-md font-medium transition-colors inline-flex items-center justify-center"
              >
                Kontakt os
              </Link>
              <Link
                href="/fremgangsmaader"
                className="bg-white/10 hover:bg-white/20 backdrop-blur-sm text-white px-8 py-4 rounded-md font-medium transition-colors inline-flex items-center justify-center"
              >
                Se andre metoder <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Related Methods Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold mb-6 text-slate-800">Relaterede fremgangsmåder</h2>
              <p className="text-lg text-slate-700 max-w-3xl mx-auto">
                Udforsk vores andre specialiserede metoder, der komplementerer arbejdet med arousal-regulering.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              {/* Method 1 */}
              <Link href="/fremgangsmaader/skaermning" className="group">
                <div className="bg-slate-50 rounded-xl overflow-hidden shadow-sm transition-all group-hover:shadow-md">
                  <div className="h-48 bg-slate-200 relative overflow-hidden">
                    <Image
                      src="/tryghedspersonale-faellesrum.jpeg"
                      alt="Skærmning - Trygge rammer hos Tryghedspersonale"
                      fill
                      className="object-cover transition-transform group-hover:scale-105"
                      loading="lazy"
                    />
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-bold text-slate-800 mb-2 group-hover:text-red-600 transition-colors">
                      Skærmning
                    </h3>
                    <p className="text-slate-600 mb-4">
                      Lær om hvordan vi bruger skærmning til at skabe trygge rammer og reducere overstimulering.
                    </p>
                    <div className="flex items-center text-red-600 font-medium">
                      Læs mere <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                    </div>
                  </div>
                </div>
              </Link>

              {/* Method 2 */}
              <Link href="/fremgangsmaader/afledningsteknikker-og-spejlning" className="group">
                <div className="bg-slate-50 rounded-xl overflow-hidden shadow-sm transition-all group-hover:shadow-md">
                  <div className="h-48 bg-slate-200 relative overflow-hidden">
                    <Image
                      src="/tryghedspersonale-park-samtale.jpeg"
                      alt="Afledningsteknikker og Spejlning - Samtale og interaktion"
                      fill
                      className="object-cover transition-transform group-hover:scale-105"
                      loading="lazy"
                    />
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-bold text-slate-800 mb-2 group-hover:text-red-600 transition-colors">
                      Afledningsteknikker og Spejlning
                    </h3>
                    <p className="text-slate-600 mb-4">
                      Udforsk hvordan vi bruger afledning og spejling til at skabe kontakt og forebygge konflikter.
                    </p>
                    <div className="flex items-center text-red-600 font-medium">
                      Læs mere <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                    </div>
                  </div>
                </div>
              </Link>

              {/* Method 3 */}
              <Link href="/fremgangsmaader/dokumentation" className="group">
                <div className="bg-slate-50 rounded-xl overflow-hidden shadow-sm transition-all group-hover:shadow-md">
                  <div className="h-48 bg-slate-200 relative overflow-hidden">
                    <Image
                      src="/tryghedspersonale-aeldre-stoette.jpeg"
                      alt="Dokumentation - Professionel støtte og opfølgning"
                      fill
                      className="object-cover transition-transform group-hover:scale-105"
                      loading="lazy"
                    />
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-bold text-slate-800 mb-2 group-hover:text-red-600 transition-colors">
                      Dokumentation
                    </h3>
                    <p className="text-slate-600 mb-4">
                      Se hvordan vi dokumenterer og evaluerer vores indsats for at sikre kontinuerlig forbedring.
                    </p>
                    <div className="flex items-center text-red-600 font-medium">
                      Læs mere <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                    </div>
                  </div>
                </div>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}
