import { ShieldCheck, RefreshCw, GitBranch, Zap } from 'lucide-react'

const roles = [
  {
    name: 'Planner',
    color: '#00C2FF',
    border: 'border-[#00C2FF]/30',
    bg: 'bg-[#00C2FF]/[0.07]',
    dot: 'bg-[#00C2FF]',
    desc: 'Expands a vague prompt into a precise, verifiable spec before any work begins.',
  },
  {
    name: 'Generator',
    color: '#3B5BFF',
    border: 'border-[#3B5BFF]/30',
    bg: 'bg-[#3B5BFF]/[0.07]',
    dot: 'bg-[#3B5BFF]',
    desc: 'Executes the spec using tools and code. Resets context automatically when full — Temporal holds all state.',
  },
  {
    name: 'Evaluator',
    color: '#8B5CF6',
    border: 'border-[#8B5CF6]/30',
    bg: 'bg-[#8B5CF6]/[0.07]',
    dot: 'bg-[#8B5CF6]',
    desc: 'Independently grades the output against the original spec. Never saw the generator work — no bias.',
  },
]

const benefits = [
  {
    icon: ShieldCheck,
    title: 'Independent quality verification',
    desc: 'A separate evaluator agent grades every output. Agents cannot pass their own work.',
  },
  {
    icon: RefreshCw,
    title: 'Automatic context resets',
    desc: 'When context fills up, the agent resets cleanly. Temporal preserves all state — no work is lost.',
  },
  {
    icon: GitBranch,
    title: 'Full audit trail',
    desc: 'Every planner decision, generator step, and evaluator verdict is recorded in Temporal history.',
  },
  {
    icon: Zap,
    title: 'Runs for hours, not minutes',
    desc: 'Harness loops generator → evaluator until the spec is met. Handles tasks no other framework can finish.',
  },
]

