// app/layout.tsx
import styles from './layout.module.css'
import { Inter } from 'next/font/google'
import Header from './components/Header'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Portfolio Site',
  description: 'My Portfolio Site',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={`${inter.className} ${styles.app}`}>
        <Header />
        <main>{children}</main>
      </body>
    </html>
  )
}