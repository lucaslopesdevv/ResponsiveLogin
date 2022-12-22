import { Header } from "../../components/Header/Header";

import styles from "./Home.module.css";
import logoCrediceripa from "../../assets/logo-Crediceripa.svg";

export function Home() {
  return (
    <div className={styles.homeMain}>
      <Header />
      <div className={styles.homePainel}>
        <header>Portal do chamado</header>
        <div className={styles.homePainelItems}></div>
      </div>
      <footer></footer>
    </div>
  );
}
