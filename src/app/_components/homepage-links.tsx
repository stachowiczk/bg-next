import styles from "./components.module.css";
import pageStyles from "../page.module.css";
import { HomepageLink } from "./homepage-link";

export function HomepageLinks() {
  return (
    <div>
      <div className={pageStyles.container__title}>
        <div className={pageStyles.homepage__hero__title}>Współpraca</div>
      </div>
      <div className={styles.links__container}>
        <ul className={styles.links}>
          <HomepageLink content="konsultacje" col="left" />
          <HomepageLink content="sprawy" col="right" />
          <HomepageLink content="opinie-i-ekspertyzy" col="left" />
          <HomepageLink content="szkolenia" col="right" />
          <HomepageLink content="regulacje-wewnetrzne" col="left" />
        </ul>
      </div>
    </div>
  );
}
