import axios from 'axios'
import { NextApiRequest, NextApiResponse } from 'next'

const API_URL = 'http://localhost:5000' // Substitua pela URL do seu servidor

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method === 'POST') {
    const { name, email, password } = req.body

    // Create user
    if (name && email && password) {
      try {
        const newUser = { name, email, password }
        await axios.post(`${API_URL}/users`, newUser)
        res.status(201).json({ message: 'Usuário criado com sucesso' })
      } catch (error) {
        res.status(500).json({ error: 'Erro ao criar usuário' })
      }
    } else {
      res.status(400).json({ error: 'Dados incompletos' })
    }
  } else if (req.method === 'POST') {
    const { email, password } = req.body

    // Login user
    if (email && password) {
      try {
        const response = await axios.post(`${API_URL}/login`, {
          email,
          password
        })
        res.status(200).json(response.data)
        console.log("Res ==>", response)
        alert('Sucesso')
      } catch (error) {
        res.status(401).json({ error: 'Email ou senha incorretos' })
      }
    } else {
      res.status(400).json({ error: 'Dados incompletos' })
    }
  } else {
    res.status(405).json({ error: 'Método não permitido' })
  }
}
