import React from 'react'

import styles from './Projeto.module.css'
import Link from 'next/link'

export default function Projeto(props) {
  return (
    <div className={styles.card}>
      <img src={props.imagem} alt={props.alt} />
      <div className={styles.conteudo}>
      <p className={styles.nome}>{props.nome}</p>
      <p className={styles.descricao}>{props.descricao}</p>
      <div className={styles.buttons__container}>
      <Link href={props.github} className={styles.card__button} target='_blank'>GitHub</Link>
      <Link href={props.deploy} className={styles.card__button} target='_blank'>Deploy</Link>
      </div>
      
      </div>
    </div>
  )
}