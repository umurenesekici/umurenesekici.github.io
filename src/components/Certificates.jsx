import { certificates } from '../constants'

export default function Certificates() {
  return (
    <section id="certificates" className="py-20 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="flex items-center gap-3 mb-10">
          <span className="font-mono text-(--accent-light) text-sm">04.</span>
          <h2 className="text-2xl lg:text-3xl font-bold text-(--text-primary)">Sertifikalar</h2>
          <span className="flex-1 h-px bg-(--border)"></span>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {certificates.map((cert, idx) => (
            <div
              key={idx}
              className="bg-(--surface) border border-(--border) rounded-lg p-5 hover:border-(--accent)/50 transition-colors duration-300"
            >
              <div className="flex items-start gap-3">
                <svg
                  className="w-5 h-5 mt-0.5 text-(--accent-light) shrink-0"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.8"
                >
                  <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" strokeLinejoin="round" strokeLinecap="round" />
                </svg>
                <div>
                  <p className="text-sm font-semibold text-(--text-primary) leading-snug">{cert.name}</p>
                  <p className="text-xs text-(--text-secondary) mt-1.5">{cert.issuer}</p>
                  <p className="text-xs font-mono text-(--accent-light) mt-1">{cert.date}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
