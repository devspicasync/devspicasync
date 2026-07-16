'use client'

import Image from 'next/image'
import { Reveal } from '@/components/reveal'

export function TeamWork() {
  return (
    <section className="py-16 sm:py-20 md:py-28 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-16 items-center">
          <Reveal className="order-2 md:order-1">
            <span className="eyebrow">How we work</span>
            <h2 className="mt-5 font-display text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-foreground">
              Behind every project, real collaboration
            </h2>
            <p className="mt-4 text-base sm:text-lg text-muted-foreground leading-relaxed">
              We treat your product like our own. You stay in the loop at every step, from the
              first sketch to launch day, with clear communication, quick feedback, and a team
              that actually enjoys building great things.
            </p>
          </Reveal>

          <Reveal delay={120} className="order-1 md:order-2 relative">
            <div className="border border-border bg-card p-2">
              <div className="relative aspect-[4/3] overflow-hidden">
                <Image
                  src="/images/workflow.jpg"
                  alt="Team workflow and collaboration"
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
