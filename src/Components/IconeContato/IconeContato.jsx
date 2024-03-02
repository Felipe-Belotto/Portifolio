import React from 'react';

import styles from './IconeContato.module.css';
import Link from 'next/link';

export default function IconeContato  (props) {

  const imagePath = `/redesSociais/`+props.redeSocial+".png";
  const altText = `Ícone do `+ props.redeSocial;

  return (
    <Link target='_blank' href={props.link} className={styles.container}>
      <img src={imagePath} alt={altText} />
    </Link>
  );
};
