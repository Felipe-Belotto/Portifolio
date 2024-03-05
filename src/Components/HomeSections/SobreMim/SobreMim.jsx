'use client'
import React, { useEffect, useRef, useState } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import styles from './SobreMim.module.css';
import IconeContato from '@/Components/IconeContato/IconeContato';

export default function SobreMim() {
  const { ref, inView } = useInView({ threshold: 0 });
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    if (inView) {
      setIsVisible(true);
    }
  }, [inView]);

  return (
    <motion.section ref={ref}  animate={isVisible ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.5 }}
    initial={{ opacity: 0, scale: 0.5 }}
    transition={{ duration: 0.5 }} className={styles.sobreMim} style={{display: "flex", justifyContent: "center", alignItems: "center"}}>
      <div className={styles.container}>
        <div
          className={styles.conteudo}
        >
          <div className={styles.textos}>
            <h1>Felipe Belotto</h1>
            <h2>Front-End Developer</h2>
            <p>Tecnologia e design me movem! Sou um Desenvolvedor Front-End de Campinas que ama criar interfaces incríveis. Estudo Análise e Desenvolvimento de Sistemas e também design gráfico e motion design.</p>
          </div>

          <div className={styles.contatos}>
            <IconeContato redeSocial="instagram" link="https://api.whatsapp.com/send?phone=551993930323" />
            <IconeContato redeSocial="whatsapp" link="https://api.whatsapp.com/send?phone=551993930323" />
            <IconeContato redeSocial="github" link="https://api.whatsapp.com/send?phone=551993930323" />
            <IconeContato redeSocial="linkedin" link="https://api.whatsapp.com/send?phone=551993930323" />
          </div>

        </div>

        <img src="arte.gif" alt="arte" className={styles.arte}/>

      </div>
    </motion.section>
  );
}
