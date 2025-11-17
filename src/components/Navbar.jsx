import { Menu } from 'lucide-react'

export default function Navbar() {
  return (
    <header className="fixed top-0 left-0 right-0 z-30 backdrop-blur bg-white/70 border-b border-black/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        <a href="#" className="flex items-center gap-2">
          <div className="h-9 w-9 rounded-md bg-gradient-to-br from-orange-500 to-rose-600 grid place-items-center text-white font-bold">TS</div>
          <span className="font-semibold text-gray-900">Thermal Scout</span>
        </a>
        <nav className="hidden md:flex items-center gap-8 text-sm text-gray-700">
          <a href="#services" className="hover:text-gray-900">Services</a>
          <a href="#industries" className="hover:text-gray-900">Industries</a>
          <a href="#process" className="hover:text-gray-900">Process</a>
          <a href="#contact" className="hover:text-gray-900">Contact</a>
          <a href="/test" className="inline-flex items-center px-3 py-1.5 rounded-md bg-gray-900 text-white hover:bg-black/90">System Check</a>
        </nav>
        <button className="md:hidden p-2 rounded-md hover:bg-black/5" aria-label="Open menu">
          <Menu className="h-6 w-6" />
        </button>
      </div>
    </header>
  )
}
