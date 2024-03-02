import React from 'react'

import styles from './SobreMim.module.css'
import IconeContato from '@/Components/IconeContato/IconeContato'

export default function SobreMim() {
  return (
    <section className={styles.sobreMim}>
      <div className={styles.container}>
        <div className={styles.conteudo}>

        <div className={styles.textos}>
          <h1>Felipe Belotto</h1>
          <h2>Front-End Developer & graphic designer</h2>
          <p>Tecnologia e design me movem! Sou um Desenvolvedor Front-End de Campinas que ama criar interfaces incríveis. Estudo Análise e Desenvolvimento de Sistemas e também design gráfico e motion design.</p>
        </div>

        <div className={styles.contatos}>
          <IconeContato redeSocial="instagram" link="https://api.whatsapp.com/send?phone=551993930323" />
          <IconeContato redeSocial="whatsapp" link="https://api.whatsapp.com/send?phone=551993930323" />
          <IconeContato redeSocial="github" link="https://api.whatsapp.com/send?phone=551993930323" />
          <IconeContato redeSocial="linkedin" link="https://api.whatsapp.com/send?phone=551993930323" />
        </div>

        </div>
       

        <img src="arte.png" alt="arte" />
        
      </div>
    </section>
  )
}
