import { certificates, sectionTitles } from '../constants'
import { useLanguage } from '../context/LanguageContext'

export default function Certificates() {
  const { lang } = useLanguage()
  const t = sectionTitles[lang]

  return (
    <section id="certificates" className="py-16 sm:py-20 px-4 sm:px-6">
      <div className="max-w-7xl mx-auto">
        <div className="flex items-center gap-3 mb-8 sm:mb-10">
          <span className="font-mono text-[var(--accent-light)] text-xs border border-[var(--border)] rounded px-2 py-1">04</span>
          <h2 className="text-xl sm:text-2xl lg:text-3xl font-bold text-[var(--text-primary)]">{t.certificates}</h2>
          <span className="flex-1 h-px bg-[var(--border)]"></span>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-4">
          {certificates.map((cert, idx) => (
            <div key={idx} className="bg-[var(--surface)] border border-[var(--border)] rounded-lg p-4 sm:p-5 transition-all duration-300 hover:-translate-y-1 hover:border-[var(--accent)]/50 hover:shadow-lg hover:shadow-black/30">
              <div className="flex items-start gap-3">
                <svg className="w-5 h-5 mt-0.5 text-[var(--accent-light)] flex-shrink-0" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
                  <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" strokeLinejoin="round" strokeLinecap="round" />
                </svg>
                <div>
                  <p className="text-sm font-semibold text-[var(--text-primary)] leading-snug">{cert.name}</p>
                  <p className="text-xs text-[var(--text-secondary)] mt-1.5">{cert.issuer}</p>
                  <p className="text-xs font-mono text-[var(--accent-light)] mt-1">{cert.date}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
