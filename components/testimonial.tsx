'use client'

import Image from 'next/image'
import { Quote } from 'lucide-react'
import { Reveal } from '@/components/reveal'

export function Testimonial() {
  return (
    <section className="py-16 sm:py-20 md:py-28 px-4 sm:px-6 lg:px-8 bg-muted/40 border-y border-border/60">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-5 gap-8 md:gap-12 items-center">
          <Reveal className="md:col-span-2 order-2 md:order-1">
            <div className="relative">
              <div className="absolute -inset-4 bg-brand-gradient opacity-15 blur-2xl rounded-[2rem] -z-10" />
              <div className="relative rounded-3xl border border-border bg-card p-2 shadow-xl">
                <div className="relative aspect-square overflow-hidden rounded-2xl">
                  <Image
                    src="/images/workspace.jpg"
                    alt="SpicaSync at work"
                    fill
                    className="object-cover"
                  />
                </div>
              </div>
            </div>
          </Reveal>

          <Reveal delay={120} className="md:col-span-3 order-1 md:order-2">
            <span className="flex h-12 w-12 items-center justify-center rounded-2xl bg-brand-gradient text-primary-foreground shadow-lg shadow-primary/25">
              <Quote className="h-6 w-6 fill-current" />
            </span>
            <blockquote className="mt-6 font-display text-xl sm:text-2xl md:text-3xl font-medium text-foreground leading-snug tracking-tight">
              We turn concepts into functional digital products. From mobile apps to startup
              and company websites to full IT projects, we deliver{' '}
              <span className="text-gradient">intelligent, cutting-edge solutions</span> that
              help you grow fast in the digital world.
            </blockquote>
            <p className="mt-6 text-base text-foreground/70 leading-relaxed">
              Whether you&apos;re starting a new company, modernizing your existing one, or
              tackling an IT project — we&apos;re here to develop, support, and scale your vision
              with the right technology.
            </p>
            <div className="mt-8 flex items-center gap-3">
              <span className="flex h-11 w-11 items-center justify-center rounded-full bg-brand-gradient text-sm font-bold text-primary-foreground">
                SS
              </span>
              <div>
                <p className="font-semibold text-foreground">The SpicaSync Team</p>
                <p className="text-sm text-foreground/60">Websites · Apps · IT projects</p>
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  )
}
