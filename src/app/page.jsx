import NavBar from "@/Components/NavBar/NavBar";
import styles from "./page.module.css";
import Apresentacao from "@/Components/HomeSections/Apresentacao/Apresentacao";
import SobreMim from "@/Components/HomeSections/SobreMim/SobreMim";
import Tecnologias from "@/Components/HomeSections/Tecnologias/Tecnologias";
import PrincipaisProjetos from "@/Components/HomeSections/PrincipaisProjetos/PrincipaisProjetos";

export default function Home() {
  return (
    <main className={styles.main}>
      <Apresentacao />
      <SobreMim />
      <Tecnologias />
      <PrincipaisProjetos />
    </main>
  );
}
