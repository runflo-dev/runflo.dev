'use client'

import Link from 'next/link'
import { useState, useEffect } from 'react'
import { Menu, X, ArrowRight } from 'lucide-react'
import { Logo } from './logo'

const navLinks = [
  { label: 'How it works', href: '#packages' },
  { label: 'Harness', href: '#harness' },
  { label: 'Contact', href: '#contact' },
]

export default function Nav() {
  const [scrolled, setScrolled] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-[#09090b]/92 backdrop-blur-xl border-b border-white/[0.06] shadow-2xl shadow-black/40'
          : 'bg-transparent'
      }`}
    >
      <nav className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">

        {/* Logo */}
        <Link href="/" className="flex-shrink-0 hover:opacity-90 transition-opacity">
          <Logo size="sm" />
        </Link>

        {/* Desktop links */}
        <div className="hidden md:flex items-center gap-1">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="px-4 py-2 text-sm text-[#a1a1aa] hover:text-[#f4f4f5] rounded-lg hover:bg-white/[0.04] transition-all"
            >
              {link.label}
            </a>
          ))}
        </div>

        {/* CTA */}
        <div className="hidden md:flex">
          <a
            href="#contact"
            className="btn-gradient px-5 py-2 rounded-lg text-sm font-semibold text-white flex items-center gap-1.5"
          >
            Join Waitlist
            <ArrowRight size={13} />
          </a>
        </div>

        {/* Mobile toggle */}
        <button
          onClick={() => setMobileOpen(!mobileOpen)}
          className="md:hidden p-2 text-[#a1a1aa] hover:text-white rounded-lg hover:bg-white/[0.04] transition-colors"
          aria-label="Toggle menu"
        >
          {mobileOpen ? <X size={20} /> : <Menu size={20} />}
        </button>
      </nav>

      {/* Mobile menu */}
      <div
        className={`md:hidden transition-all duration-300 overflow-hidden border-b border-white/[0.06] bg-[#09090b]/97 backdrop-blur-xl ${
          mobileOpen ? 'max-h-64 opacity-100' : 'max-h-0 opacity-0'
        }`}
      >
        <div className="px-6 py-5 flex flex-col gap-1">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => setMobileOpen(false)}
              className="px-3 py-3 text-sm text-[#a1a1aa] hover:text-[#f4f4f5] rounded-lg hover:bg-white/[0.04] transition-colors"
            >
              {link.label}
            </a>
          ))}
          <div className="mt-3 pt-3 border-t border-white/[0.06]">
            <a
              href="#contact"
              onClick={() => setMobileOpen(false)}
              className="btn-gradient px-5 py-3 rounded-lg text-sm font-semibold text-white text-center block"
            >
              Join Waitlist
            </a>
          </div>
        </div>
      </div>
    </header>
  )
}
