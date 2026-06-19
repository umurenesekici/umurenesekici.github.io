import { profile } from '../constants'

export default function Footer() {
  const year = new Date().getFullYear()
  return (
    <footer className="border-t border-(--border) py-8 px-6">
      <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-3">
        <p className="text-xs text-(--text-muted) font-mono">{profile.logo}</p>
        <p className="text-xs text-(--text-muted)">
          © {year} {profile.name}. Tüm hakları saklıdır.
        </p>
      </div>
    </footer>
  )
}
