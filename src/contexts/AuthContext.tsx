'use client'
import { createContext, useEffect, useState } from 'react'
import { parseCookies, setCookie } from 'nookies'
import { recorverUsersInformation, singInRequest } from '@/services/auth'

type User = {
  name: string
  email: string
  avatar_url: string
}

type SingInDate = {
  email: string
  password: string
}

type AuthContextType = {
  isAuthenticated: boolean
  user: User
  singIn: (data: SingInDate) => Promise<void>
}

export const AuthContext = createContext({} as AuthContextType)

export function AuthProvider({ children }: any) {
  const [user, setUser]: any = useState<User | null>(null)
  const isAuthenticated = !!user

  useEffect(() => {
    const { 'nextauth.token': token } = parseCookies()

    if (token) {
      recorverUsersInformation().then(res => {
        setUser(res.user)
      })
    }
  }, [])

  async function singIn({ email, password }: SingInDate) {
    const { token, user }: any = await singInRequest({
      email,
      password
    })

    setCookie(undefined, 'nextauth.token', token, {
      maxAge: 60 * 60 * 1 //  1 hour
    })

    setUser(user)

    if (email === user.email) {
      window.location.href = 'https://dashboard-silk-zeta.vercel.app/'
    } else {
      alert('Email incorreto!')
    }
  }

  return (
    <AuthContext.Provider value={{ user, isAuthenticated, singIn }}>
      {children}
    </AuthContext.Provider>
  )
}
