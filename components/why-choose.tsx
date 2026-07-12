'use client'

import { Gem, Handshake, Gauge, Check } from 'lucide-react'
import { Reveal } from '@/components/reveal'

const pillars = [
  {
    icon: Gem,
    name: 'Senior craft',
    description: 'Work that looks great and holds up under the hood.',
    features: ['Clean, modern code', 'Thoughtful UI/UX design', 'Attention to detail'],
    featured: false,
  },
  {
    icon: Handshake,
    name: 'True partnership',
    description: 'You talk to the people actually building your product.',
    features: ['Direct communication', 'Honest, clear advice', 'Priority support'],
    featured: true,
  },
  {
    icon: Gauge,
    name: 'Real momentum',
    description: 'We keep things moving so you launch — and keep growing.',
    features: ['Fast iterations', 'On-time delivery', 'Room to scale'],
    featured: false,
  },
]

export function WhyChoose() {
  return (
    <section id="why" className="scroll-mt-20 py-16 sm:py-20 md:py-28 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <Reveal className="text-center max-w-2xl mx-auto mb-12 sm:mb-16">
          <span className="eyebrow">The SpicaSync difference</span>
          <h2 className="mt-5 font-display text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-foreground">
            Why choose SpicaSync?
          </h2>
          <p className="mt-4 text-base sm:text-lg text-foreground/70">
            The complete solution for your business needs — built by a team that genuinely cares.
          </p>
        </Reveal>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {pillars.map((pillar, index) => (
            <Reveal
              key={pillar.name}
              delay={index * 100}
              className={`relative card-lift rounded-2xl p-7 sm:p-8 ${
                pillar.featured
                  ? 'bg-brand-gradient text-primary-foreground shadow-2xl shadow-primary/30 md:-translate-y-3'
                  : 'border border-border bg-card hover:border-primary/40 hover:shadow-xl hover:shadow-primary/5'
              }`}
            >
              {pillar.featured && (
                <span className="absolute -top-3 left-1/2 -translate-x-1/2 rounded-full bg-card px-3 py-1 text-xs font-semibold text-primary shadow-md border border-border">
                  Most loved
                </span>
              )}
              <div
                className={`flex h-12 w-12 items-center justify-center rounded-xl ${
                  pillar.featured ? 'bg-white/20 text-white' : 'bg-primary/10 text-primary'
                }`}
              >
                <pillar.icon className="h-6 w-6" strokeWidth={2} />
              </div>
              <h3 className="mt-5 text-xl font-bold font-display">{pillar.name}</h3>
              <p className={`mt-2 text-sm ${pillar.featured ? 'text-white/80' : 'text-foreground/70'}`}>
                {pillar.description}
              </p>
              <ul className="mt-6 space-y-3">
                {pillar.features.map((feature) => (
                  <li key={feature} className="flex items-center gap-2.5 text-sm">
                    <span
                      className={`flex h-5 w-5 shrink-0 items-center justify-center rounded-full ${
                        pillar.featured ? 'bg-white/20 text-white' : 'bg-primary/10 text-primary'
                      }`}
                    >
                      <Check className="h-3 w-3" strokeWidth={3} />
                    </span>
                    <span className={pillar.featured ? 'text-white/90' : 'text-foreground/80'}>
                      {feature}
                    </span>
                  </li>
                ))}
              </ul>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
