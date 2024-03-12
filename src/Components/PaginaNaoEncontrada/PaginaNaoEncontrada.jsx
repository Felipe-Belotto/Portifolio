'use client'
import React, { useEffect, useRef } from 'react'
import Link from 'next/link'
import styles from './PaginaNaoEncontrada.module.css'
import Lootie from '../Lootie/Lootie'

export default function PaginaNaoEncontrada() {


  return (
    <main className={styles.main}>
      <h1 className={styles.titulo}>Página não encontrada</h1>
      <Lootie id="PaginaNaoEncontradaAnimacao" href="https://lottie.host/c0dd0bda-0d4c-4a1e-be4f-f7faa04be40c/UqMIy6zCnl.json" />
      
        <Link href={"/"} className={styles.home}>Voltar para o inicio</Link>
      
    </main>
  )
}
