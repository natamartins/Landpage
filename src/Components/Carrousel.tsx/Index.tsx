'use client'
import Image from 'next/image'
import React, { useState, useEffect } from 'react'
import { motion } from 'framer-motion'

import Img01 from '@/Images/carrosel.svg'
import Img02 from '@/Images/Img03.jpg'
import Img03 from '@/Images/Img04.jpg'

const imagens = [Img01, Img02, Img03]
const imagemAlt = ['Imagem 1', 'Imagem 2', 'Imagem 3']

const transition = {
  duration: 1.5, // Duração da animação em segundos
  ease: 'easeInOut' // Tipo de easing (curva de animação)
}

const Index = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0)

  useEffect(() => {
    const handleScroll = () => {
      // Verifica a posição vertical da janela (window.scrollY)
      // e compara com a posição vertical da imagem (offsetTop)
      if (window.scrollY > imagemRef.current.offsetTop) {
        if (currentImageIndex < imagens.length - 1) {
          setCurrentImageIndex(prevIndex => prevIndex + 1)
        }
      } else {
        if (currentImageIndex > 0) {
          setCurrentImageIndex(prevIndex => prevIndex - 1)
        }
      }
    }

    window.addEventListener('scroll', handleScroll)

    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [currentImageIndex])

  const imagemRef: any = React.useRef()

  return (
    <div className="card_carrosel">
      <motion.div
        initial={{ opacity: 0 }} // Estilo inicial
        animate={{ opacity: 1 }} // Estilo animado
        exit={{ opacity: 0 }} // Estilo de saída, se a imagem for removida
        transition={transition} // Opções de transição
      >
        <Image
          src={imagens[currentImageIndex]}
          alt={imagemAlt[currentImageIndex]}
          ref={imagemRef}
        />
      </motion.div>
    </div>
  )
}

export default Index
