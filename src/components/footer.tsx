import { Twitter } from 'lucide-react'
import { Logo } from './logo'

export default function Footer() {
  return (
    <footer className="relative border-t border-white/[0.07]">
      <div className="max-w-7xl mx-auto px-6 py-12 flex flex-col sm:flex-row items-center justify-between gap-8">

        {/* Brand */}
        <div className="flex flex-col items-center sm:items-start gap-4">
          <Logo size="sm" />
          <p className="text-sm text-[#71717a] leading-relaxed max-w-xs text-center sm:text-left">
            The framework for enterprise-grade AI agents. Built on Temporal.
          </p>
          <div className="flex items-center gap-3">
            <a
              href="https://twitter.com/runflo_dev"
              target="_blank"
              rel="noreferrer"
              className="w-9 h-9 rounded-lg border border-white/[0.08] flex items-center justify-center text-[#71717a] hover:text-[#f4f4f5] hover:border-white/[0.16] hover:bg-white/[0.04] transition-all"
              aria-label="Twitter / X"
            >
              <Twitter size={16} />
            </a>
          </div>
        </div>

        {/* Right */}
        <div className="flex flex-col items-center sm:items-end gap-3">
          <span className="inline-flex items-center gap-2 text-[10px] font-medium tracking-widest uppercase text-[#52525b] border border-white/[0.06] rounded-full px-3 py-1">
            <span className="w-1.5 h-1.5 rounded-full" style={{ background: 'linear-gradient(135deg, #00C2FF, #3B5BFF)' }} />
            MIT Licensed
          </span>
          <p className="text-xs text-[#52525b]">
            © {new Date().getFullYear()} runflo. All rights reserved.
          </p>
          <p className="text-xs text-[#3f3f46]">
            hello@runflo.dev
          </p>
        </div>

      </div>
    </footer>
  )
}
