
import CardProjeto from "@/Components/ProjetosSections/ListaProjetos/CardProjeto/CardProjeto";
import styles from "./page.module.css";

import { Metadata } from 'next'
import ListaProjetos from "@/Components/ProjetosSections/ListaProjetos/ListaProjetos";
 
export const metadata = {
  title: 'PaginaNova - Portifólio',
  description: '...',
}


export default function Projetos() {
  return (
    <main>
      <ListaProjetos/>
    </main>
  );
}
