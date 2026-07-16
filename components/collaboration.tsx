'use client'

import Image from 'next/image'
import { Reveal } from '@/components/reveal'

// NOTE: these are marketing figures. Edit them to match your real numbers.
const stats = [
  { value: '50+', label: 'Projects delivered' },
  { value: '30+', label: 'Happy clients' },
  { value: '24/7', label: 'Support' },
  { value: '5★', label: 'Average rating' },
]

export function Collaboration() {
  return (
    <section className="py-16 sm:py-20 md:py-28 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <Reveal className="relative overflow-hidden border border-border">
          <div className="relative aspect-[16/9] sm:aspect-[21/9]">
            <Image
              src="/images/team-collaboration.jpg"
              alt="The SpicaSync team collaborating"
              fill
              className="object-cover"
            />
            {/* Solid navy scrim so the heading stays legible over the photo */}
            <div className="absolute inset-x-0 bottom-0 bg-primary/90 p-6 sm:p-10">
              <h2 className="font-display text-2xl sm:text-3xl md:text-4xl font-bold text-primary-foreground max-w-lg leading-tight">
                A partner that ships, and sticks around.
              </h2>
            </div>
          </div>
        </Reveal>

        <div className="mt-8 grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6">
          {stats.map((stat, index) => (
            <Reveal
              key={stat.label}
              delay={index * 80}
              className="rounded-md border border-border bg-card p-6 text-center card-lift"
            >
              <div className="font-display text-3xl sm:text-4xl md:text-5xl font-bold text-primary">
                {stat.value}
              </div>
              <p className="mt-2 text-xs sm:text-sm text-muted-foreground">{stat.label}</p>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
