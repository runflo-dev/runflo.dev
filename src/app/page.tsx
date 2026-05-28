import Hero from '@/components/hero'
import Problem from '@/components/problem'
import Packages from '@/components/packages'
import CodeShowcase from '@/components/code-showcase'
import Harness from '@/components/harness'
import Contact from '@/components/contact'

export default function Home() {
  return (
    <main className="min-h-screen">
      <Hero />
      <Problem />
      <Packages />
      <CodeShowcase />
      <Harness />
      <Contact />
    </main>
  )
}
