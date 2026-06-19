import { experience } from '../constants'

export default function Experience() {
  return (
    <section id="experience" className="py-20 px-6 bg-(--bg-secondary)">
      <div className="max-w-7xl mx-auto">
        <div className="flex items-center gap-3 mb-10">
          <span className="font-mono text-(--accent-light) text-sm">03.</span>
          <h2 className="text-2xl lg:text-3xl font-bold text-(--text-primary)">Deneyim</h2>
          <span className="flex-1 h-px bg-(--border)"></span>
        </div>

        <div className="relative max-w-3xl">
          <div className="absolute left-[7px] top-2 bottom-2 w-px bg-(--border)"></div>

          <div className="space-y-10">
            {experience.map((job, idx) => (
              <div key={idx} className="relative pl-8">
                <span
                  className={`absolute left-0 top-1.5 w-3.5 h-3.5 rounded-full border-2 ${
                    job.current
                      ? 'bg-(--accent) border-(--accent-light)'
                      : 'bg-(--bg-secondary) border-(--border-strong)'
                  }`}
                ></span>

                <div className="bg-(--surface) border border-(--border) rounded-lg p-6 hover:border-(--border-strong) transition-colors duration-300">
                  <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-1 mb-2">
                    <h3 className="text-lg font-semibold text-(--text-primary)">{job.role}</h3>
                    <span className="font-mono text-xs text-(--accent-light)">{job.period}</span>
                  </div>
                  <p className="text-sm text-(--text-secondary) mb-4">
                    {job.company} — {job.location}
                  </p>
                  <ul className="space-y-2">
                    {job.points.map((point, i) => (
                      <li key={i} className="flex items-start gap-2.5 text-sm text-(--text-secondary) leading-relaxed">
                        <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-(--accent) shrink-0"></span>
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
