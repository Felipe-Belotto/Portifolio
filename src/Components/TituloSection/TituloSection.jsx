import React from 'react'

import styles from './TituloSection.module.css'

export default function TituloSection(props) {
  return (
   <h1 className={styles.titulo}>{props.texto}</h1>
  )
}
