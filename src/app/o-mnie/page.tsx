import type { Metadata } from "next";
import styles from "../page.module.css";
import HomepageTop from "../_components/homepage-top";
import SectionWithHeading from "../_components/section-with-heading";
import SectionSeparator from "../_components/section-separator";

export const metadata: Metadata = {
  title: "O mnie | BG",
  description: "O mnie",
};

export default function page() {
  return (
    <main className={styles.main}>
      <section className={styles.section}>
        <HomepageTop
          content="Moja kariera zawodowa dynamicznie rozwinęła się od stanowiska asystenta prawnego do obecnych ról adwokata i prawnika na Uniwersytecie SWPS. Prowadzę także własną działalność gospodarczą w kancelarii adwokackiej, gdzie kompleksowo obsługuję uczelnie, przedsiębiorstwa, start-upy oraz klientów indywidualnych. Moje zaangażowanie zostało docenione między innymi poprzez Medal Uniwersytetu SWPS oraz liczne nagrody, w tym nagrodę Dyrektor Generalnej Uniwersytetu SWPS.
          W wolnych chwilach oddaję się pasji malowania, uprawiam sport oraz korzystam z uroków natury. Staram się zachowywać równowagę między życiem zawodowym a prywatnym."
          page="about"
        />
      </section>
      <SectionSeparator />
      <SectionWithHeading
        heading="Specjalizacje"
        contentLeft="
           Jestem specjalistką w zakresie prawa administracyjnego i sądowoadministracyjnego. Moje doświadczenie obejmuje szerokie spektrum spraw, od kwestii pracowniczych i gospodarczych, po unikalne wyzwania związane ze środowiskiem akademickim i biznesowym, co pozwala mi na efektywne wspieranie różnorodnych podmiotów.
           Jestem wiceprzewodniczącą Sekcji Prawa Administracyjnego i Sądowo-Administracyjnego przy Okręgowej Radzie Adwokackiej. Moją pasję do przekazywania wiedzy przekuwam w prowadzenie szkoleń, zaś w czasach studenckich aktywnie uczestniczyłam w Studenckiej Poradni Prawnej i Kole Naukowym Komparatystyki Prawniczej. 
           "
        contentRight=""
        buttonText="Współpraca"
        buttonRel="wspolpraca/konsultacje"
      />
      <SectionSeparator />
    </main>
  );
}
