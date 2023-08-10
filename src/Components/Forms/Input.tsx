import Image from 'next/image'
import React from 'react'

const Input = ({ placeholder, Icon, field }: any) => {
  return (
    <div className="card_input">
      <span>
        <Image src={Icon} alt="" />
      </span>
      <input
        type="email"
        onChange={e => {
          field.onChange(e)
        }}
        placeholder={placeholder}
      />
    </div>
  )
}

export default Input
