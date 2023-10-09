import Header from '@/components/header'
import './globals.css'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'brandspace ltd',
  description: 'become brand ambassador',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>
        <Header />
        {children}
        </body>
    </html>
  )
}
