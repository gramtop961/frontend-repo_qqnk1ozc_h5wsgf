export default function Process() {
  const steps = [
    { n: 1, t: 'Plan', d: 'We scope your site and compliance needs, then plan safe flight paths and capture parameters.' },
    { n: 2, t: 'Fly', d: 'Certified pilots capture thermal and RGB data using high-resolution sensors.' },
    { n: 3, t: 'Analyze', d: 'We process mosaics, flag anomalies, and validate findings against operating conditions.' },
    { n: 4, t: 'Report', d: 'Receive a clear, prioritized report with geo-tagged issues, severity, and recommendations.' },
  ]
  return (
    <section id="process" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-gray-900">How it works</h2>
        <div className="mt-10 grid md:grid-cols-4 gap-6">
          {steps.map(s => (
            <div key={s.n} className="rounded-xl border border-gray-200 p-5 bg-white">
              <div className="w-8 h-8 rounded-full bg-orange-500 text-white grid place-items-center font-semibold">{s.n}</div>
              <h3 className="mt-3 font-semibold text-gray-900">{s.t}</h3>
              <p className="mt-2 text-sm text-gray-600">{s.d}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
