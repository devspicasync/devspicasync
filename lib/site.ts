/**
 * Central site configuration, used by metadata, sitemap and robots.
 * Override the base URL per-environment with NEXT_PUBLIC_SITE_URL if needed.
 */
export const siteUrl = (
  process.env.NEXT_PUBLIC_SITE_URL || 'https://www.spicasync.com'
).replace(/\/$/, '')

export const siteName = 'SpicaSync'

export const siteDescription =
  'SpicaSync is your one-stop tech partner. We build fast websites, mobile apps, and IT projects that help startups and businesses shine online.'

/** Keywords covering our services, tech stack and audience so we surface for more searches. */
export const siteKeywords = [
  'SpicaSync',
  'web development company',
  'website development',
  'website design',
  'mobile app development',
  'Android app development',
  'cross-platform app development',
  'Flutter development',
  'React development',
  'Next.js development',
  'Node.js development',
  'TypeScript',
  'startup website',
  'business website',
  'e-commerce website',
  'landing page design',
  'UI/UX design',
  'custom software development',
  'IT projects',
  'IT solutions',
  'final year IT project',
  'academic IT projects',
  'software agency',
  'digital agency',
  'hire web developers',
  'scalable web apps',
  'API integration',
]

/** Public routes included in the sitemap. */
export const routes = [
  { path: '', changeFrequency: 'weekly', priority: 1 },
  { path: 'products', changeFrequency: 'monthly', priority: 0.9 },
  { path: 'solutions', changeFrequency: 'monthly', priority: 0.9 },
  { path: 'pricing', changeFrequency: 'monthly', priority: 0.8 },
  { path: 'contact', changeFrequency: 'yearly', priority: 0.7 },
] as const