export default function Harness() {
  return (
    <section id="harness" className="relative py-24 sm:py-32 overflow-hidden">
      <div className="section-divider absolute top-0 left-0 right-0" />

      {/* Background glow */}
      <div className="pointer-events-none absolute inset-0" aria-hidden>
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[500px] rounded-full bg-[#3B5BFF]/08 blur-[120px]" />
        <div className="absolute inset-0 grid-pattern opacity-30" />
      </div>

      <div className="relative max-w-7xl mx-auto px-6">

        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-[#8B5CF6]/30 bg-[#8B5CF6]/[0.06] text-xs text-[#8B5CF6] mb-6">
            <span className="w-1.5 h-1.5 rounded-full bg-[#8B5CF6] shadow-[0_0_6px_#8B5CF6]" />
            Enterprise architecture — Harness Design
          </div>
          <h2 className="text-4xl sm:text-5xl font-bold tracking-tight text-[#f4f4f5] leading-tight mb-5">
            The framework that runs{' '}
            <span className="gradient-text">when others give up</span>
          </h2>
          <p className="text-lg text-[#a1a1aa] leading-relaxed">
            Enterprise tasks take hours, not minutes. runflo is the only framework built with harness
            architecture — the same pattern Anthropic uses for long-running AI applications.
          </p>
        </div>

        {/* Harness flow diagram */}
        <div className="mb-16">
          <div className="relative p-8 rounded-2xl bg-[#111117] border border-white/[0.07]">

            {/* Loop label */}
            <div className="absolute -top-3 left-1/2 -translate-x-1/2 px-4 py-1 rounded-full bg-[#111117] border border-white/[0.08] text-[10px] font-semibold uppercase tracking-widest text-[#52525b]">
              Harness loop — repeats until evaluator passes
            </div>

            <div className="flex flex-col lg:flex-row items-center gap-4 lg:gap-0">
              {roles.map((role, i) => (
                <div key={role.name} className="flex lg:flex-row flex-col items-center gap-4 lg:gap-0 flex-1">
                  {/* Role card */}
                  <div className={`flex-1 p-5 rounded-xl border ${role.border} ${role.bg} w-full`}>
                    <div className="flex items-center gap-2.5 mb-3">
                      <span className={`w-2 h-2 rounded-full ${role.dot} shadow-[0_0_8px_currentColor]`} style={{ color: role.color }} />
                      <span className="text-sm font-bold text-[#f4f4f5] tracking-wide">{role.name}</span>
                    </div>
                    <p className="text-xs text-[#71717a] leading-relaxed">{role.desc}</p>
                  </div>

                  {/* Arrow between roles */}
                  {i < roles.length - 1 && (
                    <div className="lg:px-3 flex lg:flex-row flex-col items-center gap-1">
                      <div className="hidden lg:block h-px w-8 bg-gradient-to-r from-white/[0.08] to-white/[0.2]" />
                      <div className="hidden lg:block w-0 h-0 border-t-4 border-b-4 border-l-8 border-transparent border-l-white/20" />
                      <div className="lg:hidden w-px h-6 bg-gradient-to-b from-white/[0.08] to-white/[0.2]" />
                    </div>
                  )}
                </div>
              ))}

              {/* Loop back arrow */}
              <div className="hidden lg:flex items-center pl-4">
                <div className="flex flex-col items-center gap-1 text-[#52525b]">
                  <span className="text-[10px] font-mono text-[#52525b]">retry</span>
                  <div className="w-px h-4 bg-white/[0.08]" />
                  <div className="text-[#3B5BFF] text-xs">↺</div>
                </div>
              </div>
            </div>

            {/* Context reset indicator */}
            <div className="mt-6 pt-5 border-t border-white/[0.05] flex flex-col sm:flex-row items-start sm:items-center gap-4">
              <div className="flex items-center gap-3 flex-1">
                <div className="flex gap-1 items-end h-6">
                  {[40, 55, 70, 85, 30, 45, 60, 75, 35, 50].map((h, i) => (
                    <div
                      key={i}
                      className="w-2 rounded-sm transition-all"
                      style={{
                        height: `${h}%`,
                        background: h >= 85
                          ? 'linear-gradient(to top, #ff5f57, #ff5f5755)'
                          : h >= 70
                          ? 'linear-gradient(to top, #3B5BFF, #3B5BFF44)'
                          : 'linear-gradient(to top, #00C2FF44, #00C2FF22)',
                      }}
                    />
                  ))}
                </div>
                <div>
                  <div className="text-xs font-medium text-[#f4f4f5]">Context window resets automatically at 85%</div>
                  <div className="text-[11px] text-[#52525b]">Temporal holds all state — agent resumes with a clean slate</div>
                </div>
              </div>
              <div className="flex items-center gap-2 px-3 py-1.5 rounded-lg bg-green-500/[0.07] border border-green-500/20">
                <span className="w-1.5 h-1.5 rounded-full bg-[#22c55e]" />
                <span className="text-xs text-green-400 font-medium">Zero work lost on reset</span>
              </div>
            </div>
          </div>
        </div>

        {/* Benefits grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-16">
          {benefits.map((b) => {
            const Icon = b.icon
            return (
              <div key={b.title} className="p-5 rounded-xl bg-[#111117] border border-white/[0.07] hover:border-white/[0.13] transition-colors">
                <div
                  className="w-9 h-9 rounded-lg flex items-center justify-center mb-4"
                  style={{ background: 'linear-gradient(135deg, #00C2FF18, #3B5BFF25)', border: '1px solid #3B5BFF44' }}
                >
                  <Icon size={17} className="text-[#00C2FF]" />
                </div>
                <h3 className="text-sm font-semibold text-[#f4f4f5] mb-2 leading-snug">{b.title}</h3>
                <p className="text-xs text-[#52525b] leading-relaxed">{b.desc}</p>
              </div>
            )
          })}
        </div>

        {/* Enterprise CTA strip */}
        <div className="rounded-2xl border border-white/[0.07] bg-[#111117] p-8 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6">
          <div>
            <div className="flex items-center gap-2 mb-2">
              <span className="text-[10px] font-semibold uppercase tracking-widest text-[#8B5CF6]">Adopted by leaders</span>
            </div>
            <h3 className="text-xl font-bold text-[#f4f4f5] mb-1">Harness design is how the best AI teams ship.</h3>
            <p className="text-sm text-[#71717a]">runflo makes it a single import. Your team gets enterprise reliability without the infrastructure work.</p>
          </div>
          <a
            href="#contact"
            className="btn-gradient px-7 py-3.5 rounded-xl text-sm font-semibold text-white whitespace-nowrap flex-shrink-0"
          >
            Talk to us about enterprise
          </a>
        </div>

      </div>
    </section>
  )
}
