import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Privatlivspolitik | Tryghedspersonale.dk",
  description: "Læs om hvordan vi behandler dine personoplysninger hos Tryghedspersonale.dk",
}

export default function PrivatlivspolitikPage() {
  return (
    <main className="bg-white">
      <div className="bg-red-600 py-16 md:py-24">
        <div className="container mx-auto px-4">
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4">Privatlivspolitik</h1>
          <p className="text-white/90 text-lg max-w-3xl">
            Hos Tryghedspersonale.dk værner vi om dit privatliv. Her kan du læse om, hvordan vi behandler dine
            personoplysninger.
          </p>
        </div>
      </div>

      <div className="container mx-auto px-4 py-12 md:py-16">
        <div className="max-w-4xl mx-auto prose prose-lg">
          <h2>Dataansvarlig</h2>
          <p>
            Tryghedspersonale.dk er dataansvarlig for behandlingen af de personoplysninger, som vi har modtaget om dig.
            Du finder vores kontaktoplysninger nedenfor:
          </p>
          <p>
            <strong>Tryghedspersonale.dk</strong>
            <br />
            Telefon: 70 60 50 40
            <br />
            E-mail: kontakt@tryghedspersonale.dk
          </p>

          <h2>Formål med behandling af dine personoplysninger</h2>
          <p>Vi behandler dine personoplysninger til følgende formål:</p>
          <ul>
            <li>At besvare henvendelser fra dig</li>
            <li>At indgå og opfylde aftaler om vores services</li>
            <li>At administrere dit forhold til os</li>
            <li>At opfylde lovkrav</li>
            <li>At tilpasse og forbedre vores services</li>
          </ul>

          <h2>Kategorier af personoplysninger</h2>
          <p>Vi behandler følgende kategorier af personoplysninger om dig:</p>
          <h3>Almindelige personoplysninger:</h3>
          <ul>
            <li>Navn, adresse, e-mail, telefonnummer</li>
            <li>Oplysninger om din virksomhed/arbejdsplads</li>
            <li>Korrespondance med dig</li>
          </ul>

          <h3>Ved ansøgning om job eller vikarstilling:</h3>
          <ul>
            <li>CV, uddannelse, tidligere ansættelser</li>
            <li>Referencer</li>
            <li>Straffeattest (hvor relevant for stillingen)</li>
          </ul>

          <h2>Behandlingsgrundlag</h2>
          <p>Vi behandler dine personoplysninger på følgende grundlag:</p>
          <ul>
            <li>For at kunne opfylde en kontrakt med dig (persondataforordningens art. 6, stk. 1, litra b)</li>
            <li>For at overholde retlige forpligtelser (persondataforordningens art. 6, stk. 1, litra c)</li>
            <li>På baggrund af dit samtykke (persondataforordningens art. 6, stk. 1, litra a)</li>
            <li>
              På baggrund af vores legitime interesse i at udvikle og forbedre vores services (persondataforordningens
              art. 6, stk. 1, litra f)
            </li>
          </ul>

          <h2>Modtagere eller kategorier af modtagere</h2>
          <p>Vi videregiver eller overlader dine personoplysninger til følgende modtagere:</p>
          <ul>
            <li>
              Databehandlere, som vi samarbejder med for at støtte vores virksomhed (IT-leverandører, hosting-udbydere)
            </li>
            <li>Offentlige myndigheder, når vi er forpligtet hertil</li>
          </ul>

          <h2>Opbevaring af dine personoplysninger</h2>
          <p>Vi opbevarer dine personoplysninger i følgende perioder:</p>
          <ul>
            <li>
              Kundeoplysninger: Op til 5 år efter sidste kontakt af hensyn til vores legitime interesse i at kunne
              dokumentere vores forhold
            </li>
            <li>
              Jobansøgninger: Op til 6 måneder efter afsluttet rekrutteringsproces, medmindre du har givet samtykke til
              længere opbevaring
            </li>
            <li>Regnskabsmateriale: 5 år fra udgangen af det regnskabsår, materialet vedrører (bogføringsloven)</li>
          </ul>

          <h2>Dine rettigheder</h2>
          <p>
            Du har efter databeskyttelsesforordningen en række rettigheder i forhold til vores behandling af oplysninger
            om dig:
          </p>
          <ul>
            <li>
              <strong>Ret til at se oplysninger (indsigtsret):</strong> Du har ret til at få indsigt i de oplysninger,
              som vi behandler om dig.
            </li>
            <li>
              <strong>Ret til berigtigelse:</strong> Du har ret til at få urigtige oplysninger om dig selv rettet.
            </li>
            <li>
              <strong>Ret til sletning:</strong> I særlige tilfælde har du ret til at få slettet oplysninger om dig,
              inden tidspunktet for vores almindelige generelle sletning indtræffer.
            </li>
            <li>
              <strong>Ret til begrænsning af behandling:</strong> Du har i visse tilfælde ret til at få behandlingen af
              dine personoplysninger begrænset.
            </li>
            <li>
              <strong>Ret til indsigelse:</strong> Du har i visse tilfælde ret til at gøre indsigelse mod vores
              behandling af dine personoplysninger.
            </li>
            <li>
              <strong>Ret til at trække samtykke tilbage:</strong> Hvis du har givet samtykke til behandling af dine
              personoplysninger, har du ret til at trække dit samtykke tilbage.
            </li>
            <li>
              <strong>Ret til at klage til Datatilsynet:</strong> Du har ret til at klage til Datatilsynet, hvis du er
              utilfreds med den måde, vi behandler dine personoplysninger på.
            </li>
          </ul>

          <h2>Kontakt</h2>
          <p>
            Hvis du vil gøre brug af dine rettigheder eller har spørgsmål til vores behandling af dine
            personoplysninger, er du velkommen til at kontakte os på:
          </p>
          <p>
            E-mail: kontakt@tryghedspersonale.dk
            <br />
            Telefon: 70 60 50 40
          </p>

          <h2>Klage til Datatilsynet</h2>
          <p>
            Du har ret til at indgive en klage til Datatilsynet, hvis du er utilfreds med den måde, vi behandler dine
            personoplysninger på. Du finder Datatilsynets kontaktoplysninger på{" "}
            <a href="https://www.datatilsynet.dk" target="_blank" rel="noopener noreferrer">
              www.datatilsynet.dk
            </a>
            .
          </p>

          <h2>Ændringer i privatlivspolitikken</h2>
          <p>
            Vi forbeholder os ret til at ændre denne privatlivspolitik. Den aktuelle version vil altid være tilgængelig
            på vores hjemmeside. Ved væsentlige ændringer vil vi informere dig via e-mail eller på vores hjemmeside.
          </p>
          <p>Denne privatlivspolitik er senest opdateret den 20. maj 2025.</p>
        </div>
      </div>
    </main>
  )
}
