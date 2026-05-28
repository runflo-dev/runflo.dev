import { ArrowRight } from 'lucide-react'

interface Pkg {
  name: string
  desc: string
  tier: string
  gradient: string
}

const featured: Pkg[] = [
  { name: '@runflo/core',    desc: 'Temporal-backed workflow engine. The foundation every other package builds on.',       tier: 'Built', gradient: 'from-[#00C2FF] to-[#3B5BFF]' },
  { name: '@runflo/agents',  desc: 'AI agent primitives. Multi-LLM, tool calling, and ability-driven orchestration.',     tier: 'Built', gradient: 'from-[#3B5BFF] to-[#7A3CFF]' },
  { name: '@runflo/memory',  desc: 'Persistent agent memory. Facts, conversation history, and episodic recall.',          tier: 'Built', gradient: 'from-[#7A3CFF] to-[#00C2FF]' },
  { name: '@runflo/hi',      desc: 'React component library for AI UIs. Pre-built chat, timeline, and dashboard components.', tier: 'Built', gradient: 'from-[#00C2FF] to-[#7A3CFF]' },
  { name: '@runflo/tools',   desc: 'Standardised tool registry for agents. Define once, use anywhere.',                   tier: 'Next',  gradient: 'from-[#3B5BFF] to-[#00C2FF]' },
  { name: '@runflo/mcp',     desc: 'Model Context Protocol server + client. Connect any MCP tool to your agents.',       tier: 'Next',  gradient: 'from-[#7A3CFF] to-[#3B5BFF]' },
  { name: '@runflo/rag',     desc: 'Full RAG pipeline. Chunking, embedding, and retrieval in one composable package.',   tier: 'Next',  gradient: 'from-[#00C2FF] to-[#3B5BFF]' },
  { name: '@runflo/guard',   desc: 'Guardrails, PII detection, and content filtering for production-safe agents.',       tier: 'Next',  gradient: 'from-[#3B5BFF] to-[#7A3CFF]' },
  { name: '@runflo/hitl',    desc: 'Human-in-the-loop approval flows. Pause an agent and wait for a human decision.',   tier: 'Soon',  gradient: 'from-[#7A3CFF] to-[#00C2FF]' },
  { name: '@runflo/swarm',   desc: 'Multi-agent coordination. Spawn, delegate, and collect results across agent fleets.', tier: 'Soon',  gradient: 'from-[#00C2FF] to-[#7A3CFF]' },
  { name: '@runflo/voice',   desc: 'Voice agent integration via Retell AI. Phone calls and voice interfaces for agents.', tier: 'Soon',  gradient: 'from-[#3B5BFF] to-[#00C2FF]' },
  { name: '@runflo/vision',  desc: 'Document and image processing. PDF, DOCX, images → structured text for agents.',    tier: 'Soon',  gradient: 'from-[#7A3CFF] to-[#3B5BFF]' },
]

const tierColors: Record<string, string> = {
  Built: 'text-green-400 border-green-500/20 bg-green-500/[0.06]',
  Next:  'text-[#00C2FF] border-[#00C2FF]/20 bg-[#00C2FF]/[0.06]',
  Soon:  'text-[#a1a1aa] border-white/[0.08] bg-white/[0.03]',
}

