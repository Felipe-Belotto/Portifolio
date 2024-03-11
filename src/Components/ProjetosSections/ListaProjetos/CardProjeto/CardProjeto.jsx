
'use client'
import React, { useState } from 'react'
import styles from './CardProjeto.module.css'
import Link from 'next/link'

export default function CardProjeto(props) {
  const [corCategoria, setCorCategoria] = useState(props.categoria === "Desafio" ? "#0c1a2f" : "Purple")
  const todasTecnologias = props.tecnologias

  return (
    <div className={styles.card}>
      <img src={props.imagem} alt={"imagem do projeto" + props.nome} />
      <div className={styles.conteudo}>
        <div style={{display: "flex", justifyContent: "space-between", alignItems: "center", gap: "32px", height: "48px"}}>
      <h1 className={styles.nome}>{props.nome? props.nome : "Nome do projeto"}</h1>
      <p className={styles.categoria} style={{ backgroundColor: corCategoria}}>{props.categoria ? props.categoria : "Categoria"}</p>
        </div>
      <ul className={styles.tecnologias}>
          {todasTecnologias ? todasTecnologias.map((tecnologia, index) => (
            <li key={index}>{tecnologia}</li>
          )) : "Tecnologias"}
        </ul>
        <div className={styles.buttons__container}>
          <Link href={props.github} className={styles.card__button} target="_blank">
            GitHub
          </Link>
          <Link href={props.deploy} className={styles.card__button} target="_blank">
            Deploy
          </Link>

        </div>
        </div>
    </div>
  )
}
