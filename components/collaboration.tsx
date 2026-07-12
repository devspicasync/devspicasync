'use client'

import Image from 'next/image'
import { Reveal } from '@/components/reveal'

// NOTE: these are marketing figures — edit them to match your real numbers.
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
        <Reveal className="relative overflow-hidden rounded-3xl border border-border shadow-2xl shadow-primary/10">
          <div className="relative aspect-[16/9] sm:aspect-[21/9]">
            <Image
              src="/images/team-collaboration.jpg"
              alt="The SpicaSync team collaborating"
              fill
              className="object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-foreground/70 via-foreground/20 to-transparent" />
            <div className="absolute inset-x-0 bottom-0 p-6 sm:p-10">
              <h2 className="font-display text-2xl sm:text-3xl md:text-4xl font-bold text-white max-w-lg leading-tight">
                A partner that ships — and sticks around.
              </h2>
            </div>
          </div>
        </Reveal>

        <div className="mt-8 grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6">
          {stats.map((stat, index) => (
            <Reveal
              key={stat.label}
              delay={index * 80}
              className="rounded-2xl border border-border bg-card p-6 text-center card-lift hover:border-primary/40 hover:shadow-lg"
            >
              <div className="font-display text-3xl sm:text-4xl md:text-5xl font-bold text-gradient">
                {stat.value}
              </div>
              <p className="mt-2 text-xs sm:text-sm text-foreground/70">{stat.label}</p>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
