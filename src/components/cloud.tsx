import { ArrowRight, Server, Database, Cpu, Globe, Shield, Zap } from 'lucide-react'

const features = [
  {
    icon: Zap,
    title: 'One command to deploy',
    desc: 'Run `runflo deploy` and your agent is live. No Docker files, no Kubernetes manifests.',
  },
  {
    icon: Database,
    title: 'Per-customer Neon DB',
    desc: 'Each project gets its own isolated Postgres database on Neon. Zero shared-tenant risk.',
  },
  {
    icon: Server,
    title: 'Dedicated Temporal namespace',
    desc: 'Your workflows run in a fully isolated Temporal namespace — no noisy neighbours.',
  },
  {
    icon: Cpu,
    title: 'Managed worker containers',
    desc: 'Workers run in Docker containers that scale automatically with your workload.',
  },
  {
    icon: Globe,
    title: 'Production URL in seconds',
    desc: 'Get a `<project>.runflo.app` URL the moment you deploy. Custom domains supported.',
  },
  {
    icon: Shield,
    title: 'Replay & audit history',
    desc: 'Every workflow step is logged. Replay any run to debug exactly what happened.',
  },
]

export default function Cloud() {
  return (
    <section id="cloud" className="relative py-24 sm:py-32">
      <div className="section-divider absolute top-0 left-0 right-0" />

      {/* Background glow */}
      <div className="pointer-events-none absolute inset-0" aria-hidden>
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[600px] rounded-full bg-[#3B5BFF]/07 blur-[120px]" />
      </div>

      <div className="relative max-w-7xl mx-auto px-6">

        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-white/[0.08] bg-white/[0.02] text-xs text-[#a1a1aa] mb-6">
            <span className="w-1.5 h-1.5 rounded-full" style={{ background: 'linear-gradient(135deg, #00C2FF, #3B5BFF)' }} />
            runflo Cloud
          </div>
          <h2 className="text-4xl sm:text-5xl font-bold tracking-tight text-[#f4f4f5] mb-5 leading-tight">
            Deploy in one command.<br />
            <span className="gradient-text">No DevOps required.</span>
          </h2>
          <p className="text-lg text-[#a1a1aa] leading-relaxed">
            runflo Cloud is managed hosting for runflo projects. Get a production URL in seconds —
            no servers to manage, no infrastructure to provision.
          </p>
        </div>

        {/* Deploy demo */}
        <div className="max-w-2xl mx-auto mb-16">
          <div className="rounded-2xl overflow-hidden border border-white/[0.08] shadow-2xl shadow-black/40">
            <div className="flex items-center gap-2 px-4 py-3 bg-[#0f0f14] border-b border-white/[0.06]">
              <span className="w-3 h-3 rounded-full bg-[#ff5f57]" />
              <span className="w-3 h-3 rounded-full bg-[#febc2e]" />
              <span className="w-3 h-3 rounded-full bg-[#28c840]" />
              <span className="ml-3 text-xs text-[#52525b] font-mono">Terminal</span>
            </div>
            <div className="bg-[#09090d] p-6 font-mono text-sm leading-[2]">
              <div>
                <span className="text-[#52525b]">$ </span>
                <span className="text-[#f4f4f5]">runflo deploy</span>
              </div>
              <div className="text-[#a1a1aa]">
                <span className="text-[#22c55e] mr-2">✓</span>
                Building worker container...
              </div>
              <div className="text-[#a1a1aa]">
                <span className="text-[#22c55e] mr-2">✓</span>
                Provisioning Temporal namespace...
              </div>
              <div className="text-[#a1a1aa]">
                <span className="text-[#22c55e] mr-2">✓</span>
                Provisioning Neon database...
              </div>
              <div className="text-[#a1a1aa]">
                <span className="text-[#22c55e] mr-2">✓</span>
                Deploying to edge...
              </div>
              <div className="mt-1">
                <span className="text-[#22c55e] mr-2">▲</span>
                <span className="gradient-text font-semibold">Live at </span>
                <span className="text-[#00C2FF] font-semibold">my-agent.runflo.app</span>
              </div>
            </div>
          </div>
        </div>

        {/* Feature grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5 mb-12">
          {features.map((f) => {
            const Icon = f.icon
            return (
              <div
                key={f.title}
                className="p-6 rounded-xl bg-[#111117] border border-white/[0.07] hover:border-white/[0.12] transition-colors"
              >
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

        {/* Per-customer stack diagram */}
        <div className="p-7 rounded-2xl bg-[#111117] border border-white/[0.07]">
          <div className="flex flex-col lg:flex-row gap-8 items-start">
            <div className="flex-1">
              <div className="text-xs font-semibold uppercase tracking-widest text-[#52525b] mb-4">
                Your isolated stack per project
              </div>
              <div className="flex flex-wrap gap-3">
                {[
                  { label: 'Your Code', color: 'text-[#f4f4f5]', border: '#3B5BFF55', bg: '#3B5BFF15' },
                  { label: 'Docker Container', color: 'text-[#a1a1aa]', border: '#ffffff18', bg: '#ffffff06' },
                  { label: 'Temporal Namespace', color: 'text-[#00C2FF]', border: '#00C2FF33', bg: '#00C2FF0D' },
                  { label: 'Neon Postgres DB', color: 'text-[#a1a1aa]', border: '#ffffff18', bg: '#ffffff06' },
                  { label: 'runflo.app URL', color: 'text-[#22c55e]', border: '#22c55e33', bg: '#22c55e0D' },
                ].map((item) => (
                  <div
                    key={item.label}
                    className={`px-3.5 py-2 rounded-lg text-xs font-mono font-medium ${item.color}`}
                    style={{ background: item.bg, border: `1px solid ${item.border}` }}
                  >
                    {item.label}
                  </div>
                ))}
              </div>
            </div>
            <div className="w-px bg-white/[0.06] self-stretch hidden lg:block" />
            <div className="lg:max-w-xs text-sm text-[#71717a] leading-relaxed">
              <strong className="text-[#f4f4f5] block mb-2">Zero shared-tenant risk.</strong>
              Every project gets a completely isolated database, workflow namespace, and compute container.
              Your agents never share resources with other customers.
            </div>
          </div>
        </div>

        {/* CTA */}
        <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
          <a
            href="#pricing"
            className="btn-gradient px-7 py-3.5 rounded-xl text-base font-semibold text-white flex items-center gap-2 shadow-lg"
          >
            See Cloud pricing
            <ArrowRight size={16} />
          </a>
          <a
            href="#docs"
            className="flex items-center gap-2 px-7 py-3.5 rounded-xl text-base font-semibold text-[#a1a1aa] border border-white/[0.1] hover:border-white/[0.2] hover:text-[#f4f4f5] hover:bg-white/[0.03] transition-all"
          >
            Read the docs
            <ArrowRight size={14} />
          </a>
        </div>

      </div>
    </section>
  )
}
