import { useState } from 'react'
import { navLinks, profile } from '../constants'

export default function Navbar() {
  const [open, setOpen] = useState(false)

  return (
    <nav className="fixed top-0 left-0 w-full bg-[var(--bg-primary)]/85 backdrop-blur-md z-50 border-b border-[var(--border)]">
      <div className="max-w-7xl mx-auto flex items-center justify-between px-6 py-4">
        <a href="#home" className="text-xl font-bold text-[var(--accent-light)] font-mono tracking-wider">
          {profile.logo}
        </a>

        <div className="hidden md:flex items-center gap-8 text-sm font-mono">
          {navLinks.map((link, idx) => (
            <a
              key={idx}
              href={link.href}
              className="text-[var(--text-secondary)] hover:text-[var(--accent-light)] transition-colors duration-200"
            >
              {link.label}
            </a>
          ))}
        </div>

        <button
          onClick={() => setOpen(!open)}
          className="md:hidden text-[var(--text-primary)] p-2"
          aria-label="Menüyü aç/kapat"
        >
          {open ? (
            <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M6 6l12 12M18 6L6 18" strokeLinecap="round" />
            </svg>
          ) : (
            <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M3 6h18M3 12h18M3 18h18" strokeLinecap="round" />
            </svg>
          )}
        </button>
      </div>

      {open && (
        <div className="md:hidden flex flex-col gap-1 px-6 pb-4 border-t border-[var(--border)] bg-[var(--bg-primary)]">
          {navLinks.map((link, idx) => (
            <a
              key={idx}
              href={link.href}
              onClick={() => setOpen(false)}
              className="py-3 text-sm font-mono text-[var(--text-secondary)] hover:text-[var(--accent-light)] border-b border-[var(--border)] last:border-b-0"
            >
              {link.label}
            </a>
          ))}
        </div>
      )}
    </nav>
  )
}
