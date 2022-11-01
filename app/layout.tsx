import './globals.css'
import Link from "next/link"
import NavLink from './nav-link'

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className='text-gray-100 antialiased bg-gray-900'>
      <head>
        <title>Mari Check</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </head>
      <body>
        <header className = 'border-b p-4'>
          <nav className='space-x-4'>
            <NavLink href = "/">Home</NavLink>
            <NavLink href = "/quotes">Quotes</NavLink>
          </nav>
        </header>
          {children}
      </body>
    </html>
  )
}
