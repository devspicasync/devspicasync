'use client'

import { Button } from '@/components/ui/button'

export function CTA() {
  return (
    <section className="py-12 sm:py-16 md:py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-3xl mx-auto text-center">
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-foreground mb-4 sm:mb-6">Ready to get started?</h2>
        <p className="text-sm sm:text-base md:text-lg text-foreground/70 mb-6 sm:mb-8">
          Ready to bring your idea to life or take your business online? Let’s build something amazing together.
        </p>
        <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center">
          {/* <Button size="lg" className="rounded-full px-6 sm:px-8 text-sm sm:text-base">
            Get Started Free
          </Button>
          <Button size="lg" variant="outline" className="rounded-full px-6 sm:px-8 text-sm sm:text-base bg-transparent">
            Schedule Demo
          </Button> */}
        </div>
      </div>
    </section>
  )
}
