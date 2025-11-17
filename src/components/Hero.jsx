export default function Hero() {
  return (
    <section className="pt-28 pb-16 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid lg:grid-cols-12 gap-10 items-center">
        <div className="lg:col-span-7">
          <span className="inline-flex items-center gap-2 text-xs uppercase tracking-widest text-orange-300/90 bg-white/5 px-2.5 py-1 rounded">
            Thermal Drone Inspection
          </span>
          <h1 className="mt-4 text-4xl sm:text-5xl font-extrabold leading-tight">
            Find hotspots before they become failures
          </h1>
          <p className="mt-4 text-lg text-slate-300 max-w-2xl">
            Thermal Scout delivers fast, accurate infrared inspections for solar, roofing, powerlines, and industrial assets. Reduce downtime, prevent fires, and extend equipment life with aerial thermography.
          </p>
          <div className="mt-6 flex flex-wrap gap-3">
            <a href="#contact" className="px-5 py-3 rounded-md bg-orange-500 hover:bg-orange-600 text-white font-medium">Get a quote</a>
            <a href="#services" className="px-5 py-3 rounded-md bg-white/10 hover:bg-white/15 text-white font-medium">Explore services</a>
          </div>
          <ul className="mt-6 grid sm:grid-cols-3 gap-4 text-sm text-slate-300">
            <li className="bg-white/5 rounded p-3">FLIR-certified pilots</li>
            <li className="bg-white/5 rounded p-3">Same-day findings</li>
            <li className="bg-white/5 rounded p-3">Actionable PDF reports</li>
          </ul>
        </div>
        <div className="lg:col-span-5">
          <div className="relative group">
            <div className="absolute -inset-4 bg-orange-500/20 blur-2xl rounded-3xl group-hover:bg-orange-500/30 transition" />
            <img src="/thermal-mosaic.jpg" alt="Thermal mosaic" className="relative rounded-2xl ring-1 ring-white/10 shadow-2xl" />
          </div>
          <p className="mt-3 text-xs text-slate-400">Representative imagery for demonstration purposes.</p>
        </div>
      </div>
    </section>
  )
}
