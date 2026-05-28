import { Check, Minus, ArrowRight, Zap } from 'lucide-react'

interface Plan {
  name: string
  price: string
  period?: string
  badge?: string
  description: string
  cta: string
  ctaHref: string
  ctaStyle: 'gradient' | 'outline' | 'ghost'
  featured?: boolean
  features: string[]
  notIncluded?: string[]
}

const plans: Plan[] = [
  {
    name: 'Starter',
    price: '$49',
    period: '/ month',
    description: 'For developers building their first production agent. Includes everything you need to ship.',
    cta: 'Get started',
    ctaHref: '#get-started',
    ctaStyle: 'outline',
    features: [
      'Managed Temporal namespace',
      'Managed worker container',
      'Neon Postgres database',
      '3 concurrent workflows',
      '10k workflow executions / month',
      'Auto-restart on crash',
      'Replay & audit history',
      'runflo.app subdomain',
      'Community support',
    ],
    notIncluded: ['Custom domain', 'SSO', 'SLA guarantee'],
  },
  {
    name: 'Pro',
    price: '$149',
    period: '/ month',
    badge: 'Most popular',
    description: 'For teams shipping multiple agents to production. More concurrency, more workflows.',
    cta: 'Start free trial',
    ctaHref: '#get-started',
    ctaStyle: 'gradient',
    featured: true,
    features: [
      'Everything in Starter',
      '10 concurrent workflows',
      '100k workflow executions / month',
      'Custom domain support',
      'GitHub Actions integration',
      'Multi-environment (dev/prod)',
      'Metrics & alerting dashboard',
      'Email support (48h SLA)',
      'Multiple projects',
    ],
    notIncluded: ['SSO', 'Dedicated infrastructure'],
  },
  {
    name: 'Team',
    price: '$499',
    period: '/ month',
    description: 'For engineering teams running agents at scale. Advanced control and team management.',
    cta: 'Start free trial',
    ctaHref: '#get-started',
    ctaStyle: 'outline',
    features: [
      'Everything in Pro',
      'Unlimited concurrent workflows',
      '1M workflow executions / month',
      'Team members & RBAC',
      'SSO (SAML/OIDC)',
      'Advanced observability',
      'Priority support (12h SLA)',
      'Slack Connect support',
      'Usage analytics',
    ],
    notIncluded: ['Dedicated infrastructure', 'Custom SLA'],
  },
  {
    name: 'Enterprise',
    price: 'Custom',
    description: 'Dedicated infrastructure, compliance support, and white-glove onboarding for large-scale deployments.',
    cta: 'Talk to sales',
    ctaHref: 'mailto:sales@runflo.dev',
    ctaStyle: 'ghost',
    features: [
      'Everything in Team',
      'Dedicated Temporal cluster',
      'Dedicated compute (VPC)',
      'Unlimited executions',
      'SOC 2 & HIPAA alignment',
      'Custom SLA (up to 99.99%)',
      'Onboarding & architecture review',
      'Custom integrations',
      'Invoice billing',
      'From $24,000 / year',
    ],
  },
]

