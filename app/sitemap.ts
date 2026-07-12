import type { MetadataRoute } from 'next'
import { siteUrl, routes } from '@/lib/site'

// Next.js App Router automatically serves this at /sitemap.xml
export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date()

  return routes.map((route) => ({
    url: route.path ? `${siteUrl}/${route.path}` : siteUrl,
    lastModified,
    changeFrequency: route.changeFrequency,
    priority: route.priority,
  }))
}
