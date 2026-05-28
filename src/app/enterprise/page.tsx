import type { Metadata } from 'next'
import Link from 'next/link'
import { ArrowRight, Shield, Lock, FileCheck, Users, Headphones, Globe } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Enterprise',
  description: 'runflo Enterprise — dedicated infrastructure, SOC2 alignment, SSO, SLAs, and compliance features for large organisations.',
}

const companyLogos = ['Stripe', 'Temporal', 'Neon', 'Vercel', 'Anthropic', 'AWS']

const features = [
  {
    icon: Shield,
    title: 'SOC2 & HIPAA alignment',
    desc: '@runflo/audit provides an immutable audit log of every agent action. Evidence collection and compliance reporting built in.',
  },
  {
    icon: Lock,
    title: 'Secrets vault',
    desc: '@runflo/vault manages all agent credentials. Zero plaintext in code or environment variables. Automatic rotation support.',
  },
  {
    icon: FileCheck,
    title: 'Content filtering & guardrails',
    desc: '@runflo/guard provides PII detection, prompt injection prevention, and configurable content policies for every agent interaction.',
  },
  {
    icon: Users,
    title: 'SSO and RBAC',
    desc: 'SAML/OIDC integration with Okta, Azure AD, and Google Workspace. Role-based access control for every team member.',
  },
  {
    icon: Globe,
    title: 'Dedicated infrastructure',
    desc: 'Your agents run on dedicated EC2 instances in VPC isolation. No shared compute, no noisy neighbours, no shared data plane.',
  },
  {
    icon: Headphones,
    title: 'Dedicated support',
    desc: 'Private Slack channel with a dedicated Solutions Engineer. 1-hour response SLA, architecture reviews, and onboarding included.',
  },
]

const enterpriseTiers = [
  {
    title: 'Enterprise Cloud',
    price: 'From $2,000/mo',
    annual: '$24,000/year',
    desc: 'Managed hosting on dedicated infrastructure with runflo Cloud.',
    features: [
      'Dedicated EC2 instances + VPC',
      'Unlimited projects and runs',
      'Custom domain wildcard (*.company.com)',
      'SSO (Okta, Azure AD, SAML)',
      '99.99% SLA with financial penalty',
      '1-year log retention',
      'Annual business review',
      'Roadmap input',
    ],
  },
  {
    title: 'Enterprise Packages',
    price: '$24,000/year',
    annual: 'Self-hosted',
    desc: 'For teams running their own infrastructure. License for Tier 3 enterprise packages.',
    features: [
      '@runflo/guard — guardrails and PII detection',
      '@runflo/audit — immutable audit log',
      '@runflo/vault — secrets management',
      '@runflo/hitl — human-in-the-loop flows',
      '@runflo/analytics — cost and usage dashboards',
      'Priority support + SLA',
      'Unlimited developers in organisation',
      'Self-hosted deployment',
    ],
  },
]

