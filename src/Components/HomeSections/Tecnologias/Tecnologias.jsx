'use client'
import React, { useEffect, useRef, useState } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

import styles from './Tecnologias.module.css'
import CardTecnologia from '@/Components/ComponentesTecnologias/CardTecnologia/CardTecnologia'
import TituloSection from '@/Components/TituloSection/TituloSection'
export default function Tecnologias() {
  const { ref, inView } = useInView({ threshold: 0 });
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    if (inView) {
      setIsVisible(true);
    }
  }, [inView]);

  const containerVariants = {
    visible: { opacity: 1, scale: 1, transition: { duration: 1 } },
    hidden: { opacity: 0, scale: 0.8 }
  };

  return (
    <motion.section  
    variants={containerVariants}
             initial="hidden"
             animate={isVisible ? "visible" : "hidden"}
    ref={ref} className={styles.tecnologias} style={{display: "flex", justifyContent: "center", alignItems: "center"}}>
      <TituloSection texto="Tecnologias" />
  
      <CardTecnologia/>
    </motion.section>
  )
}
