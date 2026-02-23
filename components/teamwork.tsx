'use client'

import Image from 'next/image'

export function TeamWork() {
  return (
    <section className="py-12 sm:py-16 md:py-20 px-4 sm:px-6 lg:px-8 bg-muted/50">
      <div className="max-w-7xl mx-auto">
        <div className="rounded-2xl sm:rounded-3xl aspect-video bg-gray-200 relative overflow-hidden mb-8 sm:mb-10 md:mb-12">
          <Image
            src="/images/workflow.jpg"
            alt="Team workflow and collaboration"
            fill
            className="object-cover"
          />
        </div>

        <div className="text-center">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-foreground mb-3 sm:mb-4">Connect with us</h2>
          <p className="text-sm sm:text-base md:text-lg text-foreground/70 mb-6 sm:mb-8 max-w-2xl mx-auto">
            Ready to bring your idea to life or take your business online? Let’s build something amazing together.
          </p>
        </div>
      </div>
    </section>
  )
}
