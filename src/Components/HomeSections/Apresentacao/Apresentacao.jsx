'use client'
import React from 'react'
import { motion } from "framer-motion"
import { useLottie } from "lottie-react";
import animacao from "../../../../public/animacao.json";
import styles from './Apresentacao.module.css'
import ContinueNavegando from '@/Components/ContinueNavegando/ContinueNavegando';

export default function Apresentacao() {
  const options = {
    animationData: animacao,
    loop: true
  };

  const { View } = useLottie(options);
  return (
    <>
      <section  
       className={styles.apresentacao}>
      
      <div className={styles.container}>
      <motion.span initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: 1, scale: 1 }} 
       transition={{ duration: 1 }}>Acredite no poder da <strong>tecnologia</strong> para transformar o mundo, e eu te ajudo a fazer isso acontecer.</motion.span>

      <div className={styles.arte}>
      {View}
      </div>
      </div>
    

    <ContinueNavegando/>
    </section>
    </>
  )
}
