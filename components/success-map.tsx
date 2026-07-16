'use client'

import Image from 'next/image'
import { MessageSquare, Settings2, TrendingUp } from 'lucide-react'
import { Reveal } from '@/components/reveal'

const steps = [
  {
    number: '01',
    icon: MessageSquare,
    title: 'Get started',
    description: 'Reach out and tell us your idea. We scope it together for a quick, clear start.',
  },
  {
    number: '02',
    icon: Settings2,
    title: 'We build it',
    description: 'We design and develop your product, tailored to your goals and brand.',
  },
  {
    number: '03',
    icon: TrendingUp,
    title: 'Launch & scale',
    description: 'We ship, support, and help you grow with the right tools at your fingertips.',
  },
]

export function SuccessMap() {
  return (
    <section className="py-16 sm:py-20 md:py-28 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <Reveal className="text-center max-w-2xl mx-auto mb-14 sm:mb-20">
          <span className="eyebrow">How it works</span>
          <h2 className="mt-5 font-display text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-foreground">
            Map your success
          </h2>
          <p className="mt-4 text-base sm:text-lg text-muted-foreground">
            Three simple steps from first hello to a product that grows with you.
          </p>
        </Reveal>

        <div className="relative grid grid-cols-1 sm:grid-cols-3 gap-10 sm:gap-8 mb-16">
          {/* connecting line (desktop) */}
          <div className="hidden sm:block absolute top-8 left-[16.66%] right-[16.66%] h-px bg-border" />

          {steps.map((step, index) => (
            <Reveal key={step.number} delay={index * 120} className="relative text-center">
              <div className="relative z-10 mx-auto flex h-16 w-16 items-center justify-center rounded-md bg-card border border-border">
                <step.icon className="h-7 w-7 text-primary" strokeWidth={2} />
                <span className="absolute -top-2 -right-2 flex h-6 w-6 items-center justify-center rounded-full bg-primary text-[11px] font-bold text-primary-foreground">
                  {index + 1}
                </span>
              </div>
              <h3 className="mt-6 text-lg sm:text-xl font-bold font-display text-foreground">
                {step.title}
              </h3>
              <p className="mt-2 text-sm sm:text-base text-muted-foreground max-w-xs mx-auto leading-relaxed">
                {step.description}
              </p>
            </Reveal>
          ))}
        </div>

        <Reveal className="overflow-hidden border border-border">
          <div className="relative aspect-[16/9] sm:aspect-[21/9]">
            <Image
              src="/images/success-journey.jpg"
              alt="Success journey and milestones"
              fill
              className="object-cover"
            />
          </div>
        </Reveal>
      </div>
    </section>
  )
}
