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
          content="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Habitant
            morbi tristique senectus et netus et malesuada fames. Tempor orci
            dapibus ultrices in iaculis nunc sed. Integer vitae justo eget magna
            fermentum iaculis eu non diam. Posuere sollicitudin aliquam ultrices
            sagittis. Blandit volutpat maecenas volutpat blandit aliquam etiam
            erat velit. Pellentesque habitant morbi tristique senectus et netus.
            In cursus turpis massa tincidunt dui ut ornare lectus. Ullamcorper
            sit amet risus nullam eget. Sed odio morbi quis commodo odio aenean
            sed adipiscing." page="about"
        />
      </section>
      <SectionSeparator />
      <SectionWithHeading
        heading="Obszary"
        contentLeft="
           Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Habitant
            morbi tristique senectus et netus et malesuada fames. Tempor orci
            dapibus ultrices in iaculis nunc sed. Integer vitae justo eget magna
            fermentum iaculis eu non diam. Posuere sollicitudin aliquam ultrices
            sagittis. Blandit volutpat maecenas volutpat blandit aliquam etiam
            erat velit. Pellentesque habitant morbi tristique senectus et netus.
            In cursus turpis massa tincidunt dui ut ornare lectus. Ullamcorper
            sit amet risus nullam eget. Sed odio morbi quis commodo odio aenean
            sed adipiscing. "
        contentRight=""
        buttonText="Współpraca"
        buttonRel="wspolpraca/konsultacje"
      />
      <SectionSeparator />
    </main>
  );
}
