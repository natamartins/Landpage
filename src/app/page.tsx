'use client'
import Image from 'next/image'
import React, { useState } from 'react'
import Logo from '@/Images/logo.svg'
import SingIn from '@/Components/Forms/LoginIn'
import SingUp from '@/Components/Forms/LoginUp'
import IconMenu from '@/Images/menu.svg'
import IconClose from '@/Images/buttonclose.svg'
import ArrowLeft from '@/Images/arrowRight.svg'
import ImageBottom from '@/Images/mask.svg'
import CardInfo from '@/Components/CardInfo/Index'
import Crypto from '@/Images/crypto.svg'
import Union from '@/Images/union.svg'
import Chart from '@/Images/chart.svg'
import Descktop from '@/Images/desktopmob.svg'
import TopCrypto from '@/Components/TopCrypto/Index'
import Carrousel from '@/Components/Carrousel.tsx/Index'
import Quote from '@/Components/Quote'

const page = () => {
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
      <header className="container_header global_content">
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
      </header>
      <main className="card_main">
        <section className="global_content">
          <div className="section_marketing">
            <div>
              <h1>Lorem ipsum dolor sit amet, consectetur</h1>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit ut
                aliquam, purus sit amet luctus venenatis, lectus magna fringilla
                urna, porttitor
              </p>
              <button className="button">
                SING NOW <Image src={ArrowLeft} alt="" />
              </button>

              <ul>
                <li>Cryptos</li>
                <li>NFTs</li>
                <li>Games</li>
              </ul>
            </div>
            <div className="card_carrousel">
              <Carrousel />
            </div>
          </div>
        </section>
        <div className="image_bottom-card">
          <Image src={ImageBottom} alt="" />
        </div>
        <section className="background">
          <div className="global_content  section_info">
            <div className="box">
              <div className="container_info">
                <div className="card-one">
                  <CardInfo
                    Img={Crypto}
                    subtitle="For your company"
                    title="Crypto Solutions"
                    description="Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam, purus sit amet luctus venenatis, lectus magna fringilla urna, porttitor"
                  />
                  <CardInfo
                    Img={Union}
                    subtitle="For your company"
                    title="Crypto Solutions"
                    description="Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam, purus sit amet luctus venenatis, lectus magna fringilla urna, porttitor"
                  />
                </div>
                <div className="card-two">
                  <CardInfo
                    Img={Chart}
                    subtitle="For your company"
                    title="Crypto Solutions"
                    description="Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam, purus sit amet luctus venenatis, lectus magna fringilla urna, porttitor"
                  />
                  <CardInfo
                    Img={Descktop}
                    subtitle="For your company"
                    title="Crypto Solutions"
                    description="Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam, purus sit amet luctus venenatis, lectus magna fringilla urna, porttitor"
                  />
                </div>
              </div>
            </div>
            <div className="card_text">
              <h5>Lorem ipsum </h5>
              <h2>Lorem ipsum </h2>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit ut
                aliquam, purus sit amet luctus venenatis, lectus magna fringilla
                urna, porttitor
              </p>
              <button className="button">Sing now</button>
            </div>
          </div>
        </section>
        <section className="global_content container_top-cryptos">
          <h3>Top Cryptos</h3>
          <TopCrypto />
        </section>
      </main>
      <footer className="">
        <div className="container_footer">
          <div className="global_content">
            <div className="box_footer-one">
              <div>
                <h4>Lorem ipsum </h4>
                <h2>Lorem ipsum </h2>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit ut
                  aliquam, purus sit amet luctus venenatis, lectus magna
                  fringilla urna, porttitor
                </p>
              </div>
              <div className="footer_form">
                <label htmlFor="email">Email</label>
                <input
                  type="email"
                  id="emal"
                  name="email"
                  placeholder="Email"
                />
                <button>Subscriber</button>
              </div>
            </div>
          </div>
          <span />
        </div>
        <div className="global_content">
          <div className="box_bottom">
            <p>Copyright © 2022 - All rights reserved</p>
            <Image src={Logo} alt="" />
          </div>
        </div>
      </footer>
    </>
  )
}

export default page
