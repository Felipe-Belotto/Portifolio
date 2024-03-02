import React from 'react'

import styles from './NavBar.module.css'
import Link from 'next/link'

export default function NavBar() {
  return (
  <nav className={styles.container}>
    <div>
    <Link href={"/"} className={styles.logo}>Felipe Belotto</Link>
    </div>
    <div className={styles.links__container}>
    <Link href={"/projetos"} className={styles.nav__item}>Projetos</Link>
    <Link href={"/contatos"} className={styles.nav__item}>Contatos</Link>
    </div>
  </nav>
  )
}
