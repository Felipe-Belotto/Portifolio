'use client'
import React, { useEffect, useRef, useState } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';


import styles from './PrincipaisProjetos.module.css'
import TituloSection from '@/Components/TituloSection/TituloSection'
import Projeto from '@/Components/Projeto/Projeto'
import Link from 'next/link'

export const ListaProjetosPrincipais = [
  {
    "nome": "SW Edits",
    "imagem": "/PrincipaisProjetos/SWEdits.png",
    "descricao": "Site que simula um streaming de vídeos de cortes do universo de Star Wars.",
    "github": "https://github.com/Felipe-Belotto/SW-Edits",
    "deploy": "https://sw-edits.vercel.app/"
  },
  {
    "nome": "To Do List",
    "imagem": "/PrincipaisProjetos/ToDoList.png",
    "descricao": "Lista de tarefas com opção de criar vários blocos e movê-los.",
    "github": "https://github.com/Felipe-Belotto/To-Do-List",
    "deploy": "https://fbelotto-to-do-list.vercel.app/"
  },
  {
    "nome": "Calculadora de documentação",
    "imagem": "/PrincipaisProjetos/Documentacao.png",
    "descricao": "Projeto em JavaScript vanilla para calcular documentação de financiamento (meu primeiro projeto).",
    "github": "https://github.com/Felipe-Belotto/DocumentacaoParaFinanciamento",
    "deploy": "https://documentacao-para-financiamento.vercel.app/"
  },
  {
    "nome": "Cachorrinhos.com",
    "imagem": "/PrincipaisProjetos/Cachorrinhos.png",
    "descricao": "Site que exibe as raças mais conhecidas a partir do continente escolhido. Também é possível visualizar o perfil da raça.",
    "github": "https://github.com/Felipe-Belotto/CachorrosPontoCom",
    "deploy": "https://cachorrinhos.vercel.app/"
  }
]

export default function PrincipaisProjetos() {

  const [projetos, setProjetos] = useState(ListaProjetosPrincipais);
  const { ref, inView } = useInView({ threshold: 0 });
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    if (inView) {
      setIsVisible(true);
    }
  }, [inView]);

  return (
    <motion.div ref={ref} 
     className={styles.container}>
    <TituloSection texto="Projetos" />
    
    <div className={styles.projetos}>
    {projetos.map((projeto, index) => (
     <Projeto
        key={index}
        nome={projeto.nome}
        descricao={projeto.descricao}
        imagem={projeto.imagem}
        alt={projeto.nome}
        github={projeto.github}
        deploy={projeto.deploy}
      />
    ))}
    </div>
    <Link href={"/projetos"} className={styles.buttonTodosProjetos}>Ver mais</Link>
  </motion.div>
  )
}