export default function EnterprisePage() {
  return (
    <div className="min-h-screen pt-16">

      {/* Hero */}
      <section className="relative py-20 sm:py-28 overflow-hidden">
        <div className="pointer-events-none absolute inset-0" aria-hidden>
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[900px] h-[600px] rounded-full bg-[#3B5BFF]/06 blur-[130px]" />
          <div className="absolute inset-0 grid-pattern opacity-30" />
        </div>
        <div className="relative max-w-7xl mx-auto px-6">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-white/[0.08] bg-white/[0.02] text-xs text-[#a1a1aa] mb-6">
              <span className="w-1.5 h-1.5 rounded-full" style={{ background: 'linear-gradient(135deg, #00C2FF, #3B5BFF)' }} />
              Enterprise
            </div>
            <h1 className="text-5xl sm:text-6xl font-bold tracking-tight text-[#f4f4f5] mb-6 leading-tight">
              Built on Temporal.<br />
              <span className="gradient-text">Enterprise-grade</span> from day one.
            </h1>
            <p className="text-xl text-[#a1a1aa] leading-relaxed mb-10 max-w-2xl">
              runflo is built on the same durable execution engine used by Stripe, Coinbase, and Netflix.
              Enterprise features — audit logs, secrets management, guardrails, SSO — are first-class, not bolted on.
            </p>
            <div className="flex flex-wrap gap-4">
              <a
                href="mailto:sales@runflo.dev"
                className="btn-gradient px-8 py-3.5 rounded-xl text-base font-semibold text-white flex items-center gap-2 shadow-lg"
              >
                Talk to sales
                <ArrowRight size={16} />
              </a>
              <Link
                href="/pricing"
                className="flex items-center gap-2 px-8 py-3.5 rounded-xl text-base font-semibold text-[#a1a1aa] border border-white/[0.1] hover:border-white/[0.2] hover:text-[#f4f4f5] transition-all"
              >
                See pricing
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Trust bar */}
      <section className="py-12 border-y border-white/[0.06]">
        <div className="max-w-7xl mx-auto px-6">
          <p className="text-xs font-semibold uppercase tracking-widest text-[#52525b] text-center mb-8">
            Built on infrastructure trusted by
          </p>
          <div className="flex flex-wrap justify-center items-center gap-10">
            {companyLogos.map((name) => (
              <span key={name} className="text-sm font-semibold text-[#3f3f46] hover:text-[#71717a] transition-colors">
                {name}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center max-w-2xl mx-auto mb-14">
            <h2 className="text-3xl sm:text-4xl font-bold text-[#f4f4f5] mb-4">
              Every enterprise requirement.<br />
              <span className="gradient-text">First-class packages.</span>
            </h2>
            <p className="text-[#a1a1aa]">
              Not afterthoughts. Not configuration switches.
              Dedicated packages with full APIs, designed for compliance teams.
            </p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {features.map((f) => {
              const Icon = f.icon
              return (
                <div key={f.title} className="p-6 rounded-xl bg-[#111117] border border-white/[0.07] hover:border-white/[0.12] transition-colors">
                  <div
                    className="w-9 h-9 rounded-lg flex items-center justify-center mb-4"
                    style={{ background: 'linear-gradient(135deg, #00C2FF18, #3B5BFF25)', border: '1px solid #3B5BFF44' }}
                  >
                    <Icon size={17} className="text-[#00C2FF]" />
                  </div>
                  <h3 className="text-sm font-semibold text-[#f4f4f5] mb-2">{f.title}</h3>
                  <p className="text-xs text-[#71717a] leading-relaxed">{f.desc}</p>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* Positioning: vs Microsoft Copilot etc */}
      <section className="py-16 border-t border-white/[0.06]">
        <div className="max-w-7xl mx-auto px-6">
          <div className="p-7 rounded-2xl bg-[#111117] border border-white/[0.07]">
            <h3 className="text-sm font-semibold uppercase tracking-widest text-[#52525b] mb-6">Cost comparison for organisations</h3>
            <div className="grid sm:grid-cols-3 gap-6">
              {[
                { product: 'Microsoft Copilot', price: '$30/user/month', note: '33 users = $990/mo' },
                { product: 'ServiceNow AI', price: '$50-100/user/month', note: '33 users = $1,650-3,300/mo' },
                { product: 'runflo Enterprise', price: '$2,000/month', note: 'Unlimited users — $24,000/year', highlight: true },
              ].map((item) => (
                <div
                  key={item.product}
                  className={`p-5 rounded-xl ${item.highlight ? 'gradient-border bg-[#0d0d12]' : 'bg-[#0d0d12] border border-white/[0.06]'}`}
                >
                  <div className="text-xs text-[#52525b] mb-2">{item.product}</div>
                  <div className={`text-lg font-bold mb-1 ${item.highlight ? 'gradient-text' : 'text-[#f4f4f5]'}`}>{item.price}</div>
                  <div className="text-xs text-[#71717a]">{item.note}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Plans */}
      <section className="py-20 border-t border-white/[0.06]">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-3xl sm:text-4xl font-bold text-[#f4f4f5] mb-10 text-center">Enterprise options</h2>
          <div className="grid lg:grid-cols-2 gap-6 max-w-4xl mx-auto">
            {enterpriseTiers.map((tier) => (
              <div key={tier.title} className="p-7 rounded-2xl bg-[#111117] border border-white/[0.07]">
                <div className="text-xs font-semibold uppercase tracking-widest text-[#52525b] mb-2">{tier.title}</div>
                <div className="text-3xl font-bold text-[#f4f4f5] mb-1">{tier.price}</div>
                <div className="text-xs text-[#52525b] mb-3">{tier.annual}</div>
                <p className="text-sm text-[#71717a] mb-6 leading-relaxed">{tier.desc}</p>
                <ul className="space-y-2.5 mb-7">
                  {tier.features.map((f) => (
                    <li key={f} className="flex items-start gap-2.5 text-sm text-[#a1a1aa]">
                      <span className="text-[#00C2FF] mt-0.5 flex-shrink-0">✓</span>
                      {f}
                    </li>
                  ))}
                </ul>
                <a
                  href="mailto:sales@runflo.dev"
                  className="w-full py-3 rounded-xl text-sm font-semibold text-[#f4f4f5] flex items-center justify-center gap-2 border border-white/[0.12] hover:bg-white/[0.04] transition-colors"
                >
                  Contact sales
                  <ArrowRight size={13} />
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 border-t border-white/[0.06] text-center">
        <div className="max-w-2xl mx-auto px-6">
          <h2 className="text-3xl sm:text-4xl font-bold text-[#f4f4f5] mb-5">
            Ready to evaluate runflo Enterprise?
          </h2>
          <p className="text-[#a1a1aa] mb-8 leading-relaxed">
            Book a 30-minute call with our team. We will walk through your requirements,
            security review process, and procurement timeline.
          </p>
          <a
            href="mailto:sales@runflo.dev"
            className="btn-gradient px-10 py-4 rounded-xl text-base font-semibold text-white inline-flex items-center gap-2 shadow-xl"
          >
            Book a call
            <ArrowRight size={16} />
          </a>
        </div>
      </section>

    </div>
  )
}
