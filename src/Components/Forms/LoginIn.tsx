'use client'
import React, { useContext } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { useForm, Controller } from 'react-hook-form'
import { InputPassword } from './InputPassword'
import Input from './Input'
import Modal from '@/Components/Modal'
import IconClose from '@/Images/buttonclose.svg'
import IconEmail from '@/Images/icon-email.svg'
import { AuthContext } from '@/contexts/AuthContext'

const LoginIn = ({
  isModalOpen,
  handleOpenModal,
  setIsModalOpen,
  isModalOpenSingUp,
  handleOpenModalSingUp
}: any) => {
  const { register, handleSubmit, control } = useForm()
  const { singIn, user } = useContext(AuthContext)

  async function handleLogin(data: any) {
    try {
      await singIn(data)
    } catch (err) {
      console.log(err)
    }
  }

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
            <form onSubmit={handleSubmit(handleLogin)}>
              <div>
                <Controller
                  name="email"
                  control={control}
                  render={({ field }) => (
                    <Input Icon={IconEmail} field={field} />
                  )}
                />
                <InputPassword {...register('password')} />

                <Link href="/">Forget password?</Link>
              </div>
              <div>
                <button className="button" type="submit">
                  Sing in
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
