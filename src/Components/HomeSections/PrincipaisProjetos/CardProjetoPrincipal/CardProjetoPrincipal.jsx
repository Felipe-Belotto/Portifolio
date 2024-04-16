import React, { useEffect, useState } from 'react';
import styles from './CardProjetoPrincipal.module.css';
import Link from 'next/link';
import { motion } from 'framer-motion';

export default function CardProjetoPrincipal(props) {
  const todasTecnologias = props.tecnologias
  /* alert(typeof(todasTecnologias)) */

  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    if (props.view) {
      setIsVisible(true);
    }
  }, [props.view]);

  const containerVariants = {
    visible: { opacity: 1, y: 0, transition: { duration: 1.5 } },
    hidden: { opacity: 0, y: 50 },
  };

  return (

    <motion.div
    variants={containerVariants}
    initial="hidden"
    animate={isVisible ? "visible" : "hidden"}
    className={styles.card}>
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
    </motion.div>
  );
}