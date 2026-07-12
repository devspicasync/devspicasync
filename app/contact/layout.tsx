import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Contact',
  description:
    "Get in touch with SpicaSync. Tell us about your website, mobile app or IT project and we'll reply within 24 hours.",
  keywords: ['contact SpicaSync', 'hire web developers', 'get a quote', 'start a project'],
  alternates: { canonical: '/contact' },
  openGraph: {
    title: 'Contact | SpicaSync',
    description:
      "Tell us about your website, mobile app or IT project and we'll reply within 24 hours.",
    url: '/contact',
    images: ['/og-image.png'],
  },
}

export default function ContactLayout({ children }: { children: React.ReactNode }) {
  return children
}
