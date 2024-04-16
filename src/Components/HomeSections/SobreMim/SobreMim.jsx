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

  const containerVariants = {
    visible: { opacity: 1, scale: 1, transition: { duration: 0.5 } },
    hidden: { opacity: 0, scale: 0.9 }
  };

  const textVariants = {
    visible: { opacity: 1, y: 0, transition: { duration: 1 }},
    hidden: { opacity: 0, y: 50 }
  };

  const imgVariants = {
    visible: { opacity: 1, scale: 1, transition: { duration: 0.5 }},
    hidden: { opacity: 0, scale: 0.8 }
  };

  return (
    <motion.section ref={ref}
     variants={containerVariants}
     initial="hidden"
     animate={isVisible ? "visible" : "hidden"}
     className={styles.sobreMim} style={{display: "flex", justifyContent: "center", alignItems: "center"}}>
      <div className={styles.container}>
        <div
          className={styles.conteudo}
        >
          <div className={styles.textos}>
            <motion.h1 variants={textVariants}
             initial="hidden"
             animate={isVisible ? "visible" : "hidden"}
            >Felipe Belotto</motion.h1>
            <motion.h2
            variants={textVariants}
            initial="hidden"
            animate={isVisible ? "visible" : "hidden"}
            >Front-End Developer</motion.h2>
            <motion.p
            variants={textVariants}
            initial="hidden"
            animate={isVisible ? "visible" : "hidden"}
            >Tecnologia e design me movem! Sou um Desenvolvedor Front-End de Campinas que ama criar interfaces incríveis. Estudo Análise e Desenvolvimento de Sistemas e também design gráfico e motion design.</motion.p>
          </div>

          <motion.div 
          variants={textVariants}
          initial="hidden"
          animate={isVisible ? "visible" : "hidden"}
          className={styles.contatos}>
            <IconeContato redeSocial="instagram" link="https://www.instagram.com/belottofelipe/" />
            <IconeContato redeSocial="whatsapp" link="https://api.whatsapp.com/send?phone=551993930323" />
            <IconeContato redeSocial="github" link="https://github.com/Felipe-Belotto" />
            <IconeContato redeSocial="linkedin" link="https://www.linkedin.com/in/felipe-belotto-a34738185/" />
          </motion.div>

        </div>

        <motion.img 
        variants={imgVariants}
             initial="hidden"
             animate={isVisible ? "visible" : "hidden"}
              src="perfil.png" alt="foto de perfil" className={styles.perfil}/>

      </div>
    </motion.section>
  );
}
