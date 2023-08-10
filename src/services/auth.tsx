'use client'
import { v4 as uuid } from 'uuid'

type SignInRequestDate = {
  email: string
  password: string
}

export async function singInRequest(data: SignInRequestDate) {
  return {
    token: uuid(),
    user: {
      name: 'Natã Martins',
      email: 'NataMartins@gmail.com',
      avatar_url: 'https://github.com/natamartins.png'
    }
  }
}

export async function recorverUsersInformation() {
  return {
    user: {
      name: 'Natã Martins',
      email: 'NataMartins@gmal.com',
      avatar_url: 'https://github.com/natamartins.png'
    }
  }
}
