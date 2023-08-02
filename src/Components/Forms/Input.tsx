import Image from 'next/image'
import React from 'react'

const Input = ({ placeholder, Icon, onChange }: any) => {
  return (
    <div className="card_input">
      <span>
        <Image src={Icon} alt="" />
      </span>
      <input type="email" placeholder={placeholder} onChange={onChange} />
    </div>
  )
}

export default Input
