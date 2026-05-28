import type { Metadata } from 'next'
import Link from 'next/link'
import { Check, Minus, ArrowRight, Zap } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Pricing',
  description: 'runflo Cloud pricing. Starter $49/mo, Pro $149/mo, Team $499/mo, Enterprise from $24,000/year. Framework is free forever.',
}

const plans = [
  {
    name: 'Starter',
    price: '$49',
    annual: '$490',
    period: '/month',
    description: 'For individual developers and side projects.',
    cta: 'Start building',
    ctaStyle: 'outline' as const,
    features: [
      '1 project',
      '1,000 agent runs/month',
      'Shared container (1 vCPU, 2GB RAM)',
      'Neon database (1GB storage)',
      'Temporal Cloud (10K actions/month)',
      'Custom domain (1)',
      '7-day log retention',
      'Auto-restart on crash',
      'Replay history',
      'Community support (Discord)',
    ],
    missing: ['Dedicated container', 'SSO', 'SLA guarantee', 'Team members'],
  },
  {
    name: 'Pro',
    price: '$149',
    annual: '$1,490',
    period: '/month',
    badge: 'Most popular',
    description: 'For production apps and small teams.',
    cta: 'Start free trial',
    ctaStyle: 'gradient' as const,
    featured: true,
    features: [
      '3 projects',
      '10,000 agent runs/month',
      'Dedicated container (2 vCPU, 4GB RAM)',
      'Neon database (10GB storage)',
      'Temporal Cloud (100K actions/month)',
      'Custom domains (3)',
      '30-day log retention',
      'Deployment history + rollback (10)',
      'GitHub Actions integration',
      'Email support (48h SLA)',
    ],
    missing: ['SSO', 'Unlimited team members', 'Dedicated infrastructure'],
  },
  {
    name: 'Team',
    price: '$499',
    annual: '$4,990',
    period: '/month',
    description: 'For growing teams and high-volume production.',
    cta: 'Start free trial',
    ctaStyle: 'outline' as const,
    features: [
      '10 projects',
      '100,000 agent runs/month',
      'Auto-scaling containers',
      'Neon database (100GB storage)',
      'Temporal Cloud (1M actions/month)',
      'Custom domains (10)',
      '90-day log retention',
      'Deployment history (50)',
      'Team members (10) + RBAC',
      'Priority email support (12h SLA)',
    ],
    missing: ['SSO/SAML', 'Dedicated infrastructure', 'Custom SLA'],
  },
  {
    name: 'Enterprise',
    price: 'Custom',
    annual: 'From $24,000/year',
    period: '',
    description: 'Dedicated infrastructure, compliance, and SLAs for large organisations.',
    cta: 'Talk to sales',
    ctaStyle: 'ghost' as const,
    features: [
      'Unlimited projects',
      'Unlimited agent runs',
      'Dedicated EC2 instance(s)',
      'VPC isolation',
      '1-year log retention',
      'Unlimited team members',
      'SSO (Okta, Azure AD, SAML)',
      '99.99% SLA with financial penalty',
      'Dedicated Slack channel (1h response)',
      'Dedicated Solutions Engineer',
      'Security review + SOC2 alignment',
      'Custom domain wildcard (*.company.com)',
      'Annual roadmap input',
      'Invoice billing',
    ],
    missing: [],
  },
]

