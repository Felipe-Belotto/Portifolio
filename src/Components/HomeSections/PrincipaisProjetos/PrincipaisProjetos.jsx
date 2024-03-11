'use client'
import React, { useEffect, useRef, useState } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

import styles from './PrincipaisProjetos.module.css'
import TituloSection from '@/Components/TituloSection/TituloSection'
import Link from 'next/link'
import ProjetoPrincipal from '@/components/ProjetoPrincipal/ProjetoPrincipal';

export const ListaProjetosPrincipais = [
  {
    "nome": "SW Edits",
    "imagem": "/PrincipaisProjetos/SWEdits.png",
    "descricao": "Mergulhe na saga Star Wars como nunca antes! O SW Edits é uma plataforma inovadora que simula um serviço de streaming, mas com foco em cortes e edits incríveis do universo criado por George Lucas. Reviva momentos épicos, explore cenas de diferentes perspectivas e descubra a criatividade da comunidade Star Wars.",
    "github": "https://github.com/Felipe-Belotto/SW-Edits",
    "deploy": "https://sw-edits.vercel.app/",
    "tecnologias": ["React", "Router Dom", "Material Ui"],
  },
  {
    "nome": "To Do List",
    "imagem": "/PrincipaisProjetos/ToDoList.png",
    "descricao": "Organize sua vida com estilo! A To Do List é uma aplicação completa que te ajuda a gerenciar suas tarefas de forma eficiente e intuitiva. Crie listas personalizadas, defina prazos e prioridades, organize seus blocos de tarefas e acompanhe seu progresso com facilidade.",
    "github": "https://github.com/Felipe-Belotto/To-Do-List",
    "deploy": "https://fbelotto-to-do-list.vercel.app/",
    "tecnologias": ["React","Material Ui"],
  },
  {
    "nome": "Calculadora de documentação",
    "imagem": "/PrincipaisProjetos/Documentacao.png",
    "descricao": "Simplifique o processo de financiamento! A Calculadora de Documentação é uma ferramenta gratuita que te ajuda a calcular os valores de financiamento de forma rápida e precisa. Insira as informações do seu contrato e obtenha resultados instantâneos, facilitando a tomada de decisões.",
    "github": "https://github.com/Felipe-Belotto/DocumentacaoParaFinanciamento",
    "deploy": "https://documentacao-para-financiamento.vercel.app/",
    "tecnologias": ["Javascript"],
  },
  {
    "nome": "Cachorrinhos.com",
    "imagem": "/PrincipaisProjetos/Cachorrinhos.png",
    "descricao": "Descubra o mundo dos cachorros! O Cachorrinhos.com é um site completo que te ajuda a conhecer as raças mais populares do mundo. Explore por continente, visualize fotos e informações detalhadas, e encontre o companheiro ideal para você.",
    "github": "https://github.com/Felipe-Belotto/CachorrosPontoCom",
    "deploy": "https://cachorrinhos.vercel.app/",
    "tecnologias": ["Javascript"],
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
     <ProjetoPrincipal
        key={index}
        nome={projeto.nome}
        descricao={projeto.descricao}
        imagem={projeto.imagem}
        alt={projeto.nome}
        github={projeto.github}
        deploy={projeto.deploy}
        tecnologias={projeto.tecnologias}
      />
    ))}
    </div>
    <Link href={"/projetos"} className={styles.buttonTodosProjetos}>Ver mais</Link>
  </motion.div>
  )
}
