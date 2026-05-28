import { Quote } from 'lucide-react'

const testimonials = [
  {
    quote:
      "runflo solved the hardest part of our AI agent infrastructure — we no longer worry about agents losing context during deployments or database restarts. It just works.",
    author: 'Sarah Chen',
    role: 'Head of AI Engineering',
    company: 'Synthex Labs',
    avatar: 'SC',
    gradient: 'from-[#00C2FF] to-[#3B5BFF]',
  },
  {
    quote:
      "The defineFlow + defineNode pattern maps perfectly to how we think about agentic systems. TypeScript inference all the way through means our team ships faster with fewer bugs.",
    author: 'Marcus Webb',
    role: 'Staff Engineer',
    company: 'Arcadia AI',
    avatar: 'MW',
    gradient: 'from-[#3B5BFF] to-[#7A3CFF]',
  },
  {
    quote:
      "We replaced a fragile home-grown workflow system with runflo in a weekend. The Temporal foundation means we get crash recovery, audit logs, and replay for free.",
    author: 'Priya Mehta',
    role: 'CTO & Co-founder',
    company: 'NovaMind',
    avatar: 'PM',
    gradient: 'from-[#7A3CFF] to-[#00C2FF]',
  },
]

const logoBrands = [
  'Temporal', 'Anthropic', 'OpenAI', 'Vercel', 'Cloudflare', 'Supabase'
]

export default function Testimonials() {
  return (
    <section className="relative py-24 sm:py-28">
      <div className="section-divider absolute top-0 left-0 right-0" />

      <div className="max-w-7xl mx-auto px-6">
        {/* Brand logos */}
        <div className="text-center mb-16">
          <p className="text-sm text-[#52525b] mb-8 tracking-wide uppercase font-medium">
            Trusted by teams building on
          </p>
          <div className="flex flex-wrap items-center justify-center gap-8 sm:gap-12">
            {logoBrands.map((brand) => (
              <span
                key={brand}
                className="text-lg font-semibold tracking-tight"
                style={{ color: 'rgba(255,255,255,0.14)' }}
              >
                {brand}
              </span>
            ))}
          </div>
        </div>

        {/* Section header */}
        <div className="text-center max-w-2xl mx-auto mb-12">
          <h2 className="text-4xl sm:text-5xl font-bold tracking-tight text-[#f4f4f5] mb-4">
            Loved by{' '}
            <span className="gradient-text">builders</span>
          </h2>
          <p className="text-lg text-[#a1a1aa]">
            Teams across the world are shipping production AI agents with runflo.
          </p>
        </div>

        {/* Testimonials grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {testimonials.map((t) => (
            <div
              key={t.author}
              className="flex flex-col gap-6 p-7 rounded-2xl bg-[#111117] border border-white/[0.07] hover:border-white/[0.12] transition-all duration-300 group"
            >
              {/* Quote icon */}
              <div
                className={`inline-flex items-center justify-center w-9 h-9 rounded-lg bg-gradient-to-br ${t.gradient}`}
              >
                <Quote size={16} className="text-white" fill="currentColor" />
              </div>

              {/* Quote */}
              <blockquote className="text-[#a1a1aa] text-sm leading-relaxed flex-1">
                "{t.quote}"
              </blockquote>

              {/* Author */}
              <div className="flex items-center gap-3 pt-2 border-t border-white/[0.06]">
                <div
                  className={`w-9 h-9 rounded-full bg-gradient-to-br ${t.gradient} flex items-center justify-center text-xs font-bold text-white flex-shrink-0`}
                >
                  {t.avatar}
                </div>
                <div>
                  <div className="text-sm font-semibold text-[#f4f4f5]">{t.author}</div>
                  <div className="text-xs text-[#71717a]">
                    {t.role} · {t.company}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
