'use client'
import type { Metadata } from 'next'
import { Rubik } from 'next/font/google'
import './globals.css'
import { Provider } from 'react-redux'
import { store } from '@/store/store'
import { GlobalContextProvider } from '@/context/context'

// export const metadata: Metadata = {
//   title: 'onebot',
//   description: 'Learn and get better at industry trading secrets',
// }

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>
        <Provider store={store}>
        <GlobalContextProvider >
          {children}
        </GlobalContextProvider>
        </Provider>
      </body>
    </html>
  )
}