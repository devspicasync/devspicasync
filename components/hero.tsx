'use client'

import Image from 'next/image'
import { ArrowRight, Sparkles, Smartphone, Code2, Rocket, Star, ShieldCheck } from 'lucide-react'

const scrollTo = (id: string) => {
  const el = document.getElementById(id)
  if (el) el.scrollIntoView({ behavior: 'smooth' })
}

const stack = ['Next.js', 'React', 'Flutter', 'Node.js', 'TypeScript', 'Tailwind', 'Figma', 'AWS']

export function Hero() {
  return (
    <section className="relative border-b border-border bg-background pt-28 sm:pt-32 md:pt-40 pb-16 md:pb-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-4xl mx-auto">
          <div className="animate-in fade-in slide-in-from-bottom-3 duration-700">
            <span className="eyebrow">
              <Sparkles className="h-3.5 w-3.5" />
              Your one-stop tech partner
            </span>
          </div>

          <h1 className="mt-6 font-display text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold leading-[1.05] tracking-tight text-foreground animate-in fade-in slide-in-from-bottom-4 duration-700">
            We build websites, apps &amp;{' '}
            <span className="text-underline-brand">IT solutions</span> that shine
          </h1>

          <p className="mt-6 text-base sm:text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed animate-in fade-in slide-in-from-bottom-5 duration-700">
            SpicaSync is your one-stop tech shop for websites, mobile apps, and IT
            projects. We help startups and businesses shine with reliable, creative, and
            scalable digital solutions.
          </p>

          <div className="mt-9 flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4 animate-in fade-in slide-in-from-bottom-6 duration-700">
            <button
              onClick={() => scrollTo('contact')}
              className="group inline-flex items-center justify-center gap-2 rounded-md bg-primary px-6 py-3.5 text-sm font-semibold text-primary-foreground transition-colors hover:bg-[#16407f] w-full sm:w-auto"
            >
              Start a project
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </button>
            <button
              onClick={() => scrollTo('products')}
              className="inline-flex items-center justify-center gap-2 rounded-md border border-primary bg-background px-6 py-3.5 text-sm font-semibold text-primary transition-colors hover:bg-secondary w-full sm:w-auto"
            >
              Explore our work
            </button>
          </div>

          <div className="mt-6 flex items-center justify-center gap-2 text-sm text-muted-foreground animate-in fade-in duration-1000">
            <span className="flex -space-x-1 text-brand-yellow">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="h-4 w-4 fill-current" />
              ))}
            </span>
            <span>Trusted by startups &amp; growing businesses</span>
          </div>
        </div>

        {/* Hero image with floating cards */}
        <div className="relative mt-14 sm:mt-16 max-w-5xl mx-auto">
          <div className="relative border border-border bg-card p-2">
            <div className="relative aspect-video overflow-hidden">
              <Image
                src="/images/workspace.jpg"
                alt="SpicaSync team building digital products"
                fill
                priority
                className="object-cover"
              />
            </div>
          </div>

          {/* Badges */}
          <div className="hidden sm:flex absolute -left-5 top-10 items-center gap-3 rounded-md panel px-4 py-3">
            <span className="flex h-9 w-9 items-center justify-center rounded-md bg-secondary text-primary">
              <Smartphone className="h-4.5 w-4.5" />
            </span>
            <div className="text-left">
              <p className="text-sm font-semibold text-foreground">Mobile apps</p>
              <p className="text-xs text-muted-foreground">iOS · Android</p>
            </div>
          </div>

          <div className="hidden sm:flex absolute -right-5 top-24 items-center gap-3 rounded-md panel px-4 py-3">
            <span className="flex h-9 w-9 items-center justify-center rounded-md bg-secondary text-primary">
              <Code2 className="h-4.5 w-4.5" />
            </span>
            <div className="text-left">
              <p className="text-sm font-semibold text-foreground">Fast websites</p>
              <p className="text-xs text-muted-foreground">Built to convert</p>
            </div>
          </div>

          <div className="hidden md:flex absolute -bottom-6 left-1/2 -translate-x-1/2 items-center gap-3 rounded-md panel px-4 py-3">
            <span className="flex h-9 w-9 items-center justify-center rounded-md bg-secondary text-primary">
              <ShieldCheck className="h-4.5 w-4.5" />
            </span>
            <div className="text-left">
              <p className="text-sm font-semibold text-foreground">Reliable &amp; scalable</p>
              <p className="text-xs text-muted-foreground">Ships on time</p>
            </div>
          </div>
        </div>

        {/* Tech marquee */}
        <div className="mt-16 sm:mt-20">
          <p className="text-center text-xs font-semibold uppercase tracking-[0.18em] text-muted-foreground mb-6">
            Built with modern, battle-tested tools
          </p>
          <div className="relative overflow-hidden">
            <div className="flex w-max gap-3 animate-marquee">
              {[...stack, ...stack].map((tech, i) => (
                <span
                  key={i}
                  className="inline-flex items-center gap-2 rounded-md border border-border bg-card px-5 py-2 text-sm font-medium text-muted-foreground whitespace-nowrap"
                >
                  <Rocket className="h-3.5 w-3.5 text-primary" />
                  {tech}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
