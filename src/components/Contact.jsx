import { profile, contactText, sectionTitles } from '../constants'
import { useLanguage } from '../context/LanguageContext'

export default function Contact() {
  const { lang } = useLanguage()
  const t = sectionTitles[lang]

  return (
    <section id="contact" className="py-16 sm:py-20 px-4 sm:px-6">
      <div className="max-w-4xl mx-auto text-center">
        <div className="flex items-center gap-3 mb-6 justify-center">
          <span className="font-mono text-[var(--accent-light)] text-sm">06.</span>
          <h2 className="text-xl sm:text-2xl lg:text-3xl font-bold text-[var(--text-primary)]">{t.contact}</h2>
        </div>

        <p className="text-[var(--text-secondary)] max-w-xl mx-auto mb-8 sm:mb-10 leading-relaxed text-sm sm:text-base">
          {contactText[lang]}
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <a href={`mailto:${profile.email}`} className="flex items-center gap-3 px-6 py-3.5 bg-[var(--surface)] border border-[var(--border)] rounded-lg hover:border-[var(--accent)]/60 transition-colors duration-300 w-full sm:w-auto">
            <svg className="w-5 h-5 text-[var(--accent-light)]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
              <rect x="3" y="5" width="18" height="14" rx="2" />
              <path d="M3 7l9 6 9-6" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
            <span className="text-sm text-[var(--text-primary)] font-mono break-all">{profile.email}</span>
          </a>
          <a href={profile.linkedin} target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 px-6 py-3.5 bg-[var(--surface)] border border-[var(--border)] rounded-lg hover:border-[var(--accent)]/60 transition-colors duration-300 w-full sm:w-auto">
            <svg className="w-5 h-5 text-[var(--accent-light)]" viewBox="0 0 24 24" fill="currentColor">
              <path d="M20.45 20.45h-3.55v-5.57c0-1.33-.02-3.04-1.85-3.04-1.85 0-2.14 1.45-2.14 2.94v5.67H9.36V9h3.41v1.56h.05c.48-.9 1.64-1.85 3.38-1.85 3.6 0 4.27 2.37 4.27 5.45v6.29zM5.34 7.43a2.07 2.07 0 1 1 0-4.13 2.07 2.07 0 0 1 0 4.13zM7.12 20.45H3.56V9h3.56v11.45z" />
            </svg>
            <span className="text-sm text-[var(--text-primary)] font-mono">LinkedIn</span>
          </a>
        </div>

        <p className="text-xs text-[var(--text-muted)] mt-10 font-mono">{t.locationLabel}: {profile.location}</p>
      </div>
    </section>
  )
}
