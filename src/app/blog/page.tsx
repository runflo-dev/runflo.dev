import type { Metadata } from 'next'
import { ArrowRight } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Blog',
  description: 'Engineering insights, product updates, and developer guides from the runflo team.',
}

const posts = [
  {
    category: 'Engineering',
    title: 'Why we built runflo on Temporal',
    excerpt: 'We wanted durable execution without the complexity. Here is why Temporal was the right choice and how we abstracted it away.',
    date: 'May 2026',
    readTime: '8 min',
    gradient: 'from-[#00C2FF] to-[#3B5BFF]',
  },
  {
    category: 'Product',
    title: 'Introducing @runflo/memory: persistent agent memory that actually works',
    excerpt: 'Agent memory is hard. Facts decay, conversations get truncated, context windows fill up. Here is how @runflo/memory solves all three.',
    date: 'May 2026',
    readTime: '6 min',
    gradient: 'from-[#3B5BFF] to-[#8B5CF6]',
  },
  {
    category: 'Guide',
    title: 'Building a research agent with @runflo/agents and @runflo/tools',
    excerpt: 'Step-by-step walkthrough of building an agent that can search the web, summarise documents, and remember what it has learned.',
    date: 'Apr 2026',
    readTime: '12 min',
    gradient: 'from-[#8B5CF6] to-[#00C2FF]',
  },
  {
    category: 'Engineering',
    title: 'How durable execution changes the way you think about agents',
    excerpt: 'Temporal\'s workflow model turns agent failures from incidents into non-events. A deep dive into why this matters for production AI.',
    date: 'Apr 2026',
    readTime: '10 min',
    gradient: 'from-[#00C2FF] to-[#8B5CF6]',
  },
  {
    category: 'Product',
    title: 'runflo Cloud: one command from code to production',
    excerpt: 'How we designed the deployment experience to go from `git push` to a live agent in under 60 seconds — with full isolation per project.',
    date: 'Mar 2026',
    readTime: '5 min',
    gradient: 'from-[#3B5BFF] to-[#00C2FF]',
  },
  {
    category: 'Guide',
    title: 'Comparing runflo to LangChain, CrewAI, and n8n',
    excerpt: 'A practical, honest comparison of the major agent frameworks. Where each shines, where each struggles, and when to use what.',
    date: 'Mar 2026',
    readTime: '15 min',
    gradient: 'from-[#8B5CF6] to-[#3B5BFF]',
  },
]

const categoryColors: Record<string, string> = {
  Engineering: 'text-[#00C2FF] border-[#00C2FF]/20 bg-[#00C2FF]/[0.06]',
  Product: 'text-[#8B5CF6] border-[#8B5CF6]/20 bg-[#8B5CF6]/[0.06]',
  Guide: 'text-green-400 border-green-500/20 bg-green-500/[0.06]',
}

export default function BlogPage() {
  return (
    <div className="min-h-screen pt-16">

      {/* Hero */}
      <section className="relative py-20 sm:py-24 overflow-hidden">
        <div className="pointer-events-none absolute inset-0" aria-hidden>
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[300px] rounded-full bg-[#3B5BFF]/06 blur-[100px]" />
          <div className="absolute inset-0 grid-pattern opacity-30" />
        </div>
        <div className="relative max-w-7xl mx-auto px-6">
          <div className="max-w-2xl">
            <h1 className="text-5xl sm:text-6xl font-bold tracking-tight text-[#f4f4f5] mb-5">
              runflo Blog
            </h1>
            <p className="text-xl text-[#a1a1aa] leading-relaxed">
              Engineering deep dives, product updates, and guides from the team building
              the TypeScript AI agent framework.
            </p>
          </div>
        </div>
      </section>

      {/* Featured post */}
      <section className="max-w-7xl mx-auto px-6 mb-12">
        <div className="group p-8 rounded-2xl bg-[#111117] border border-white/[0.07] hover:border-white/[0.14] transition-all cursor-pointer">
          <div className="flex flex-col lg:flex-row gap-8 items-start">
            <div
              className="w-16 h-16 rounded-2xl bg-gradient-to-br from-[#00C2FF] to-[#3B5BFF] flex items-center justify-center flex-shrink-0 text-3xl font-bold text-white shadow-lg"
            >
              R
            </div>
            <div className="flex-1">
              <div className="flex items-center gap-3 mb-3">
                <span className="text-[10px] font-semibold uppercase px-2 py-0.5 rounded-full border text-[#00C2FF] border-[#00C2FF]/20 bg-[#00C2FF]/[0.06]">
                  Engineering
                </span>
                <span className="text-xs text-[#52525b]">May 2026 · 8 min read</span>
              </div>
              <h2 className="text-2xl font-bold text-[#f4f4f5] mb-3 group-hover:text-white transition-colors">
                Why we built runflo on Temporal
              </h2>
              <p className="text-[#71717a] leading-relaxed mb-5 max-w-2xl">
                We wanted durable execution without the complexity. Here is why Temporal was the right choice
                and how we abstracted it away so developers never have to think about it.
              </p>
              <span className="inline-flex items-center gap-2 text-sm font-semibold text-[#00C2FF] group-hover:gap-3 transition-all">
                Read post <ArrowRight size={14} />
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* Post grid */}
      <section className="max-w-7xl mx-auto px-6 pb-24">
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {posts.slice(1).map((post) => (
            <div
              key={post.title}
              className="group p-6 rounded-2xl bg-[#111117] border border-white/[0.07] hover:border-white/[0.14] transition-all cursor-pointer flex flex-col"
            >
              <div
                className="w-10 h-10 rounded-xl bg-gradient-to-br mb-5 flex-shrink-0"
                style={{ background: `linear-gradient(135deg, var(--tw-gradient-stops))` }}
              >
                <div className={`w-10 h-10 rounded-xl bg-gradient-to-br ${post.gradient}`} />
              </div>
              <div className="flex items-center gap-2 mb-3">
                <span className={`text-[10px] font-semibold uppercase px-2 py-0.5 rounded-full border ${categoryColors[post.category]}`}>
                  {post.category}
                </span>
                <span className="text-xs text-[#52525b]">{post.readTime} read</span>
              </div>
              <h3 className="text-sm font-semibold text-[#f4f4f5] mb-3 group-hover:text-white transition-colors leading-snug flex-1">
                {post.title}
              </h3>
              <p className="text-xs text-[#52525b] leading-relaxed mb-4">
                {post.excerpt}
              </p>
              <div className="flex items-center justify-between">
                <span className="text-xs text-[#52525b]">{post.date}</span>
                <ArrowRight size={13} className="text-[#3f3f46] group-hover:text-[#00C2FF] group-hover:translate-x-0.5 transition-all" />
              </div>
            </div>
          ))}
        </div>
      </section>

    </div>
  )
}
