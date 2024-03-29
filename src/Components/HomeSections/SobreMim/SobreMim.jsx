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
    <motion.section ref={ref}  
     className={styles.sobreMim} style={{display: "flex", justifyContent: "center", alignItems: "center"}}>
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
            <IconeContato redeSocial="instagram" link="https://www.instagram.com/belottofelipe/" />
            <IconeContato redeSocial="whatsapp" link="https://api.whatsapp.com/send?phone=551993930323" />
            <IconeContato redeSocial="github" link="https://github.com/Felipe-Belotto" />
            <IconeContato redeSocial="linkedin" link="https://www.linkedin.com/in/felipe-belotto-a34738185/" />
          </div>

        </div>

        <img src="arte.gif" alt="arte" className={styles.arte}/>

      </div>
    </motion.section>
  );
}
