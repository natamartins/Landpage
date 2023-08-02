import { REACT_URL } from '@/api'
import axios from 'axios'
import React, { useEffect, useState } from 'react'

const useFetch = () => {
  const [quotes, setQuote]: any = useState('')

  const fetchDate = async () => {
    try {
      const { data } = await axios.get(`${REACT_URL}`)
      setQuote(data)
    } catch (err) {
      console.log('Error ==>', err)
    }
  }

  useEffect(() => {
    fetchDate()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  return { quotes }
}

export default useFetch
