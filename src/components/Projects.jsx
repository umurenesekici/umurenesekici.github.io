import { projects, projectsNote, sectionTitles } from '../constants'
import { useLanguage } from '../context/LanguageContext'

const icons = {
  shield: (
    <path d="M12 2l8 4v6c0 5-3.5 8.5-8 10-4.5-1.5-8-5-8-10V6l8-4z" strokeLinejoin="round" strokeLinecap="round" />
  ),
  fingerprint: (
    <>
      <path d="M12 11a3 3 0 0 1 3 3v2a3 3 0 0 1-3 3 3 3 0 0 1-3-3" strokeLinecap="round" />
      <path d="M8 14a4 4 0 0 1 8 0" strokeLinecap="round" />
      <path d="M6 12a6 6 0 0 1 12 0v3" strokeLinecap="round" />
      <path d="M4 11a8 8 0 0 1 16 0" strokeLinecap="round" />
    </>
  ),
  face: (
    <>
      <circle cx="12" cy="12" r="9" />
      <path d="M9 10h.01M15 10h.01" strokeLinecap="round" />
      <path d="M9 15c.7.7 1.8 1 3 1s2.3-.3 3-1" strokeLinecap="round" />
    </>
  ),
  id: (
    <>
      <rect x="3" y="5" width="18" height="14" rx="2" />
      <circle cx="8.5" cy="11" r="1.8" />
      <path d="M5.5 16c.5-1.6 1.7-2.4 3-2.4s2.5.8 3 2.4" strokeLinecap="round" />
      <path d="M14 9.5h5M14 13h5" strokeLinecap="round" />
    </>
  ),
}

export default function Projects() {
  const { lang } = useLanguage()
  const t = sectionTitles[lang]

  return (
    <section id="projects" className="py-16 sm:py-20 px-4 sm:px-6 bg-[var(--bg-secondary)]">
      <div className="max-w-7xl mx-auto">
        <div className="flex items-center gap-3 mb-6">
          <span className="font-mono text-[var(--accent-light)] text-xs border border-[var(--border)] rounded px-2 py-1">05</span>
          <h2 className="text-xl sm:text-2xl lg:text-3xl font-bold text-[var(--text-primary)]">{t.projects}</h2>
          <span className="flex-1 h-px bg-[var(--border)]"></span>
        </div>

        <p className="text-[var(--text-secondary)] text-sm lg:text-base max-w-3xl mb-8 sm:mb-10 leading-relaxed">
          {projectsNote[lang]}
        </p>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5">
          {projects.map((project, idx) => (
            <div key={idx} className="bg-[var(--surface)] border border-[var(--border)] rounded-lg p-5 sm:p-6 transition-all duration-300 hover:-translate-y-1 hover:border-[var(--accent)]/50 hover:shadow-lg hover:shadow-black/30 active:-translate-y-1 active:border-[var(--accent)]/50 active:shadow-lg active:shadow-black/30 flex flex-col">
              <div className="flex items-center justify-between mb-4">
                <svg className="w-6 h-6 sm:w-7 sm:h-7 text-[var(--accent-light)]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6">
                  {icons[project.icon]}
                </svg>
                <span className="text-xs font-mono px-2.5 py-1 rounded bg-[var(--accent-dim)] text-[var(--accent-light)]">
                  {project.country}
                </span>
              </div>

              <h3 className="text-sm sm:text-base font-semibold text-[var(--text-primary)] mb-2 leading-snug">
                {project.name}
              </h3>

              <p className="text-sm text-[var(--text-secondary)] leading-relaxed mb-4 flex-1">
                {project.description[lang]}
              </p>

              <div className="flex flex-wrap gap-1.5 mt-auto pt-3 border-t border-[var(--border)]">
                {project.tech.map((tag, i) => (
                  <span key={i} className="text-[10px] font-mono px-2 py-0.5 rounded bg-[var(--bg-primary)] border border-[var(--border)] text-[var(--text-muted)]">
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>

        <p className="text-xs text-[var(--text-muted)] mt-8">{t.confidential}</p>
      </div>
    </section>
  )
}
