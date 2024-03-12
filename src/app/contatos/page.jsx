
import InputForm from "@/Components/ComponentesContato/InputForm/InputForm";
import styles from "./page.module.css";
import { Metadata } from 'next'
import Contato from "@/Components/Contato/Contato";
import IconeContato from "@/Components/IconeContato/IconeContato";
 
export const metadata = {
  title: 'Contatos | Portifólio',
  description: 'Página de contatos do portifólio',
}

export default function Contatos() {

  return (
    <main className={styles.main}>
       <Contato/>

       <div className={styles.contatos}>
            <IconeContato redeSocial="instagram" link="https://www.instagram.com/belottofelipe/" />
            <IconeContato redeSocial="whatsapp" link="https://api.whatsapp.com/send?phone=551993930323" />
            <IconeContato redeSocial="github" link="https://github.com/Felipe-Belotto" />
            <IconeContato redeSocial="linkedin" link="https://www.linkedin.com/in/felipe-belotto-a34738185/" />
      </div>
    </main>
   

      
  );
}
