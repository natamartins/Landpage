'use client'
import Image from 'next/image'
import React, { useState } from 'react'
import IconsPassword from '@/Images/password.svg'

export const InputPassword = ({ placeholder, onChange }: any) => {
  const [showPassword, setShowPassword] = useState<Boolean>(false)

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword)
  }

  return (
    <div className="input_password">
      <input
        type="password"
        placeholder={placeholder}
        onChange={onChange}
        // eslint-disable-next-line react/jsx-no-duplicate-props
        type={showPassword ? 'text' : 'password'}
        className="input"
      />
      <button onClick={() => togglePasswordVisibility()}>
        <Image src={IconsPassword} alt="" />
      </button>
    </div>
  )
}
