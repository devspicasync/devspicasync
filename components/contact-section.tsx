'use client'

import { Mail, Clock, MessageSquare, ArrowRight, Check } from 'lucide-react'
import { Reveal } from '@/components/reveal'

const promises = [
  'A reply within 24 hours',
  'A free, no-pressure chat about your idea',
  'Honest advice on the best way to build it',
]

export function ContactSection() {
  const openMessage = () => {
    window.dispatchEvent(new CustomEvent('open-message-modal'))
  }

  return (
    <section
      id="contact"
      className="scroll-mt-20 py-16 sm:py-20 md:py-28 px-4 sm:px-6 lg:px-8 bg-secondary border-y border-border"
    >
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center">
          <Reveal>
            <span className="eyebrow">Get in touch</span>
            <h2 className="mt-5 font-display text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-foreground">
              Let&apos;s build something amazing together
            </h2>
            <p className="mt-4 text-base sm:text-lg text-muted-foreground">
              Ready to bring your idea to life or take your business online? Tell us what you
              have in mind. We&apos;d love to help.
            </p>
            <ul className="mt-8 space-y-4">
              {promises.map((item) => (
                <li key={item} className="flex items-center gap-3 text-foreground">
                  <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-card border border-border text-primary">
                    <Check className="h-3.5 w-3.5" strokeWidth={3} />
                  </span>
                  {item}
                </li>
              ))}
            </ul>
          </Reveal>

          <Reveal delay={120} className="relative">
            <div className="rounded-md border border-border bg-card p-7 sm:p-9">
              <div className="flex items-start gap-4">
                <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-md bg-secondary text-primary">
                  <Mail className="h-6 w-6" />
                </span>
                <div>
                  <h3 className="text-lg font-semibold text-foreground">Email us</h3>
                  <a
                    href="mailto:devspicasync@gmail.com"
                    className="text-primary font-medium hover:underline break-all"
                  >
                    devspicasync@gmail.com
                  </a>
                </div>
              </div>

              <div className="mt-6 flex items-center gap-3 rounded-md bg-secondary px-4 py-3 text-sm text-muted-foreground">
                <Clock className="h-4 w-4 text-primary shrink-0" />
                We typically respond within 24 hours.
              </div>

              <button
                onClick={openMessage}
                className="group mt-6 inline-flex w-full items-center justify-center gap-2 rounded-md bg-primary px-6 py-3.5 text-sm font-semibold text-primary-foreground transition-colors hover:bg-[#16407f]"
              >
                <MessageSquare className="h-4 w-4" />
                Send us a message
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
              </button>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  )
}
