import type { Metadata } from 'next'
import Link from 'next/link'
import { ArrowRight, Server, Database, Cpu, Globe, Shield, Zap, GitBranch, RotateCcw, Activity } from 'lucide-react'

export const metadata: Metadata = {
  title: 'runflo Cloud',
  description: 'Deploy AI agents with one command. Managed Temporal, Neon database, and Docker containers — zero DevOps required.',
}

const features = [
  {
    icon: Zap,
    title: 'One command to deploy',
    desc: 'Run `runflo deploy` and your agent is live in production. No Dockerfile, no Kubernetes, no cloud console.',
  },
  {
    icon: Database,
    title: 'Dedicated Neon database',
    desc: 'Each project gets its own isolated Postgres database on Neon. Zero shared-tenant risk.',
  },
  {
    icon: Server,
    title: 'Dedicated Temporal namespace',
    desc: 'Fully isolated Temporal Cloud namespace per project. Your workflows never share infrastructure.',
  },
  {
    icon: Cpu,
    title: 'Managed containers',
    desc: 'Workers run in Docker containers that scale automatically. Shared on Starter, dedicated on Pro and above.',
  },
  {
    icon: Globe,
    title: 'Production URL in seconds',
    desc: 'Your project is live at <slug>.runflo.app the moment you deploy. Custom domains on Pro+.',
  },
  {
    icon: GitBranch,
    title: 'Auto-deploy on push',
    desc: 'Connect GitHub and every push to main auto-deploys. Zero-downtime rollout built in.',
  },
  {
    icon: RotateCcw,
    title: 'One-command rollback',
    desc: 'Something broke? Run `runflo rollback` to revert to the previous deployment instantly.',
  },
  {
    icon: Activity,
    title: 'Replay and audit history',
    desc: 'Every workflow step is logged. Replay any run to debug exactly what happened — step by step.',
  },
  {
    icon: Shield,
    title: 'Automatic SSL',
    desc: 'TLS certificates are provisioned and renewed automatically. No cert management ever.',
  },
]

const plans = [
  {
    name: 'Starter',
    price: '$49',
    period: '/month',
    specs: ['1 project', '1,000 agent runs/month', 'Shared container (1 vCPU, 2GB)', '7-day log retention', 'Community support'],
    href: '/pricing',
  },
  {
    name: 'Pro',
    price: '$149',
    period: '/month',
    featured: true,
    specs: ['3 projects', '10,000 agent runs/month', 'Dedicated container (2 vCPU, 4GB)', '30-day log retention', 'Email support (48h)'],
    href: '/pricing',
  },
  {
    name: 'Team',
    price: '$499',
    period: '/month',
    specs: ['10 projects', '100,000 agent runs/month', 'Auto-scaling containers', '90-day log retention', 'Priority support (12h)'],
    href: '/pricing',
  },
]

