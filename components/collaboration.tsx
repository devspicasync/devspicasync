'use client'

import Image from 'next/image'

export function Collaboration() {
  return (
    <section className="py-12 sm:py-16 md:py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="bg-white rounded-2xl sm:rounded-3xl shadow-lg overflow-hidden">
          <div className="aspect-video bg-gray-200 relative">
            <Image
              src="/images/team-collaboration.jpg"
              alt="Team collaboration with multiple monitors"
              fill
              className="object-cover"
            />
          </div>
        </div>

        <div className="mt-6 sm:mt-8 md:mt-10 grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6 text-center">
          <div>
            <div className="text-xl sm:text-2xl md:text-3xl font-bold text-foreground">50K+</div>
            <p className="text-xs sm:text-sm text-foreground/70 mt-1">Active Users</p>
          </div>
          <div>
            <div className="text-xl sm:text-2xl md:text-3xl font-bold text-foreground">99%</div>
            <p className="text-xs sm:text-sm text-foreground/70 mt-1">Uptime</p>
          </div>
          <div>
            <div className="text-xl sm:text-2xl md:text-3xl font-bold text-foreground">24/7</div>
            <p className="text-xs sm:text-sm text-foreground/70 mt-1">Support</p>
          </div>
          <div>
            <div className="text-xl sm:text-2xl md:text-3xl font-bold text-foreground">180+</div>
            <p className="text-xs sm:text-sm text-foreground/70 mt-1">Countries</p>
          </div>
        </div>
      </div>
    </section>
  )
}
