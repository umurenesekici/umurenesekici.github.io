import { useState } from 'react'
import { navLinks, profile } from '../constants'
import { useLanguage } from '../context/LanguageContext'

export default function Navbar() {
  const [open, setOpen] = useState(false)
  const { lang, toggleLang } = useLanguage()
  const links = navLinks[lang]

  return (
    <nav className="fixed top-0 left-0 w-full bg-[var(--bg-primary)]/85 backdrop-blur-md z-50 border-b border-[var(--border)]">
      <div className="max-w-7xl mx-auto flex items-center justify-between px-4 sm:px-6 py-4">
        <a href="#home" className="text-lg sm:text-xl font-bold text-[var(--accent-light)] font-mono tracking-wider">
          {profile.logo}
        </a>

        <div className="hidden md:flex items-center gap-7 text-sm font-mono">
          {links.map((link, idx) => (
            <a key={idx} href={link.href} className="text-[var(--text-secondary)] hover:text-[var(--accent-light)] transition-colors duration-200">
              {link.label}
            </a>
          ))}
        </div>

        <div className="flex items-center gap-2 sm:gap-3">
          <button onClick={toggleLang} className="text-xs font-mono px-3 py-1.5 rounded border border-[var(--border)] text-[var(--accent-light)] hover:border-[var(--accent)]/60 hover:bg-[var(--accent-dim)] transition-all duration-200" aria-label="Toggle language">
            {lang === 'tr' ? 'EN' : 'TR'}
          </button>

          <button onClick={() => setOpen(!open)} className="md:hidden text-[var(--text-primary)] p-2" aria-label="Toggle menu">
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
      </div>

      {open && (
        <div className="md:hidden flex flex-col gap-1 px-4 sm:px-6 pb-4 border-t border-[var(--border)] bg-[var(--bg-primary)]">
          {links.map((link, idx) => (
            <a key={idx} href={link.href} onClick={() => setOpen(false)} className="py-3.5 text-sm font-mono text-[var(--text-secondary)] hover:text-[var(--accent-light)] border-b border-[var(--border)] last:border-b-0">
              {link.label}
            </a>
          ))}
        </div>
      )}
    </nav>
  )
}
