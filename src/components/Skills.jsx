import { skillGroups, sectionTitles } from '../constants'
import { useLanguage } from '../context/LanguageContext'

export default function Skills() {
  const { lang } = useLanguage()
  const t = sectionTitles[lang]
  const groups = skillGroups[lang]

  return (
    <section id="skills" className="py-16 sm:py-20 px-4 sm:px-6">
      <div className="max-w-7xl mx-auto">
        <div className="flex items-center gap-3 mb-8 sm:mb-10">
          <span className="font-mono text-[var(--accent-light)] text-xs border border-[var(--border)] rounded px-2 py-1">02</span>
          <h2 className="text-xl sm:text-2xl lg:text-3xl font-bold text-[var(--text-primary)]">{t.skills}</h2>
          <span className="flex-1 h-px bg-[var(--border)]"></span>
        </div>

        <div className="grid sm:grid-cols-2 xl:grid-cols-3 gap-4 sm:gap-5">
          {groups.map((group, idx) => (
            <div key={idx} className="bg-[var(--surface)] border border-[var(--border)] rounded-lg p-5 sm:p-6 transition-all duration-300 hover:-translate-y-1 hover:border-[var(--border-strong)] hover:shadow-lg hover:shadow-black/30 active:-translate-y-1 active:border-[var(--border-strong)] active:shadow-lg active:shadow-black/30">
              <h3 className="text-[var(--accent-light)] font-mono text-xs mb-4 tracking-widest uppercase">
                {group.category}
              </h3>
              <ul className="space-y-2.5">
                {group.items.map((item, i) => (
                  <li key={i} className="flex items-start gap-2.5 text-sm text-[var(--text-secondary)]">
                    <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-[var(--accent)] flex-shrink-0"></span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
