'use clinet'
import Image from 'next/image'
import React, { useState } from 'react'
import SingIn from '@/Components/Forms/LoginIn'
import SingUp from '@/Components/Forms/LoginUp'
import Logo from '@/Images/logo.svg'
import IconMenu from '@/Images/menu.svg'
import IconClose from '@/Images/buttonclose.svg'
import Quote from '@/Components/Quote'

const Index = () => {
  const [menu, setMenu] = useState<Boolean>(false)

  const [isModalOpenSingIn, setIsModalOpenSingIn] = useState(false)
  const [isModalOpenSingUp, setIsModalOpenSingUp] = useState(false)

  const handleOpenModalSingIn = () => {
    setIsModalOpenSingIn(true)
  }
  const handleOpenModalSingUp = () => {
    setIsModalOpenSingUp(true)
  }
  return (
    <>
      <nav>
        <div className="container-logo">
          <Image src={Logo} alt="Logo da landpge: coinsynch" />
          <ul>
            <li>About us</li>
            <li>Top Cryptos</li>
          </ul>
        </div>
        <div className="container_quotes24hrs global_content">
          <Quote />
        </div>
        <div className="container-login">
          <SingIn
            isModalOpen={isModalOpenSingIn}
            handleOpenModal={handleOpenModalSingIn}
            setIsModalOpen={setIsModalOpenSingIn}
            isModalOpenSingUp={isModalOpenSingUp}
            handleOpenModalSingUp={handleOpenModalSingUp}
          />
          <SingUp
            isModalOpen={isModalOpenSingUp}
            handleOpenModal={handleOpenModalSingUp}
            setIsModalOpen={setIsModalOpenSingUp}
          />
        </div>
        <button className="menu_mobile" onClick={() => setMenu(true)}>
          <Image src={IconMenu} alt="" />
        </button>
        {menu === true &&
          isModalOpenSingIn === false &&
          isModalOpenSingUp === false && (
            <div className="box_menu-button">
              <SingIn
                isModalOpen={isModalOpenSingIn}
                handleOpenModal={handleOpenModalSingIn}
                setIsModalOpen={setIsModalOpenSingIn}
              />
              <SingUp
                isModalOpen={isModalOpenSingUp}
                handleOpenModal={handleOpenModalSingUp}
                setIsModalOpen={setIsModalOpenSingUp}
              />
              <span onClick={() => setMenu(!true)}>
                <Image src={IconClose} alt="" />
              </span>
            </div>
          )}
      </nav>
      <div className="container_quotes24hrs-mobile">
        <Quote />
      </div>
    </>
  )
}

export default Index
