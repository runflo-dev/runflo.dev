import { ArrowRight } from 'lucide-react'

const terminalLines = [
  { delay: 0,    type: 'cmd',     text: 'runflo init my-agent' },
  { delay: 600,  type: 'output',  text: '' },
  { delay: 700,  type: 'success', text: 'Creating project in my-agent/' },
  { delay: 900,  type: 'success', text: 'Installing packages...' },
  { delay: 1100, type: 'success', text: 'Ready' },
  { delay: 1300, type: 'output',  text: '' },
  { delay: 1400, type: 'cmd',     text: 'cd my-agent && runflo dev' },
  { delay: 1900, type: 'output',  text: '' },
  { delay: 2000, type: 'success', text: 'Temporal started (localhost:7233)' },
  { delay: 2200, type: 'success', text: 'Worker started on queue: default' },
  { delay: 2400, type: 'success', text: 'HTTP server at http://localhost:3000' },
  { delay: 2600, type: 'output',  text: '' },
  { delay: 2700, type: 'ready',   text: 'Agent ready.' },
]

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center pt-20 pb-16 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 hero-mesh grid-pattern" aria-hidden />
      <div className="pointer-events-none absolute inset-0" aria-hidden>
        <div className="absolute top-[30%] left-[40%] -translate-x-1/2 -translate-y-1/2 w-[700px] h-[500px] rounded-full bg-[#3B5BFF]/10 blur-[130px]" />
        <div className="absolute top-[20%] right-[20%] w-[350px] h-[300px] rounded-full bg-[#00C2FF]/06 blur-[90px]" />
        <div className="absolute bottom-[25%] left-[20%] w-[300px] h-[300px] rounded-full bg-[#7A3CFF]/06 blur-[90px]" />
      </div>

      <div className="relative max-w-7xl mx-auto px-6 w-full">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">

          {/* ── Left: copy ──────────────────────────────────────────── */}
          <div className="flex flex-col gap-7">

            {/* Badge */}
            <div className="flex">
              <span className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-white/[0.1] bg-white/[0.03] text-sm">
                <span className="w-1.5 h-1.5 rounded-full bg-[#22c55e] shadow-[0_0_6px_#22c55e]" />
                <span className="text-[#a1a1aa]">Early access — launching soon</span>
              </span>
            </div>

            {/* Headline — exact copy from Confluence */}
            <h1 className="text-5xl sm:text-6xl lg:text-[62px] font-bold leading-[1.05] tracking-tight text-[#f4f4f5]">
              Build production<br />
              <span className="gradient-text">AI agents</span> in<br />
              TypeScript
            </h1>

            {/* Sub-headline — exact copy from Confluence */}
            <p className="text-xl text-[#a1a1aa] leading-relaxed max-w-lg">
              runflo is a framework for AI agents that{' '}
              <span className="text-[#f4f4f5] font-medium">don't fail</span>.
              Durable execution. Persistent memory. One command to deploy.
            </p>

            {/* CTAs */}
            <div className="flex flex-wrap gap-4">
              <a
                href="#contact"
                className="btn-gradient px-7 py-3.5 rounded-xl text-base font-semibold text-white flex items-center gap-2 shadow-lg"
              >
                Join the Waitlist
                <ArrowRight size={16} />
              </a>
              <a
                href="#packages"
                className="flex items-center gap-2 px-7 py-3.5 rounded-xl text-base font-semibold text-[#a1a1aa] border border-white/[0.1] hover:border-white/[0.2] hover:text-[#f4f4f5] hover:bg-white/[0.03] transition-all"
              >
                See what we're building
              </a>
            </div>

            {/* Stats */}
            <div className="flex flex-wrap gap-x-8 gap-y-3 pt-1">
              {[
                { n: '27+', label: 'Packages' },
                { n: 'MIT', label: 'License' },
                { n: '1 cmd', label: 'To deploy' },
                { n: '0', label: 'State loss on crash' },
              ].map((s) => (
                <div key={s.label}>
                  <div className="text-lg font-bold gradient-text leading-tight">{s.n}</div>
                  <div className="text-xs text-[#71717a]">{s.label}</div>
                </div>
              ))}
            </div>
          </div>

          {/* ── Right: terminal ─────────────────────────────────────── */}
          <div className="relative animate-float">
            <div className="rounded-2xl overflow-hidden border border-white/[0.08] shadow-2xl shadow-black/60 glow-blue">

              {/* Window chrome */}
              <div className="flex items-center gap-2 px-4 py-3 bg-[#0f0f14] border-b border-white/[0.06]">
                <span className="w-3 h-3 rounded-full bg-[#ff5f57]" />
                <span className="w-3 h-3 rounded-full bg-[#febc2e]" />
                <span className="w-3 h-3 rounded-full bg-[#28c840]" />
                <span className="ml-3 text-xs text-[#52525b] font-mono">Terminal</span>
                <span className="ml-auto text-xs text-[#3f3f46] font-mono">~/projects</span>
              </div>

              {/* Terminal body */}
              <div className="bg-[#09090d] p-5 font-mono text-sm leading-[1.8] min-h-[340px]">
                {terminalLines.map((line, i) => (
                  <div
                    key={i}
                    className="terminal-line"
                    style={{ animationDelay: `${line.delay}ms`, opacity: 0 }}
                  >
                    {line.type === 'cmd' && (
                      <span>
                        <span className="text-[#52525b]">$ </span>
                        <span className="text-[#f4f4f5]">{line.text}</span>
                      </span>
                    )}
                    {line.type === 'output' && <span>&nbsp;</span>}
                    {line.type === 'success' && (
                      <span className="text-[#a1a1aa]">
                        <span className="text-[#22c55e] mr-2">✓</span>
                        {line.text}
                      </span>
                    )}
                    {line.type === 'ready' && (
                      <span>
                        <span className="text-[#22c55e] mr-2">▲</span>
                        <span className="gradient-text font-semibold">{line.text}</span>
                        <span className="terminal-cursor ml-1" />
                      </span>
                    )}
                  </div>
                ))}
              </div>
            </div>

            {/* Floating pill */}
            <div className="absolute -bottom-5 left-1/2 -translate-x-1/2 whitespace-nowrap glass rounded-full px-5 py-2.5 flex items-center gap-3 shadow-2xl border border-white/[0.08]">
              <span className="w-2 h-2 rounded-full bg-[#22c55e] shadow-[0_0_8px_#22c55e]" />
              <span className="text-sm font-medium text-[#f4f4f5]">Agent running at</span>
              <code className="text-sm font-mono text-[#00C2FF]">localhost:3000</code>
            </div>
          </div>

        </div>
      </div>

      <style>{`
        @keyframes terminalFadeIn {
          from { opacity: 0; transform: translateY(4px); }
          to   { opacity: 1; transform: translateY(0); }
        }
        .terminal-line {
          animation: terminalFadeIn 0.25s ease forwards;
        }
        @keyframes blink {
          0%, 100% { opacity: 1; }
          50%       { opacity: 0; }
        }
        .terminal-cursor {
          display: inline-block;
          width: 8px;
          height: 14px;
          background: #3B5BFF;
          border-radius: 1px;
          vertical-align: middle;
          animation: blink 1s step-end infinite;
        }
      `}</style>
    </section>
  )
}
