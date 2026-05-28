import { Pencil, GitBranch, Rocket, ArrowRight } from 'lucide-react'

const steps = [
  {
    number: '01',
    icon: Pencil,
    title: 'Define your agent logic',
    description:
      'Create flows for orchestration and nodes for all I/O operations. Flows are durable and deterministic; nodes handle real-world side effects like API calls and database writes.',
    code: `export const agent = defineFlow({
  name: 'agent',
  run: async ({ userId }) => {
    const { callLlm } = useNodes()
    return await callLlm({ userId })
  }
})`,
    gradient: 'from-[#00C2FF] to-[#3B5BFF]',
  },
  {
    number: '02',
    icon: GitBranch,
    title: 'Connect external events',
    description:
      'Triggers bridge the outside world to your durable flows. Wire up HTTP endpoints, WebSockets, queues, schedules, or any event source to start and signal your agents.',
    code: `export const trigger = defineTrigger({
  name: 'webhook',
  async start(ctx) {
    ctx.registerHttpHandler(
      'POST', '/message',
      async (req, res) => {
        await flows.agent.signal(...)
        res.json({ ok: true })
      })
  }
})`,
    gradient: 'from-[#3B5BFF] to-[#7A3CFF]',
  },
  {
    number: '03',
    icon: Rocket,
    title: 'Deploy once, run forever',
    description:
      'Boot the entire runtime with createRunner(). Deploy to any Node.js environment — cloud VMs, containers, serverless. Temporal handles state, retries, and coordination.',
    code: `await createRunner({
  name: 'my-agent',
  flowsPath: resolveImport('./flows'),
  nodesPath: resolveImport('./nodes'),
  triggersPath: resolveImport('./triggers'),
  queues: { default: 'default' },
  persona,
}).start()`,
    gradient: 'from-[#7A3CFF] to-[#00C2FF]',
  },
]

export default function HowItWorks() {
  return (
    <section className="relative py-24 sm:py-32">
      <div className="section-divider absolute top-0 left-0 right-0" />

      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-white/[0.08] bg-white/[0.02] text-xs text-[#a1a1aa] mb-6">
            <span className="w-1.5 h-1.5 rounded-full" style={{ background: 'linear-gradient(135deg, #7A3CFF, #00C2FF)' }} />
            Up and running in minutes
          </div>
          <h2 className="text-4xl sm:text-5xl font-bold tracking-tight text-[#f4f4f5] mb-5">
            How it{' '}
            <span className="gradient-text">works</span>
          </h2>
          <p className="text-lg text-[#a1a1aa] leading-relaxed">
            Three steps from zero to a production-ready AI agent with durable execution.
          </p>
        </div>

        {/* Steps */}
        <div className="space-y-6">
          {steps.map((step, i) => {
            const Icon = step.icon
            return (
              <div
                key={step.number}
                className="group grid lg:grid-cols-[1fr_1.4fr] gap-6 lg:gap-12 p-6 lg:p-8 rounded-2xl bg-[#111117] border border-white/[0.07] hover:border-white/[0.12] transition-all duration-300 items-center"
              >
                {/* Left — description */}
                <div className="flex gap-5 items-start">
                  <div className="flex-shrink-0">
                    <div
                      className={`w-12 h-12 rounded-xl bg-gradient-to-br ${step.gradient} flex items-center justify-center shadow-lg`}
                    >
                      <Icon size={22} className="text-white" strokeWidth={1.75} />
                    </div>
                  </div>
                  <div>
                    <div className="flex items-center gap-3 mb-2">
                      <span className="text-xs font-bold tracking-widest text-[#52525b] uppercase">
                        Step {step.number}
                      </span>
                      {i < steps.length - 1 && (
                        <ArrowRight size={12} className="text-[#3f3f46]" />
                      )}
                    </div>
                    <h3 className="text-xl font-semibold text-[#f4f4f5] mb-3 tracking-tight">
                      {step.title}
                    </h3>
                    <p className="text-[#71717a] leading-relaxed text-sm lg:text-base">
                      {step.description}
                    </p>
                  </div>
                </div>

                {/* Right — code */}
                <div className="rounded-xl overflow-hidden border border-white/[0.06]">
                  <div className="px-3 py-2 bg-[#0d0d12] border-b border-white/[0.04] flex items-center gap-2">
                    <span className="text-[10px] text-[#3f3f46] font-mono uppercase tracking-wider">TypeScript</span>
                  </div>
                  <pre className="code-block text-xs sm:text-[13px] p-4 bg-[#0a0a0e] overflow-x-auto leading-[1.7] text-[#a1a1aa]">
                    <code>{step.code}</code>
                  </pre>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
