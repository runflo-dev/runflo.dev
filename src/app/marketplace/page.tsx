import type { Metadata } from 'next'
import Link from 'next/link'
import { ArrowRight, Search, Star } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Marketplace',
  description: 'Discover and install pre-built AI agents. From Gmail to Xero, Shopify to Salesforce — one command to add any agent to your project.',
}

const categories = [
  { name: 'Accounting & Tax', count: 3, agents: ['xero-agent', 'quickbooks-agent', 'myob-agent'] },
  { name: 'CRM & Sales', count: 3, agents: ['salesforce-agent', 'hubspot-agent', 'pipedrive-agent'] },
  { name: 'Communication', count: 3, agents: ['gmail-agent', 'slack-agent', 'teams-agent'] },
  { name: 'Project Management', count: 3, agents: ['jira-agent', 'linear-agent', 'asana-agent'] },
  { name: 'E-commerce', count: 2, agents: ['shopify-agent', 'woocommerce-agent'] },
  { name: 'Content', count: 3, agents: ['wordpress-agent', 'notion-agent', 'contentful-agent'] },
  { name: 'Development', count: 3, agents: ['github-agent', 'gitlab-agent', 'jira-agent'] },
  { name: 'Finance', count: 3, agents: ['stripe-agent', 'paypal-agent', 'wise-agent'] },
  { name: 'HR & Recruitment', count: 3, agents: ['bamboo-agent', 'lever-agent', 'greenhouse-agent'] },
  { name: 'Analytics', count: 3, agents: ['ga4-agent', 'mixpanel-agent', 'segment-agent'] },
]

const featured = [
  { name: 'xero-agent', desc: 'Full Xero accounting integration. Invoices, bills, bank reconciliation.', price: '$49/mo', rating: 4.9, installs: '2.4k', badge: 'Paid', gradient: 'from-[#00C2FF] to-[#3B5BFF]', by: 'runflo Team' },
  { name: 'gmail-agent', desc: 'Read, send, search and organise Gmail. Full OAuth flow included.', price: 'Free', rating: 4.8, installs: '12k', badge: 'Free', gradient: 'from-[#3B5BFF] to-[#8B5CF6]', by: 'runflo Team' },
  { name: 'shopify-agent', desc: 'E-commerce automation. Orders, inventory, customers, products.', price: '$79/mo', rating: 4.7, installs: '1.8k', badge: 'Paid', gradient: 'from-[#8B5CF6] to-[#00C2FF]', by: 'runflo Team' },
  { name: 'github-agent', desc: 'Manage issues, PRs, repos, and CI workflows programmatically.', price: 'Free', rating: 4.9, installs: '8.2k', badge: 'Free', gradient: 'from-[#00C2FF] to-[#8B5CF6]', by: 'Community' },
  { name: 'salesforce-agent', desc: 'CRM operations. Leads, contacts, opportunities, reports.', price: '$99/mo', rating: 4.6, installs: '980', badge: 'Paid', gradient: 'from-[#3B5BFF] to-[#00C2FF]', by: 'runflo Team' },
  { name: 'slack-agent', desc: 'Send messages, create channels, manage workspace notifications.', price: 'Free', rating: 4.8, installs: '9.5k', badge: 'Free', gradient: 'from-[#8B5CF6] to-[#3B5BFF]', by: 'Community' },
]

