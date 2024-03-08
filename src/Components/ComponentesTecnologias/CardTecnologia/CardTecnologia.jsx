import React from 'react'

import styles from './CardTecnologia.module.css'
import IconeTecnologia from '../IconeTecnologia/IconeTecnologia'

export default function CardTecnologia() {

  const ListaFrontEnd = ["javascript","typescript", "react","next","sass","tailwind","materialui","routerdom","git"]
  const ListaDesign =["AfterEffects", "Canva", "Figma", "Illustrator"]

  return (
    <div className={styles.container}>
    <div className={styles.card}>
      <h2 className={styles.subtitulo}>Front-End</h2>
      <ul>
        {ListaFrontEnd.map(tecnologia => <li key={tecnologia}><IconeTecnologia pasta="TecnologiasFrontEnd" tecnologia={tecnologia} /></li>)}
      </ul>
      
    </div>

<div className={styles.card}>
<h2 className={styles.subtitulo}>Design</h2>
<ul>
  {ListaDesign.map(tecnologia => <li key={tecnologia}><IconeTecnologia pasta="TecnologiasDesign" tecnologia={tecnologia} /></li>)}
</ul>

</div>
</div>
  )
}
