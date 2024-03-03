import React from 'react'

import styles from './Tecnologias.module.css'
import CardTecnologia from '@/Components/ComponentesTecnologias/CardTecnologia/CardTecnologia'
import TituloSection from '@/Components/TituloSection/TituloSection'
export default function Tecnologias() {
  return (
    <section className={styles.tecnologias}>
      <TituloSection texto="Tecnologias" />
  
      <CardTecnologia/>
    </section>
  )
}
