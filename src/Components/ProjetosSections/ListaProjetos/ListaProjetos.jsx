"use client"

export const ListaDosProjetos = [
  {
    "nome": "SW Edits",
    "imagem": "/TodosProjetos/swedits.png",
    "categoria": "Pessoal",
    "github": "https://github.com/Felipe-Belotto/SW-Edits",
    "deploy": "https://sw-edits.vercel.app/",
    "tecnologias": ["React", "Router Dom", "Material Ui"],
  },
  {
    "nome": "MKS Sitemas",
    "imagem": "/TodosProjetos/mksdesafio.png",
    "categoria": "Desafio",
    "github": "https://github.com/Felipe-Belotto/mks-frontend-challenge",
    "deploy": "https://mks-frontend-challenge-iota.vercel.app/",
    "tecnologias": ["Next Js", "Typescript", "Tailwind"],
  }
  ,
  {
    "nome": "To Do List",
    "imagem": "/PrincipaisProjetos/ToDoList.png",
    "categoria": "Pessoal",
    "github": "https://github.com/Felipe-Belotto/To-Do-List",
    "deploy": "https://fbelotto-to-do-list.vercel.app/",
    "tecnologias": ["React","Material Ui"],
  },
  {
    "nome": "Calculadora de documentação",
    "imagem": "/PrincipaisProjetos/Documentacao.png",
    "categoria": "Pessoal",
    "github": "https://github.com/Felipe-Belotto/DocumentacaoParaFinanciamento",
    "deploy": "https://documentacao-para-financiamento.vercel.app/",
    "tecnologias": ["Javascript"],
  },
  {
    "nome": "Cachorrinhos.com",
    "imagem": "/PrincipaisProjetos/Cachorrinhos.png",
    "categoria": "Pessoal",
    "github": "https://github.com/Felipe-Belotto/CachorrosPontoCom",
    "deploy": "https://cachorrinhos.vercel.app/",
    "tecnologias": ["Javascript"],
  },
  {
    "nome":"Meow Café",
    "imagem": "/TodosProjetos/meowcafe.png",
    "categoria": "Desafio",
    "github": "https://github.com/Felipe-Belotto/meow-cafe",
    "deploy": "https://meow-cafeteria.vercel.app/",
    "tecnologias": ["Vanilla"],
  }
  ,
  {
    "nome": "Alura Geek",
    "imagem": "/TodosProjetos/alurageek.png",
    "categoria": "Desafio",
    "github": "https://github.com/Felipe-Belotto/AluraGeek",
    "deploy": "https://alurageek-nu.vercel.app/",
    "tecnologias": ["Javascript", "MockAPI"],
  },
  {
    "nome":"Decodificador",
    "imagem": "/TodosProjetos/decodificadoralura.png",
    "categoria": "Desafio",
    "github": "https://github.com/Felipe-Belotto/Challenge-Decodificador",
    "deploy": "https://decodificador-alura.vercel.app/",
    "tecnologias": ["Javascript"],
  },
  {
    "nome": "Lista Paises",
    "imagem": "/TodosProjetos/listapaises.png",
    "categoria": "Desafio",
    "github": "https://github.com/Felipe-Belotto/Lista-De-Paises",
    "deploy": "https://felipebelotto-lista-de-paises.vercel.app/",
    "tecnologias": ["Next js", "Tailwind"],
  },
  {
    "nome":"Organizando Musicas",
    "imagem": "/TodosProjetos/organizandomusicas.png",
    "categoria": "Desafio",
    "github": "https://github.com/Felipe-Belotto/Organizando-Musicas",
    "deploy": "https://organizando-musicas.vercel.app/",
    "tecnologias": ["Javascript", "Tailwind"],
  },
  {
    "nome":"Frases Motivacionais",
    "imagem": "/TodosProjetos/frasesmotivacionais.png",
    "categoria": "Desafio",
    "github": "https://github.com/Felipe-Belotto/Frases-Motivacionais",
    "deploy": "https://frases-motivacionais.vercel.app/",
    "tecnologias": ["Next Js","Typescript", "Tailwind"],
  },
  {
    "nome":"Ficha cadastro",
    "imagem": "/TodosProjetos/fichacadastro.png",
    "categoria": "Pessoal",
    "github": "https://github.com/Felipe-Belotto/Ficha-Cadastro",
    "deploy": "https://fc-felipe.vercel.app/",
    "tecnologias": ["React-Js", "Material UI"],
  },
  {
    "nome":"Slaca 2019",
    "imagem": "/TodosProjetos/slaca.png",
    "categoria": "Desafio",
    "github": "https://github.com/Felipe-Belotto/Slaca-2019",
    "deploy": "https://felipebelotto-slaca2019.vercel.app/",
    "tecnologias": ["Angular","Sass"],
  },
  {
  "nome":"Calculadora de IMC",
  "imagem": "/TodosProjetos/calculadoraimc.png",
  "categoria": "Desafio",
  "github": "https://github.com/Felipe-Belotto/Calculadora-IMC",
  "deploy": "https://indice-massa-corporal-azure.vercel.app/",
  "tecnologias": ["React Js", "Tailwind", "Typescript"],
  },
  {
    "nome":"Quiz do Pedro",
    "imagem": "/TodosProjetos/quizdopedro.png",
    "categoria": "Pessoal",
    "github": "https://github.com/Felipe-Belotto/Quiz-Do-Pedro",
    "deploy": "https://quiz-pedro.vercel.app/",
    "tecnologias": ["Javascript"],
  },
  {
    "nome":"Portifolio",
    "imagem": "/TodosProjetos/portifolio.png",
    "categoria": "Pessoal",
    "github": "https://github.com/Felipe-Belotto/Portifolio",
    "deploy": "https://felipebelotto.vercel.app/",
    "tecnologias": ["Next Js"],
  }
]


import React from "react";
import CardProjeto from "./CardProjeto/CardProjeto";
import styles from "./ListaProjetos.module.css";
import ScrollToTop from "react-scroll-to-top";

export default function ListaProjetos() {
  const listaTodosProjetos = ListaDosProjetos
  return (
    <>    <ScrollToTop smooth height="20px" color="white" style={{background:"linear-gradient(117deg, #7e24ff80 20%, #ff80fd 60%, rgba(126, 36, 255, 0.5) 80%, #ff80fd 100%)", boxShadow:"none"}}/>
      <ul className={styles.projetos}>
        {listaTodosProjetos.map((projeto, index) => (
          <li key={index}>
            <CardProjeto
              nome={projeto.nome}
              imagem={projeto.imagem}
              categoria={projeto.categoria}
              github={projeto.github}
              deploy={projeto.deploy}
              tecnologias={projeto.tecnologias}
            />
          </li>
        ))}
      </ul>
      </>

  );
}