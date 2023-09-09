import './globals.css'
import { Inter, Montserrat } from 'next/font/google'
import {Analytics} from '@vercel/analytics/react';

const inter = Inter({ subsets: ['latin'] })
const montserrat = Montserrat({subsets: ['latin'],variable:'--font-mont'})


export const metadata = {
  title: 'Tanmay Siwach',
  description: 'Portfolio website',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={montserrat.className}>{children}
      <Analytics />
      </body>
    </html>
  )
}
