import NavBar from "@/Components/NavBar/NavBar";
import styles from "./page.module.css";
import Apresentacao from "@/Components/HomeSections/Apresentacao/Apresentacao";
import SobreMim from "@/Components/HomeSections/SobreMim/SobreMim";
import Tecnologias from "@/Components/HomeSections/Tecnologias/Tecnologias";

export default function Home() {
  return (
    <main className={styles.main}>
      <Apresentacao />
      <SobreMim />
      <Tecnologias />
    </main>
  );
}
