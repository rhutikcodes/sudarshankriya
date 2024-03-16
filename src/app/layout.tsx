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
      <body className={inter.className}>{children}
        <noscript><iframe src="https://www.googletagmanager.com/ns.html?id=GTM-5LXJLC4T"
          height="0" width="0" style="display:none;visibility:hidden"></iframe></noscript>
      </body>
    </html >
  )
}