export default function CloudPage() {
  return (
    <div className="min-h-screen pt-16">

      {/* Hero */}
      <section className="relative py-20 sm:py-28 overflow-hidden">
        <div className="pointer-events-none absolute inset-0" aria-hidden>
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[900px] h-[600px] rounded-full bg-[#3B5BFF]/08 blur-[130px]" />
          <div className="absolute inset-0 grid-pattern opacity-30" />
        </div>

        <div className="relative max-w-7xl mx-auto px-6">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-white/[0.08] bg-white/[0.02] text-xs text-[#a1a1aa] mb-6">
              <span className="w-1.5 h-1.5 rounded-full" style={{ background: 'linear-gradient(135deg, #00C2FF, #3B5BFF)' }} />
              runflo Cloud
            </div>
            <h1 className="text-5xl sm:text-6xl font-bold tracking-tight text-[#f4f4f5] mb-6 leading-tight">
              Deploy in one command.<br />
              <span className="gradient-text">No DevOps required.</span>
            </h1>
            <p className="text-xl text-[#a1a1aa] leading-relaxed mb-10">
              runflo Cloud is managed hosting for runflo projects. Every deployment gets
              its own isolated Temporal namespace, Neon database, and Docker container.
              Ship in an afternoon — not a sprint.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link href="/pricing" className="btn-gradient px-8 py-3.5 rounded-xl text-base font-semibold text-white flex items-center gap-2 shadow-lg">
                See pricing
                <ArrowRight size={16} />
              </Link>
              <Link href="/docs" className="flex items-center gap-2 px-8 py-3.5 rounded-xl text-base font-semibold text-[#a1a1aa] border border-white/[0.1] hover:border-white/[0.2] hover:text-[#f4f4f5] transition-all">
                Read the docs
              </Link>
            </div>
          </div>

          {/* Deploy terminal */}
          <div className="max-w-2xl mx-auto">
            <div className="rounded-2xl overflow-hidden border border-white/[0.08] shadow-2xl shadow-black/50 glow-blue">
              <div className="flex items-center gap-2 px-4 py-3 bg-[#0f0f14] border-b border-white/[0.06]">
                <span className="w-3 h-3 rounded-full bg-[#ff5f57]" />
                <span className="w-3 h-3 rounded-full bg-[#febc2e]" />
                <span className="w-3 h-3 rounded-full bg-[#28c840]" />
                <span className="ml-3 text-xs text-[#52525b] font-mono">Terminal — my-agent</span>
              </div>
              <div className="bg-[#09090d] p-6 font-mono text-sm leading-[1.9]">
                <div><span className="text-[#52525b]">$ </span><span className="text-[#f4f4f5]">runflo deploy</span></div>
                <div className="text-[#a1a1aa]"><span className="text-[#22c55e] mr-2">✓</span>Connected to runflo Cloud</div>
                <div className="text-[#a1a1aa]"><span className="text-[#22c55e] mr-2">✓</span>Building TypeScript...</div>
                <div className="text-[#a1a1aa]"><span className="text-[#22c55e] mr-2">✓</span>Provisioning Neon database...</div>
                <div className="text-[#a1a1aa]"><span className="text-[#22c55e] mr-2">✓</span>Provisioning Temporal namespace...</div>
                <div className="text-[#a1a1aa]"><span className="text-[#22c55e] mr-2">✓</span>Deploying container...</div>
                <div className="text-[#a1a1aa]"><span className="text-[#22c55e] mr-2">✓</span>Health check passed</div>
                <div className="mt-1">
                  <span className="text-[#22c55e] mr-2">▲</span>
                  <span className="gradient-text font-semibold">Deployed — </span>
                  <span className="text-[#00C2FF]">my-agent.runflo.app</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* What you get per deployment */}
      <section className="py-20 border-t border-white/[0.06]">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-14">
            <h2 className="text-3xl sm:text-4xl font-bold text-[#f4f4f5] mb-4">
              Every project gets its own<br />
              <span className="gradient-text">isolated stack</span>
            </h2>
            <p className="text-[#a1a1aa] max-w-xl mx-auto">
              Zero shared-tenant risk. Your agents never share resources with other customers.
            </p>
          </div>

          <div className="max-w-4xl mx-auto">
            <div className="grid sm:grid-cols-2 gap-4 mb-8">
              {[
                { icon: '🐳', label: 'Docker container', desc: 'Your code runs in an isolated container. Dedicated on Pro+, shared on Starter.' },
                { icon: '🗄️', label: 'Neon Postgres', desc: 'Dedicated database per project. Full Postgres — use Prisma, Drizzle, or raw SQL.' },
                { icon: '⚡', label: 'Temporal namespace', desc: 'Fully isolated workflow namespace on Temporal Cloud. No noisy neighbours.' },
                { icon: '🌐', label: 'runflo.app subdomain', desc: 'Your project is live at <slug>.runflo.app instantly. Custom domains on Pro+.' },
                { icon: '🔑', label: 'Managed env vars', desc: 'Set API keys in the dashboard. DATABASE_URL and TEMPORAL_ADDRESS are auto-provisioned.' },
                { icon: '🔒', label: 'Automatic TLS', desc: 'SSL certificates provisioned and renewed automatically. Never manage certs again.' },
              ].map((item) => (
                <div key={item.label} className="flex gap-4 p-5 rounded-xl bg-[#111117] border border-white/[0.07] hover:border-white/[0.12] transition-colors">
                  <span className="text-2xl flex-shrink-0">{item.icon}</span>
                  <div>
                    <div className="text-sm font-semibold text-[#f4f4f5] mb-1">{item.label}</div>
                    <div className="text-xs text-[#71717a] leading-relaxed">{item.desc}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Features grid */}
      <section className="py-20 border-t border-white/[0.06]">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-14">
            <h2 className="text-3xl sm:text-4xl font-bold text-[#f4f4f5] mb-4">
              Everything production needs
            </h2>
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

      {/* How deployment works */}
      <section className="py-20 border-t border-white/[0.06]">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-3xl sm:text-4xl font-bold text-[#f4f4f5] mb-6">
                From code to production<br />
                <span className="gradient-text">in under 60 seconds</span>
              </h2>
              <div className="space-y-5">
                {[
                  { step: '01', title: 'Connect GitHub', desc: 'Link your repo once. Every push to main auto-deploys with zero-downtime rollout.' },
                  { step: '02', title: 'Run `runflo deploy`', desc: 'CLI builds your TypeScript, provisions all infrastructure, and deploys your container.' },
                  { step: '03', title: 'Get your URL', desc: 'Your agent is live at <project>.runflo.app. Share it, call it, or hit it from your frontend.' },
                  { step: '04', title: 'Monitor and iterate', desc: 'Stream logs with `runflo logs`, roll back with `runflo rollback`, add env vars in the dashboard.' },
                ].map((item) => (
                  <div key={item.step} className="flex gap-5">
                    <div className="flex-shrink-0 w-9 h-9 rounded-lg flex items-center justify-center text-xs font-bold text-[#3B5BFF]"
                      style={{ background: 'linear-gradient(135deg, #3B5BFF18, #8B5CF625)', border: '1px solid #3B5BFF44' }}>
                      {item.step}
                    </div>
                    <div>
                      <div className="text-sm font-semibold text-[#f4f4f5] mb-1">{item.title}</div>
                      <div className="text-sm text-[#71717a] leading-relaxed">{item.desc}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Dashboard mockup */}
            <div className="rounded-2xl border border-white/[0.08] bg-[#111117] overflow-hidden">
              <div className="flex items-center gap-2 px-4 py-3 bg-[#0f0f14] border-b border-white/[0.06]">
                <span className="w-2.5 h-2.5 rounded-full bg-[#ff5f57]" />
                <span className="w-2.5 h-2.5 rounded-full bg-[#febc2e]" />
                <span className="w-2.5 h-2.5 rounded-full bg-[#28c840]" />
                <span className="ml-3 text-xs text-[#52525b] font-mono">runflo.dev/dashboard</span>
              </div>
              <div className="p-5 space-y-3">
                <div className="text-xs font-semibold uppercase tracking-widest text-[#52525b] mb-4">Projects</div>
                {['my-research-agent', 'customer-support-bot', 'data-pipeline'].map((name, i) => (
                  <div key={name} className="flex items-center justify-between p-3.5 rounded-lg bg-[#0d0d12] border border-white/[0.06]">
                    <div className="flex items-center gap-3">
                      <span className="w-2 h-2 rounded-full bg-[#22c55e] shadow-[0_0_6px_#22c55e]" />
                      <span className="text-sm font-mono text-[#f4f4f5]">{name}</span>
                    </div>
                    <span className="text-xs text-[#52525b]">{['2m ago', '1h ago', '3h ago'][i]}</span>
                  </div>
                ))}
                <div className="pt-3 border-t border-white/[0.06]">
                  <div className="text-xs text-[#52525b] mb-2">Agent runs today</div>
                  <div className="flex gap-1 items-end h-12">
                    {[40, 65, 45, 80, 55, 90, 70, 85, 60, 95, 75, 100].map((h, i) => (
                      <div
                        key={i}
                        className="flex-1 rounded-sm"
                        style={{
                          height: `${h}%`,
                          background: i === 11
                            ? 'linear-gradient(to top, #00C2FF, #3B5BFF)'
                            : 'rgba(59,91,255,0.25)',
                        }}
                      />
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Plan cards (abbreviated) */}
      <section className="py-20 border-t border-white/[0.06]">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-[#f4f4f5] mb-4">
              Simple, transparent pricing
            </h2>
          </div>
          <div className="grid sm:grid-cols-3 gap-5 max-w-4xl mx-auto">
            {plans.map((plan) => (
              <div
                key={plan.name}
                className={`p-6 rounded-2xl flex flex-col ${
                  plan.featured
                    ? 'bg-[#111117] gradient-border glow-blue'
                    : 'bg-[#111117] border border-white/[0.07]'
                }`}
              >
                <div className="text-xs font-semibold uppercase tracking-widest text-[#52525b] mb-3">{plan.name}</div>
                <div className="flex items-end gap-1 mb-4">
                  <span className="text-3xl font-bold text-[#f4f4f5]">{plan.price}</span>
                  <span className="text-sm text-[#71717a] mb-1">{plan.period}</span>
                </div>
                <ul className="space-y-2 flex-1 mb-5">
                  {plan.specs.map((s) => (
                    <li key={s} className="flex items-start gap-2 text-xs text-[#a1a1aa]">
                      <span className="text-[#00C2FF] mt-0.5">✓</span>
                      {s}
                    </li>
                  ))}
                </ul>
                <Link
                  href={plan.href}
                  className={`w-full py-2.5 rounded-xl text-sm font-semibold text-center flex items-center justify-center gap-2 transition-colors ${
                    plan.featured
                      ? 'btn-gradient text-white'
                      : 'border border-white/[0.12] text-[#f4f4f5] hover:bg-white/[0.04]'
                  }`}
                >
                  Get started
                  <ArrowRight size={13} />
                </Link>
              </div>
            ))}
          </div>
          <div className="text-center mt-8">
            <Link href="/pricing" className="text-sm text-[#a1a1aa] hover:text-[#f4f4f5] underline underline-offset-4 transition-colors">
              See full pricing including Enterprise
            </Link>
          </div>
        </div>
      </section>

    </div>
  )
}
