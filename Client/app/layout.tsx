import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import Navbar from './component/nav/navbar'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'ThoughtShare | Home',
  description: 'ThoughtShare is a social media application for sharing thoughts among friends and communities ',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={`${inter.className} flex gap-5 w-full`}>
        <Navbar />
        {children}
      </body>
    </html>
  )
}
