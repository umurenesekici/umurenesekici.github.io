import { stats, profile, aboutText, sectionTitles } from '../constants'
import { useLanguage } from '../context/LanguageContext'

export default function About() {
  const { lang } = useLanguage()
  const t = sectionTitles[lang]

  return (
    <section id="about" className="py-16 sm:py-20 px-4 sm:px-6 bg-[var(--bg-secondary)]">
      <div className="max-w-7xl mx-auto">
        <div className="flex items-center gap-3 mb-8 sm:mb-10">
          <span className="font-mono text-[var(--accent-light)] text-sm">01.</span>
          <h2 className="text-xl sm:text-2xl lg:text-3xl font-bold text-[var(--text-primary)]">{t.about}</h2>
          <span className="flex-1 h-px bg-[var(--border)]"></span>
        </div>

        <div className="grid lg:grid-cols-3 gap-8 sm:gap-12">
          <div className="lg:col-span-2 space-y-4 sm:space-y-5 text-[var(--text-secondary)] text-sm sm:text-base lg:text-lg leading-relaxed">
            <p>{profile.bio[lang]}</p>
            {aboutText[lang].map((para, idx) => (
              <p key={idx}>{para}</p>
            ))}
          </div>

          <div className="grid grid-cols-2 gap-3 sm:gap-4">
            {stats[lang].map((stat, idx) => (
              <div key={idx} className="bg-[var(--surface)] border border-[var(--border)] rounded-lg p-4 sm:p-5 text-center">
                <p className="text-xl sm:text-2xl lg:text-3xl font-bold text-[var(--accent-light)] font-mono">{stat.value}</p>
                <p className="text-[11px] sm:text-xs text-[var(--text-secondary)] mt-1.5 leading-snug">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
