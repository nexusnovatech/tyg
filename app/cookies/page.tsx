import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Cookies | Tryghedspersonale.dk",
  description: "Information om vores brug af cookies på Tryghedspersonale.dk",
}

export default function CookiesPage() {
  return (
    <main className="bg-white">
      <div className="bg-red-600 py-16 md:py-24">
        <div className="container mx-auto px-4">
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4">Cookie Politik</h1>
          <p className="text-white/90 text-lg max-w-3xl">
            Her kan du læse om, hvordan Tryghedspersonale.dk anvender cookies og lignende teknologier på vores
            hjemmeside.
          </p>
        </div>
      </div>

      <div className="container mx-auto px-4 py-12 md:py-16">
        <div className="max-w-4xl mx-auto prose prose-lg">
          <h2>Hvad er cookies?</h2>
          <p>
            Cookies er små tekstfiler, der gemmes på din computer, tablet eller mobiltelefon, når du besøger en
            hjemmeside. Cookies hjælper os med at få hjemmesiden til at fungere, giver os information om, hvordan
            hjemmesiden bruges, og forbedrer din brugeroplevelse.
          </p>

          <h2>Typer af cookies vi bruger</h2>
          <p>På Tryghedspersonale.dk anvender vi følgende typer af cookies:</p>

          <h3>Nødvendige cookies</h3>
          <p>
            Disse cookies er nødvendige for, at hjemmesiden kan fungere korrekt. De gør det muligt for dig at navigere
            på hjemmesiden og bruge dens funktioner. Disse cookies kan ikke fravælges.
          </p>

          <h3>Funktionelle cookies</h3>
          <p>
            Disse cookies giver hjemmesiden mulighed for at huske valg, du har foretaget (f.eks. dit brugernavn, sprog
            eller den region, du befinder dig i) og giver forbedrede, mere personlige funktioner. Disse cookies kan også
            bruges til at huske ændringer, du har foretaget i tekststørrelse, skrifttyper og andre dele af websider, som
            du kan tilpasse.
          </p>

          <h3>Statistik cookies</h3>
          <p>
            Disse cookies hjælper os med at forstå, hvordan besøgende interagerer med hjemmesiden ved at indsamle og
            rapportere information anonymt. De hjælper os med at forbedre hjemmesidens funktionalitet.
          </p>

          <h3>Marketing cookies</h3>
          <p>
            Disse cookies bruges til at spore besøgende på tværs af hjemmesider. Hensigten er at vise annoncer, der er
            relevante og engagerende for den enkelte bruger og dermed mere værdifulde for udgivere og tredjeparts
            annoncører.
          </p>

          <h2>Tredjepartscookies</h2>
          <p>
            Vi bruger også tredjepartscookies fra betroede partnere. Følgende afsnit beskriver, hvilke
            tredjepartscookies du kan støde på gennem denne hjemmeside:
          </p>
          <ul>
            <li>
              <strong>Google Analytics:</strong> Vi bruger Google Analytics til at hjælpe os med at forstå, hvordan
              vores besøgende bruger hjemmesiden. Disse cookies kan spore ting som, hvor lang tid du bruger på
              hjemmesiden og de sider, du besøger, så vi kan fortsætte med at producere engagerende indhold.
            </li>
            <li>
              <strong>Google Maps:</strong> Vi bruger Google Maps til at vise vores lokationer. Google Maps kan sætte
              cookies for at huske dine præferencer og spore din adfærd på kortet.
            </li>
          </ul>

          <h2>Sådan administrerer du cookies</h2>
          <p>
            De fleste webbrowsere giver dig mulighed for at kontrollere cookies gennem browserindstillingerne. Du kan
            normalt finde disse indstillinger i "Indstillinger", "Præferencer" eller "Værktøjer" menuen i din browser.
            Du kan også konsultere din browsers "Hjælp" menu for mere information.
          </p>
          <p>
            Du kan til enhver tid trække dit samtykke tilbage eller ændre dine cookie-præferencer ved at klikke på
            "Cookie-indstillinger" i bunden af vores hjemmeside.
          </p>

          <h3>Sådan sletter du cookies</h3>
          <p>Du kan slette cookies, der allerede er gemt på din computer:</p>
          <ul>
            <li>
              <strong>I Chrome:</strong> Indstillinger → Avanceret → Privatlivs- og sikkerhedsindstillinger → Ryd
              browserdata
            </li>
            <li>
              <strong>I Firefox:</strong> Indstillinger → Privatliv og sikkerhed → Cookies og webstedsdata → Ryd data
            </li>
            <li>
              <strong>I Safari:</strong> Indstillinger → Privatliv → Administrer webstedsdata
            </li>
            <li>
              <strong>I Edge:</strong> Indstillinger → Privatliv, søgning og tjenester → Ryd browserdata
            </li>
          </ul>

          <h2>Konsekvenser ved at afvise cookies</h2>
          <p>
            Hvis du vælger at afvise cookies, kan du stadig bruge vores hjemmeside, men din adgang til nogle funktioner
            og områder af vores hjemmeside kan være begrænset.
          </p>

          <h2>Ændringer i cookie-politikken</h2>
          <p>
            Vi forbeholder os ret til at ændre denne cookie-politik. Alle ændringer vil blive offentliggjort på denne
            side. Vi anbefaler, at du regelmæssigt tjekker denne side for at holde dig opdateret om eventuelle
            ændringer.
          </p>

          <h2>Kontakt os</h2>
          <p>Hvis du har spørgsmål om vores brug af cookies, er du velkommen til at kontakte os:</p>
          <p>
            E-mail: kontakt@tryghedspersonale.dk
            <br />
            Telefon: 70 60 50 40
          </p>

          <p>Denne cookie-politik er senest opdateret den 20. maj 2025.</p>
        </div>
      </div>
    </main>
  )
}
