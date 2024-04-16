'use client'
import React from 'react'
import { motion } from "framer-motion"
import { useLottie } from "lottie-react";
import animacao from "../../../../public/animacao.json";
import styles from './Apresentacao.module.css'

export default function Apresentacao() {
  const options = {
    animationData: animacao,
    loop: true
  };

  const { View } = useLottie(options);
  return (
      <motion.section  
     /*  initial={{ opacity: 0, scale: 0 }}
      animate={{ opacity: 1, scale: 1 }} */
     /*  transition={{ duration: 0.5 }} */ className={styles.apresentacao}>
  
      <span>Acredite no poder da <strong>tecnologia</strong> para transformar o mundo, e eu te ajudo a fazer isso acontecer.</span>

    <div className={styles.arte}>
    {View}
    </div>

    </motion.section>
  )
}
