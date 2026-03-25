import { Syne, JetBrains_Mono, Cormorant } from 'next/font/google'
import './globals.css'

const syne = Syne({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700', '800'],
  variable: '--syne',
  display: 'swap',
})

const jbMono = JetBrains_Mono({
  subsets: ['latin'],
  weight: ['300', '400', '500'],
  style: ['normal', 'italic'],
  variable: '--jb-mono',
  display: 'swap',
})

const cormorant = Cormorant({
  subsets: ['latin'],
  weight: ['300', '400'],
  style: ['normal', 'italic'],
  variable: '--cormorant',
  display: 'swap',
})

export const metadata = {
  title: {
    default: 'Asmit Shrestha — Web Designer',
    template: '%s | Asmit',
  },
  description:
    'Web Designer specializing in user-friendly interfaces, graphic design, and front-end development.',
  icons: {
    icon: '/assets/img/favicon.ico',
    shortcut: '/assets/img/favicon.ico',
  },
}

export default function RootLayout({ children }) {
  return (
    <html
      lang="en"
      className={`${syne.variable} ${jbMono.variable} ${cormorant.variable}`}
    >
      <body>{children}</body>
    </html>
  )
}
