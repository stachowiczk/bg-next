import styles from "./page.module.css";
import { Suspense } from "react";
import Head from "next/head";
import { HomepageLinks } from "./_components/homepage-links";
import { Button } from "./_components/button";
import HomepageTop from "./_components/homepage-top";
import SectionWithHeading from "./_components/section-with-heading";
import SectionWithLinks from "./_components/section-with-links";
import { getAllContents } from "./lib/api";
import HomepageBlogPreview from "./_components/homepage-blog-preview";

export default function Home() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <meta name="description" content="Zapraszam do kontaktu mailowego lub telefonicznego:" />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Organization",
            name: "Kancelaria Adwokacka Adwokat Beata Gruza",
            url: "https://www.beatagruza-kancelaria.pl",
            image: "https://www.beatagruza-kancelaria.pl/logo_adw.jpg",
            contactPoint: {
              "@type": "ContactPoint",
              telephone: "+48 604 912 096",
              email: "beata.gruza@adwokatura.pl",
              contactType: "Kontakt telefoniczny",
            },
          }),
        }}
      />
      <section className={styles.section}>
        <HomepageTop
          content="Jako adwokatka z pasją i doświadczeniem, swoją drogę do zawodu zawdzięczam wielu latom 
          nauki, praktyki i zaangażowania.

Zrzeszona w Warszawskiej Izbie Adwokackiej, rozpoczęłam aplikację adwokacką w 2018 roku, a zawód adwokata 
wykonuję od 2021 roku. Ukończyłam prawo na SWPS Uniwersytecie Humanistycznospołecznym (Uniwersytecie SWPS) oraz studiowałam
 administrację i ekonomię na Uniwersytecie Kardynała Stefana Wyszyńskiego.
<br/><br/>
Do każdego klienta i sprawy podchodzę z indywidualnym zaangażowaniem. Przyjazne nastawienie, dokładna 
analiza oraz informowanie o ryzykach to podstawa mojej pracy.
<br/><br/>
 Wierzę, że prawo jest sztuką sprawiedliwości."
          page="home"
        />
      </section>
      <section className={styles.section} style={{}}>
        <HomepageLinks />
        <Button text="Więcej" rel="wspolpraca/konsultacje" />
        <div style={{ height: "5rem" }}> </div>
      </section>
      <SectionWithHeading
        heading=" ,,Prawo to pasja, która prowadzi do doskonałości w każdej sprawie”"
        contentLeft="Moja kancelaria oferuje kompleksową obsługę prawną, która obejmuje 
        zarówno jednorazowe konsultacje, jak i długoterminową współpracę. Specjalizuję się w różnorodnych
         dziedzinach prawa, w tym w prawie administracyjnym, pracowniczym i gospodarczym, co pozwala 
         mi skutecznie doradzać przedsiębiorstwom, uczelniom oraz klientom indywidualnym.

Moje usługi obejmują profesjonalne konsultacje prawne, szkolenia dla firm i organizacji, a także 
przygotowywanie fachowych opinii i ekspertyz. Gwarantuję szybkie reagowanie na potrzeby klientów oraz 
indywidualne podejście do każdej sprawy, niezależnie od jej złożoności.
"
        contentRight="W ramach współpracy zapewniam bieżące doradztwo prawne, weryfikację i przygotowywanie
         dokumentacji, a także reprezentację przed sądami i organami administracji. Ponadto, zajmuję się
          tworzeniem i aktualizacją regulaminów oraz procedur wewnętrznych, dbając o zgodność z 
          obowiązującymi przepisami prawnymi. W zakresie spraw wymagających specjalistycznej wiedzy 
          wykraczającej poza moje umiejętności, współpracuję z najlepszymi ekspertami i ekspertkami.

Mój priorytet to zapewnienie bezpieczeństwa prawnego i spokoju ducha moim klientom. 
Dlatego w każdym przypadku staram się dostosować zakres usług do specyficznych potrzeb klienta, 
gwarantując profesjonalizm, skuteczność i pełne zaangażowanie.
"
        buttonText="Więcej"
        buttonRel="o-mnie"
      />
      <HomepageBlogPreview />
      <SectionWithLinks
        title="Kontakt"
        links={[
          { text: "beata.gruza@adwokatura.pl", icon: "/email.svg" },
          { text: "(+48) 604 912 096", icon: "/phone.svg" },
        ]}
      />
    </Suspense>
  );
}
