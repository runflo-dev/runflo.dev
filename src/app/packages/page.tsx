import type { Metadata } from 'next'
import { ArrowRight } from 'lucide-react'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Packages',
  description: '27 composable TypeScript packages for building production AI agents. Install only what you need.',
}

interface Pkg {
  name: string
  desc: string
  tier: 'Built' | 'Next' | 'Diff' | 'Enterprise' | 'Ecosystem'
  gradient: string
  status: 'stable' | 'soon' | 'planned'
}

const tiers: { id: Pkg['tier']; label: string; desc: string; color: string }[] = [
  { id: 'Built',      label: 'Tier 0 — Built',        desc: 'Production-ready today',               color: 'text-green-400 border-green-500/20 bg-green-500/[0.06]' },
  { id: 'Next',       label: 'Tier 1 — Build Next',   desc: 'Core primitives, shipping next',        color: 'text-[#00C2FF] border-[#00C2FF]/20 bg-[#00C2FF]/[0.06]' },
  { id: 'Diff',       label: 'Tier 2 — Differentiation', desc: 'What makes runflo unique',          color: 'text-[#8B5CF6] border-[#8B5CF6]/20 bg-[#8B5CF6]/[0.06]' },
  { id: 'Enterprise', label: 'Tier 3 — Enterprise',   desc: 'Compliance, security, governance',      color: 'text-amber-400 border-amber-500/20 bg-amber-500/[0.06]' },
  { id: 'Ecosystem',  label: 'Tier 4 — Ecosystem',    desc: 'Connectors, storage, queues',           color: 'text-[#a1a1aa] border-white/[0.08] bg-white/[0.03]' },
]