const comparisonRows = [
  { feature: 'Projects',              starter: '1',      pro: '3',     team: '10',   enterprise: 'Unlimited' },
  { feature: 'Agent runs/month',      starter: '1,000',  pro: '10,000', team: '100,000', enterprise: 'Unlimited' },
  { feature: 'Container',             starter: 'Shared', pro: 'Dedicated', team: 'Auto-scaling', enterprise: 'Dedicated EC2' },
  { feature: 'Database storage',      starter: '1GB',    pro: '10GB',  team: '100GB', enterprise: 'Custom' },
  { feature: 'Custom domains',        starter: '1',      pro: '3',     team: '10',   enterprise: 'Wildcard' },
  { feature: 'Log retention',         starter: '7 days', pro: '30 days', team: '90 days', enterprise: '1 year' },
  { feature: 'Team members',          starter: '1',      pro: '3',     team: '10',   enterprise: 'Unlimited' },
  { feature: 'Uptime SLA',            starter: '—',      pro: '99.5%', team: '99.9%', enterprise: '99.99%' },
  { feature: 'Support',               starter: 'Community', pro: 'Email 48h', team: 'Priority 12h', enterprise: 'Dedicated 1h' },
  { feature: 'SSO / SAML',            starter: '—',      pro: '—',     team: '—',    enterprise: '✓' },
  { feature: 'GitHub auto-deploy',    starter: '✓',      pro: '✓',     team: '✓',    enterprise: '✓' },
  { feature: 'Rollback',              starter: '✓',      pro: '✓',     team: '✓',    enterprise: '✓' },
  { feature: 'Replay history',        starter: '✓',      pro: '✓',     team: '✓',    enterprise: '✓' },
  { feature: 'Invoice billing',       starter: '—',      pro: '—',     team: '—',    enterprise: '✓' },
]

const faqs = [
  {
    q: 'Is the runflo framework free?',
    a: 'Yes, completely. All open-source packages (Tiers 0-2) are MIT licensed and free forever. You only pay for runflo Cloud — managed hosting so you never have to run infrastructure yourself.',
  },
  {
    q: 'What counts as an agent run?',
    a: 'One agent run is one top-level workflow execution from start to finish. Retries, sub-workflows, and activities within a run do not count separately.',
  },
  {
    q: 'What happens if I exceed my agent run limit?',
    a: 'Overages are charged at $0.05/run (Starter), $0.03/run (Pro), or $0.02/run (Team). You will receive an alert at 80% of your monthly limit so you can upgrade before hitting the cap.',
  },
  {
    q: 'Can I cancel any time?',
    a: 'Yes. Monthly plans can be cancelled any time and you keep access until the end of your billing period. Annual plans are non-refundable but can be cancelled at renewal.',
  },
  {
    q: 'Do you offer annual billing?',
    a: 'Yes — annual billing gives you 2 months free (16% discount). Starter: $490/year, Pro: $1,490/year, Team: $4,990/year.',
  },
  {
    q: 'Can I self-host runflo?',
    a: 'Absolutely. The framework is open source. You can run it with your own Temporal cluster. runflo Cloud is optional — it just removes all the infrastructure work.',
  },
  {
    q: 'What is the Enterprise package license?',
    a: 'For teams self-hosting (not using runflo Cloud), the Enterprise Package License ($24,000/year) gives you access to Tier 3 packages: @runflo/audit, @runflo/vault, @runflo/guard, @runflo/hitl, @runflo/analytics.',
  },
]

