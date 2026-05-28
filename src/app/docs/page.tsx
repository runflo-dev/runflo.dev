import type { Metadata } from 'next'
import Link from 'next/link'
import { ArrowRight, BookOpen, Terminal, Package, Cloud, Zap } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Documentation',
  description: 'runflo documentation — quickstart, package guides, API reference, and CLI docs.',
}

const sections = [
  {
    icon: Zap,
    title: 'Quickstart',
    desc: 'Build and run your first runflo agent in under 5 minutes.',
    links: ['Install the CLI', 'runflo init walkthrough', 'Your first agent', 'runflo dev'],
  },
  {
    icon: Package,
    title: 'Core packages',
    desc: 'Reference docs for @runflo/core, agents, memory, and hi.',
    links: ['@runflo/core API', '@runflo/agents API', '@runflo/memory API', '@runflo/hi components'],
  },
  {
    icon: Terminal,
    title: 'CLI reference',
    desc: 'Every runflo command documented with examples.',
    links: ['runflo init', 'runflo dev', 'runflo deploy', 'runflo marketplace'],
  },
  {
    icon: Cloud,
    title: 'Cloud guides',
    desc: 'Deploy, monitor, and manage runflo Cloud projects.',
    links: ['First deployment', 'Custom domains', 'Environment variables', 'Rollback'],
  },
]

const steps = [
  { cmd: 'npm install -g @runflo/cli', comment: '# install CLI globally' },
  { cmd: 'runflo init my-agent', comment: '# scaffold a project' },
  { cmd: 'cd my-agent && runflo dev', comment: '# start dev environment' },
]

export default function DocsPage() {
  return (
    <div className="min-h-screen pt-16">

      {/* Hero */}
      <section className="relative py-20 sm:py-24 overflow-hidden">
        <div className="pointer-events-none absolute inset-0" aria-hidden>
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[400px] rounded-full bg-[#3B5BFF]/07 blur-[100px]" />
          <div className="absolute inset-0 grid-pattern opacity-30" />
        </div>
        <div className="relative max-w-7xl mx-auto px-6 text-center">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-white/[0.08] bg-white/[0.02] text-xs text-[#a1a1aa] mb-6">
            <BookOpen size={11} />
            Documentation
          </div>
          <h1 className="text-5xl sm:text-6xl font-bold tracking-tight text-[#f4f4f5] mb-6">
            runflo Docs
          </h1>
          <p className="text-xl text-[#a1a1aa] max-w-2xl mx-auto mb-10">
            Everything you need to build, ship, and scale production AI agents.
          </p>

          {/* Quick install */}
          <div className="max-w-lg mx-auto rounded-2xl overflow-hidden border border-white/[0.08]">
            <div className="flex items-center gap-2 px-4 py-2.5 bg-[#0f0f14] border-b border-white/[0.06]">
              <span className="text-xs text-[#52525b] font-mono">Quickstart</span>
            </div>
            <div className="bg-[#09090d] p-5 font-mono text-sm space-y-1.5">
              {steps.map((s) => (
                <div key={s.cmd} className="flex items-center gap-3">
                  <span className="text-[#52525b]">$</span>
                  <span className="text-[#f4f4f5]">{s.cmd}</span>
                  <span className="text-[#3f3f46] text-xs">{s.comment}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Doc sections */}
      <section className="max-w-7xl mx-auto px-6 pb-20">
        <div className="grid sm:grid-cols-2 gap-5">
          {sections.map((s) => {
            const Icon = s.icon
            return (
              <div key={s.title} className="p-6 rounded-2xl bg-[#111117] border border-white/[0.07] hover:border-white/[0.14] transition-colors">
                <div
                  className="w-9 h-9 rounded-lg flex items-center justify-center mb-4"
                  style={{ background: 'linear-gradient(135deg, #00C2FF18, #3B5BFF25)', border: '1px solid #3B5BFF44' }}
                >
                  <Icon size={17} className="text-[#00C2FF]" />
                </div>
                <h2 className="text-base font-semibold text-[#f4f4f5] mb-2">{s.title}</h2>
                <p className="text-sm text-[#71717a] mb-5 leading-relaxed">{s.desc}</p>
                <ul className="space-y-2">
                  {s.links.map((link) => (
                    <li key={link}>
                      <a href="#" className="group flex items-center gap-2 text-sm text-[#a1a1aa] hover:text-[#f4f4f5] transition-colors">
                        <ArrowRight size={12} className="text-[#3f3f46] group-hover:text-[#00C2FF] transition-colors" />
                        {link}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            )
          })}
        </div>
      </section>

      {/* Full docs CTA */}
      <section className="py-16 border-t border-white/[0.06] text-center">
        <div className="max-w-2xl mx-auto px-6">
          <p className="text-[#71717a] mb-6">
            Full documentation is available at{' '}
            <code className="text-[#00C2FF] font-mono text-sm">docs.runflo.dev</code>
          </p>
          <a
            href="https://docs.runflo.dev"
            className="btn-gradient px-8 py-3.5 rounded-xl text-base font-semibold text-white inline-flex items-center gap-2"
          >
            Open full docs
            <ArrowRight size={16} />
          </a>
        </div>
      </section>

    </div>
  )
}
