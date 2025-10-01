import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Vilkår | Tryghedspersonale.dk",
  description: "Læs om vores forretningsbetingelser og vilkår for brug af Tryghedspersonale.dk's tjenester",
}

export default function VilkaarPage() {
  return (
    <main className="bg-white">
      <div className="bg-red-600 py-16 md:py-24">
        <div className="container mx-auto px-4">
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4">Forretningsbetingelser</h1>
          <p className="text-white/90 text-lg max-w-3xl">
            Her finder du vores generelle vilkår og betingelser for samarbejde med Tryghedspersonale.dk
          </p>
        </div>
      </div>

      <div className="container mx-auto px-4 py-12 md:py-16">
        <div className="max-w-4xl mx-auto prose prose-lg">
          <h2>1. Generelt</h2>
          <p>
            Disse forretningsbetingelser gælder for alle aftaler om levering af ydelser fra Tryghedspersonale.dk
            (herefter "Leverandøren") til kunden (herefter "Kunden"), medmindre andet er skriftligt aftalt mellem
            parterne.
          </p>

          <h2>2. Ydelser</h2>
          <p>
            Leverandøren leverer specialiseret bemanding og fastvagt til plejehjem, bosteder, psykiatriske afdelinger og
            institutioner i hele Danmark. Ydelserne omfatter, men er ikke begrænset til:
          </p>
          <ul>
            <li>Fastvagt til plejehjem</li>
            <li>Fastvagt til bosted</li>
            <li>Fastvagt til asylcentre</li>
            <li>Bemanding til psykiatrien</li>
            <li>Tryghedsmedarbejdere</li>
            <li>Konflikthåndtering</li>
            <li>Enkeltmandstilbud</li>
          </ul>
          <p>
            Ydelsernes nærmere indhold og omfang aftales specifikt mellem Leverandøren og Kunden i en særskilt aftale.
          </p>

          <h2>3. Aftalens indgåelse</h2>
          <p>
            En aftale anses for indgået, når Kunden har accepteret et tilbud fra Leverandøren, eller når Leverandøren
            har bekræftet en ordre fra Kunden. Tilbud fra Leverandøren er gældende i 30 dage fra tilbudsdatoen,
            medmindre andet er angivet i tilbuddet.
          </p>

          <h2>4. Priser og betalingsbetingelser</h2>
          <p>
            Alle priser er angivet i danske kroner (DKK) ekskl. moms, medmindre andet er angivet. Leverandøren
            forbeholder sig ret til at ændre priserne med 30 dages varsel.
          </p>
          <p>
            Betalingsbetingelserne er 14 dage netto fra fakturadato, medmindre andet er aftalt. Ved forsinket betaling
            beregnes rente i henhold til renteloven.
          </p>
          <p>
            Fakturering sker efter aftale, typisk ugentligt eller månedligt, baseret på det faktiske timeforbrug eller
            efter fast aftale.
          </p>

          <h2>5. Leverandørens forpligtelser</h2>
          <p>Leverandøren forpligter sig til at:</p>
          <ul>
            <li>
              Levere de aftalte ydelser med faglig kompetence og i overensstemmelse med god skik inden for branchen
            </li>
            <li>Sikre at personalet har de nødvendige kvalifikationer og kompetencer til at udføre opgaverne</li>
            <li>Overholde gældende lovgivning, herunder arbejdsmiljølovgivning</li>
            <li>Sørge for, at personalet er dækket af lovpligtige forsikringer</li>
            <li>Behandle alle oplysninger om Kunden og dennes borgere/beboere fortroligt</li>
          </ul>

          <h2>6. Kundens forpligtelser</h2>
          <p>Kunden forpligter sig til at:</p>
          <ul>
            <li>Give Leverandøren de nødvendige informationer til opgavens udførelse</li>
            <li>Sikre et forsvarligt arbejdsmiljø for Leverandørens personale</li>
            <li>Informere Leverandøren om særlige risici eller forhold, der kan påvirke opgavens udførelse</li>
            <li>Betale fakturaer rettidigt</li>
          </ul>

          <h2>7. Afbestilling og ændringer</h2>
          <p>
            Afbestilling eller ændring af aftalte ydelser skal ske skriftligt til Leverandøren. Ved afbestilling gælder
            følgende frister:
          </p>
          <ul>
            <li>Mere end 48 timer før planlagt start: Ingen betaling</li>
            <li>24-48 timer før planlagt start: 50% af aftalt pris</li>
            <li>Mindre end 24 timer før planlagt start: 100% af aftalt pris</li>
          </ul>

          <h2>8. Ansvar og forsikring</h2>
          <p>
            Leverandøren er ansvarlig for skader, som Leverandørens personale forvolder ved uagtsomhed under udførelsen
            af opgaven. Leverandøren har tegnet erhvervsansvarsforsikring, der dækker sådanne skader.
          </p>
          <p>
            Leverandøren er ikke ansvarlig for indirekte tab, herunder driftstab, avancetab, tab af data eller andre
            følgeskader.
          </p>
          <p>
            Leverandørens ansvar er begrænset til det beløb, Kunden har betalt for den ydelse, der har givet anledning
            til kravet, dog maksimalt DKK 1.000.000.
          </p>

          <h2>9. Force majeure</h2>
          <p>
            Leverandøren er ikke ansvarlig for manglende opfyldelse af sine forpligtelser, hvis dette skyldes forhold,
            som Leverandøren ikke er herre over, herunder, men ikke begrænset til, strejke, lockout, naturkatastrofer,
            krig, terrorhandlinger, epidemier, pandemier eller lignende.
          </p>

          <h2>10. Tavshedspligt og persondata</h2>
          <p>
            Leverandøren og dennes personale er underlagt tavshedspligt vedrørende alle forhold om Kunden og dennes
            borgere/beboere, som de får kendskab til i forbindelse med opgavens udførelse.
          </p>
          <p>
            Behandling af personoplysninger sker i overensstemmelse med gældende databeskyttelseslovgivning og
            Leverandørens privatlivspolitik, som findes på hjemmesiden.
          </p>

          <h2>11. Misligholdelse</h2>
          <p>
            Ved væsentlig misligholdelse af aftalen kan den ikke-misligholdende part ophæve aftalen med øjeblikkelig
            virkning. Som væsentlig misligholdelse anses blandt andet:
          </p>
          <ul>
            <li>Gentagne forsinkelser eller mangler ved ydelsen</li>
            <li>Manglende betaling efter påkrav</li>
            <li>Brud på tavshedspligten</li>
          </ul>

          <h2>12. Tvister</h2>
          <p>
            Eventuelle tvister mellem parterne skal søges løst ved forhandling. Hvis dette ikke er muligt, afgøres
            tvisten ved de almindelige danske domstole med Leverandørens hjemting som værneting.
          </p>

          <h2>13. Ændring af forretningsbetingelser</h2>
          <p>
            Leverandøren forbeholder sig ret til at ændre disse forretningsbetingelser. Ændringer vil blive meddelt
            Kunden med mindst 30 dages varsel. Ved væsentlige ændringer har Kunden ret til at opsige aftalen med 14
            dages varsel.
          </p>

          <h2>14. Kontakt</h2>
          <p>Hvis du har spørgsmål til vores forretningsbetingelser, er du velkommen til at kontakte os:</p>
          <p>
            E-mail: kontakt@tryghedspersonale.dk
            <br />
            Telefon: 70 60 50 40
          </p>

          <p>Disse forretningsbetingelser er senest opdateret den 20. maj 2025.</p>
        </div>
      </div>
    </main>
  )
}
