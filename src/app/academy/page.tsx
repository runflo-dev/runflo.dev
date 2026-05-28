import type { Metadata } from 'next'
import Link from 'next/link'
import { ArrowRight, BookOpen, Award, Users, Play } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Academy',
  description: 'Learn to build production AI agents. Free fundamentals course, paid advanced tracks, and runflo certifications.',
}

const tracks = [
  {
    number: '01',
    title: 'Fundamentals',
    price: 'Free',
    duration: '4 hours',
    gradient: 'from-[#00C2FF] to-[#3B5BFF]',
    modules: [
      'What is Agentic AI?',
      'Building Your First Agent',
      'Agents and Tools',
    ],
    cta: 'Start free',
    badge: 'Free',
  },
  {
    number: '02',
    title: 'Production Agents',
    price: '$199',
    duration: '12 hours',
    gradient: 'from-[#3B5BFF] to-[#8B5CF6]',
    modules: [
      'Workflows and Durability',
      'Memory and Context',
      'RAG — Agents with Your Documents',
      'Testing Agents',
    ],
    cta: 'Enrol',
    badge: 'Popular',
  },
  {
    number: '03',
    title: 'Multi-Agent Systems',
    price: '$299',
    duration: '10 hours',
    gradient: 'from-[#8B5CF6] to-[#00C2FF]',
    modules: [
      'Agent Orchestration',
      'The Agent Swarm',
      'Human-in-the-Loop',
      'Voice Agents',
    ],
    cta: 'Enrol',
    badge: null,
  },
  {
    number: '04',
    title: 'Enterprise AI',
    price: '$499',
    duration: '8 hours',
    gradient: 'from-[#00C2FF] to-[#8B5CF6]',
    modules: [
      'Enterprise Security',
      'Compliance and Governance',
      'Scale and Performance',
    ],
    cta: 'Enrol',
    badge: null,
  },
  {
    number: '05',
    title: 'Marketplace Builder',
    price: '$399',
    duration: '8 hours',
    gradient: 'from-[#3B5BFF] to-[#00C2FF]',
    modules: [
      'Building Marketplace Agents',
      'Publishing and Selling',
      'Building an Agency',
    ],
    cta: 'Enrol',
    badge: null,
  },
]

const certifications = [
  {
    code: 'FCD',
    title: 'runflo Certified Developer',
    price: '$149',
    reqs: 'Complete Tracks 1 and 2',
    desc: '60-minute exam (70% to pass). Verifiable digital certificate + LinkedIn badge.',
  },
  {
    code: 'FCA',
    title: 'runflo Certified Architect',
    price: '$299',
    reqs: 'Complete all 5 tracks',
    desc: '90-minute exam + real-world project submission. Listed in certified consultant directory.',
  },
  {
    code: 'FCES',
    title: 'Enterprise Specialist',
    price: '$199',
    reqs: 'Complete Tracks 1, 2, and 4',
    desc: '60-minute enterprise exam. For practitioners and teams deploying at scale.',
  },
]

