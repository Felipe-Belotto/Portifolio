'use client'
import React, { useEffect, useRef, useState } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

import styles from './PrincipaisProjetos.module.css'
import TituloSection from '@/Components/TituloSection/TituloSection'
import Link from 'next/link'
import CardProjetoPrincipal from './CardProjetoPrincipal/CardProjetoPrincipal';

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
    "nome": "Ficha cadastro",
    "imagem": "/PrincipaisProjetos/FichaCadastro.png",
    "descricao": "Criação de uma aplicação simples para cadastrar informações de clientes de uma imobiliaria e devolver um ficha completa em PDF.",
    "github": "https://github.com/Felipe-Belotto/ficha-cadastro",
    "deploy": "https://fc-felipe.vercel.app/",
    "tecnologias": ["React","Material UI", "API CEP", "API CNPJ"],
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
     <CardProjetoPrincipal
        key={index}
        nome={projeto.nome}
        descricao={projeto.descricao}
        imagem={projeto.imagem}
        alt={projeto.nome}
        github={projeto.github}
        deploy={projeto.deploy}
        tecnologias={projeto.tecnologias}
        view={isVisible}
      />
    ))}
    </div>
    <Link href={"/projetos"} className={styles.buttonTodosProjetos}>Todos os projetos</Link>
  </motion.div>
  )
}
