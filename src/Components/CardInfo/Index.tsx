import Image from 'next/image'
import React from 'react'

interface Type {
  Img: string
  subtitle: string
  title: string
  description: string
}

const Index = ({ Img, subtitle, title, description }: Type) => {
  return (
    <div className="box_info">
      <Image src={Img} alt="" />
      <h5>{subtitle}</h5>
      <h4>{title}</h4>
      <p>{description}</p>
    </div>
  )
}

export default Index
