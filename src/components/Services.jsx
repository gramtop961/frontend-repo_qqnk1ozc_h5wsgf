export default function Services() {
  const items = [
    {
      title: 'Solar Farm Inspection',
      desc: 'Detect dead strings, diode failures, soiling, and wiring issues across utility-scale arrays with high-resolution thermal mapping.',
      icon: '☀️'
    },
    {
      title: 'Roof Leak Detection',
      desc: 'Identify trapped moisture and insulation failures before they turn into costly leaks. Ideal for flat commercial roofs.',
      icon: '🏢'
    },
    {
      title: 'Powerline Hotspot Scan',
      desc: 'Pinpoint overheating insulators, splices, and connections along distribution lines for preventative maintenance.',
      icon: '⚡'
    },
    {
      title: 'Industrial Maintenance',
      desc: 'Monitor bearings, motors, and process equipment to catch abnormal heat signatures early.',
      icon: '🏭'
    }
  ]
  return (
    <section id="services" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-gray-900">Services</h2>
        <p className="mt-2 text-gray-600 max-w-2xl">Aerial thermography tailored to your assets and industry. Data you can act on, delivered fast.</p>
        <div className="mt-10 grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {items.map((it) => (
            <div key={it.title} className="rounded-xl border border-gray-200 p-5 hover:shadow-lg transition bg-white">
              <div className="text-3xl">{it.icon}</div>
              <h3 className="mt-3 font-semibold text-gray-900">{it.title}</h3>
              <p className="mt-2 text-sm text-gray-600">{it.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
