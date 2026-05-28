import {
  Shield,
  Code2,
  Zap,
  RefreshCw,
  Timer,
  BarChart3,
} from 'lucide-react'
import type { LucideIcon } from 'lucide-react'

interface Feature {
  icon: LucideIcon
  title: string
  description: string
  gradient: string
  tag?: string
}

const features: Feature[] = [
  {
    icon: Shield,
    title: 'Durable by Default',
    description:
      "Agents survive worker restarts and network failures. Temporal's event-sourced execution guarantees exactly-once delivery — no more state loss on crashes.",
    gradient: 'from-[#00C2FF] to-[#3B5BFF]',
    tag: 'Core',
  },
  {
    icon: Code2,
    title: 'Type-Safe API',
    description:
      'Full TypeScript with generic inference throughout. defineFlow, defineNode, and defineTrigger give you compile-time safety and full IDE autocompletion everywhere.',
    gradient: 'from-[#3B5BFF] to-[#7A3CFF]',
    tag: 'TypeScript',
  },
  {
    icon: Zap,
    title: 'Signal-Based Agents',
    description:
      'Two-way communication with running agents via Temporal signals. Perfect for conversational AI — send messages mid-execution without losing any context.',
    gradient: 'from-[#7A3CFF] to-[#00C2FF]',
    tag: 'Real-time',
  },
  {
    icon: RefreshCw,
    title: 'Built-in Resilience',
    description:
      'Circuit breakers, rate limiters, exponential backoff, and retry policies — all configured declaratively. Production reliability without boilerplate code.',
    gradient: 'from-[#00C2FF] to-[#7A3CFF]',
    tag: 'Reliability',
  },
  {
    icon: Timer,
    title: 'Durable Scheduling',
    description:
      'Declarative cron schedules that survive deployments. addSchedule() + applySchedules() reconciles desired vs actual state with zero drift across restarts.',
    gradient: 'from-[#3B5BFF] to-[#00C2FF]',
    tag: 'Schedules',
  },
  {
    icon: BarChart3,
    title: 'Observable by Default',
    description:
      'Prometheus metrics, Pino structured logging, and OpenTelemetry tracing out of the box. Know what your agents are doing in production at all times.',
    gradient: 'from-[#7A3CFF] to-[#3B5BFF]',
    tag: 'Observability',
  },
]

export default function Features() {
  return (
    <section id="features" className="relative py-24 sm:py-32">
      {/* Divider */}
      <div className="section-divider absolute top-0 left-0 right-0" />

      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-white/[0.08] bg-white/[0.02] text-xs text-[#a1a1aa] mb-6">
            <span className="w-1.5 h-1.5 rounded-full" style={{ background: 'linear-gradient(135deg, #00C2FF, #3B5BFF)' }} />
            Everything you need
          </div>
          <h2 className="text-4xl sm:text-5xl font-bold tracking-tight text-[#f4f4f5] mb-5">
            Production-grade AI{' '}
            <span className="gradient-text">from day one</span>
          </h2>
          <p className="text-lg text-[#a1a1aa] leading-relaxed">
            runflo handles the infrastructure complexity so you can focus on building the agent
            logic that matters.
          </p>
        </div>

        {/* Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {features.map((feature) => {
            const Icon = feature.icon
            return (
              <div
                key={feature.title}
                className="group relative rounded-2xl p-6 bg-[#111117] border border-white/[0.07] hover:border-white/[0.12] transition-all duration-300 hover:bg-[#14141c]"
              >
                {/* Hover glow */}
                <div className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
                  style={{ background: 'radial-gradient(400px circle at var(--x, 50%) var(--y, 50%), rgba(59,91,255,0.06), transparent 70%)' }}
                />

                {/* Icon */}
                <div
                  className={`inline-flex items-center justify-center w-11 h-11 rounded-xl bg-gradient-to-br ${feature.gradient} mb-5 shadow-lg`}
                >
                  <Icon size={20} className="text-white" strokeWidth={1.75} />
                </div>

                {/* Tag */}
                {feature.tag && (
                  <span className="absolute top-5 right-5 text-[10px] font-semibold tracking-wide uppercase px-2 py-0.5 rounded-full border border-white/[0.08] text-[#71717a]">
                    {feature.tag}
                  </span>
                )}

                {/* Content */}
                <h3 className="text-base font-semibold text-[#f4f4f5] mb-3 tracking-tight">
                  {feature.title}
                </h3>
                <p className="text-sm text-[#71717a] leading-relaxed">{feature.description}</p>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
