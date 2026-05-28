import type { Metadata, Viewport } from 'next'
import { Sora, Inter, JetBrains_Mono } from 'next/font/google'
import Nav from '@/components/nav'
import Footer from '@/components/footer'
import './globals.css'

const sora = Sora({
  subsets: ['latin'],
  variable: '--font-sora',
  display: 'swap',
  weight: ['400', '500', '600', '700'],
})

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
})

const mono = JetBrains_Mono({
  subsets: ['latin'],
  variable: '--font-mono',
  display: 'swap',
})

export const metadata: Metadata = {
  title: {
    default: 'runflo — The Next.js of AI Agents',
    template: '%s | runflo',
  },
  description:
    'Build production AI agents in TypeScript. runflo is a durable execution framework powered by Temporal — agents that survive crashes, remember everything, and deploy in one command.',
  keywords: [
    'AI agents',
    'TypeScript AI framework',
    'durable execution',
    'Temporal',
    'agent orchestration',
    'production AI',
    'runflo',
  ],
  authors: [{ name: 'runflo' }],
  creator: 'runflo',
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://runflo.dev',
    title: 'runflo — The Next.js of AI Agents',
    description:
      'Build production-grade AI agents with durable execution. TypeScript-first, Temporal-powered, open source.',
    siteName: 'runflo',
    images: [{ url: '/og-image.png', width: 1200, height: 630, alt: 'runflo' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'runflo — The Next.js of AI Agents',
    description: 'Build production-grade AI agents with durable execution.',
    images: ['/og-image.png'],
  },
  robots: { index: true, follow: true, googleBot: { index: true, follow: true } },
}

export const viewport: Viewport = {
  themeColor: '#09090b',
  width: 'device-width',
  initialScale: 1,
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${sora.variable} ${inter.variable} ${mono.variable}`}>
      <body className="antialiased bg-[#09090b] text-[#f4f4f5]">
        <Nav />
        {children}
        <Footer />
      </body>
    </html>
  )
}
