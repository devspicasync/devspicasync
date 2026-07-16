'use client'

import { ArrowRight, Mail } from 'lucide-react'
import { Reveal } from '@/components/reveal'

export function CTA() {
  const openMessage = () => window.dispatchEvent(new CustomEvent('open-message-modal'))

  return (
    <section className="py-16 sm:py-20 md:py-28 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <Reveal className="rounded-md bg-primary px-6 py-16 sm:px-12 sm:py-20 text-center">
          <div>
            <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-bold text-primary-foreground tracking-tight leading-tight max-w-2xl mx-auto">
              Ready to bring your idea to life?
            </h2>
            <p className="mt-5 text-base sm:text-lg text-white/80 max-w-xl mx-auto">
              Let&apos;s build something amazing together. Tell us about your project and
              we&apos;ll get back to you within 24 hours.
            </p>
            <div className="mt-9 flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4">
              <button
                onClick={openMessage}
                className="group inline-flex w-full sm:w-auto items-center justify-center gap-2 rounded-md bg-brand-yellow px-7 py-3.5 text-sm font-semibold text-brand-yellow-foreground transition-colors hover:bg-[#ffdd57]"
              >
                Start a project
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
              </button>
              <a
                href="mailto:devspicasync@gmail.com"
                className="inline-flex w-full sm:w-auto items-center justify-center gap-2 rounded-md border border-white/50 px-7 py-3.5 text-sm font-semibold text-primary-foreground transition-colors hover:bg-white/10"
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
