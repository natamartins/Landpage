'use client'
import React, { useState } from 'react'
import Modal from '@/Components/Modal'
import Link from 'next/link'
import { InputPassword } from './InputPassword'
import Image from 'next/image'
import IconClose from '@/Images/buttonclose.svg'
import Input from './Input'
import IconEmail from '@/Images/icon-email.svg'
import IconUser from '@/Images/user.svg'
import axios from 'axios'
// import { useForm } from 'react-hook-form'
// import { z } from 'zod'
// import { zodResolver } from '@hookform/resolvers/zod'

// const LoginUserSchema = z.object({
//   email: z
//     .string()
//     .nonempty('O e-mail é obrigatótrio')
//     .email('Formato de e-mail inválido'),
//   passoword: z.string().min(6, 'A senha precisa de no minimo 6 caracteres'),
//   confirmPassoword: z
//     .string()
//     .min(6, 'A senha precisa de no minimo 6 caracteres')
// })
// type LoginUserSchema = z.infer<typeof LoginUserSchema>

const LoginUp = ({ isModalOpen, handleOpenModal, setIsModalOpen }: any) => {
  // const [output, setOutput] = useState('')
  // const {
  //   register,
  //   handleSubmit,
  //   formState: { errors }
  // } = useForm<LoginUserSchema>({
  //   resolver: zodResolver(LoginUserSchema)
  // })

  // function Login(data: any) {
  //   setOutput(JSON.stringify(data, null, 2))
  // }
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [confirmPassword, setConfirmPassword] = useState('')

  const handleSignUp = async () => {
    try {
      if (password === confirmPassword) {
        const newUser = { name, email, password, confirmPassword }
        await axios.post('/api/users', newUser)
        alert('Usuário criado com sucesso')
      }
    } catch (error) {
      alert('Erro ao criar usuário')
      console.log(error)
    }
  }

  return (
    <>
      <button className="button" onClick={() => handleOpenModal()}>
        Sing up
      </button>
      {isModalOpen && (
        <Modal
          isOpen={isModalOpen}
          onRequestClose={() => setIsModalOpen(false)}
        >
          <div className="form_sing-up">
            {/* <form onSubmit={handleSubmit(Login)}> */}
            <div>
              <h4>
                Sing in to <span>Coin</span>
                <span>Synck</span>
              </h4>

              <Input
                type="text"
                placeholder="Name"
                Icon={IconUser}
                onChange={(e: any) => setName(e.target.value)}
              />
              <Input
                type="email"
                placeholder="Email"
                Icon={IconEmail}
                onChange={(e: any) => setEmail(e.target.value)}
                // {...register('email')}
              />
              {/* {errors.email && <span>{errors.email.message}</span>} */}
              <InputPassword
                placeholder="Password"
                onChange={(e: any) => setPassword(e.target.value)}
                // {...register('passoword')}
              />
              {/* {errors.passoword && <span>{errors.passoword.message}</span>} */}
              <InputPassword
                placeholder="Confirm password"
                onChange={(e: any) => setConfirmPassword(e.target.value)}
                // {...register('confirmPassoword')}
              />
              {/* {errors.confirmPassoword && (
                  <span>{errors.confirmPassoword.message}</span>
                )} */}

              <div className="chackbox-terms">
                <input type="checkbox" />
                <p>
                  I have read and accept the <span>Privacy Polity</span> and{' '}
                  <span>Terms of User Sing up.</span>
                </p>
              </div>
            </div>
            <div>
              <button onClick={handleSignUp} className="button">
                Sing in
              </button>
              <Link href="/">
                Alerady have account?<span>Sing Up to</span>
                <span>Coin</span>
                <span>Synch</span>
              </Link>
            </div>
            {/* </form> */}
            <button onClick={() => setIsModalOpen(false)} className="close">
              <Image src={IconClose} alt="" />
            </button>
          </div>
        </Modal>
      )}
    </>
  )
}

export default LoginUp
