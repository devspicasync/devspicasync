'use client'

import { Building2, Rocket, Store, Palette, Check } from 'lucide-react'
import { Reveal } from '@/components/reveal'

const solutions = [
  {
    icon: Building2,
    title: 'Enterprise Solutions',
    description:
      'Comprehensive platforms built for large organizations with complex workflows and advanced security.',
    features: ['Custom integrations', 'Dedicated support', 'Advanced analytics', 'White-label options'],
    tint: 'text-primary bg-primary/10',
  },
  {
    icon: Rocket,
    title: 'For Startups',
    description:
      'Affordable, scalable solutions designed to help startups grow fast without breaking the bank.',
    features: ['Quick setup', 'Flexible pricing', 'Growth tools', 'Ongoing support'],
    tint: 'text-brand-violet bg-brand-violet/10',
  },
  {
    icon: Store,
    title: 'For SMBs',
    description:
      'The perfect balance of features and affordability for businesses looking to scale efficiently.',
    features: ['All core features', 'Team collaboration', 'Reporting', 'API access'],
    tint: 'text-brand-cyan bg-brand-cyan/10',
  },
  {
    icon: Palette,
    title: 'For Agencies',
    description:
      'Multi-client management with white-label capabilities to deliver for your clients seamlessly.',
    features: ['Client management', 'White-labeling', 'Reseller program', 'Priority support'],
    tint: 'text-amber-500 bg-amber-500/10',
  },
]

export function SolutionsSection() {
  return (
    <section
      id="solutions"
      className="scroll-mt-20 py-16 sm:py-20 md:py-28 px-4 sm:px-6 lg:px-8 bg-muted/40 border-y border-border/60"
    >
      <div className="max-w-7xl mx-auto">
        <Reveal className="text-center max-w-2xl mx-auto mb-12 sm:mb-16">
          <span className="eyebrow">Tailored to you</span>
          <h2 className="mt-5 font-display text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-foreground">
            Solutions for every business
          </h2>
          <p className="mt-4 text-base sm:text-lg text-foreground/70">
            Whatever your size or stage, we shape the right solution around your goals.
          </p>
        </Reveal>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 sm:gap-6">
          {solutions.map((solution, index) => (
            <Reveal
              key={solution.title}
              delay={index * 90}
              className="group card-lift flex flex-col rounded-2xl border border-border bg-card p-6 sm:p-7 hover:border-primary/40 hover:shadow-xl hover:shadow-primary/5"
            >
              <div
                className={`flex h-12 w-12 items-center justify-center rounded-xl ${solution.tint} transition-transform duration-300 group-hover:scale-110`}
              >
                <solution.icon className="h-6 w-6" strokeWidth={2} />
              </div>
              <h3 className="mt-5 text-lg font-semibold text-foreground">{solution.title}</h3>
              <p className="mt-2 text-sm text-foreground/70 leading-relaxed">
                {solution.description}
              </p>
              <ul className="mt-5 space-y-2.5 pt-5 border-t border-border/70">
                {solution.features.map((feature) => (
                  <li key={feature} className="flex items-center gap-2.5 text-sm text-foreground/80">
                    <span className="flex h-4.5 w-4.5 shrink-0 items-center justify-center rounded-full bg-primary/10 text-primary">
                      <Check className="h-3 w-3" strokeWidth={3} />
                    </span>
                    {feature}
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
