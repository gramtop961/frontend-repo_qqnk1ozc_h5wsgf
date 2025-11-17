import { useState } from 'react'

export default function Contact() {
  const [status, setStatus] = useState('')

  const submit = async (e) => {
    e.preventDefault()
    setStatus('Sending...')
    const form = new FormData(e.currentTarget)
    const payload = Object.fromEntries(form.entries())
    payload.consent = !!payload.consent

    try {
      const baseUrl = import.meta.env.VITE_BACKEND_URL || 'http://localhost:8000'
      const res = await fetch(`${baseUrl}/api/inquiries`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload)
      })
      const data = await res.json()
      if (res.ok && data.success) {
        setStatus('Thanks! We\'ll get back to you shortly.')
        e.currentTarget.reset()
      } else {
        setStatus(data.detail || 'Something went wrong. Please try again.')
      }
    } catch (err) {
      setStatus(err.message)
    }
  }

  return (
    <section id="contact" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-10 items-start">
          <div>
            <h2 className="text-3xl font-bold text-gray-900">Get a quote</h2>
            <p className="mt-2 text-gray-600 max-w-prose">Tell us about your site and objectives. We\'ll propose the optimal capture plan and turnaround time.</p>
            <ul className="mt-6 space-y-2 text-sm text-gray-700">
              <li>• Licensed, insured pilots</li>
              <li>• FLIR-certified thermographers</li>
              <li>• Nationwide coverage</li>
            </ul>
          </div>
          <form onSubmit={submit} className="bg-white rounded-xl border border-gray-200 p-6 grid grid-cols-1 gap-4">
            <div className="grid sm:grid-cols-2 gap-4">
              <div>
                <label className="text-sm text-gray-700">Name</label>
                <input name="name" required className="mt-1 w-full rounded-md border-gray-300 focus:border-orange-500 focus:ring-orange-500" />
              </div>
              <div>
                <label className="text-sm text-gray-700">Email</label>
                <input name="email" type="email" required className="mt-1 w-full rounded-md border-gray-300 focus:border-orange-500 focus:ring-orange-500" />
              </div>
            </div>
            <div className="grid sm:grid-cols-2 gap-4">
              <div>
                <label className="text-sm text-gray-700">Phone</label>
                <input name="phone" className="mt-1 w-full rounded-md border-gray-300 focus:border-orange-500 focus:ring-orange-500" />
              </div>
              <div>
                <label className="text-sm text-gray-700">Company</label>
                <input name="company" className="mt-1 w-full rounded-md border-gray-300 focus:border-orange-500 focus:ring-orange-500" />
              </div>
            </div>
            <div>
              <label className="text-sm text-gray-700">Service</label>
              <select name="service" className="mt-1 w-full rounded-md border-gray-300 focus:border-orange-500 focus:ring-orange-500">
                <option>Solar Farm Inspection</option>
                <option>Roof Leak Detection</option>
                <option>Powerline Hotspot Scan</option>
                <option>Industrial Maintenance</option>
                <option>Custom</option>
              </select>
            </div>
            <div>
              <label className="text-sm text-gray-700">Project details</label>
              <textarea name="message" rows="4" className="mt-1 w-full rounded-md border-gray-300 focus:border-orange-500 focus:ring-orange-500" />
            </div>
            <label className="flex items-center gap-2 text-sm text-gray-700">
              <input type="checkbox" name="consent" className="rounded border-gray-300 text-orange-600 focus:ring-orange-500" />
              I agree to be contacted about my inquiry.
            </label>
            <button className="mt-2 inline-flex justify-center px-5 py-3 rounded-md bg-orange-500 hover:bg-orange-600 text-white font-medium">Send request</button>
            {status && <p className="text-sm text-gray-700">{status}</p>}
          </form>
        </div>
      </div>
    </section>
  )
}