const packages: Pkg[] = [
  // Tier 0 — Built
  { name: '@runflo/core',         desc: 'Temporal-backed workflow engine. The foundation every other package builds on.',              tier: 'Built',      gradient: 'from-[#00C2FF] to-[#3B5BFF]',  status: 'stable' },
  { name: '@runflo/agents',       desc: 'AI agent primitives. Multi-LLM, tool calling, and ability-driven orchestration.',            tier: 'Built',      gradient: 'from-[#3B5BFF] to-[#8B5CF6]',  status: 'stable' },
  { name: '@runflo/memory',       desc: 'Persistent agent memory. Facts, conversation history, and episodic recall.',                 tier: 'Built',      gradient: 'from-[#8B5CF6] to-[#00C2FF]',  status: 'stable' },
  { name: '@runflo/hi',           desc: 'React component library for AI UIs. Chat, timeline, and agent dashboard components.',        tier: 'Built',      gradient: 'from-[#00C2FF] to-[#8B5CF6]',  status: 'stable' },
  // Tier 1 — Next
  { name: '@runflo/tools',        desc: 'Standardised tool registry for agents. Define once, use across any agent.',                  tier: 'Next',       gradient: 'from-[#3B5BFF] to-[#00C2FF]',  status: 'soon' },
  { name: '@runflo/mcp',          desc: 'Model Context Protocol server and client. Connect any MCP tool to your agents.',             tier: 'Next',       gradient: 'from-[#8B5CF6] to-[#3B5BFF]',  status: 'soon' },
  { name: '@runflo/gateway',      desc: 'LLM gateway with fallbacks, caching, and cost tracking across providers.',                   tier: 'Next',       gradient: 'from-[#00C2FF] to-[#3B5BFF]',  status: 'soon' },
  { name: '@runflo/observe',      desc: 'Distributed tracing, spans, and per-run cost attribution for agents.',                       tier: 'Next',       gradient: 'from-[#3B5BFF] to-[#8B5CF6]',  status: 'soon' },
  { name: '@runflo/eval',         desc: 'Agent evaluation and testing framework. Benchmark LLM outputs and agent behaviour.',         tier: 'Next',       gradient: 'from-[#8B5CF6] to-[#00C2FF]',  status: 'soon' },
  // Tier 2 — Differentiation
  { name: '@runflo/rag',          desc: 'Full RAG pipeline. Chunking, embedding, and retrieval in one composable package.',           tier: 'Diff',       gradient: 'from-[#00C2FF] to-[#3B5BFF]',  status: 'soon' },
  { name: '@runflo/guard',        desc: 'Guardrails, PII detection, and content filtering for production-safe agents.',               tier: 'Diff',       gradient: 'from-[#3B5BFF] to-[#8B5CF6]',  status: 'soon' },
  { name: '@runflo/hitl',         desc: 'Human-in-the-loop approval flows. Pause an agent and wait for a human decision.',           tier: 'Diff',       gradient: 'from-[#8B5CF6] to-[#00C2FF]',  status: 'soon' },
  { name: '@runflo/swarm',        desc: 'Multi-agent coordination. Spawn, delegate, and collect results across agent fleets.',        tier: 'Diff',       gradient: 'from-[#00C2FF] to-[#8B5CF6]',  status: 'soon' },
  { name: '@runflo/router',       desc: 'Intent-based routing between agents. Send requests to the right agent automatically.',       tier: 'Diff',       gradient: 'from-[#3B5BFF] to-[#00C2FF]',  status: 'soon' },
  { name: '@runflo/vision',       desc: 'Document and image processing. PDF, DOCX, images to structured text for agents.',           tier: 'Diff',       gradient: 'from-[#8B5CF6] to-[#3B5BFF]',  status: 'soon' },
  { name: '@runflo/voice',        desc: 'Voice agent integration via Retell AI. Phone calls and voice interfaces for agents.',        tier: 'Diff',       gradient: 'from-[#00C2FF] to-[#3B5BFF]',  status: 'soon' },
  { name: '@runflo/excel',        desc: 'Excel and spreadsheet manipulation. Read, write, and analyse spreadsheets with agents.',     tier: 'Diff',       gradient: 'from-[#3B5BFF] to-[#8B5CF6]',  status: 'soon' },
  // Tier 3 — Enterprise
  { name: '@runflo/audit',        desc: 'Immutable audit log for SOC2, HIPAA, and GDPR compliance. Every action recorded.',          tier: 'Enterprise', gradient: 'from-[#00C2FF] to-[#3B5BFF]',  status: 'planned' },
  { name: '@runflo/vault',        desc: 'Secrets management and rotation for agent credentials. Zero plaintext in your code.',        tier: 'Enterprise', gradient: 'from-[#3B5BFF] to-[#8B5CF6]',  status: 'planned' },
  { name: '@runflo/testing',      desc: 'Mock LLMs and assert agent behaviour in unit and integration tests.',                        tier: 'Enterprise', gradient: 'from-[#8B5CF6] to-[#00C2FF]',  status: 'planned' },
  { name: '@runflo/analytics',    desc: 'Usage dashboards, cost-per-run tracking, and success rate reporting.',                       tier: 'Enterprise', gradient: 'from-[#00C2FF] to-[#8B5CF6]',  status: 'planned' },
  { name: '@runflo/cli',          desc: 'CLI tool for init, dev, test, deploy, and marketplace publishing.',                          tier: 'Enterprise', gradient: 'from-[#3B5BFF] to-[#00C2FF]',  status: 'planned' },
  // Tier 4 — Ecosystem
  { name: '@runflo/vector',       desc: 'Vector store abstraction. pgvector, Pinecone, Weaviate — one API for all.',                 tier: 'Ecosystem',  gradient: 'from-[#00C2FF] to-[#3B5BFF]',  status: 'planned' },
  { name: '@runflo/integrations', desc: 'Pre-built connectors for Slack, GitHub, Jira, Notion, and more.',                           tier: 'Ecosystem',  gradient: 'from-[#3B5BFF] to-[#8B5CF6]',  status: 'planned' },
  { name: '@runflo/embed',        desc: 'Embedding generation with provider abstraction. Switch models without changing code.',       tier: 'Ecosystem',  gradient: 'from-[#8B5CF6] to-[#00C2FF]',  status: 'planned' },
  { name: '@runflo/queue',        desc: 'Job queue for agent tasks. Reliable background processing for long-running agents.',        tier: 'Ecosystem',  gradient: 'from-[#00C2FF] to-[#8B5CF6]',  status: 'planned' },
  { name: '@runflo/deploy',       desc: 'Deployment helpers for runflo Cloud. CI/CD integration and rollback utilities.',            tier: 'Ecosystem',  gradient: 'from-[#3B5BFF] to-[#00C2FF]',  status: 'planned' },
]

