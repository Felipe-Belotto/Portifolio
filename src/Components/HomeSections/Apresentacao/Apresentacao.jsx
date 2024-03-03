'use client'
import React from 'react'
import { motion } from "framer-motion"

import styles from './Apresentacao.module.css'

export default function Apresentacao() {
  return (
      <section className={styles.apresentacao}>
       <motion.div  
        initial={{ opacity: 0, scale: 0.5 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }}
    >
      <span>Acredite no poder da <strong>tecnologia</strong> para transformar o mundo, e eu te ajudo a fazer isso acontecer.</span>
      </motion.div>
    </section>
  )
}
