'use client'

import { useState } from 'react'
import { ArrowRight, Check } from 'lucide-react'

type Status = 'idle' | 'sending' | 'sent' | 'error'

export default function Contact() {
  const [status, setStatus] = useState<Status>('idle')
  const [form, setForm] = useState({ name: '', email: '', role: '', message: '' })

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setStatus('sending')
    try {
      await fetch('https://formspree.io/f/xpwrqjkl', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
        body: JSON.stringify(form),
      })
      setStatus('sent')
      setForm({ name: '', email: '', role: '', message: '' })
    } catch {
      setStatus('error')
    }
  }

  return (
    <section id="contact" className="relative py-24 sm:py-32 overflow-hidden">
      <div className="section-divider absolute top-0 left-0 right-0" />

      {/* Background */}
      <div className="pointer-events-none absolute inset-0" aria-hidden>
        <div className="absolute inset-0 hero-mesh" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[900px] h-[500px] rounded-full bg-[#3B5BFF]/10 blur-[120px]" />
        <div className="absolute inset-0 grid-pattern opacity-40" />
      </div>

      <div className="relative max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-start">

          {/* Left: copy */}
          <div className="lg:pt-4">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-white/[0.08] bg-white/[0.02] text-xs text-[#a1a1aa] mb-6">
              <span className="w-1.5 h-1.5 rounded-full bg-[#22c55e] shadow-[0_0_6px_#22c55e]" />
              Early access — launching soon
            </div>
            <h2 className="text-4xl sm:text-5xl font-bold tracking-tight text-[#f4f4f5] mb-6 leading-[1.1]">
              Be the first to<br />
              <span className="gradient-text">ship with runflo</span>
            </h2>
            <p className="text-lg text-[#a1a1aa] leading-relaxed mb-8">
              runflo is in early access. Join the waitlist to get notified when we launch,
              get early pricing, and shape the roadmap with your feedback.
            </p>

            <div className="space-y-4">
              {[
                'Early access before public launch',
                'Locked-in launch pricing (never pay more)',
                'Direct line to the founding team',
                'Input on the package roadmap',
              ].map((item) => (
                <div key={item} className="flex items-center gap-3">
                  <span
                    className="w-5 h-5 rounded-full flex items-center justify-center flex-shrink-0"
                    style={{ background: 'linear-gradient(135deg, #00C2FF22, #3B5BFF33)', border: '1px solid #3B5BFF55' }}
                  >
                    <Check size={11} className="text-[#00C2FF]" strokeWidth={3} />
                  </span>
                  <span className="text-sm text-[#a1a1aa]">{item}</span>
                </div>
              ))}
            </div>

            <div className="mt-10 p-5 rounded-xl bg-[#111117] border border-white/[0.07]">
              <p className="text-xs text-[#52525b] leading-relaxed">
                Have a specific question or want to discuss an enterprise evaluation?{' '}
                <a
                  href="mailto:hello@runflo.dev"
                  className="text-[#00C2FF] hover:underline underline-offset-2"
                >
                  Email us directly at hello@runflo.dev
                </a>
              </p>
            </div>
          </div>

          {/* Right: form */}
          <div className="relative">
            <div className="rounded-2xl border border-white/[0.08] bg-[#111117] p-8 shadow-2xl shadow-black/40">
              {status === 'sent' ? (
                <div className="flex flex-col items-center justify-center text-center py-12 gap-5">
                  <div
                    className="w-16 h-16 rounded-full flex items-center justify-center"
                    style={{ background: 'linear-gradient(135deg, #00C2FF22, #3B5BFF33)', border: '1px solid #3B5BFF55' }}
                  >
                    <Check size={28} className="text-[#00C2FF]" strokeWidth={2.5} />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-[#f4f4f5] mb-2">You're on the list!</h3>
                    <p className="text-sm text-[#71717a]">
                      We'll be in touch soon. Keep an eye on{' '}
                      <a href="https://github.com/runflo" target="_blank" rel="noreferrer" className="text-[#00C2FF] hover:underline underline-offset-2">
                        GitHub
                      </a>{' '}
                      for updates.
                    </p>
                  </div>
                  <button
                    onClick={() => setStatus('idle')}
                    className="text-sm text-[#52525b] hover:text-[#a1a1aa] transition-colors"
                  >
                    Submit another response
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5">
                  <div>
                    <h3 className="text-lg font-semibold text-[#f4f4f5] mb-1">Join the waitlist</h3>
                    <p className="text-sm text-[#71717a]">We'll reach out personally — no bulk email blasts.</p>
                  </div>

                  <div className="grid sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-medium text-[#a1a1aa] mb-1.5">
                        Your name <span className="text-red-400">*</span>
                      </label>
                      <input
                        type="text"
                        name="name"
                        required
                        value={form.name}
                        onChange={handleChange}
                        placeholder="Alex Johnson"
                        className="w-full px-4 py-2.5 rounded-xl bg-[#0d0d12] border border-white/[0.08] text-sm text-[#f4f4f5] placeholder-[#3f3f46] focus:outline-none focus:border-[#3B5BFF]/60 focus:ring-1 focus:ring-[#3B5BFF]/30 transition-colors"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-medium text-[#a1a1aa] mb-1.5">
                        Work email <span className="text-red-400">*</span>
                      </label>
                      <input
                        type="email"
                        name="email"
                        required
                        value={form.email}
                        onChange={handleChange}
                        placeholder="alex@company.com"
                        className="w-full px-4 py-2.5 rounded-xl bg-[#0d0d12] border border-white/[0.08] text-sm text-[#f4f4f5] placeholder-[#3f3f46] focus:outline-none focus:border-[#3B5BFF]/60 focus:ring-1 focus:ring-[#3B5BFF]/30 transition-colors"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-medium text-[#a1a1aa] mb-1.5">
                      What best describes you?
                    </label>
                    <select
                      name="role"
                      value={form.role}
                      onChange={handleChange}
                      className="w-full px-4 py-2.5 rounded-xl bg-[#0d0d12] border border-white/[0.08] text-sm text-[#f4f4f5] focus:outline-none focus:border-[#3B5BFF]/60 focus:ring-1 focus:ring-[#3B5BFF]/30 transition-colors appearance-none"
                    >
                      <option value="" className="bg-[#0d0d12]">Select a role...</option>
                      <option value="fullstack" className="bg-[#0d0d12]">Full-stack / Software engineer</option>
                      <option value="technical-founder" className="bg-[#0d0d12]">Technical founder</option>
                      <option value="platform-engineer" className="bg-[#0d0d12]">Platform / DevOps engineer</option>
                      <option value="ml-engineer" className="bg-[#0d0d12]">ML / AI engineer</option>
                      <option value="engineering-manager" className="bg-[#0d0d12]">Engineering manager / CTO</option>
                      <option value="other" className="bg-[#0d0d12]">Other</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-xs font-medium text-[#a1a1aa] mb-1.5">
                      What are you trying to build? <span className="text-[#52525b]">(optional)</span>
                    </label>
                    <textarea
                      name="message"
                      rows={4}
                      value={form.message}
                      onChange={handleChange}
                      placeholder="Briefly describe your use case — e.g. 'an agent that processes customer support tickets and routes them automatically'"
                      className="w-full px-4 py-2.5 rounded-xl bg-[#0d0d12] border border-white/[0.08] text-sm text-[#f4f4f5] placeholder-[#3f3f46] focus:outline-none focus:border-[#3B5BFF]/60 focus:ring-1 focus:ring-[#3B5BFF]/30 transition-colors resize-none leading-relaxed"
                    />
                  </div>

                  {status === 'error' && (
                    <p className="text-xs text-red-400">
                      Something went wrong. Email us directly at{' '}
                      <a href="mailto:hello@runflo.dev" className="underline underline-offset-2">
                        hello@runflo.dev
                      </a>
                    </p>
                  )}

                  <button
                    type="submit"
                    disabled={status === 'sending'}
                    className="btn-gradient w-full py-3.5 rounded-xl text-sm font-semibold text-white flex items-center justify-center gap-2 disabled:opacity-60 disabled:cursor-not-allowed shadow-lg"
                  >
                    {status === 'sending' ? 'Sending…' : 'Join the waitlist'}
                    {status !== 'sending' && <ArrowRight size={15} />}
                  </button>

                  <p className="text-center text-xs text-[#52525b]">
                    No spam. No marketing emails. Just a personal note from us.
                  </p>
                </form>
              )}
            </div>
          </div>

        </div>
      </div>
    </section>
  )
}