export default function Pricing() {
  return (
    <section id="pricing" className="relative py-24 sm:py-32">
      <div className="section-divider absolute top-0 left-0 right-0" />

      <div className="pointer-events-none absolute inset-0" aria-hidden>
        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[700px] h-[400px] rounded-full bg-[#7A3CFF]/05 blur-[120px]" />
      </div>

      <div className="relative max-w-7xl mx-auto px-6">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-white/[0.08] bg-white/[0.02] text-xs text-[#a1a1aa] mb-6">
            <span className="w-1.5 h-1.5 rounded-full" style={{ background: 'linear-gradient(135deg, #00C2FF, #7A3CFF)' }} />
            runflo Cloud pricing
          </div>
          <h2 className="text-4xl sm:text-5xl font-bold tracking-tight text-[#f4f4f5] mb-5">
            Start free,{' '}
            <span className="gradient-text">scale as you grow</span>
          </h2>
          <p className="text-lg text-[#a1a1aa] leading-relaxed">
            The open-source framework is free forever. Pay only for runflo Cloud — managed
            hosting with zero DevOps.
          </p>
        </div>

        {/* Cards */}
        <div className="grid sm:grid-cols-2 xl:grid-cols-4 gap-5">
          {plans.map((plan) => (
            <div
              key={plan.name}
              className={`relative flex flex-col rounded-2xl p-6 transition-all duration-300 ${
                plan.featured
                  ? 'bg-[#111117] gradient-border glow-blue'
                  : 'bg-[#111117] border border-white/[0.07] hover:border-white/[0.12]'
              }`}
            >
              {plan.badge && (
                <div
                  className="absolute -top-3.5 left-1/2 -translate-x-1/2 whitespace-nowrap flex items-center gap-1.5 px-3.5 py-1 rounded-full text-xs font-semibold text-white shadow-lg"
                  style={{ background: 'linear-gradient(135deg, #3B5BFF, #7A3CFF)' }}
                >
                  <Zap size={11} fill="currentColor" />
                  {plan.badge}
                </div>
              )}

              {/* Plan header */}
              <div className="mb-6">
                <span className="text-xs font-semibold uppercase tracking-widest text-[#52525b]">
                  {plan.name}
                </span>
                <div className="flex items-end gap-1 mt-3 mb-3">
                  <span className="text-3xl font-bold tracking-tight text-[#f4f4f5]">
                    {plan.price}
                  </span>
                  {plan.period && (
                    <span className="text-sm text-[#71717a] mb-0.5">{plan.period}</span>
                  )}
                </div>
                <p className="text-xs text-[#71717a] leading-relaxed">{plan.description}</p>
              </div>

              {/* CTA */}
              <div className="mb-6">
                {plan.ctaStyle === 'gradient' ? (
                  <a
                    href={plan.ctaHref}
                    className="btn-gradient w-full py-2.5 rounded-xl text-sm font-semibold text-white text-center flex items-center justify-center gap-2"
                  >
                    {plan.cta}
                    <ArrowRight size={13} />
                  </a>
                ) : plan.ctaStyle === 'outline' ? (
                  <a
                    href={plan.ctaHref}
                    className="w-full py-2.5 rounded-xl text-sm font-semibold text-[#f4f4f5] text-center flex items-center justify-center gap-2 border border-white/[0.12] hover:bg-white/[0.04] transition-colors"
                  >
                    {plan.cta}
                    <ArrowRight size={13} />
                  </a>
                ) : (
                  <a
                    href={plan.ctaHref}
                    className="w-full py-2.5 rounded-xl text-sm font-semibold text-[#a1a1aa] text-center flex items-center justify-center gap-2 bg-white/[0.03] hover:bg-white/[0.06] border border-white/[0.07] transition-colors"
                  >
                    {plan.cta}
                    <ArrowRight size={13} />
                  </a>
                )}
              </div>

              <div className="h-px bg-white/[0.06] mb-5" />

              {/* Features */}
              <ul className="flex flex-col gap-2.5 flex-1">
                {plan.features.map((feature) => (
                  <li key={feature} className="flex items-start gap-2.5">
                    <span
                      className="flex-shrink-0 w-4 h-4 mt-0.5 rounded-full flex items-center justify-center"
                      style={{ background: 'linear-gradient(135deg, #00C2FF18, #3B5BFF22)', border: '1px solid #3B5BFF44' }}
                    >
                      <Check size={9} className="text-[#00C2FF]" strokeWidth={3} />
                    </span>
                    <span className="text-xs text-[#a1a1aa] leading-snug">{feature}</span>
                  </li>
                ))}
                {plan.notIncluded?.map((feature) => (
                  <li key={feature} className="flex items-start gap-2.5">
                    <span className="flex-shrink-0 w-4 h-4 mt-0.5 rounded-full flex items-center justify-center bg-white/[0.03] border border-white/[0.07]">
                      <Minus size={9} className="text-[#3f3f46]" strokeWidth={2.5} />
                    </span>
                    <span className="text-xs text-[#3f3f46] leading-snug">{feature}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Open source note */}
        <div className="mt-10 p-6 rounded-2xl bg-[#111117] border border-white/[0.07] flex flex-col sm:flex-row items-center justify-between gap-5">
          <div>
            <p className="text-sm font-semibold text-[#f4f4f5] mb-1">
              Just want the framework? It's free.
            </p>
            <p className="text-xs text-[#71717a]">
              The full runflo open-source framework is MIT licensed. Self-host with your own Temporal cluster at no cost.
            </p>
          </div>
          <a
            href="https://github.com/runflo"
            target="_blank"
            rel="noreferrer"
            className="flex-shrink-0 flex items-center gap-2 px-5 py-2.5 rounded-xl border border-white/[0.1] hover:border-white/[0.18] text-sm text-[#a1a1aa] hover:text-[#f4f4f5] transition-all"
          >
            View on GitHub
            <ArrowRight size={13} />
          </a>
        </div>
      </div>
    </section>
  )
}
