'use client'

import Image from 'next/image'
import { Activity, FileBarChart, Lock } from 'lucide-react'
import { Reveal } from '@/components/reveal'

const features = [
  {
    icon: Activity,
    title: 'Real-time analytics',
    description: 'Live dashboards and instant notifications so you always know how things are performing.',
  },
  {
    icon: FileBarChart,
    title: 'Advanced reporting',
    description: 'Comprehensive reports with custom filters and clear visualizations you can act on.',
  },
  {
    icon: Lock,
    title: 'Data security',
    description: 'Modern encryption and best-practice compliance to keep your data safe.',
  },
]

export function BigPicture() {
  return (
    <section className="py-16 sm:py-20 md:py-28 px-4 sm:px-6 lg:px-8 bg-secondary border-y border-border">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-16 items-center">
          <Reveal>
            <span className="eyebrow">Clarity by design</span>
            <h2 className="mt-5 font-display text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-foreground">
              See the big picture
            </h2>
            <p className="mt-4 text-base text-muted-foreground">
              We don&apos;t just build. We give you the visibility to make confident decisions.
            </p>
            <div className="mt-8 space-y-6">
              {features.map((feature, index) => (
                <Reveal key={feature.title} delay={index * 90} className="flex gap-4">
                  <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-md bg-card border border-border text-primary">
                    <feature.icon className="h-5 w-5" strokeWidth={2} />
                  </span>
                  <div>
                    <h3 className="text-base sm:text-lg font-semibold text-foreground">
                      {feature.title}
                    </h3>
                    <p className="mt-1 text-sm sm:text-base text-muted-foreground leading-relaxed">
                      {feature.description}
                    </p>
                  </div>
                </Reveal>
              ))}
            </div>
          </Reveal>

          <Reveal delay={120} className="relative">
            <div className="border border-border bg-card p-2">
              <div className="relative aspect-square overflow-hidden">
                <Image
                  src="/images/analytics-illustration.jpg"
                  alt="Analytics and data visualization"
                  fill
                  className="object-cover"
                />
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  )
}
