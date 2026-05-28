import { ArrowRight, Github } from 'lucide-react'

export default function Cta() {
  return (
    <section id="get-started" className="relative py-24 sm:py-32 overflow-hidden">
      <div className="section-divider absolute top-0 left-0 right-0" />

      <div className="pointer-events-none absolute inset-0" aria-hidden>
        <div className="absolute inset-0 hero-mesh" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[900px] h-[500px] rounded-full bg-[#3B5BFF]/10 blur-[100px]" />
        <div className="absolute top-0 left-0 right-0 bottom-0 grid-pattern opacity-50" />
      </div>

      <div className="relative max-w-4xl mx-auto px-6 text-center">
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-white/[0.12] bg-white/[0.03] text-xs text-[#a1a1aa] mb-8">
          <span className="w-1.5 h-1.5 rounded-full bg-[#22c55e] shadow-[0_0_6px_#22c55e]" />
          Free & open source — MIT license
        </div>

        <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-[#f4f4f5] mb-6 leading-[1.05]">
          Start building in{' '}
          <span className="gradient-text">2 minutes</span>
        </h2>

        <p className="text-lg sm:text-xl text-[#a1a1aa] mb-10 max-w-2xl mx-auto leading-relaxed">
          Install the framework, write your first agent, and deploy to runflo Cloud with a single command.
          No servers, no DevOps, no drama.
        </p>

        {/* Terminal steps */}
        <div className="flex flex-col sm:flex-row items-stretch justify-center gap-3 mb-10 max-w-2xl mx-auto">
          {[
            { step: '1', cmd: 'npm install @runflo/core' },
            { step: '2', cmd: 'runflo init my-agent' },
            { step: '3', cmd: 'runflo deploy' },
          ].map(({ step, cmd }) => (
            <div
              key={step}
              className="flex-1 flex items-center gap-3 px-4 py-3 bg-[#0d0d12] border border-white/[0.09] rounded-xl"
            >
              <span
                className="flex-shrink-0 w-5 h-5 rounded-full flex items-center justify-center text-[10px] font-bold text-white"
                style={{ background: 'linear-gradient(135deg, #3B5BFF, #7A3CFF)' }}
              >
                {step}
              </span>
              <code className="font-mono text-xs text-[#f4f4f5] whitespace-nowrap">{cmd}</code>
            </div>
          ))}
        </div>

        {/* CTAs */}
        <div className="flex flex-wrap items-center justify-center gap-4">
          <a
            href="#docs"
            className="btn-gradient px-8 py-3.5 rounded-xl text-base font-semibold text-white flex items-center gap-2 shadow-lg"
          >
            Read the docs
            <ArrowRight size={16} />
          </a>
          <a
            href="https://github.com/runflo"
            target="_blank"
            rel="noreferrer"
            className="flex items-center gap-2 px-8 py-3.5 rounded-xl text-base font-semibold text-[#a1a1aa] border border-white/[0.1] hover:border-white/[0.2] hover:text-[#f4f4f5] hover:bg-white/[0.03] transition-all duration-200"
          >
            <Github size={18} />
            Star on GitHub
          </a>
        </div>

        <p className="mt-10 text-sm text-[#52525b]">
          No credit card required · MIT licensed · Self-host or deploy to runflo Cloud
        </p>
      </div>
    </section>
  )
}
