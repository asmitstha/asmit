'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'

export default function Header({ menuOpen, toggleMenu }) {
  const pathname = usePathname()

  const isActive = (href) => pathname === href ? 'nav-active' : ''

  return (
    <header className="site-header">
      <div className="header-inner">
        <Link href="/" className="site-logo" aria-label="Asmit Shrestha — Home">
          AS
        </Link>

        <nav className="site-nav" aria-label="Primary navigation">
          <Link href="/" className={isActive('/')}>Home</Link>
          <Link href="/portfolio" className={isActive('/portfolio')}>Portfolio</Link>
          <Link href="/social-life" className={isActive('/social-life')}>Social Life</Link>
        </nav>

        <button
          className={`hamburger ${menuOpen ? 'is-open' : ''}`}
          onClick={toggleMenu}
          aria-label={menuOpen ? 'Close menu' : 'Open menu'}
          aria-expanded={menuOpen}
        >
          <span />
          <span />
          <span />
        </button>
      </div>
    </header>
  )
}