export default function Packages() {
  return (
    <section id="packages" className="relative py-24 sm:py-32">
      <div className="section-divider absolute top-0 left-0 right-0" />

      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-6 mb-12">
          <div className="max-w-xl">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-white/[0.08] bg-white/[0.02] text-xs text-[#a1a1aa] mb-5">
              <span className="w-1.5 h-1.5 rounded-full" style={{ background: 'linear-gradient(135deg, #00C2FF, #3B5BFF)' }} />
              27 composable packages
            </div>
            <h2 className="text-4xl sm:text-5xl font-bold tracking-tight text-[#f4f4f5] leading-tight">
              Everything you need<br />
              <span className="gradient-text">to ship.</span>
            </h2>
          </div>
          <p className="text-[#71717a] text-sm max-w-xs leading-relaxed sm:text-right">
            Install only what you need. Each package solves one specific problem and composes cleanly with the others.
          </p>
        </div>

        {/* Package grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
          {featured.map((pkg) => (
            <div
              key={pkg.name}
              className="group p-5 rounded-xl bg-[#111117] border border-white/[0.07] hover:border-white/[0.13] transition-all duration-200 hover:bg-[#13131a] cursor-pointer"
            >
              <div className="flex items-start justify-between gap-2 mb-3">
                <div
                  className={`w-8 h-8 rounded-lg bg-gradient-to-br ${pkg.gradient} flex items-center justify-center flex-shrink-0 shadow-md`}
                >
                  <span className="text-white text-xs font-bold">
                    {pkg.name.replace('@runflo/', '')[0]?.toUpperCase()}
                  </span>
                </div>
                <span className={`text-[10px] font-semibold tracking-wide uppercase px-2 py-0.5 rounded-full border ${tierColors[pkg.tier]}`}>
                  {pkg.tier}
                </span>
              </div>

              <div className="mb-2">
                <code className="text-xs font-mono text-[#a1a1aa] group-hover:text-[#f4f4f5] transition-colors">
                  {pkg.name}
                </code>
              </div>

              <p className="text-xs text-[#52525b] leading-relaxed group-hover:text-[#71717a] transition-colors">
                {pkg.desc}
              </p>
            </div>
          ))}
        </div>

        {/* View all CTA */}
        <div className="mt-10 flex justify-center">
          <a
            href="#docs"
            className="group flex items-center gap-2 px-6 py-3 rounded-xl border border-white/[0.08] bg-white/[0.02] hover:bg-white/[0.05] hover:border-white/[0.14] transition-all text-sm text-[#a1a1aa] hover:text-[#f4f4f5]"
          >
            View all 27 packages
            <ArrowRight size={14} className="group-hover:translate-x-0.5 transition-transform" />
          </a>
        </div>

        {/* Architecture note */}
        <div className="mt-12 p-6 rounded-2xl bg-[#111117] border border-white/[0.07]">
          <div className="flex flex-col sm:flex-row gap-6 items-start">
            <div className="flex-shrink-0">
              <div className="text-xs font-semibold uppercase tracking-widest text-[#52525b] mb-3">Architecture principle</div>
              <div className="font-mono text-xs text-[#71717a] leading-[1.9]">
                <span className="text-[#52525b]">@temporalio/*</span><br />
                <span className="text-[#3f3f46] ml-4">↓</span><br />
                <span className="gradient-text font-semibold">@runflo/core</span>
                <span className="text-[#52525b] ml-2 text-[10px]">← only package that touches Temporal</span><br />
                <span className="text-[#3f3f46] ml-4">↓</span><br />
                <span className="text-[#a1a1aa] ml-4">@runflo/agents</span>
                <span className="text-[#52525b] ml-2 text-[10px]">← depends on core only</span><br />
                <span className="text-[#a1a1aa] ml-4">@runflo/memory</span>
                <span className="text-[#52525b] ml-2 text-[10px]">← depends on core only</span><br />
                <span className="text-[#a1a1aa] ml-4">@runflo/tools</span>
                <span className="text-[#52525b] ml-2 text-[10px]">← depends on core only</span>
              </div>
            </div>
            <div className="w-px bg-white/[0.06] self-stretch hidden sm:block" />
            <div className="text-sm text-[#71717a] leading-relaxed">
              <strong className="text-[#f4f4f5] block mb-2">Temporal is an implementation detail.</strong>
              Developers using runflo never import{' '}
              <code className="text-[#00C2FF] font-mono text-xs">@temporalio/*</code>{' '}
              directly. They import from{' '}
              <code className="text-[#00C2FF] font-mono text-xs">@runflo/core</code>{' '}
              only. This means runflo can evolve or swap the underlying execution engine without breaking any application code.
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
