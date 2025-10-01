import type { Metadata } from "next"
import Image from "next/image"
import Link from "next/link"
import { ArrowRight, Check, FileText, ClipboardList, Users, RefreshCw } from "lucide-react"

export const metadata: Metadata = {
  title: "Dokumentation og adfærdsskemaer hos Tryghedspersonale.dk",
  description:
    "Læs hvordan Tryghedspersonale.dk arbejder med dokumentation og adfærdsskemaer for at følge borgerens udvikling og sikre den rette opfølgning på deres behov.",
}

export default function DokumentationPage() {
  return (
    <main className="min-h-screen">
      {/* Hero Section with Background Image */}
      <section className="relative bg-slate-900 text-white">
        <div className="absolute inset-0 z-0 opacity-40">
          <Image
            src="/tryghedspersonale-forside-medarbejder.jpeg"
            alt="Dokumentation hos Tryghedspersonale.dk"
            fill
            className="object-cover"
            priority
          />
        </div>
        <div className="absolute inset-0 bg-slate-900/60"></div>
        <div className="container mx-auto px-4 py-24 md:py-32 relative z-10">
          <div className="max-w-3xl">
            <div className="inline-block bg-red-600/20 backdrop-blur-sm px-4 py-2 rounded-full text-sm font-medium mb-6">
              Professionel metode til opfølgning
            </div>
            <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">Dokumentation og opfølgning</h1>
            <p className="text-xl md:text-2xl text-white/80 mb-8 leading-relaxed">
              Hos Tryghedspersonale.dk er dokumentation en central del af vores arbejde med at sikre borgernes trivsel.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                href="#hvorfor-dokumentation"
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
      <section id="hvorfor-dokumentation" className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold mb-6 text-slate-800">
                Hvad er dokumentation og opfølgning?
              </h2>
              <div className="text-lg text-slate-700 space-y-6">
                <p>
                  Hos Tryghedspersonale.dk er dokumentation en central del af vores arbejde med at sikre borgernes
                  trivsel. Det giver os mulighed for at forstå den enkelte borgers behov, reagere på ændringer og sikre,
                  at vi løbende tilpasser vores indsats for at opnå de bedste resultater.
                </p>
                <p>
                  Dokumentation handler om systematisk at registrere og analysere information om borgeren, deres adfærd,
                  reaktioner og udvikling. Dette skaber et solidt grundlag for vores faglige vurderinger og beslutninger
                  og sikrer, at vores indsats er baseret på konkrete observationer og data frem for antagelser eller
                  fornemmelser.
                </p>
                <p>
                  God dokumentation er kendetegnet ved at være præcis, objektiv og relevant. Den fokuserer på faktiske
                  observationer og beskriver konkrete situationer, handlinger og reaktioner. Den er også systematisk og
                  konsekvent, så vi kan følge udviklingen over tid og identificere mønstre og tendenser.
                </p>
                <p>
                  Opfølgning er en lige så vigtig del af processen. Det handler om at bruge den indsamlede dokumentation
                  til at evaluere vores indsats, justere vores tilgang og sikre, at vi hele tiden arbejder mod at
                  forbedre borgerens trivsel og livskvalitet. Uden grundig opfølgning ville dokumentationen miste sin
                  værdi og blive reduceret til en administrativ opgave uden reel betydning for borgerens liv.
                </p>
              </div>
            </div>

            {/* Stats Row */}
            <div className="mt-12 mb-16">
              <div className="bg-slate-50 p-8 rounded-xl">
                <h3 className="text-xl font-bold mb-4 text-slate-800">
                  Dokumentation: Grundlaget for kvalitet og udvikling
                </h3>
                <p className="text-slate-700 mb-4">
                  Hos Tryghedspersonale.dk betragter vi grundig dokumentation som en hjørnesten i vores arbejde. Vi har
                  implementeret systematiske dokumentationsprocesser for næsten alle vores indsatser, hvilket giver os
                  et solidt grundlag for at evaluere og forbedre vores metoder. Denne systematiske tilgang sikrer, at vi
                  kan følge borgerens udvikling over tid og justere vores indsats efter behov.
                </p>
                <p className="text-slate-700 mb-4">
                  Vores erfaringer viser, at struktureret dokumentation og regelmæssig opfølgning har en markant positiv
                  effekt på resultaterne af vores arbejde. Når vi konsekvent dokumenterer borgerens adfærd, reaktioner
                  og fremskridt, kan vi identificere mønstre og tendenser, der ellers kunne være svære at opdage. Dette
                  giver os mulighed for at tilpasse vores tilgang og sikre, at vi altid arbejder med de mest effektive
                  metoder for den enkelte borger.
                </p>
                <p className="text-slate-700 mb-4">
                  Vores dokumentation er også et vigtigt redskab i vores samarbejde med andre fagpersoner og instanser.
                  Den giver os mulighed for at kommunikere præcist og objektivt om borgerens situation og behov, hvilket
                  er afgørende for at sikre en koordineret og sammenhængende indsats. Dette er særligt vigtigt i
                  komplekse sager, hvor mange forskellige fagpersoner er involveret.
                </p>
                <p className="text-slate-700">
                  For at sikre den højeste kvalitet i vores dokumentation har vi prioriteret, at alt vores personale er
                  grundigt uddannet i professionelle dokumentationsteknikker. Dette omfatter både tekniske færdigheder i
                  forhold til vores dokumentationssystemer og en dyb forståelse for, hvilke observationer der er
                  relevante at dokumentere. Denne investering i vores personales kompetencer afspejler vores
                  forpligtelse til at levere den bedst mulige service til vores klienter.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Documentation Section */}
      <section className="py-20 bg-slate-50">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <div className="bg-white rounded-xl shadow-md overflow-hidden mb-16">
              <div className="md:flex">
                <div className="md:w-1/3 relative h-64 md:h-auto">
                  <Image src="/tryghedspersonale-faellesrum.jpeg" alt="Dokumentation" fill className="object-cover" />
                </div>
                <div className="md:w-2/3 p-8 md:p-10">
                  <div className="flex items-center mb-4">
                    <div className="bg-red-100 p-3 rounded-full mr-4">
                      <FileText className="h-6 w-6 text-red-600" />
                    </div>
                    <h3 className="text-2xl font-bold text-slate-800">Hvorfor er dokumentation vigtig?</h3>
                  </div>
                  <div className="text-slate-600 space-y-4">
                    <p>
                      Dokumentation er ikke bare en opgave – det er et redskab, der hjælper os med at træffe informerede
                      beslutninger om borgerens behandling og støtte. Ved at holde styr på borgerens adfærd og udvikling
                      kan vi hurtigt opdage mønstre og identificere behov for justeringer i vores tilgang. God
                      dokumentation hjælper både os og andre fagpersoner med at forstå borgerens situation og gøre
                      opfølgningen mere effektiv.
                    </p>
                    <p>
                      Dokumentation skaber kontinuitet i borgerens forløb. I situationer, hvor forskellige medarbejdere
                      arbejder med borgeren, sikrer god dokumentation, at alle har adgang til den samme information og
                      kan fortsætte arbejdet på en konsistent måde. Dette er særligt vigtigt i forhold til borgere med
                      komplekse behov, hvor kontinuitet og forudsigelighed er afgørende for deres trivsel.
                    </p>
                    <p>
                      Dokumentation er også et vigtigt redskab til at måle effekten af vores indsats. Ved at dokumentere
                      borgerens situation før, under og efter en intervention, kan vi vurdere, om vores tilgang har den
                      ønskede effekt, eller om vi skal justere vores metoder. Dette er afgørende for at sikre, at vi
                      bruger vores ressourcer effektivt og opnår de bedst mulige resultater for borgeren.
                    </p>
                    <p>
                      Endelig er dokumentation et vigtigt juridisk og etisk redskab. Det sikrer, at vi kan redegøre for
                      vores handlinger og beslutninger, hvis der skulle opstå spørgsmål eller tvivl. Dette beskytter
                      både borgeren og os som fagpersoner og bidrager til at opretholde høje standarder for faglighed og
                      etik i vores arbejde.
                    </p>
                  </div>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-3 mt-6 mb-6">
                    <div className="flex items-start">
                      <Check className="h-5 w-5 text-green-500 mt-0.5 mr-2 flex-shrink-0" />
                      <span className="text-sm text-slate-700">Sikrer kontinuitet i borgerens forløb</span>
                    </div>
                    <div className="flex items-start">
                      <Check className="h-5 w-5 text-green-500 mt-0.5 mr-2 flex-shrink-0" />
                      <span className="text-sm text-slate-700">Giver grundlag for informerede beslutninger</span>
                    </div>
                    <div className="flex items-start">
                      <Check className="h-5 w-5 text-green-500 mt-0.5 mr-2 flex-shrink-0" />
                      <span className="text-sm text-slate-700">Hjælper med at identificere mønstre</span>
                    </div>
                    <div className="flex items-start">
                      <Check className="h-5 w-5 text-green-500 mt-0.5 mr-2 flex-shrink-0" />
                      <span className="text-sm text-slate-700">Understøtter tværfagligt samarbejde</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Behavior Schemas Section */}
            <div className="bg-white rounded-xl shadow-md overflow-hidden mb-16">
              <div className="md:flex">
                <div className="md:w-1/3 relative h-64 md:h-auto md:order-last">
                  <Image src="/tryghedspersonale-aktivitet.jpeg" alt="Adfærdsskemaer" fill className="object-cover" />
                </div>
                <div className="md:w-2/3 p-8 md:p-10">
                  <div className="flex items-center mb-4">
                    <div className="bg-red-100 p-3 rounded-full mr-4">
                      <ClipboardList className="h-6 w-6 text-red-600" />
                    </div>
                    <h3 className="text-2xl font-bold text-slate-800">Hvordan bruger vi adfærdsskemaer?</h3>
                  </div>
                  <div className="text-slate-600 space-y-4">
                    <p>
                      Et af de vigtigste værktøjer i vores dokumentationsarbejde er adfærdsskemaer. Disse skemaer giver
                      os mulighed for at registrere borgerens adfærd, så vi kan få et klart billede af, hvordan de
                      reagerer i forskellige situationer. Vi dokumenterer detaljer som:
                    </p>
                    <ul className="list-disc pl-5 space-y-2">
                      <li>Hvornår adfærden opstår (tidspunkter på dagen, specifikke hændelser)</li>
                      <li>Hvordan adfærden udfolder sig (fysisk, følelsesmæssigt, kognitivt)</li>
                      <li>Reaktioner på vores indsatser (hvad har vi gjort, og hvordan reagerede borgeren?)</li>
                    </ul>
                    <p>
                      Vores adfærdsskemaer er designet til at være enkle at bruge, men samtidig omfattende nok til at
                      fange alle relevante aspekter af borgerens adfærd. De er strukturerede på en måde, der gør det let
                      at identificere mønstre og tendenser over tid, hvilket er afgørende for at kunne tilpasse vores
                      indsats effektivt.
                    </p>
                    <p>
                      Vi bruger både kvantitative og kvalitative metoder i vores adfærdsskemaer. Kvantitative data giver
                      os mulighed for at måle frekvens, varighed og intensitet af bestemte adfærdsmønstre, mens
                      kvalitative beskrivelser giver os en dybere forståelse af konteksten og de underliggende faktorer,
                      der påvirker borgerens adfærd.
                    </p>
                    <p>
                      Denne dokumentation gør os i stand til at følge borgerens udvikling og tilpasse vores indsatser,
                      så vi kan støtte dem bedst muligt. Ved at analysere data fra adfærdsskemaerne kan vi identificere
                      triggere for problematisk adfærd, evaluere effektiviteten af forskellige interventioner og udvikle
                      mere målrettede og effektive strategier for at støtte borgeren.
                    </p>
                  </div>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-3 mt-6 mb-6">
                    <div className="flex items-start">
                      <Check className="h-5 w-5 text-green-500 mt-0.5 mr-2 flex-shrink-0" />
                      <span className="text-sm text-slate-700">Systematisk registrering af adfærd</span>
                    </div>
                    <div className="flex items-start">
                      <Check className="h-5 w-5 text-green-500 mt-0.5 mr-2 flex-shrink-0" />
                      <span className="text-sm text-slate-700">Detaljeret dokumentation af reaktioner</span>
                    </div>
                    <div className="flex items-start">
                      <Check className="h-5 w-5 text-green-500 mt-0.5 mr-2 flex-shrink-0" />
                      <span className="text-sm text-slate-700">Analyse af mønstre og tendenser</span>
                    </div>
                    <div className="flex items-start">
                      <Check className="h-5 w-5 text-green-500 mt-0.5 mr-2 flex-shrink-0" />
                      <span className="text-sm text-slate-700">Grundlag for tilpasning af indsatser</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Follow-up Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold mb-6 text-slate-800">Løbende opfølgning og justering</h2>
              <p className="text-lg text-slate-700 max-w-3xl mx-auto">
                Dokumentationen er kun effektiv, hvis den bruges aktivt til at forbedre vores indsats.
              </p>
            </div>

            <div className="bg-white rounded-xl shadow-md overflow-hidden mb-16">
              <div className="p-8 md:p-10">
                <div className="text-slate-600 space-y-6">
                  <p>
                    Dokumentationen er kun effektiv, hvis den bruges aktivt. Vi sørger derfor for at følge op på vores
                    registreringer og tilpasse vores tilgang løbende. Ved at evaluere og justere vores indsats baseret
                    på den indsamlede dokumentation, kan vi sikre, at vi arbejder på den mest effektive måde.
                  </p>
                  <p>
                    Vores opfølgningsproces er struktureret og systematisk. Vi gennemgår regelmæssigt den indsamlede
                    dokumentation, analyserer data og identificerer mønstre og tendenser. På baggrund af denne analyse
                    udvikler vi hypoteser om, hvad der fungerer godt, og hvad der kan forbedres, og vi justerer vores
                    tilgang i overensstemmelse hermed.
                  </p>
                  <p>
                    Vi involverer også borgeren i opfølgningsprocessen, når det er muligt. Ved at inddrage borgeren i
                    evalueringen af vores indsats, sikrer vi, at deres perspektiv og oplevelse bliver hørt og taget i
                    betragtning. Dette er i tråd med vores værdi om at respektere borgerens autonomi og værdighed.
                  </p>
                  <p>
                    <strong>Eksempel:</strong> Hvis vi opdager, at en borger reagerer mere negativt på bestemte
                    aktiviteter eller tidspunkter på dagen, kan vi ændre på disse elementer for at forbedre deres
                    trivsel. Vi kan også identificere, hvilke interventioner der har den mest positive effekt på
                    borgerens adfærd og velvære, og fokusere mere på disse i vores arbejde.
                  </p>
                  <p>
                    Vores opfølgningsproces omfatter også regelmæssige teammøder, hvor vi diskuterer vores observationer
                    og erfaringer med borgeren. Dette giver os mulighed for at dele viden og indsigt på tværs af teamet
                    og sikre, at alle medarbejdere har en fælles forståelse af borgerens situation og behov. Det
                    bidrager også til at skabe en kultur af kontinuerlig læring og forbedring i vores organisation.
                  </p>
                </div>
              </div>
            </div>

            {/* Confidentiality Section */}
            <div className="bg-white rounded-xl shadow-md overflow-hidden">
              <div className="p-8 md:p-10">
                <div className="flex items-center mb-6">
                  <div className="bg-red-100 p-3 rounded-full mr-4">
                    <Users className="h-6 w-6 text-red-600" />
                  </div>
                  <h3 className="text-2xl font-bold text-slate-800">Respekt for fortrolighed</h3>
                </div>
                <div className="text-slate-600 space-y-6">
                  <p>
                    Vi behandler altid dokumentationen med stor respekt for borgerens privatliv. Alle oplysninger bliver
                    opbevaret fortroligt og i overensstemmelse med gældende lovgivning om persondata. Vi sikrer, at
                    informationerne kun deles med relevante personer og altid på en måde, der beskytter borgerens
                    rettigheder.
                  </p>
                  <p>
                    Vores medarbejdere er uddannet i at håndtere følsomme personoplysninger og forstår vigtigheden af at
                    opretholde fortrolighed. Vi har implementeret strenge procedurer for adgang til og deling af
                    dokumentation, og vi overholder alle relevante lovkrav, herunder GDPR og andre
                    databeskyttelsesregler.
                  </p>
                  <p>
                    Vi er også opmærksomme på, at dokumentation kan indeholde følsomme oplysninger, der kan påvirke
                    borgerens værdighed og selvopfattelse. Derfor er vi altid omhyggelige med at formulere vores
                    observationer og vurderinger på en respektfuld og objektiv måde, der fokuserer på adfærd og faktiske
                    hændelser frem for subjektive fortolkninger eller værdiladede udtryk.
                  </p>
                  <p>
                    Vores mål er at skabe en balance, hvor vi indsamler og bruger den nødvendige information til at yde
                    den bedst mulige støtte til borgeren, samtidig med at vi respekterer deres ret til privatliv og
                    fortrolighed. Dette er en central del af vores etiske tilgang til dokumentation og opfølgning.
                  </p>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
                  <div className="bg-slate-50 p-6 rounded-xl">
                    <div className="flex items-center mb-4">
                      <div className="bg-red-100 w-12 h-12 rounded-full flex items-center justify-center mr-4">
                        <FileText className="h-6 w-6 text-red-600" />
                      </div>
                      <h4 className="text-lg font-bold text-slate-800">Sikker opbevaring</h4>
                    </div>
                    <p className="text-slate-600">
                      Al dokumentation opbevares sikkert og i overensstemmelse med GDPR og andre relevante
                      databeskyttelsesregler. Vi har implementeret tekniske og organisatoriske foranstaltninger for at
                      beskytte personoplysninger mod uautoriseret adgang, tab eller misbrug. Dette omfatter sikre
                      IT-systemer, adgangskontrol og regelmæssig uddannelse af vores personale i databeskyttelse.
                    </p>
                  </div>
                  <div className="bg-slate-50 p-6 rounded-xl">
                    <div className="flex items-center mb-4">
                      <div className="bg-red-100 w-12 h-12 rounded-full flex items-center justify-center mr-4">
                        <RefreshCw className="h-6 w-6 text-red-600" />
                      </div>
                      <h4 className="text-lg font-bold text-slate-800">Kontinuerlig forbedring</h4>
                    </div>
                    <p className="text-slate-600">
                      Vi bruger dokumentationen til at evaluere og forbedre vores metoder og tilgange, så vi kan yde den
                      bedst mulige støtte. Dette omfatter regelmæssig gennemgang af vores dokumentationspraksis for at
                      sikre, at den er effektiv, relevant og i overensstemmelse med de nyeste faglige standarder. Vi er
                      altid åbne for feedback og nye ideer, der kan hjælpe os med at forbedre vores dokumentation og
                      opfølgning.
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
          <Image src="/tryghedspersonale-aeldre-stoette.jpeg" alt="Professionelt team" fill className="object-cover" />
        </div>
        <div className="absolute inset-0 bg-slate-900/70"></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Få professionel støtte til dokumentation</h2>
            <p className="text-xl text-white/80 mb-10 max-w-2xl mx-auto">
              Kontakt os i dag for at høre mere om, hvordan vores ekspertise inden for dokumentation kan hjælpe jeres
              institution og borgere.
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
                Udforsk vores andre specialiserede metoder, der komplementerer arbejdet med dokumentation.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              {/* Method 1 */}
              <Link href="/fremgangsmaader/arousal-regulering" className="group">
                <div className="bg-slate-50 rounded-xl overflow-hidden shadow-sm transition-all group-hover:shadow-md">
                  <div className="h-48 bg-slate-200 relative overflow-hidden">
                    <Image
                      src="/tryghedspersonale-park-samtale.jpeg"
                      alt="Arousal Regulering"
                      fill
                      className="object-cover transition-transform group-hover:scale-105"
                    />
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-bold text-slate-800 mb-2 group-hover:text-red-600 transition-colors">
                      Arousal Regulering
                    </h3>
                    <p className="text-slate-600 mb-4">
                      Lær om hvordan vi arbejder med at skabe balance mellem stimuli og ro for borgeren.
                    </p>
                    <div className="flex items-center text-red-600 font-medium">
                      Læs mere <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                    </div>
                  </div>
                </div>
              </Link>

              {/* Method 2 */}
              <Link href="/fremgangsmaader/skaermning" className="group">
                <div className="bg-slate-50 rounded-xl overflow-hidden shadow-sm transition-all group-hover:shadow-md">
                  <div className="h-48 bg-slate-200 relative overflow-hidden">
                    <Image
                      src="/tryghedspersonale-samtale-udendoers.jpeg"
                      alt="Skærmning"
                      fill
                      className="object-cover transition-transform group-hover:scale-105"
                    />
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-bold text-slate-800 mb-2 group-hover:text-red-600 transition-colors">
                      Skærmning
                    </h3>
                    <p className="text-slate-600 mb-4">
                      Udforsk hvordan vi bruger skærmning til at skabe trygge rammer og reducere overstimulering.
                    </p>
                    <div className="flex items-center text-red-600 font-medium">
                      Læs mere <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                    </div>
                  </div>
                </div>
              </Link>

              {/* Method 3 */}
              <Link href="/fremgangsmaader/afledningsteknikker-og-spejlning" className="group">
                <div className="bg-slate-50 rounded-xl overflow-hidden shadow-sm transition-all group-hover:shadow-md">
                  <div className="h-48 bg-slate-200 relative overflow-hidden">
                    <Image
                      src="/tryghedspersonale-natur.jpeg"
                      alt="Afledningsteknikker og Spejlning"
                      fill
                      className="object-cover transition-transform group-hover:scale-105"
                    />
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-bold text-slate-800 mb-2 group-hover:text-red-600 transition-colors">
                      Afledningsteknikker og Spejlning
                    </h3>
                    <p className="text-slate-600 mb-4">
                      Se hvordan vi bruger afledning og spejling til at skabe kontakt og forebygge konflikter.
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
