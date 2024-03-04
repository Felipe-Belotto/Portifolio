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

  return (
    <motion.section animate={isVisible ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.5}}
    initial={{ opacity: 0, scale: 0.5  }}
    transition={{ duration: 0.5 }}  
    ref={ref} className={styles.tecnologias}>
      <TituloSection texto="Tecnologias" />
  
      <CardTecnologia/>
    </motion.section>
  )
}
