import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

// Load Inter font from Google
const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Learning Dashboard',
  description: 'Next-Gen Student Learning Dashboard',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={`${inter.className} bg-[#0a0a0f] text-white min-h-screen`}>
        {children}
      </body>
    </html>
  )
}