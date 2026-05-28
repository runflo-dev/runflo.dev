import { Twitter } from 'lucide-react'
import Link from 'next/link'
import { Logo } from './logo'

const footerLinks = {
  Products: [
    { label: 'Framework', href: '/packages' },
    { label: 'Cloud', href: '/cloud' },
    { label: 'Marketplace', href: '/marketplace' },
    { label: 'Academy', href: '/academy' },
    { label: 'Enterprise', href: '/enterprise' },
  ],
  Resources: [
    { label: 'Documentation', href: '/docs' },
    { label: 'Blog', href: '/blog' },
    { label: 'Pricing', href: '/pricing' },
    { label: 'Temporal Docs', href: 'https://docs.temporal.io', external: true },
  ],
  Company: [
    { label: 'About', href: '#' },
    { label: 'Changelog', href: '#' },
    { label: 'Contact', href: 'mailto:hello@runflo.dev', external: true },
    { label: 'Privacy Policy', href: '#' },
    { label: 'Terms of Service', href: '#' },
  ],
}

export default function Footer() {
  return (
    <footer className="relative border-t border-white/[0.07]">
      <div className="max-w-7xl mx-auto px-6 py-16">
        <div className="grid lg:grid-cols-[1.5fr_repeat(3,1fr)] gap-12 lg:gap-8">

          {/* Brand */}
          <div className="flex flex-col gap-6">
            <Link href="/" className="w-fit">
              <Logo size="md" />
            </Link>
            <p className="text-sm text-[#71717a] leading-relaxed max-w-xs">
              The TypeScript framework for production AI agents. Built on Temporal.
              Ship in minutes, scale to millions.
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
            <div className="inline-flex">
              <span className="inline-flex items-center gap-2 text-[10px] font-medium tracking-widest uppercase text-[#52525b] border border-white/[0.06] rounded-full px-3 py-1">
                <span className="w-1.5 h-1.5 rounded-full" style={{ background: 'linear-gradient(135deg, #00C2FF, #3B5BFF)' }} />
                MIT Licensed
              </span>
            </div>
          </div>

          {/* Link columns */}
          {Object.entries(footerLinks).map(([category, links]) => (
            <div key={category}>
              <h4 className="text-xs font-semibold uppercase tracking-widest text-[#52525b] mb-5">
                {category}
              </h4>
              <ul className="flex flex-col gap-3">
                {links.map((link) => (
                  <li key={link.label}>
                    {'external' in link && link.external ? (
                      <a
                        href={link.href}
                        target="_blank"
                        rel="noreferrer"
                        className="text-sm text-[#71717a] hover:text-[#f4f4f5] transition-colors"
                      >
                        {link.label}
                      </a>
                    ) : (
                      <Link
                        href={link.href}
                        className="text-sm text-[#71717a] hover:text-[#f4f4f5] transition-colors"
                      >
                        {link.label}
                      </Link>
                    )}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>

      <div className="border-t border-white/[0.06]">
        <div className="max-w-7xl mx-auto px-6 py-5 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-xs text-[#52525b]">
            © {new Date().getFullYear()} runflo. All rights reserved.
          </p>
          <p className="text-xs text-[#52525b]">
            Built with{' '}
            <a href="https://nextjs.org" target="_blank" rel="noreferrer" className="text-[#71717a] hover:text-[#a1a1aa] transition-colors">
              Next.js
            </a>
            {' '}·{' '}
            Powered by{' '}
            <a href="https://temporal.io" target="_blank" rel="noreferrer" className="text-[#71717a] hover:text-[#a1a1aa] transition-colors">
              Temporal
            </a>
          </p>
        </div>
      </div>
    </footer>
  )
}