export default function AcademyPage() {
  return (
    <div className="min-h-screen pt-16">

      {/* Hero */}
      <section className="relative py-20 sm:py-28 overflow-hidden">
        <div className="pointer-events-none absolute inset-0" aria-hidden>
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[600px] rounded-full bg-[#3B5BFF]/07 blur-[120px]" />
          <div className="absolute inset-0 grid-pattern opacity-30" />
        </div>
        <div className="relative max-w-7xl mx-auto px-6 text-center">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-white/[0.08] bg-white/[0.02] text-xs text-[#a1a1aa] mb-6">
            <span className="w-1.5 h-1.5 rounded-full" style={{ background: 'linear-gradient(135deg, #00C2FF, #3B5BFF)' }} />
            runflo Academy
          </div>
          <h1 className="text-5xl sm:text-6xl font-bold tracking-tight text-[#f4f4f5] mb-6 leading-tight">
            Learn to build<br />
            <span className="gradient-text">production AI agents</span>
          </h1>
          <p className="text-xl text-[#a1a1aa] max-w-2xl mx-auto leading-relaxed mb-10">
            From your first agent to enterprise deployments. Courses taught by the runflo team.
            Certifications recognised by employers. Start free — no credit card.
          </p>
          <div className="flex flex-wrap justify-center gap-4 mb-10">
            <a href="#tracks" className="btn-gradient px-8 py-3.5 rounded-xl text-base font-semibold text-white flex items-center gap-2 shadow-lg">
              Start Track 1 — Free
              <ArrowRight size={16} />
            </a>
            <a href="#certifications" className="flex items-center gap-2 px-8 py-3.5 rounded-xl text-base font-semibold text-[#a1a1aa] border border-white/[0.1] hover:border-white/[0.2] hover:text-[#f4f4f5] transition-all">
              View certifications
            </a>
          </div>

          {/* Stats */}
          <div className="flex flex-wrap justify-center gap-x-12 gap-y-4">
            {[
              { n: '5', label: 'Tracks' },
              { n: '17', label: 'Modules' },
              { n: '42+', label: 'Hours of content' },
              { n: '3', label: 'Certifications' },
            ].map((s) => (
              <div key={s.label}>
                <div className="text-2xl font-bold gradient-text">{s.n}</div>
                <div className="text-xs text-[#71717a]">{s.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* All-access banner */}
      <section className="max-w-7xl mx-auto px-6 mb-16">
        <div className="p-6 rounded-2xl gradient-border bg-[#111117]">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-5">
            <div>
              <div className="text-xs font-semibold uppercase tracking-widest text-[#52525b] mb-1">All-Access Subscription</div>
              <div className="text-[#f4f4f5] font-semibold">
                Every track, every update, every certification resource.{' '}
                <span className="gradient-text">$79/month</span> or{' '}
                <span className="gradient-text">$599/year</span> (save $349).
              </div>
            </div>
            <a
              href="#"
              className="flex-shrink-0 btn-gradient px-6 py-2.5 rounded-xl text-sm font-semibold text-white flex items-center gap-2"
            >
              Get All-Access
              <ArrowRight size={13} />
            </a>
          </div>
        </div>
      </section>

      {/* Course tracks */}
      <section id="tracks" className="max-w-7xl mx-auto px-6 pb-20">
        <h2 className="text-2xl sm:text-3xl font-bold text-[#f4f4f5] mb-10">Course tracks</h2>
        <div className="space-y-5">
          {tracks.map((track) => (
            <div
              key={track.number}
              className="group p-6 rounded-2xl bg-[#111117] border border-white/[0.07] hover:border-white/[0.14] transition-all"
            >
              <div className="flex flex-col sm:flex-row sm:items-center gap-5">
                <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${track.gradient} flex items-center justify-center flex-shrink-0 text-white font-bold text-lg`}>
                  {track.number}
                </div>
                <div className="flex-1">
                  <div className="flex items-center gap-3 mb-1.5">
                    <span className="text-base font-semibold text-[#f4f4f5]">Track {track.number} — {track.title}</span>
                    {track.badge && (
                      <span className={`text-[10px] font-semibold uppercase px-2 py-0.5 rounded-full border ${
                        track.badge === 'Free'
                          ? 'text-green-400 border-green-500/20 bg-green-500/[0.06]'
                          : 'text-[#00C2FF] border-[#00C2FF]/20 bg-[#00C2FF]/[0.06]'
                      }`}>
                        {track.badge}
                      </span>
                    )}
                  </div>
                  <div className="flex flex-wrap gap-x-4 gap-y-1 text-xs text-[#52525b] mb-3">
                    <span className="flex items-center gap-1"><BookOpen size={11} /> {track.modules.length} modules</span>
                    <span className="flex items-center gap-1"><Play size={11} /> {track.duration}</span>
                    <span className="font-semibold text-[#a1a1aa]">{track.price}</span>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {track.modules.map((m) => (
                      <span key={m} className="text-xs text-[#71717a] px-2.5 py-1 rounded-lg bg-white/[0.03] border border-white/[0.06]">
                        {m}
                      </span>
                    ))}
                  </div>
                </div>
                <a
                  href="#"
                  className={`flex-shrink-0 flex items-center gap-2 px-5 py-2.5 rounded-xl text-sm font-semibold transition-all ${
                    track.price === 'Free'
                      ? 'btn-gradient text-white'
                      : 'border border-white/[0.12] text-[#f4f4f5] hover:bg-white/[0.04]'
                  }`}
                >
                  {track.cta}
                  <ArrowRight size={13} />
                </a>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Certifications */}
      <section id="certifications" className="py-20 border-t border-white/[0.06]">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-[#f4f4f5] mb-4">Certifications</h2>
            <p className="text-[#a1a1aa] max-w-xl mx-auto">
              Verifiable credentials that differentiate you on LinkedIn and in enterprise hiring.
              Enterprises increasingly require runflo certification for AI engineering roles.
            </p>
          </div>
          <div className="grid sm:grid-cols-3 gap-5 max-w-4xl mx-auto">
            {certifications.map((cert) => (
              <div key={cert.code} className="p-6 rounded-2xl bg-[#111117] border border-white/[0.07] hover:border-white/[0.14] transition-colors">
                <div className="flex items-center justify-between mb-4">
                  <div
                    className="w-10 h-10 rounded-xl flex items-center justify-center text-xs font-bold text-white"
                    style={{ background: 'linear-gradient(135deg, #00C2FF, #3B5BFF, #8B5CF6)' }}
                  >
                    <Award size={18} />
                  </div>
                  <span className="text-sm font-bold text-[#a1a1aa]">{cert.price}</span>
                </div>
                <div className="text-xs font-semibold uppercase tracking-widest text-[#52525b] mb-1">{cert.code}</div>
                <div className="text-sm font-semibold text-[#f4f4f5] mb-2">{cert.title}</div>
                <div className="text-xs text-[#52525b] mb-3">{cert.reqs}</div>
                <p className="text-xs text-[#71717a] leading-relaxed">{cert.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team training */}
      <section className="py-20 border-t border-white/[0.06]">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-white/[0.08] bg-white/[0.02] text-xs text-[#a1a1aa] mb-6">
                <Users size={11} />
                Team training
              </div>
              <h2 className="text-3xl sm:text-4xl font-bold text-[#f4f4f5] mb-5">
                Upskill your entire<br />
                engineering team
              </h2>
              <p className="text-[#a1a1aa] leading-relaxed mb-8">
                Team training includes a private LMS portal, progress tracking, and bulk certification.
                Enterprise teams get unlimited seats with a single annual licence.
              </p>
              <div className="space-y-3">
                {[
                  { seats: '5 seats', price: '$199/month' },
                  { seats: '20 seats', price: '$599/month' },
                  { seats: 'Enterprise (unlimited)', price: 'Custom' },
                ].map((item) => (
                  <div key={item.seats} className="flex items-center justify-between p-4 rounded-xl bg-[#111117] border border-white/[0.07]">
                    <span className="text-sm text-[#f4f4f5]">{item.seats}</span>
                    <span className="text-sm font-semibold text-[#a1a1aa]">{item.price}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="space-y-4">
              <div className="p-6 rounded-2xl bg-[#111117] border border-white/[0.07]">
                <div className="text-sm font-semibold text-[#f4f4f5] mb-4">Live Bootcamp Cohorts</div>
                <div className="space-y-3">
                  {[
                    { type: 'Part-time (8 weeks, weekends)', price: '$1,999' },
                    { type: 'Intensive (8 weeks, full-time)', price: '$4,999' },
                  ].map((item) => (
                    <div key={item.type} className="flex items-center justify-between text-sm">
                      <span className="text-[#71717a]">{item.type}</span>
                      <span className="font-semibold text-[#f4f4f5]">{item.price}</span>
                    </div>
                  ))}
                </div>
              </div>
              <a
                href="mailto:academy@runflo.dev"
                className="w-full py-3 rounded-xl text-sm font-semibold text-[#f4f4f5] flex items-center justify-center gap-2 border border-white/[0.12] hover:bg-white/[0.04] transition-colors"
              >
                Contact for team pricing
                <ArrowRight size={13} />
              </a>
            </div>
          </div>
        </div>
      </section>

    </div>
  )
}
