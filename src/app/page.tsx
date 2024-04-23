import Image from "next/image";
import styles from "./page.module.css";
import React, { Suspense } from "react";
import { HomepageLinks } from "./_components/homepage-links";
import { Button } from "./_components/button";
import HomepageTop from "./_components/homepage-top";
import SectionWithHeading from "./_components/section-with-heading";
import SectionSeparator from "./_components/section-separator";

export default function Home() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
        <section className={styles.section}>
          <HomepageTop
            content="Jestem adwokatką zrzeszoną w Warszawskiej Izbie Adwokackiej, a moja aplikacja adwokacka rozpoczęła się w 2018 roku. 
            Jestem absolwentką Prawa na SWPS Uniwersytecie Humanistycznospołecznym (Uniwersytecie SWPS) oraz studiowałam Administrację i
            Ekonomię na Uniwersytecie Kardynała Stefana Wyszyńskiego.<br/><br/>
            <p>Do każdego klienta i sprawy podchodzę z indywidualnym zaangażowaniem. 
            Przyjazne nastawienie, dokładna analiza oraz informowanie o ryzykach to podstawa mojej pracy. Wierzę, że prawo jest sztuką sprawiedliwości. </p>"
            page="home"
          />
        </section>
        <section className={styles.section} style={{}}>
          <HomepageLinks />
          <Button text="Więcej" rel="wspolpraca/konsultacje" />
          <div style={{ height: "5rem" }}> </div>
        </section>
        <SectionWithHeading
          heading="Doświadczenie"
          contentLeft="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Habitant
            morbi tristique senectus et netus et malesuada fames. Tempor orci
            dapibus ultrices in iaculis nunc sed. Integer vitae justo eget magna
            fermentum iaculis eu non diam. Posuere sollicitudin aliquam ultrices
            sagittis. Blandit volutpat maecenas volutpat blandit aliquam etiam
            erat velit. Pellentesque habitant morbi tristique senectus et netus.
            In cursus turpis massa tincidunt dui ut ornare lectus. Ullamcorper
            sit amet risus nullam eget. Sed odio morbi quis commodo odio aenean
            sed adipiscing."
          contentRight="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Habitant
            morbi tristique senectus et netus et malesuada fames. Tempor orci
            dapibus ultrices in iaculis nunc sed. Integer vitae justo eget magna
            fermentum iaculis eu non diam. Posuere sollicitudin aliquam ultrices
            sagittis. Blandit volutpat maecenas volutpat blandit aliquam etiam
            erat velit. Pellentesque habitant morbi tristique senectus et netus.
            In cursus turpis massa tincidunt dui ut ornare lectus. Ullamcorper
            sit amet risus nullam eget. Sed odio morbi quis commodo odio aenean
            sed adipiscing."
          buttonText="Więcej"
          buttonRel="o-mnie"
        />
    </Suspense>
  );
}
