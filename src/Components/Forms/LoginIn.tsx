'use client'
import React, { useState } from 'react'
import Modal from '@/Components/Modal'
import Link from 'next/link'
import { InputPassword } from './InputPassword'
import Image from 'next/image'
import IconClose from '@/Images/buttonclose.svg'
import Input from './Input'
import IconEmail from '@/Images/icon-email.svg'
// import axios from 'axios'

const LoginIn = ({
  isModalOpen,
  handleOpenModal,
  setIsModalOpen,
  isModalOpenSingUp,
  handleOpenModalSingUp
}: any) => {
  // const [email, setEmail] = useState('')
  // const [password, setPassword] = useState('')

  // const handleSignIn = async () => {
  //   try {
  //     const response = await axios.post('/api/users', { email, password })
  //     console.log('User ==>', response)
  //     // alert(response.data.message)
  //   } catch (error) {
  //     alert('Email ou senha incorretos')
  //   }
  // }

  return (
    <>
      <button onClick={() => handleOpenModal()}>Sing in</button>
      {isModalOpen === true && isModalOpenSingUp === false && (
        <Modal
          isOpen={isModalOpen}
          onRequestClose={() => setIsModalOpen(false)}
        >
          <div className="form_sing-in">
            <h4>
              Sing in to <span>Coin</span>
              <span>Synck</span>
            </h4>
            {/* <form onSubmit={handleSignIn}> */}
            <form>
              <div>
                <Input
                  placeholder="Email"
                  Icon={IconEmail}
                  // value={email}
                  // setEmail={setEmail}
                />
                <InputPassword
                  placeholder="Password"
                  // value={password}
                  // setPassword={setPassword}
                />

                <Link href="/">Forget password?</Link>
              </div>
              <div>
                <button className="button" type="submit">
                  <Link
                    href="https://dashboard-silk-zeta.vercel.app/"
                    target="_blank"
                  >
                    Sing in
                  </Link>
                </button>

                <button onClick={() => handleOpenModalSingUp(true)}>
                  <span>Sing Up to</span> <span>Coin</span>
                  <span>Synch</span>
                </button>
              </div>
              <button onClick={() => setIsModalOpen(false)} className="close">
                <Image src={IconClose} alt="Icon close modal singiIn" />
              </button>
            </form>
          </div>
        </Modal>
      )}
    </>
  )
}

export default LoginIn
