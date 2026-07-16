import { heroTags, profile, sectionTitles } from '../constants'
import { useLanguage } from '../context/LanguageContext'

export default function Hero() {
  const { lang } = useLanguage()
  const t = sectionTitles[lang]

  return (
    <section id="home" className="relative pt-28 sm:pt-32 lg:pt-40 pb-16 sm:pb-20 px-4 sm:px-6 overflow-hidden">
      <div className="pointer-events-none absolute inset-0 z-0">
        <div className="absolute left-1/2 top-0 h-[36rem] w-[36rem] -translate-x-1/2 -translate-y-1/3 rounded-full bg-[var(--accent)]/25 blur-[110px]"></div>
        <div
          className="absolute inset-0"
          style={{
            backgroundImage:
              'linear-gradient(var(--border-strong) 1px, transparent 1px), linear-gradient(90deg, var(--border-strong) 1px, transparent 1px)',
            backgroundSize: '48px 48px',
            opacity: 0.3,
            WebkitMaskImage: 'linear-gradient(to bottom, black, transparent 55%)',
            maskImage: 'linear-gradient(to bottom, black, transparent 55%)',
          }}
        ></div>
        <div className="absolute inset-x-0 top-0 h-[28rem] overflow-hidden [mask-image:linear-gradient(to_bottom,transparent,black_15%,black_85%,transparent)]">
          <div className="absolute inset-x-0 h-px bg-gradient-to-r from-transparent via-[var(--accent-light)] to-transparent shadow-[0_0_6px_1px_var(--accent)] animate-[scan-sweep_6s_ease-in-out_infinite]"></div>
        </div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto flex flex-col items-center text-center gap-6 sm:gap-8 animate-[fade-up_0.8s_ease-out]">
        <div className="flex-1 space-y-5 sm:space-y-6 max-w-3xl">
          <p className="text-[var(--accent-light)] font-mono text-xs sm:text-sm tracking-wide uppercase">{t.heroLabel}</p>
          <h1 className="text-3xl sm:text-4xl lg:text-6xl font-extrabold text-[var(--text-primary)] leading-tight tracking-tight">
            {profile.name}
          </h1>
          <h2 className="text-xl sm:text-2xl lg:text-3xl font-semibold text-[var(--text-secondary)] leading-tight">
            {profile.title[lang]}
          </h2>
          <p className="max-w-2xl text-sm sm:text-base lg:text-lg text-[var(--text-secondary)] mx-auto leading-relaxed">
            {profile.bio[lang]}
          </p>
          <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-2.5 pt-2">
            {heroTags.map((tag, index) => (
              <span key={index} className="px-2.5 sm:px-3 py-1.5 bg-[var(--surface)] border border-[var(--border)] text-[10px] sm:text-xs font-mono text-[var(--accent-light)] rounded hover:border-[var(--accent)]/60 transition-all duration-300">
                {tag}
              </span>
            ))}
          </div>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4 pt-4">
            <a href="#projects" className="px-7 sm:px-8 py-3.5 bg-[var(--accent)] text-white font-semibold rounded hover:bg-[var(--accent-light)] transition-all w-full sm:w-auto text-center text-sm sm:text-base">
              {t.exploreCta}
            </a>
            <a href="#contact" className="px-7 sm:px-8 py-3.5 border border-[var(--accent)]/50 text-[var(--accent-light)] font-semibold rounded hover:bg-[var(--accent-dim)] transition-all w-full sm:w-auto text-center text-sm sm:text-base">
              {t.contactCta}
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
