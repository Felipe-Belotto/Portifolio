import React from 'react'
import { motion } from "framer-motion"
import styles from './ContinueNavegando.module.css'

export default function ContinueNavegando() {
  return (
    <motion.div 
    initial={{ opacity:0 ,y: 50 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 1 }}
    className={styles.container}>
      <img src="/mouse.svg" alt="icone de mouse" />
      <p>Continue Navegando</p>
    </motion.div>
  )
}
