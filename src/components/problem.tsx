import { X, Check } from 'lucide-react'

const problems = [
  {
    problem: 'Agent crashes halfway through a task. State is lost. No way to resume.',
    solution: 'runflo checkpoints every step. A crash at step 7 of 10 resumes from step 7 — not step 1.',
  },
  {
    problem: 'Retry logic written manually per project. No consistency.',
    solution: 'Every step has configurable retries, backoff, and timeouts built in. Write it once in config.',
  },
  {
    problem: 'No visibility into what happened when an agent fails.',
    solution: 'Every run is fully observable. Replay the exact sequence of events that caused any failure.',
  },
]

export default function Problem() {
  return (
    <section id="features" className="relative py-24 sm:py-32">
      <div className="section-divider absolute top-0 left-0 right-0" />

      <div className="max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-start">

          {/* ── Left: The Problem ─────────────────────────────────────── */}
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-red-500/20 bg-red-500/05 text-xs text-red-400 mb-6">
              <X size={11} />
              The problem today
            </div>
            <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-[#f4f4f5] mb-10 leading-tight">
              AI agents are fragile.<br />
              They break at the worst time.
            </h2>

            <div className="flex flex-col gap-5">
              {problems.map((item, i) => (
                <div key={i} className="flex gap-4 p-5 rounded-xl bg-red-500/[0.04] border border-red-500/[0.12]">
                  <div className="flex-shrink-0 w-6 h-6 rounded-full bg-red-500/15 border border-red-500/25 flex items-center justify-center mt-0.5">
                    <X size={12} className="text-red-400" strokeWidth={2.5} />
                  </div>
                  <p className="text-[#a1a1aa] text-sm leading-relaxed">{item.problem}</p>
                </div>
              ))}
            </div>
          </div>

          {/* ── Right: The Solution ────────────────────────────────────── */}
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-green-500/20 bg-green-500/05 text-xs text-green-400 mb-6">
              <Check size={11} />
              runflo solves this
            </div>
            <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-[#f4f4f5] mb-10 leading-tight">
              Durable execution.<br />
              <span className="gradient-text">Agents that don't fail.</span>
            </h2>

            <div className="flex flex-col gap-5">
              {problems.map((item, i) => (
                <div key={i} className="flex gap-4 p-5 rounded-xl bg-[#3B5BFF]/[0.05] border border-[#3B5BFF]/[0.15]">
                  <div className="flex-shrink-0 w-6 h-6 rounded-full flex items-center justify-center mt-0.5" style={{ background: 'linear-gradient(135deg, #00C2FF22, #3B5BFF33)', border: '1px solid #3B5BFF55' }}>
                    <Check size={12} className="text-[#00C2FF]" strokeWidth={2.5} />
                  </div>
                  <p className="text-[#a1a1aa] text-sm leading-relaxed">{item.solution}</p>
                </div>
              ))}
            </div>

            {/* Crash → Resume diagram */}
            <div className="mt-8 p-5 rounded-xl bg-[#111117] border border-white/[0.07]">
              <div className="text-xs text-[#52525b] uppercase tracking-wider mb-4">What happens when a crash occurs</div>
              <div className="flex items-center gap-2 flex-wrap">
                {['Step 1 ✓', 'Step 2 ✓', 'Step 3 ✓', 'Step 4 ✓', 'Step 5 ✓', 'Step 6 ✓', '💥 Crash', 'Step 7 ▶', 'Step 8', 'Step 9', 'Done'].map((step, i) => (
                  <div key={i} className="flex items-center gap-2">
                    <span
                      className={`text-xs font-mono px-2.5 py-1 rounded-md ${
                        step.includes('✓')
                          ? 'bg-green-500/10 text-green-400 border border-green-500/20'
                          : step.includes('💥')
                          ? 'bg-red-500/15 text-red-400 border border-red-500/25'
                          : step.includes('▶')
                          ? 'text-white border'
                          : step === 'Done'
                          ? 'bg-[#3B5BFF]/15 text-[#00C2FF] border border-[#3B5BFF]/30'
                          : 'bg-white/[0.03] text-[#52525b] border border-white/[0.07]'
                      }`}
                      style={step.includes('▶') ? { background: 'linear-gradient(135deg, #00C2FF22, #3B5BFF33)', borderColor: '#3B5BFF55' } : {}}
                    >
                      {step}
                    </span>
                    {i < 10 && <span className="text-[#3f3f46] text-xs">→</span>}
                  </div>
                ))}
              </div>
              <p className="text-xs text-[#52525b] mt-3">Resumes from the exact point of failure. Steps 1–6 are not re-run.</p>
            </div>
          </div>

        </div>
      </div>
    </section>
  )
}
