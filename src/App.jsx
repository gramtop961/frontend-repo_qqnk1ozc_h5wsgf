import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Services from './components/Services'
import Industries from './components/Industries'
import Process from './components/Process'
import Contact from './components/Contact'

function App() {
  return (
    <div className="min-h-screen bg-white text-gray-900">
      <Navbar />
      <main>
        <Hero />
        <Services />
        <Industries />
        <Process />
        <Contact />
        <footer className="py-10 border-t border-gray-200">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row items-center justify-between gap-4">
            <p className="text-sm text-gray-600">© {new Date().getFullYear()} Thermal Scout. All rights reserved.</p>
            <a href="#contact" className="inline-flex items-center px-3 py-1.5 rounded-md bg-gray-900 text-white hover:bg-black/90">Get a quote</a>
          </div>
        </footer>
      </main>
    </div>
  )
}

export default App
