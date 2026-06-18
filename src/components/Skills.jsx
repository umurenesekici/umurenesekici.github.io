import { skillGroups } from '../constants'

export default function Skills() {
  return (
    <section id="skills" className="py-20 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="flex items-center gap-3 mb-10">
          <span className="font-mono text-[var(--accent-light)] text-sm">02.</span>
          <h2 className="text-2xl lg:text-3xl font-bold text-[var(--text-primary)]">Yetenekler</h2>
          <span className="flex-1 h-px bg-[var(--border)]"></span>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {skillGroups.map((group, idx) => (
            <div
              key={idx}
              className="bg-[var(--surface)] border border-[var(--border)] rounded-lg p-6 hover:border-[var(--border-strong)] transition-colors duration-300"
            >
              <h3 className="text-[var(--accent-light)] font-mono text-sm mb-4 tracking-wide">
                {group.category}
              </h3>
              <ul className="space-y-3">
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
