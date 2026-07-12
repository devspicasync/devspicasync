'use client'

import { Zap, LineChart, Blocks, Rocket } from 'lucide-react'
import { Reveal } from '@/components/reveal'

const features = [
  {
    icon: Zap,
    title: 'Rapid delivery',
    description: 'From first call to launch, we move fast with a clear process and no surprises.',
    tint: 'text-primary bg-primary/10',
  },
  {
    icon: LineChart,
    title: 'Smart & data-driven',
    description: 'We build with analytics baked in, so every decision is backed by real insight.',
    tint: 'text-brand-violet bg-brand-violet/10',
  },
  {
    icon: Blocks,
    title: 'Seamless integration',
    description: 'Payments, APIs, dashboards — we connect cleanly to the tools you already use.',
    tint: 'text-brand-cyan bg-brand-cyan/10',
  },
  {
    icon: Rocket,
    title: 'Built to scale',
    description: 'Clean, modern architecture that grows with you — from MVP to full product.',
    tint: 'text-emerald-500 bg-emerald-500/10',
  },
]

export function Features() {
  return (
    <section className="py-16 sm:py-20 md:py-28 px-4 sm:px-6 lg:px-8 bg-background">
      <div className="max-w-7xl mx-auto">
        <Reveal className="max-w-2xl mb-12 sm:mb-16">
          <span className="eyebrow">Why SpicaSync</span>
          <h2 className="mt-5 font-display text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-foreground">
            We&apos;ve cracked the code.
          </h2>
          <p className="mt-4 text-base sm:text-lg text-foreground/70">
            Cutting-edge technology meets a proven, human process — so your idea ships
            reliably and looks the part.
          </p>
        </Reveal>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 sm:gap-6">
          {features.map((feature, index) => (
            <Reveal
              key={feature.title}
              delay={index * 90}
              className="group card-lift rounded-2xl border border-border bg-card p-6 sm:p-7 hover:border-primary/40 hover:shadow-xl hover:shadow-primary/5"
            >
              <div
                className={`flex h-12 w-12 items-center justify-center rounded-xl ${feature.tint} transition-transform duration-300 group-hover:scale-110`}
              >
                <feature.icon className="h-6 w-6" strokeWidth={2} />
              </div>
              <h3 className="mt-5 text-lg font-semibold text-foreground">{feature.title}</h3>
              <p className="mt-2 text-sm sm:text-base text-foreground/70 leading-relaxed">
                {feature.description}
              </p>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
