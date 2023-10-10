import Header from '@/components/header'
import './globals.css'
import type { Metadata } from 'next'
import { ThemeProvider } from '@/components/themes/darkmode-theme-provider'

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
      <ThemeProvider
            attribute="class"
            defaultTheme="system"
            enableSystem
            disableTransitionOnChange
          >
        <Header />
        <main>
        {children}
        </main>
        </ThemeProvider>
        </body>
    </html>
  )
}
