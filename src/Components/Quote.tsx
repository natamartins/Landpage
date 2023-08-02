'use client'
import useFetch from '@/Hooks/useFetch'
import React, { useEffect } from 'react'

interface Quote {
  asset_id: string
  price_usd: number
}

interface QuotesTypes {
  id: number
  symbol: string
  current_price: number
  price_change_percentage_24h: number
}

const Quote = () => {
  const { quotes }: any = useFetch()

  return (
    <ul className="quote_intimereal">
      {quotes &&
        quotes.map((name: QuotesTypes) => (
          <li key={name.id}>
            <p>{name.symbol.toLocaleUpperCase()}</p>
            <p>{'R$' + `${name.current_price.toLocaleString('pt-BR')}`}</p>
            <p
              className={`${
                name.price_change_percentage_24h < 0 ? 'red' : 'gren'
              }`}
            >
              {name.price_change_percentage_24h > 0
                ? `${'+' + name.price_change_percentage_24h}`
                : name.price_change_percentage_24h}
            </p>
          </li>
        ))}
    </ul>
  )
}

export default Quote
