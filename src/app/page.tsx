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

      {/* Just the name */}
      <div className="relative flex items-center justify-center">
        <Logo size="lg" />
      </div>
    </main>
  )
}