const tierColors: Record<Pkg['tier'], string> = {
  Built:      'text-green-400 border-green-500/20 bg-green-500/[0.06]',
  Next:       'text-[#00C2FF] border-[#00C2FF]/20 bg-[#00C2FF]/[0.06]',
  Diff:       'text-[#8B5CF6] border-[#8B5CF6]/20 bg-[#8B5CF6]/[0.06]',
  Enterprise: 'text-amber-400 border-amber-500/20 bg-amber-500/[0.06]',
  Ecosystem:  'text-[#a1a1aa] border-white/[0.08] bg-white/[0.03]',
}

const tierLabels: Record<Pkg['tier'], string> = {
  Built:      'Built',
  Next:       'Next',
  Diff:       'Soon',
  Enterprise: 'Enterprise',
  Ecosystem:  'Planned',
}

export default function PackagesPage() {
  return (
    <div className="min-h-screen pt-16">
      {/* Hero */}
      <section className="relative py-20 sm:py-28 overflow-hidden">
        <div className="pointer-events-none absolute inset-0" aria-hidden>
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[900px] h-[500px] rounded-full bg-[#3B5BFF]/08 blur-[120px]" />
          <div className="absolute inset-0 grid-pattern opacity-40" />
        </div>
        <div className="relative max-w-7xl mx-auto px-6 text-center">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-white/[0.08] bg-white/[0.02] text-xs text-[#a1a1aa] mb-6">
            <span className="w-1.5 h-1.5 rounded-full" style={{ background: 'linear-gradient(135deg, #00C2FF, #3B5BFF)' }} />
            27 packages across 5 tiers
          </div>
          <h1 className="text-5xl sm:text-6xl font-bold tracking-tight text-[#f4f4f5] mb-6 leading-tight">
            The complete<br />
            <span className="gradient-text">TypeScript agent stack</span>
          </h1>
          <p className="text-xl text-[#a1a1aa] max-w-2xl mx-auto leading-relaxed mb-10">
            Every package solves one specific problem and composes cleanly with the others.
            Install only what you need — from a single agent to a full enterprise platform.
          </p>
          <div className="flex flex-wrap justify-center gap-3">
            <a
              href="https://github.com/runflo"
              target="_blank"
              rel="noreferrer"
              className="btn-gradient px-6 py-3 rounded-xl text-sm font-semibold text-white flex items-center gap-2"
            >
              View on GitHub
              <ArrowRight size={14} />
            </a>
            <Link
              href="/docs"
              className="px-6 py-3 rounded-xl text-sm font-semibold text-[#a1a1aa] border border-white/[0.1] hover:border-white/[0.2] hover:text-[#f4f4f5] transition-all"
            >
              Read the docs
            </Link>
          </div>
        </div>
      </section>

      {/* Architecture principle */}
      <section className="max-w-7xl mx-auto px-6 mb-16">
        <div className="p-7 rounded-2xl bg-[#111117] border border-white/[0.07]">
          <div className="flex flex-col lg:flex-row gap-8 items-start">
            <div className="flex-shrink-0">
              <div className="text-xs font-semibold uppercase tracking-widest text-[#52525b] mb-4">Architecture principle</div>
              <div className="font-mono text-xs text-[#71717a] leading-[2]">
                <span className="text-[#52525b]">@temporalio/*</span><br />
                <span className="text-[#3f3f46] ml-4">↓</span><br />
                <span className="gradient-text font-semibold">@runflo/core</span>
                <span className="text-[#52525b] ml-3 text-[10px]">← only package that touches Temporal</span><br />
                <span className="text-[#3f3f46] ml-4">↓</span><br />
                <span className="text-[#a1a1aa] ml-4">@runflo/agents</span>
                <span className="text-[#52525b] ml-3 text-[10px]">← depends on core only</span><br />
                <span className="text-[#a1a1aa] ml-4">@runflo/memory</span>
                <span className="text-[#52525b] ml-3 text-[10px]">← depends on core only</span><br />
                <span className="text-[#a1a1aa] ml-4">@runflo/rag</span>
                <span className="text-[#52525b] ml-3 text-[10px]">← depends on core + memory + tools</span>
              </div>
            </div>
            <div className="w-px bg-white/[0.06] self-stretch hidden lg:block" />
            <div className="flex-1 text-sm text-[#71717a] leading-relaxed">
              <strong className="text-[#f4f4f5] block mb-2">Temporal is an implementation detail.</strong>
              Developers using runflo never import <code className="text-[#00C2FF] font-mono text-xs">@temporalio/*</code> directly.
              All Temporal complexity lives inside <code className="text-[#00C2FF] font-mono text-xs">@runflo/core</code>.
              This means runflo can evolve the underlying execution engine without breaking application code.
              <div className="mt-4 flex flex-wrap gap-2">
                <code className="text-xs font-mono px-3 py-1.5 rounded-lg bg-[#0d0d12] border border-white/[0.08] text-[#f4f4f5]">npm install @runflo/core @runflo/agents</code>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Packages by tier */}
      <section className="max-w-7xl mx-auto px-6 pb-24 space-y-16">
        {tiers.map((tier) => {
          const tierPkgs = packages.filter(p => p.tier === tier.id)
          return (
            <div key={tier.id}>
              {/* Tier header */}
              <div className="flex items-center gap-4 mb-6">
                <div>
                  <div className="flex items-center gap-3 mb-1">
                    <span className={`text-[10px] font-semibold uppercase tracking-widest px-2.5 py-1 rounded-full border ${tier.color}`}>
                      {tier.label}
                    </span>
                  </div>
                  <p className="text-sm text-[#71717a]">{tier.desc}</p>
                </div>
              </div>

              {/* Package grid */}
              <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
                {tierPkgs.map((pkg) => (
                  <div
                    key={pkg.name}
                    className="group p-5 rounded-xl bg-[#111117] border border-white/[0.07] hover:border-white/[0.13] hover:bg-[#13131a] transition-all duration-200"
                  >
                    <div className="flex items-start justify-between gap-2 mb-3">
                      <div className={`w-8 h-8 rounded-lg bg-gradient-to-br ${pkg.gradient} flex items-center justify-center flex-shrink-0`}>
                        <span className="text-white text-xs font-bold">
                          {pkg.name.replace('@runflo/', '')[0]?.toUpperCase()}
                        </span>
                      </div>
                      <span className={`text-[10px] font-semibold tracking-wide uppercase px-2 py-0.5 rounded-full border ${tierColors[pkg.tier]}`}>
                        {tierLabels[pkg.tier]}
                      </span>
                    </div>
                    <code className="text-xs font-mono text-[#a1a1aa] group-hover:text-[#f4f4f5] transition-colors block mb-2">
                      {pkg.name}
                    </code>
                    <p className="text-xs text-[#52525b] leading-relaxed group-hover:text-[#71717a] transition-colors">
                      {pkg.desc}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          )
        })}
      </section>

      {/* CTA */}
      <section className="relative py-20 border-t border-white/[0.06]">
        <div className="max-w-3xl mx-auto px-6 text-center">
          <h2 className="text-3xl sm:text-4xl font-bold text-[#f4f4f5] mb-4">
            Start with the core. Add what you need.
          </h2>
          <p className="text-[#a1a1aa] mb-8 leading-relaxed">
            Every package is independently versioned and published to npm.
            The framework is MIT licensed and free forever.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link href="/docs" className="btn-gradient px-7 py-3 rounded-xl text-sm font-semibold text-white flex items-center gap-2">
              Get started
              <ArrowRight size={14} />
            </Link>
            <Link href="/pricing" className="px-7 py-3 rounded-xl text-sm font-semibold text-[#a1a1aa] border border-white/[0.1] hover:border-white/[0.2] hover:text-[#f4f4f5] transition-all">
              View cloud pricing
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}
