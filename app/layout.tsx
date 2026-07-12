import React from "react"
import type { Metadata } from 'next'
import { Geist, Geist_Mono, Space_Grotesk } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import { GoogleAnalytics } from '@next/third-parties/google'
import { FloatingMessageButton } from '@/components/floating-message-button'
import { Toaster } from '@/components/ui/sonner'
import './globals.css'

const geist = Geist({ subsets: ['latin'], variable: '--font-geist', display: 'swap' })
const geistMono = Geist_Mono({ subsets: ['latin'], variable: '--font-geist-mono', display: 'swap' })
const spaceGrotesk = Space_Grotesk({
  subsets: ['latin'],
  weight: ['500', '600', '700'],
  variable: '--font-space',
  display: 'swap',
})

export const metadata: Metadata = {
  title: 'SpicaSync — Websites, Mobile Apps & IT Solutions',
  description:
    'SpicaSync is your one-stop tech partner. We build fast websites, mobile apps, and IT projects that help startups and businesses shine online.',
  generator: 'Next.js',
  icons: {
    icon: [
      { url: '/icon-32.png', sizes: '32x32', type: 'image/png' },
      { url: '/icon.png', sizes: '512x512', type: 'image/png' },
    ],
    apple: '/apple-icon.png',
  },
}

// GA4 Measurement ID (set NEXT_PUBLIC_GA_ID in .env.local and in Vercel → Env Variables)
const GA_ID = process.env.NEXT_PUBLIC_GA_ID

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body
        className={`${geist.variable} ${geistMono.variable} ${spaceGrotesk.variable} font-sans antialiased`}
      >
        {children}
        <FloatingMessageButton />
        <Toaster />
        <Analytics />
      </body>
      {GA_ID ? <GoogleAnalytics gaId={GA_ID} /> : null}
    </html>
  )
}
