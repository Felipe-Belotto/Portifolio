import React from 'react'

import styles from './Tecnologias.module.css'
import CardTecnologia from '@/Components/ComponentesTecnologias/CardTecnologia/CardTecnologia'
export default function Tecnologias() {
  return (
    <section className={styles.tecnologias}>
      <h1 className={styles.titulo}>Tecnologias</h1>
  
      <CardTecnologia/>
    </section>
  )
}
