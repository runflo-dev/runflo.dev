import { Logo } from '@/components/logo'

// ─────────────────────────────────────────────────────────────────────────────
// Home page is temporarily an "Under construction" screen.
// To restore the full landing page, replace this file's contents with:
//
//   import Hero from '@/components/hero'
//   import Harness from '@/components/harness'
//   import Comparison from '@/components/comparison'
//   import CodeShowcase from '@/components/code-showcase'
//   import Contact from '@/components/contact'
//
//   export default function Home() {
//     return (
//       <main className="min-h-screen">
//         <Hero /><Harness /><Comparison /><CodeShowcase /><Contact />
//       </main>
//     )
//   }
//
// …and re-enable <Nav /> + <Footer /> in src/app/layout.tsx.
// ─────────────────────────────────────────────────────────────────────────────

export default function Home() {
  return (
    <main className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden px-6 text-center">
      {/* Background — same mesh + grid + brand glows as the hero */}
      <div className="absolute inset-0 hero-mesh grid-pattern" aria-hidden />
      <div className="pointer-events-none absolute inset-0" aria-hidden>
        <div className="absolute top-[35%] left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[500px] rounded-full bg-[#3B5BFF]/10 blur-[130px]" />
        <div className="absolute top-[20%] right-[20%] w-[350px] h-[300px] rounded-full bg-[#00C2FF]/[0.06] blur-[90px]" />
        <div className="absolute bottom-[20%] left-[20%] w-[320px] h-[320px] rounded-full bg-[#8B5CF6]/[0.06] blur-[90px]" />
      </div>

      <div className="relative flex flex-col items-center gap-8 max-w-2xl">
        {/* Logo */}
        <Logo size="lg" />

        {/* Status badge */}
        <span className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-white/[0.1] bg-white/[0.03] text-sm">
          <span className="w-1.5 h-1.5 rounded-full bg-[#f59e0b] shadow-[0_0_8px_#f59e0b] animate-pulse" />
          <span className="text-[#a1a1aa]">Under construction</span>
        </span>

        {/* Headline */}
        <h1 className="text-4xl sm:text-5xl lg:text-[56px] font-bold leading-[1.08] tracking-tight text-[#f4f4f5]">
          We&rsquo;re building
          <br />
          <span className="gradient-text">the framework for AI agents</span>
        </h1>

        {/* Sub-headline */}
        <p className="text-lg text-[#a1a1aa] leading-relaxed max-w-xl">
          runflo.dev is almost ready &mdash; a durable TypeScript framework for production AI agents
          that survive crashes, remember everything, and deploy in one command.
        </p>

        {/* Shimmer progress line */}
        <div className="w-full max-w-xs h-1 rounded-full bg-white/[0.06] overflow-hidden">
          <div className="h-full w-1/3 rounded-full bg-gradient-to-r from-[#00C2FF] via-[#3B5BFF] to-[#8B5CF6] construction-shimmer" />
        </div>

        {/* Footer line */}
        <p className="text-sm text-[#52525b] pt-2">
          Launching soon &middot;{' '}
          <a
            href="mailto:hello@runflo.dev"
            className="text-[#a1a1aa] hover:text-[#f4f4f5] underline decoration-white/20 underline-offset-4 transition-colors"
          >
            hello@runflo.dev
          </a>
        </p>
      </div>

      <p className="absolute bottom-8 text-xs text-[#3f3f46]">&copy; 2026 RunFlo</p>
    </main>
  )
}
