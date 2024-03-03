'use client';

import React, { useRef, useState } from 'react'

import styles from './Contato.module.css'
import TituloSection from '@/Components/TituloSection/TituloSection'
import InputForm from '@/Components/ComponentesContato/InputForm/InputForm'
import TextAreaForm from '@/Components/TextAreaForm/TextAreaForm';
import { Button } from '@mui/material';
import emailjs from '@emailjs/browser';

export default function Contato() {

  const[nome, setNome] = useState('')
  const[email, setEmail] = useState('')
  const[mensagem, setMensagem] = useState('')

  const form = useRef()

  const enviarEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_7xjp99k', 'template_vqtigq6', form.current, {
        publicKey: 'K0rGeKsa8IaejL3LM',
      })
      .then(
        () => {
          alert('Sua mensagem foi enviada!');
        },
        (error) => {
          alert('Não foi possivel enviar sua mensagem. Tente mais tarde!');
        },
      );
  };

  return (
    <section className={styles.contato}>
      <TituloSection texto="Vamos juntos desenvolver a solução ideal para você ?" />

      <div className={styles.container}>
       <form ref={form} onSubmit={enviarEmail}>
        <InputForm label="Nome" name="from_name" type="text" value={nome} onChange={(event)=>{setNome(event.target.value)}} />
        <InputForm label="Email" name="reply_to" type="email" value={email} onChange={(event)=>{setEmail(event.target.value)}} />
        <TextAreaForm label="Mensagem" name="message" value={mensagem} onChange={(event)=>{setMensagem(event.target.value)}} />
        <Button variant="contained" className={styles.botao__enviar} value='Send' color='secondary' type='submit'>Enviar</Button>
       </form>
      </div>
      
    </section>
  )
}
