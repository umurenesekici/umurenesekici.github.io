import { stats, profile } from '../constants'

export default function About() {
  return (
    <section id="about" className="py-20 px-6 bg-(--bg-secondary)">
      <div className="max-w-7xl mx-auto">
        <div className="flex items-center gap-3 mb-10">
          <span className="font-mono text-(--accent-light) text-sm">01.</span>
          <h2 className="text-2xl lg:text-3xl font-bold text-(--text-primary)">Hakkımda</h2>
          <span className="flex-1 h-px bg-(--border)"></span>
        </div>

        <div className="grid lg:grid-cols-3 gap-12">
          <div className="lg:col-span-2 space-y-5 text-(--text-secondary) text-base lg:text-lg leading-relaxed">
            <p>{profile.bio}</p>
            <p>
              Papilon Savunma Teknoloji ve Ticaret A.Ş. bünyesinde sistem mühendisi olarak başladığım kariyerime,
              şu anda çözüm mimarisi uzmanı olarak devam ediyorum. Bu süreçte uluslararası ölçekli güvenlik ve
              biyometrik tanıma sistemleri üzerinde çalışarak, sistem mimarisi tasarımından sahada uygulanan
              entegrasyon süreçlerine kadar geniş bir deneyim kazandım.
            </p>
            <p>
              Linux ve Windows ortamlarındaki sistem yönetiminin yanı sıra siber güvenlik, etik hackleme ve adli
              bilişim alanlarında aldığım eğitimlerle teknik bilgimi sürekli güçlendiriyorum. Hedefim, güvenli,
              ölçeklenebilir ve kesintisiz çalışan altyapılar tasarlamak.
            </p>
          </div>

          <div className="grid grid-cols-2 gap-4">
            {stats.map((stat, idx) => (
              <div
                key={idx}
                className="bg-(--surface) border border-(--border) rounded-lg p-5 text-center"
              >
                <p className="text-2xl lg:text-3xl font-bold text-(--accent-light) font-mono">{stat.value}</p>
                <p className="text-xs text-(--text-secondary) mt-1.5 leading-snug">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
