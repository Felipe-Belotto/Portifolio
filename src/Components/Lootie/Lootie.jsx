'use client'
import React, { useEffect, useRef } from 'react'

export default function Lootie(props) {
  const ref = useRef(null);
  useEffect(() => {
    import("@lottiefiles/lottie-player");
  });
  return (
    <lottie-player
    id={props.id}
    ref={ref}
    autoplay
    loop
    mode="normal"
    src={props.href}
    style={{ width: "100%", height: "auto" }}
  ></lottie-player>
  )
}
