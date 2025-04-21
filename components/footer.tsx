export function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="py-6 px-4 sm:px-6 lg:px-8 border-t border-white/10 bg-black/40">
      <div className="max-w-7xl mx-auto text-center text-gray-400 text-sm">
        <p>© {currentYear} Glenn Ange-Emmanuel NTOUTOUME. Tous droits réservés.</p>
      </div>
    </footer>
  )
}
