//@ts-nocheck
import { Inter } from 'next/font/google';
import './globals.css';
const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'The Art Of Living',
  description: 'Happiness Program',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <script async src="https://www.googletagmanager.com/gtag/js?id=AW-10932735020"></script>
      </head>
      <body className={inter.className}>{children}
      </body>
    </html >
  )
}