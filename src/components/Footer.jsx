import { profile, sectionTitles } from '../constants'
import { useLanguage } from '../context/LanguageContext'

export default function Footer() {
  const { lang } = useLanguage()
  const t = sectionTitles[lang]
  const year = new Date().getFullYear()
  return (
    <footer className="border-t border-[var(--border)] py-6 sm:py-8 px-4 sm:px-6">
      <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-3 text-center sm:text-left">
        <p className="text-xs text-[var(--text-muted)] font-mono">{profile.logo}</p>
        <p className="text-xs text-[var(--text-muted)]">
          © {year} {profile.name}. {t.copyright}
        </p>
      </div>
    </footer>
  )
}
