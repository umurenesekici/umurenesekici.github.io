import { experience, sectionTitles } from '../constants'
import { useLanguage } from '../context/LanguageContext'

export default function Experience() {
  const { lang } = useLanguage()
  const t = sectionTitles[lang]
  const items = experience[lang]

  return (
    <section id="experience" className="py-16 sm:py-20 px-4 sm:px-6 bg-[var(--bg-secondary)]">
      <div className="max-w-7xl mx-auto">
        <div className="flex items-center gap-3 mb-8 sm:mb-10">
          <span className="font-mono text-[var(--accent-light)] text-xs border border-[var(--border)] rounded px-2 py-1">03</span>
          <h2 className="text-xl sm:text-2xl lg:text-3xl font-bold text-[var(--text-primary)]">{t.experience}</h2>
          <span className="flex-1 h-px bg-[var(--border)]"></span>
        </div>

        <div className="relative max-w-3xl">
          <div className="absolute left-[7px] top-2 bottom-2 w-px bg-[var(--border)]"></div>

          <div className="space-y-8 sm:space-y-10">
            {items.map((job, idx) => (
              <div key={idx} className="relative pl-7 sm:pl-8">
                <span
                  className={`absolute left-0 top-1.5 w-3.5 h-3.5 rounded-full border-2 ${
                    job.current
                      ? 'bg-[var(--accent)] border-[var(--accent-light)]'
                      : 'bg-[var(--bg-secondary)] border-[var(--border-strong)]'
                  }`}
                ></span>

                <div className="bg-[var(--surface)] border border-[var(--border)] rounded-lg p-5 sm:p-6 transition-all duration-300 hover:-translate-y-1 hover:border-[var(--border-strong)] hover:shadow-lg hover:shadow-black/30">
                  <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-1 mb-2">
                    <h3 className="text-base sm:text-lg font-semibold text-[var(--text-primary)]">{job.role}</h3>
                    <span className="font-mono text-xs text-[var(--accent-light)]">{job.period}</span>
                  </div>
                  <p className="text-sm text-[var(--text-secondary)] mb-4">
                    {job.company} — {job.location}
                  </p>
                  <ul className="space-y-2">
                    {job.points.map((point, i) => (
                      <li key={i} className="flex items-start gap-2.5 text-sm text-[var(--text-secondary)] leading-relaxed">
                        <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-[var(--accent)] flex-shrink-0"></span>
                        {point}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