export default function PricingPage() {
  return (
    <div className="min-h-screen pt-16">

      {/* Hero */}
      <section className="relative py-20 sm:py-24 text-center overflow-hidden">
        <div className="pointer-events-none absolute inset-0" aria-hidden>
          <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[700px] h-[400px] rounded-full bg-[#8B5CF6]/06 blur-[100px]" />
        </div>
        <div className="relative max-w-3xl mx-auto px-6">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-white/[0.08] bg-white/[0.02] text-xs text-[#a1a1aa] mb-6">
            <span className="w-1.5 h-1.5 rounded-full" style={{ background: 'linear-gradient(135deg, #00C2FF, #8B5CF6)' }} />
            Transparent pricing
          </div>
          <h1 className="text-5xl sm:text-6xl font-bold tracking-tight text-[#f4f4f5] mb-5">
            Start free,{' '}
            <span className="gradient-text">scale as you grow</span>
          </h1>
          <p className="text-xl text-[#a1a1aa] leading-relaxed">
            The framework is free forever. Pay only for runflo Cloud — managed hosting
            with zero DevOps. Annual billing saves 16%.
          </p>
        </div>
      </section>

      {/* Plan cards */}
      <section className="max-w-7xl mx-auto px-6 pb-16">
        <div className="grid sm:grid-cols-2 xl:grid-cols-4 gap-5">
          {plans.map((plan) => (
            <div
              key={plan.name}
              className={`relative flex flex-col rounded-2xl p-6 ${
                plan.featured
                  ? 'bg-[#111117] gradient-border glow-blue'
                  : 'bg-[#111117] border border-white/[0.07] hover:border-white/[0.12] transition-colors'
              }`}
            >
              {plan.badge && (
                <div
                  className="absolute -top-3.5 left-1/2 -translate-x-1/2 whitespace-nowrap flex items-center gap-1.5 px-3.5 py-1 rounded-full text-xs font-semibold text-white shadow-lg"
                  style={{ background: 'linear-gradient(135deg, #3B5BFF, #8B5CF6)' }}
                >
                  <Zap size={11} fill="currentColor" />
                  {plan.badge}
                </div>
              )}

              <div className="mb-5">
                <span className="text-xs font-semibold uppercase tracking-widest text-[#52525b]">{plan.name}</span>
                <div className="flex items-end gap-1 mt-3 mb-1">
                  <span className="text-3xl font-bold tracking-tight text-[#f4f4f5]">{plan.price}</span>
                  {plan.period && <span className="text-sm text-[#71717a] mb-0.5">{plan.period}</span>}
                </div>
                {plan.annual && (
                  <div className="text-xs text-[#52525b] mb-2">{plan.annual} billed annually</div>
                )}
                <p className="text-xs text-[#71717a] leading-relaxed">{plan.description}</p>
              </div>

              <div className="mb-5">
                {plan.ctaStyle === 'gradient' ? (
                  <a href="#" className="btn-gradient w-full py-2.5 rounded-xl text-sm font-semibold text-white flex items-center justify-center gap-2">
                    {plan.cta} <ArrowRight size={13} />
                  </a>
                ) : plan.ctaStyle === 'outline' ? (
                  <a href="#" className="w-full py-2.5 rounded-xl text-sm font-semibold text-[#f4f4f5] flex items-center justify-center gap-2 border border-white/[0.12] hover:bg-white/[0.04] transition-colors">
                    {plan.cta} <ArrowRight size={13} />
                  </a>
                ) : (
                  <a href="mailto:sales@runflo.dev" className="w-full py-2.5 rounded-xl text-sm font-semibold text-[#a1a1aa] flex items-center justify-center gap-2 bg-white/[0.03] border border-white/[0.07] hover:bg-white/[0.06] transition-colors">
                    {plan.cta} <ArrowRight size={13} />
                  </a>
                )}
              </div>

              <div className="h-px bg-white/[0.06] mb-4" />

              <ul className="space-y-2.5 flex-1">
                {plan.features.map((f) => (
                  <li key={f} className="flex items-start gap-2.5">
                    <span className="flex-shrink-0 w-4 h-4 mt-0.5 rounded-full flex items-center justify-center"
                      style={{ background: 'linear-gradient(135deg, #00C2FF18, #3B5BFF22)', border: '1px solid #3B5BFF44' }}>
                      <Check size={9} className="text-[#00C2FF]" strokeWidth={3} />
                    </span>
                    <span className="text-xs text-[#a1a1aa] leading-snug">{f}</span>
                  </li>
                ))}
                {plan.missing.map((f) => (
                  <li key={f} className="flex items-start gap-2.5">
                    <span className="flex-shrink-0 w-4 h-4 mt-0.5 rounded-full flex items-center justify-center bg-white/[0.03] border border-white/[0.07]">
                      <Minus size={9} className="text-[#3f3f46]" strokeWidth={2.5} />
                    </span>
                    <span className="text-xs text-[#3f3f46] leading-snug">{f}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Open source note */}
        <div className="mt-8 p-6 rounded-2xl bg-[#111117] border border-white/[0.07] flex flex-col sm:flex-row items-center justify-between gap-5">
          <div>
            <p className="text-sm font-semibold text-[#f4f4f5] mb-1">Want to self-host? The framework is free.</p>
            <p className="text-xs text-[#71717a]">
              All runflo packages (Tiers 0-2) are MIT licensed. Run with your own Temporal cluster at no cost.
              Enterprise packages (Tier 3) available under a separate license.
            </p>
          </div>
          <a
            href="https://github.com/runflo"
            target="_blank"
            rel="noreferrer"
            className="flex-shrink-0 flex items-center gap-2 px-5 py-2.5 rounded-xl border border-white/[0.1] hover:border-white/[0.18] text-sm text-[#a1a1aa] hover:text-[#f4f4f5] transition-all"
          >
            View on GitHub <ArrowRight size={13} />
          </a>
        </div>
      </section>

      {/* Comparison table */}
      <section className="py-16 border-t border-white/[0.06]">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-2xl sm:text-3xl font-bold text-[#f4f4f5] mb-10 text-center">Compare plans</h2>
          <div className="overflow-x-auto">
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b border-white/[0.07]">
                  <th className="text-left py-3 pr-6 text-[#52525b] font-medium w-48">Feature</th>
                  {['Starter', 'Pro', 'Team', 'Enterprise'].map((name) => (
                    <th key={name} className="text-center py-3 px-4 text-[#a1a1aa] font-semibold">{name}</th>
                  ))}
                </tr>
              </thead>
              <tbody>
                <tr className="border-b border-white/[0.04]">
                  <td className="py-3 pr-6 text-[#52525b]">Price</td>
                  {['$49/mo', '$149/mo', '$499/mo', 'Custom'].map((p) => (
                    <td key={p} className="text-center py-3 px-4 text-[#f4f4f5] font-semibold">{p}</td>
                  ))}
                </tr>
                {comparisonRows.map((row) => (
                  <tr key={row.feature} className="border-b border-white/[0.04] hover:bg-white/[0.01]">
                    <td className="py-3 pr-6 text-[#71717a]">{row.feature}</td>
                    {[row.starter, row.pro, row.team, row.enterprise].map((val, i) => (
                      <td key={i} className="text-center py-3 px-4">
                        {val === '—' ? (
                          <Minus size={14} className="text-[#3f3f46] mx-auto" />
                        ) : val === '✓' ? (
                          <Check size={14} className="text-[#00C2FF] mx-auto" />
                        ) : (
                          <span className="text-xs text-[#a1a1aa]">{val}</span>
                        )}
                      </td>
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-16 border-t border-white/[0.06]">
        <div className="max-w-3xl mx-auto px-6">
          <h2 className="text-2xl sm:text-3xl font-bold text-[#f4f4f5] mb-10 text-center">Frequently asked questions</h2>
          <div className="space-y-0 divide-y divide-white/[0.06]">
            {faqs.map((faq) => (
              <div key={faq.q} className="py-6">
                <h3 className="text-sm font-semibold text-[#f4f4f5] mb-2">{faq.q}</h3>
                <p className="text-sm text-[#71717a] leading-relaxed">{faq.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 border-t border-white/[0.06] text-center">
        <div className="max-w-2xl mx-auto px-6">
          <h2 className="text-2xl sm:text-3xl font-bold text-[#f4f4f5] mb-4">
            Questions about Enterprise?
          </h2>
          <p className="text-[#a1a1aa] mb-8">
            Talk to our team about dedicated infrastructure, compliance requirements, and volume pricing.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <a
              href="mailto:sales@runflo.dev"
              className="btn-gradient px-7 py-3 rounded-xl text-sm font-semibold text-white flex items-center gap-2"
            >
              Contact sales
              <ArrowRight size={14} />
            </a>
            <Link href="/enterprise" className="px-7 py-3 rounded-xl text-sm font-semibold text-[#a1a1aa] border border-white/[0.1] hover:border-white/[0.2] hover:text-[#f4f4f5] transition-all">
              Learn about Enterprise
            </Link>
          </div>
        </div>
      </section>

    </div>
  )
}
