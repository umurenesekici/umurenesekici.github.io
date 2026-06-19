import { heroTags, profile } from '../constants'

export default function Hero() {
  return (
    <section id="home" className="pt-32 lg:pt-40 pb-20 px-6">
      <div className="max-w-7xl mx-auto flex flex-col items-center text-center gap-8">
        <div className="flex-1 space-y-6 max-w-3xl">
          <p className="text-(--accent-light) font-mono text-sm tracking-wide">Merhaba, ben</p>
          <h1 className="text-4xl lg:text-6xl font-extrabold text-(--text-primary) leading-tight tracking-tight">
            {profile.name}
          </h1>
          <h2 className="text-2xl lg:text-3xl font-semibold text-(--text-secondary) leading-tight">
            {profile.title}
          </h2>
          <p className="max-w-2xl text-base lg:text-lg text-(--text-secondary) mx-auto leading-relaxed">
            {profile.bio}
          </p>

          <div className="flex flex-wrap items-center justify-center gap-2.5 pt-2">
            {heroTags.map((tag, index) => (
              <span
                key={index}
                className="px-3 py-1.5 bg-(--surface) border border-(--border) text-xs font-mono text-(--accent-light) rounded hover:border-(--accent)/60 transition-all duration-300"
              >
                {tag}
              </span>
            ))}
          </div>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
            <a
              href="#projects"
              className="px-8 py-3.5 bg-(--accent) text-white font-semibold rounded hover:bg-(--accent-light) transition-all w-full sm:w-auto text-center"
            >
              Projelerimi İncele
            </a>
            <a
              href="#contact"
              className="px-8 py-3.5 border border-(--accent)/50 text-(--accent-light) font-semibold rounded hover:bg-(--accent-dim) transition-all w-full sm:w-auto text-center"
            >
              Bana Ulaşın
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
