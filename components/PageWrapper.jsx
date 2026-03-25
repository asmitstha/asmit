'use client'

import { useState } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import Header from './Header'

export default function PageWrapper({ children }) {
  const [menuOpen, setMenuOpen] = useState(false)
  const pathname = usePathname()
  const toggleMenu = () => setMenuOpen((p) => !p)
  const closeMenu = () => setMenuOpen(false)

  const isActive = (href) => pathname === href ? 'nav-active' : ''

  return (
    <>
      <Header menuOpen={menuOpen} toggleMenu={toggleMenu} />

      {menuOpen && (
        <div className="menu-overlay" role="dialog" aria-modal="true" aria-label="Navigation menu">
          <nav className="menu-overlay-nav">
            <Link href="/" className={isActive('/')} onClick={closeMenu}>
              Home
            </Link>
            <Link href="/portfolio" className={isActive('/portfolio')} onClick={closeMenu}>
              Portfolio
            </Link>
            <Link href="/social-life" className={isActive('/social-life')} onClick={closeMenu}>
              Social Life
            </Link>
          </nav>

          <div className="menu-overlay-footer">
            <a href="mailto:asmitshrestha43@gmail.com">Email</a>
            <a href="tel:+9779860317560">Phone</a>
          </div>
        </div>
      )}

      <main className="main-content">{children}</main>
    </>
  )
}
