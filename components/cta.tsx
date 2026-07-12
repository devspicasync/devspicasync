'use client'

import { ArrowRight, Mail } from 'lucide-react'
import { Reveal } from '@/components/reveal'

export function CTA() {
  const openMessage = () => window.dispatchEvent(new CustomEvent('open-message-modal'))

  return (
    <section className="py-16 sm:py-20 md:py-28 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <Reveal className="relative overflow-hidden rounded-3xl bg-brand-gradient px-6 py-16 sm:px-12 sm:py-20 text-center shadow-2xl shadow-primary/30">
          {/* decorative layers */}
          <div className="pointer-events-none absolute inset-0 bg-grid opacity-20 [mask-image:radial-gradient(ellipse_at_center,black,transparent_75%)]" />
          <div className="pointer-events-none absolute -top-16 -left-10 h-64 w-64 rounded-full bg-white/20 blur-3xl" />
          <div className="pointer-events-none absolute -bottom-20 -right-10 h-64 w-64 rounded-full bg-white/10 blur-3xl" />

          <div className="relative">
            <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-bold text-primary-foreground tracking-tight leading-tight max-w-2xl mx-auto">
              Ready to bring your idea to life?
            </h2>
            <p className="mt-5 text-base sm:text-lg text-primary-foreground/85 max-w-xl mx-auto">
              Let&apos;s build something amazing together. Tell us about your project and
              we&apos;ll get back to you within 24 hours.
            </p>
            <div className="mt-9 flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4">
              <button
                onClick={openMessage}
                className="group inline-flex w-full sm:w-auto items-center justify-center gap-2 rounded-xl bg-white px-7 py-3.5 text-sm font-semibold text-primary shadow-lg transition-all hover:shadow-xl hover:-translate-y-0.5"
              >
                Start a project
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
              </button>
              <a
                href="mailto:devspicasync@gmail.com"
                className="inline-flex w-full sm:w-auto items-center justify-center gap-2 rounded-xl border border-white/40 bg-white/10 px-7 py-3.5 text-sm font-semibold text-primary-foreground backdrop-blur transition-all hover:bg-white/20"
              >
                <Mail className="h-4 w-4" />
                Email us directly
              </a>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  )
}
