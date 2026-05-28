import Hero from '@/components/hero'
import Problem from '@/components/problem'
import Packages from '@/components/packages'
import CodeShowcase from '@/components/code-showcase'
import Contact from '@/components/contact'

export default function Home() {
  return (
    <main className="min-h-screen">
      <Hero />
      <Problem />
      <Packages />
      <CodeShowcase />
      <Contact />
    </main>
  )
}
