'use client'
import React, { useEffect, useRef, useState } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

import styles from './Contato.module.css'
import TituloSection from '@/Components/TituloSection/TituloSection'
import InputForm from '@/Components/ComponentesContato/InputForm/InputForm'
import TextAreaForm from '@/Components/TextAreaForm/TextAreaForm';
import { Button, CircularProgress } from '@mui/material';
import emailjs from '@emailjs/browser';
import SendIcon from '@mui/icons-material/Send';
import ScheduleSendIcon from '@mui/icons-material/ScheduleSend';
import MarkEmailReadIcon from '@mui/icons-material/MarkEmailRead';

export default function Contato() {

  const[nome, setNome] = useState('')
  const[email, setEmail] = useState('')
  const[mensagem, setMensagem] = useState('')
  const { ref, inView } = useInView({ threshold: 0 });
  const [isVisible, setIsVisible] = useState(false);
  const [iconeBotao, setIconeBotao] = useState(<SendIcon/>)
  const [mensagemBotao, setMensagemBotao] = useState("Enviar")

  useEffect(() => {
    if (inView) {
      setIsVisible(true);
    }
  }, [inView]);

  const form = useRef()

  const enviarEmail = (e) => {
    e.preventDefault();

    setMensagemBotao("Enviando")
    setIconeBotao(<CircularProgress size={20} color='inherit'/>)
    setNome("")
    setEmail("")
    setMensagem("")


    emailjs.sendForm('service_7xjp99k', 'template_vqtigq6', form.current, {
        publicKey: 'K0rGeKsa8IaejL3LM',
      })
      .then(
        () => {
          setMensagemBotao("Enviado")
          setIconeBotao(<MarkEmailReadIcon />) 
          setInterval(() => {
            setMensagemBotao("Enviar")
            setIconeBotao(<SendIcon/>)
          }, 5000);
        },
        (error) => {
          alert('Não foi possivel enviar sua mensagem. Tente mais tarde!');
        },
      );
  };

  return (


      <div className={styles.container}>
        
       <form ref={form} onSubmit={enviarEmail}>
       <TituloSection texto="Vamos conversar ?" />
        <InputForm label="Nome" name="from_name" type="text" value={nome} onChange={(event)=>{setNome(event.target.value)}} />
        <InputForm label="Email" name="reply_to" type="email" value={email} onChange={(event)=>{setEmail(event.target.value)}} />
        <TextAreaForm label="Mensagem" name="message" value={mensagem} onChange={(event)=>{setMensagem(event.target.value)}} />
        <Button variant="contained" className={styles.botao__enviar} style={{background: mensagemBotao === "Enviado" ? "green" : "#6d0068"}} value='Send' color={mensagemBotao==="Enviado"?"success":"secondary"} type='submit' endIcon={iconeBotao}>{mensagemBotao}</Button>
       </form>

       
      </div>
      
  )
}
