'use client'
import Image from 'next/image'
import React, { useState } from 'react'
import NavBar from '@/Components/NavBar/Index'
import Logo from '@/Images/logo.svg'
import ArrowLeft from '@/Images/arrowRight.svg'
import ImageBottom from '@/Images/mask.svg'
import CardInfo from '@/Components/CardInfo/Index'
import Crypto from '@/Images/crypto.svg'
import Union from '@/Images/union.svg'
import Chart from '@/Images/chart.svg'
import Descktop from '@/Images/desktopmob.svg'
import TopCrypto from '@/Components/TopCrypto/Index'
import Carrousel from '@/Components/Carrousel.tsx/Index'

const page = () => {
  return (
    <>
      <header className="container_header global_content">
        <NavBar />
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
