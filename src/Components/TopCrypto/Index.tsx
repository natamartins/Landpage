'use client'
import useFetch from '@/Hooks/useFetch'
import Image from 'next/image'
import React, { useState } from 'react'
import TableTr from './TableTr'

const Index = () => {
  const { quotes }: any = useFetch()
  const [showAll, setShowAll] = useState(false)
  const [showTable, setShowTable] = useState(false)
  const visibleItems = showAll ? quotes : quotes.slice(0, 5)
  const handleShowMore = () => {
    setShowAll(true)
  }
  const handleLessMore = () => {
    setShowAll(!true)
  }

  const handleShowTable = () => {
    setShowTable(true)
  }
  const handleCloseTable = () => {
    setShowTable(!true)
  }

  return (
    <div>
      <div className="card_top-crypptos-wed">
        <table className="card_top-cryptos">
          <thead>
            <tr>
              <th>#</th>
              <th>Crypto</th>
              <th>Price</th>
              <th>Change</th>
              <th>Trade</th>
            </tr>
          </thead>
          <tbody>
            {visibleItems &&
              visibleItems.map((name: any) => (
                <tr key={name.id}>
                  <td>
                    <p>{name.market_cap_rank}</p>
                  </td>
                  <td>
                    <Image src={name.image} alt="" width={20} height={20} />
                    <p key={name.name}>{name.name}</p>
                  </td>
                  <td>
                    <p>US$ {name.current_price.toLocaleString('pt-BR')}</p>
                  </td>
                  <td>
                    <p
                      className={`${
                        name.price_change_percentage_24h < 0 ? 'red' : 'gren'
                      }`}
                    >
                      {name.price_change_percentage_24h > 0
                        ? `${'+' + name.price_change_percentage_24h}`
                        : name.price_change_percentage_24h}
                    </p>
                  </td>
                  <td>
                    <p>
                      <button>Buy</button>
                    </p>
                  </td>
                </tr>
              ))}
          </tbody>
        </table>
        <button>
          {!showAll && quotes.length > 5 ? (
            <button onClick={handleShowMore}>View more +</button>
          ) : (
            <button onClick={handleLessMore}>View less -</button>
          )}
        </button>
      </div>
      <div className="card_top-crypptos-mobile">
        <table className="card_top-cryptos">
          <thead>
            <tr>
              <th>Crypto</th>
              <th>Trade</th>
            </tr>
          </thead>
          <tbody>
            {visibleItems &&
              visibleItems.map((name: any) => (
                <>
                  <tr key={name.id}>
                    <TableTr
                      name={name}
                      showTable={showTable}
                      handleCloseTable={handleCloseTable}
                      handleShowTable={handleShowTable}
                    />
                  </tr>
                  {showTable ? (
                    <>
                      <tr>
                        <td>
                          <p>Price</p>
                        </td>
                        <td>
                          <td>
                            <p>
                              US$ {name.current_price.toLocaleString('pt-BR')}
                            </p>
                          </td>
                        </td>
                      </tr>
                      <tr>
                        <td>
                          <p>Change</p>
                        </td>
                        <td>
                          <td>
                            <p
                              className={`${
                                name.price_change_percentage_24h < 0
                                  ? 'red'
                                  : 'gren'
                              }`}
                            >
                              {name.price_change_percentage_24h > 0
                                ? `${'+' + name.price_change_percentage_24h}`
                                : name.price_change_percentage_24h}
                            </p>
                          </td>
                        </td>
                      </tr>
                    </>
                  ) : null}
                </>
              ))}
          </tbody>
          <button>
            {!showAll && quotes.length > 5 ? (
              <button onClick={handleShowMore}>View more +</button>
            ) : (
              <button onClick={handleLessMore}>View less -</button>
            )}
          </button>
        </table>
      </div>
    </div>
  )
}

export default Index