export default function MarketplacePage() {
  return (
    <div className="min-h-screen pt-16">

      {/* Hero */}
      <section className="relative py-20 sm:py-28 overflow-hidden">
        <div className="pointer-events-none absolute inset-0" aria-hidden>
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[500px] rounded-full bg-[#3B5BFF]/07 blur-[120px]" />
          <div className="absolute inset-0 grid-pattern opacity-30" />
        </div>
        <div className="relative max-w-7xl mx-auto px-6 text-center">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-white/[0.08] bg-white/[0.02] text-xs text-[#a1a1aa] mb-6">
            <span className="w-1.5 h-1.5 rounded-full" style={{ background: 'linear-gradient(135deg, #00C2FF, #3B5BFF)' }} />
            runflo Marketplace
          </div>
          <h1 className="text-5xl sm:text-6xl font-bold tracking-tight text-[#f4f4f5] mb-6 leading-tight">
            Pre-built agents for<br />
            <span className="gradient-text">every integration</span>
          </h1>
          <p className="text-xl text-[#a1a1aa] max-w-2xl mx-auto leading-relaxed mb-10">
            Discover, install, and run production-ready agents for your favourite tools.
            Like npm — but for complete AI agents, not just libraries.
          </p>
          {/* Search bar (visual, no client state needed) */}
          <div className="max-w-lg mx-auto">
            <div className="flex items-center gap-3 px-4 py-3.5 bg-[#111117] border border-white/[0.1] rounded-xl focus-within:border-white/[0.2] transition-colors">
              <Search size={16} className="text-[#52525b] flex-shrink-0" />
              <span className="text-sm text-[#52525b]">Search agents — xero, shopify, github...</span>
            </div>
          </div>
        </div>
      </section>

      {/* Install demo */}
      <section className="max-w-7xl mx-auto px-6 mb-16">
        <div className="max-w-2xl mx-auto rounded-2xl overflow-hidden border border-white/[0.08]">
          <div className="flex items-center gap-2 px-4 py-3 bg-[#0f0f14] border-b border-white/[0.06]">
            <span className="w-3 h-3 rounded-full bg-[#ff5f57]" />
            <span className="w-3 h-3 rounded-full bg-[#febc2e]" />
            <span className="w-3 h-3 rounded-full bg-[#28c840]" />
            <span className="ml-3 text-xs text-[#52525b] font-mono">Terminal</span>
          </div>
          <div className="bg-[#09090d] p-5 font-mono text-sm leading-[1.9]">
            <div><span className="text-[#52525b]">$ </span><span className="text-[#f4f4f5]">runflo marketplace install xero-agent</span></div>
            <div className="text-[#a1a1aa] text-sm mt-1">  ? This agent costs $49/month. Continue? <span className="text-[#22c55e]">Yes</span></div>
            <div className="text-[#a1a1aa]"><span className="text-[#22c55e] mr-2">✓</span>Payment processed</div>
            <div className="text-[#a1a1aa]"><span className="text-[#22c55e] mr-2">✓</span>Installing @runflo-marketplace/xero-agent...</div>
            <div className="text-[#a1a1aa]"><span className="text-[#22c55e] mr-2">✓</span>Added to src/agents/</div>
            <div className="text-[#a1a1aa]"><span className="text-[#22c55e] mr-2">✓</span>Updated .env.example</div>
            <div className="mt-2 text-[#52525b] text-xs">Required env vars: XERO_CLIENT_ID, XERO_CLIENT_SECRET</div>
          </div>
        </div>
      </section>

      {/* Featured agents */}
      <section className="max-w-7xl mx-auto px-6 mb-20">
        <div className="flex items-end justify-between mb-8">
          <div>
            <h2 className="text-2xl sm:text-3xl font-bold text-[#f4f4f5] mb-1">Featured agents</h2>
            <p className="text-sm text-[#71717a]">Built and maintained by the runflo team</p>
          </div>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {featured.map((agent) => (
            <div
              key={agent.name}
              className="group p-5 rounded-xl bg-[#111117] border border-white/[0.07] hover:border-white/[0.14] hover:bg-[#13131a] transition-all duration-200 cursor-pointer"
            >
              <div className="flex items-start justify-between gap-3 mb-4">
                <div className={`w-10 h-10 rounded-xl bg-gradient-to-br ${agent.gradient} flex items-center justify-center flex-shrink-0`}>
                  <span className="text-white text-sm font-bold">{agent.name[0].toUpperCase()}</span>
                </div>
                <div className="flex flex-col items-end gap-1.5">
                  <span className={`text-[10px] font-semibold uppercase px-2 py-0.5 rounded-full border ${
                    agent.badge === 'Free'
                      ? 'text-green-400 border-green-500/20 bg-green-500/[0.06]'
                      : 'text-[#00C2FF] border-[#00C2FF]/20 bg-[#00C2FF]/[0.06]'
                  }`}>
                    {agent.price}
                  </span>
                </div>
              </div>
              <code className="text-xs font-mono text-[#a1a1aa] group-hover:text-[#f4f4f5] transition-colors block mb-1.5">
                @runflo-marketplace/{agent.name}
              </code>
              <p className="text-xs text-[#52525b] group-hover:text-[#71717a] leading-relaxed mb-4 transition-colors">
                {agent.desc}
              </p>
              <div className="flex items-center justify-between text-[10px] text-[#52525b]">
                <div className="flex items-center gap-1">
                  <Star size={10} className="text-amber-400" fill="currentColor" />
                  <span className="text-[#a1a1aa]">{agent.rating}</span>
                </div>
                <span>{agent.installs} installs</span>
                <span>by {agent.by}</span>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Categories */}
      <section className="max-w-7xl mx-auto px-6 mb-20">
        <h2 className="text-2xl sm:text-3xl font-bold text-[#f4f4f5] mb-8">Browse by category</h2>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
          {categories.map((cat) => (
            <div
              key={cat.name}
              className="group p-4 rounded-xl bg-[#111117] border border-white/[0.07] hover:border-white/[0.14] transition-all cursor-pointer"
            >
              <div className="flex items-start justify-between mb-3">
                <span className="text-sm font-semibold text-[#f4f4f5] group-hover:text-white transition-colors">
                  {cat.name}
                </span>
                <span className="text-xs text-[#52525b]">{cat.count} agents</span>
              </div>
              <div className="flex flex-wrap gap-1">
                {cat.agents.slice(0, 3).map((a) => (
                  <span key={a} className="text-[10px] font-mono text-[#52525b] px-1.5 py-0.5 rounded bg-white/[0.03] border border-white/[0.05]">
                    {a}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Publish section */}
      <section className="py-20 border-t border-white/[0.06]">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-white/[0.08] bg-white/[0.02] text-xs text-[#a1a1aa] mb-6">
                For publishers
              </div>
              <h2 className="text-3xl sm:text-4xl font-bold text-[#f4f4f5] mb-5">
                Build once.<br />
                <span className="gradient-text">Sell to thousands.</span>
              </h2>
              <p className="text-[#a1a1aa] leading-relaxed mb-6">
                Publish your agent to the marketplace and earn recurring revenue.
                runflo handles billing, delivery, and infrastructure — you just build.
              </p>
              <div className="space-y-3 mb-8">
                {[
                  { metric: '80%', label: 'Revenue share — you keep 80% of every subscription' },
                  { metric: '$0', label: 'No upfront cost to publish a free or paid agent' },
                  { metric: '1 cmd', label: 'runflo marketplace publish — review in 1-3 days' },
                ].map((item) => (
                  <div key={item.label} className="flex items-center gap-4">
                    <span className="text-lg font-bold gradient-text w-14 flex-shrink-0">{item.metric}</span>
                    <span className="text-sm text-[#71717a]">{item.label}</span>
                  </div>
                ))}
              </div>
              <Link href="/docs" className="btn-gradient px-6 py-3 rounded-xl text-sm font-semibold text-white inline-flex items-center gap-2">
                Publisher docs
                <ArrowRight size={14} />
              </Link>
            </div>

            {/* Publish terminal */}
            <div className="rounded-2xl overflow-hidden border border-white/[0.08]">
              <div className="flex items-center gap-2 px-4 py-3 bg-[#0f0f14] border-b border-white/[0.06]">
                <span className="w-3 h-3 rounded-full bg-[#ff5f57]" />
                <span className="w-3 h-3 rounded-full bg-[#febc2e]" />
                <span className="w-3 h-3 rounded-full bg-[#28c840]" />
                <span className="ml-3 text-xs text-[#52525b] font-mono">Terminal — my-xero-agent</span>
              </div>
              <div className="bg-[#09090d] p-5 font-mono text-sm leading-[1.9]">
                <div><span className="text-[#52525b]">$ </span><span className="text-[#f4f4f5]">runflo marketplace validate</span></div>
                <div className="text-[#a1a1aa]"><span className="text-[#22c55e] mr-2">✓</span>package.json valid</div>
                <div className="text-[#a1a1aa]"><span className="text-[#22c55e] mr-2">✓</span>Tests pass (12/12)</div>
                <div className="text-[#a1a1aa]"><span className="text-[#22c55e] mr-2">✓</span>Types exported correctly</div>
                <div className="text-[#a1a1aa]"><span className="text-[#22c55e] mr-2">✓</span>README.md present</div>
                <div className="mt-2"><span className="text-[#52525b]">$ </span><span className="text-[#f4f4f5]">runflo marketplace publish</span></div>
                <div className="text-[#a1a1aa]">  ? Price per month: <span className="text-[#f4f4f5]">$49</span></div>
                <div className="text-[#a1a1aa]"><span className="text-[#22c55e] mr-2">✓</span>Submitted for review</div>
                <div className="text-[#52525b] text-xs mt-1">Review takes 1-3 business days.</div>
              </div>
            </div>
          </div>
        </div>
      </section>

    </div>
  )
}
