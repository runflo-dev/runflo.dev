import { Check, X, Minus } from 'lucide-react'

const stats = [
  { n: '10M+', label: 'Concurrent workflows', sub: 'Durable execution at any scale' },
  { n: '∞', label: 'Task duration', sub: 'No timeout. Runs until done.' },
  { n: '0', label: 'State lost on crash', sub: 'Durable execution guarantee' },
  { n: '1', label: 'Command to deploy', sub: 'runflo deploy — that is it' },
]

type FeatureValue = true | false | 'partial'

interface Feature {
  label: string
  runflo: FeatureValue
  langchain: FeatureValue
  crewai: FeatureValue
  langgraph: FeatureValue
  autogen: FeatureValue
}

const features: Feature[] = [
  { label: 'Durable execution (survives crashes)',  runflo: true,    langchain: false,   crewai: false,   langgraph: false,   autogen: false   },
  { label: 'Long-running tasks (hours / days)',     runflo: true,    langchain: false,   crewai: false,   langgraph: false,   autogen: false   },
  { label: 'Automatic context resets',             runflo: true,    langchain: false,   crewai: false,   langgraph: false,   autogen: false   },
  { label: 'Independent evaluator (harness)',      runflo: true,    langchain: false,   crewai: false,   langgraph: false,   autogen: false   },
  { label: 'TypeScript-first',                     runflo: true,    langchain: 'partial', crewai: false, langgraph: 'partial', autogen: false },
  { label: 'Full observability & replay',          runflo: true,    langchain: 'partial', crewai: false, langgraph: 'partial', autogen: false },
  { label: 'Production-ready out of the box',      runflo: true,    langchain: false,   crewai: false,   langgraph: 'partial', autogen: false },
  { label: 'Human-in-the-loop (pause & resume)',   runflo: true,    langchain: 'partial', crewai: 'partial', langgraph: true, autogen: 'partial' },
  { label: 'Multi-agent orchestration',            runflo: true,    langchain: 'partial', crewai: true,  langgraph: true,    autogen: true    },
  { label: 'Enterprise support',                   runflo: true,    langchain: false,   crewai: false,   langgraph: false,   autogen: false   },
]

const cols = [
  { key: 'runflo',    label: 'runflo',    highlight: true  },
  { key: 'langchain', label: 'LangChain', highlight: false },
  { key: 'crewai',    label: 'CrewAI',    highlight: false },
  { key: 'langgraph', label: 'LangGraph', highlight: false },
  { key: 'autogen',   label: 'AutoGen',   highlight: false },
]

function Cell({ value }: { value: FeatureValue }) {
  if (value === true)      return <Check size={15} className="text-[#22c55e] mx-auto" strokeWidth={2.5} />
  if (value === false)     return <X     size={15} className="text-[#3f3f46] mx-auto" strokeWidth={2.5} />
  return                          <Minus size={15} className="text-[#a1a1aa] mx-auto" strokeWidth={2.5} />
}

