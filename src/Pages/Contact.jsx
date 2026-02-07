import React, { useState } from 'react'

export default function Contact() {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [message, setMessage] = useState('')
  const [status, setStatus] = useState(null) // null | 'sending' | 'success' | 'error'
  const [errors, setErrors] = useState({})

  function validate() {
    const e = {}
    if (!name.trim()) e.name = 'Name is required'
    if (!email.trim()) e.email = 'Email is required'
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) e.email = 'Enter a valid email'
    if (!message.trim()) e.message = 'Message is required'
    setErrors(e)
    return Object.keys(e).length === 0
  }

  async function handleSubmit(ev) {
    ev.preventDefault()
    if (!validate()) return
    setStatus('sending')
    try {
      // Simulate submit — replace with real endpoint as needed
      await new Promise(r => setTimeout(r, 700))
      setStatus('success')
      setName('')
      setEmail('')
      setMessage('')
      setErrors({})
    } catch (err) {
      console.error(err)
      setStatus('error')
    }
  }

  return (
    <div className="max-w-3xl mx-auto px-4 py-16">
      <h1 className="text-3xl font-bold mb-4">Contact Us</h1>
      <p className="text-gray-600 mb-8">Have a question? Send us a message and we'll get back to you within 1-2 business days.</p>

      {status === 'success' && (
        <div className="mb-6 p-4 bg-green-50 border border-green-200 text-green-800 rounded">Thank you — your message was sent.</div>
      )}
      {status === 'error' && (
        <div className="mb-6 p-4 bg-red-50 border border-red-200 text-red-800 rounded">Something went wrong. Please try again later.</div>
      )}

      <form onSubmit={handleSubmit} noValidate>
        <div className="grid grid-cols-1 gap-4">
          <label className="block">
            <span className="text-sm font-medium text-gray-700">Name</span>
            <input value={name} onChange={e => setName(e.target.value)} className={`mt-1 block w-full rounded-md p-2 border-gray-300 shadow-sm focus:ring-1 focus:ring-indigo-500 ${errors.name ? 'border-red-400' : ''}`} />
            {errors.name && <div className="text-sm text-red-600 mt-1">{errors.name}</div>}
          </label>

          <label className="block">
            <span className="text-sm font-medium text-gray-700">Email</span>
            <input type="email" value={email} onChange={e => setEmail(e.target.value)} className={`mt-1 block w-full rounded-md p-2 border-gray-300 shadow-sm focus:ring-1 focus:ring-indigo-500 ${errors.email ? 'border-red-400' : ''}`} />
            {errors.email && <div className="text-sm text-red-600 mt-1">{errors.email}</div>}
          </label>

          <label className="block">
            <span className="text-sm font-medium text-gray-700">Message</span>
            <textarea value={message} onChange={e => setMessage(e.target.value)} rows={6} className={`mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:ring-1 focus:ring-indigo-500 ${errors.message ? 'border-red-400' : ''}`} />
            {errors.message && <div className="text-sm text-red-600 mt-1">{errors.message}</div>}
          </label>

          <div className="flex items-center gap-4">
            <button type="submit" disabled={status === 'sending'} className="px-4 py-2 bg-indigo-600 text-white rounded hover:bg-indigo-700 disabled:opacity-60">
              {status === 'sending' ? 'Sending...' : 'Send Message'}
            </button>
            <button type="button" onClick={() => { setName(''); setEmail(''); setMessage(''); setErrors({}); setStatus(null) }} className="px-4 py-2 border rounded">Reset</button>
          </div>
        </div>
      </form>
    </div>
  )
}
