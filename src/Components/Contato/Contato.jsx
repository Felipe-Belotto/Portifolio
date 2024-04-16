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
import MarkEmailReadIcon from '@mui/icons-material/MarkEmailRead';
import { Scale } from '@mui/icons-material';

export default function Contato() {

  const[nome, setNome] = useState('')
  const[email, setEmail] = useState('')
  const[mensagem, setMensagem] = useState('')
  const [iconeBotao, setIconeBotao] = useState(<SendIcon/>)
  const [mensagemBotao, setMensagemBotao] = useState("Enviar")

  const { ref, inView } = useInView({ threshold: 0 });
  const [isVisible, setIsVisible] = useState(false);

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

  useEffect(() => {
    if (inView) {
      setIsVisible(true);
    }
  }, [inView]);  

  const containerVariants = {
    visible: { opacity: 1, y: 0, scale: 1, transition: { duration: 1.5 } },
    hidden: { opacity: 0.5, y: 50, scale: 0.8 },
  };

  return (


      <motion.div 
      ref={ref}
      variants={containerVariants}
      initial="hidden"
      animate={isVisible ? "visible" : "hidden"}
      className={styles.container}>
        
       <form ref={form} onSubmit={enviarEmail}>
        <div className={styles.titulo__container}>
       <TituloSection texto="Vamos conversar ?" />
       </div>
        <InputForm label="Nome" name="from_name" type="text" value={nome} onChange={(event)=>{setNome(event.target.value)}} />
        <InputForm label="Email" name="reply_to" type="email" value={email} onChange={(event)=>{setEmail(event.target.value)}} />
        <TextAreaForm label="Mensagem" name="message" value={mensagem} onChange={(event)=>{setMensagem(event.target.value)}} />
        <Button variant="contained" style={{display: "flex", alignItems: "center" ,background: mensagemBotao === "Enviado" ? "green" : "#b98cf6"}} value='Send' color={mensagemBotao==="Enviado"?"success":"secondary"} type='submit' endIcon={iconeBotao}>{mensagemBotao}</Button>
       </form>

       
      </motion.div>
      
  )
}
