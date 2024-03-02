import React from 'react'

import styles from './IconeTecnologia.module.css'

export default function IconeTecnologia(props) {
  const imagePath = "/"+ props.pasta+"/" + props.tecnologia+".png";
  const altText = `Ícone da tecnologia: `+ props.tecnologia;
  return (
    <div className={styles.icone} /* title={props.tecnologia} */>
      <img src={imagePath} alt={altText} /> 
      <p className={styles.legenda}>{props.tecnologia}</p>
    </div>
  )
}
