export default function Industries() {
  const items = [
    { title: 'Renewables', points: ['Utility solar', 'Rooftop PV', 'Battery storage'] },
    { title: 'Construction', points: ['Roofing QA/QC', 'Envelope testing', 'Moisture scans'] },
    { title: 'Utilities', points: ['Distribution lines', 'Substations', 'Transformers'] },
    { title: 'Manufacturing', points: ['Predictive maintenance', 'Thermal audits', 'Safety'] },
  ]
  return (
    <section id="industries" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-gray-900">Industries we serve</h2>
        <div className="mt-10 grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {items.map((it) => (
            <div key={it.title} className="rounded-xl border border-gray-200 p-5 bg-white">
              <h3 className="font-semibold text-gray-900">{it.title}</h3>
              <ul className="mt-3 space-y-1 text-sm text-gray-600 list-disc list-inside">
                {it.points.map(p => <li key={p}>{p}</li>)}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
