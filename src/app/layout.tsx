import type { Metadata } from 'next'
import { Inter } from 'next/font/google'

import '../styles/global.scss'

const inter = Inter({ subsets: ['latin'], variable: '--font-inter' })

export const metadata: Metadata = {
  title: 'Dev Store',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html className={inter.variable} lang="pt">
      <body>{children}</body>
    </html>
  )
}
