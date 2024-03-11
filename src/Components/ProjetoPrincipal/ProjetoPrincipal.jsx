import React from 'react';
import styles from './ProjetoPrincipal.module.css';
import Link from 'next/link';

export default function ProjetoPrincipal(props) {
  const todasTecnologias = props.tecnologias
  /* alert(typeof(todasTecnologias)) */


  return (
    <div className={styles.card}>
      <img src={props.imagem} alt={props.alt} />
      <div className={styles.conteudo}>
        <p className={styles.nome}>{props.nome}</p>
        <p className={styles.descricao}>{props.descricao}</p>
        <ul className={styles.tecnologias}>
          {todasTecnologias.map((tecnologia, index) => (
            <li key={index}>{tecnologia}</li>
          ))}
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
    
  );
}