export default function Comparison() {
  return (
    <section id="scale" className="relative py-24 sm:py-32 overflow-hidden">
      <div className="section-divider absolute top-0 left-0 right-0" />

      <div className="pointer-events-none absolute inset-0" aria-hidden>
        <div className="absolute top-1/3 right-1/4 w-[500px] h-[400px] rounded-full bg-[#00C2FF]/06 blur-[120px]" />
        <div className="absolute inset-0 grid-pattern opacity-25" />
      </div>

      <div className="relative max-w-7xl mx-auto px-6">

        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-white/[0.08] bg-white/[0.02] text-xs text-[#a1a1aa] mb-6">
            <span className="w-1.5 h-1.5 rounded-full" style={{ background: 'linear-gradient(135deg, #00C2FF, #3B5BFF)' }} />
            Built to scale — compared honestly
          </div>
          <h2 className="text-4xl sm:text-5xl font-bold tracking-tight text-[#f4f4f5] leading-tight mb-5">
            Why teams move to<br />
            <span className="gradient-text">runflo</span>
          </h2>
          <p className="text-lg text-[#a1a1aa] leading-relaxed">
            Other frameworks work in demos. runflo works in production — at any scale, for any duration, with no surprises.
          </p>
        </div>

        {/* Scale stats */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-16">
          {stats.map((s) => (
            <div
              key={s.label}
              className="p-6 rounded-2xl bg-[#111117] border border-white/[0.07] text-center"
            >
              <div className="text-4xl font-bold gradient-text mb-2 leading-none">{s.n}</div>
              <div className="text-sm font-semibold text-[#f4f4f5] mb-1">{s.label}</div>
              <div className="text-xs text-[#52525b] leading-relaxed">{s.sub}</div>
            </div>
          ))}
        </div>

        {/* Comparison table */}
        <div className="rounded-2xl border border-white/[0.07] overflow-hidden">

          {/* Table header */}
          <div className="grid grid-cols-[1fr_repeat(5,80px)] lg:grid-cols-[1fr_repeat(5,110px)] bg-[#0d0d12] border-b border-white/[0.07]">
            <div className="px-6 py-4 text-xs font-semibold uppercase tracking-widest text-[#52525b]">Feature</div>
            {cols.map((col) => (
              <div
                key={col.key}
                className={`py-4 text-center text-xs font-bold tracking-wide ${
                  col.highlight
                    ? 'text-white bg-[#3B5BFF]/[0.12] border-x border-[#3B5BFF]/20'
                    : 'text-[#52525b]'
                }`}
              >
                {col.highlight ? (
                  <span className="gradient-text">{col.label}</span>
                ) : (
                  col.label
                )}
              </div>
            ))}
          </div>

          {/* Rows */}
          {features.map((f, i) => (
            <div
              key={f.label}
              className={`grid grid-cols-[1fr_repeat(5,80px)] lg:grid-cols-[1fr_repeat(5,110px)] border-b border-white/[0.04] ${
                i % 2 === 0 ? 'bg-[#111117]' : 'bg-[#0f0f14]'
              }`}
            >
              <div className="px-6 py-3.5 text-sm text-[#a1a1aa] flex items-center">{f.label}</div>
              {cols.map((col) => (
                <div
                  key={col.key}
                  className={`py-3.5 flex items-center justify-center ${
                    col.highlight ? 'bg-[#3B5BFF]/[0.07] border-x border-[#3B5BFF]/10' : ''
                  }`}
                >
                  <Cell value={f[col.key as keyof Feature] as FeatureValue} />
                </div>
              ))}
            </div>
          ))}

          {/* Footer */}
          <div className="grid grid-cols-[1fr_repeat(5,80px)] lg:grid-cols-[1fr_repeat(5,110px)] bg-[#0d0d12]">
            <div className="px-6 py-4" />
            {cols.map((col) => (
              <div
                key={col.key}
                className={`py-4 flex items-center justify-center ${
                  col.highlight ? 'bg-[#3B5BFF]/[0.12] border-x border-[#3B5BFF]/20' : ''
                }`}
              >
                {col.highlight && (
                  <a
                    href="#contact"
                    className="btn-gradient px-3 py-1.5 rounded-lg text-xs font-semibold text-white whitespace-nowrap"
                  >
                    Get early access
                  </a>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Legend */}
        <div className="flex items-center justify-center gap-6 mt-5">
          {[
            { icon: <Check size={12} className="text-[#22c55e]" strokeWidth={2.5} />, label: 'Supported' },
            { icon: <Minus size={12} className="text-[#a1a1aa]" strokeWidth={2.5} />, label: 'Partial' },
            { icon: <X     size={12} className="text-[#3f3f46]"  strokeWidth={2.5} />, label: 'Not supported' },
          ].map((l) => (
            <div key={l.label} className="flex items-center gap-1.5">
              {l.icon}
              <span className="text-xs text-[#52525b]">{l.label}</span>
            </div>
          ))}
        </div>

      </div>
    </section>
  )
}
