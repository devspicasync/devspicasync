'use client'

import { Button } from '@/components/ui/button'
import Image from 'next/image'

export function Hero() {
  return (
    <section className="pt-20 sm:pt-24 md:pt-32">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-8 sm:mb-10 md:mb-12">
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-7xl font-bold text-foreground mb-4 sm:mb-6 md:mb-8 leading-tight">
            Browse everything.
          </h1>
          <p className="text-sm sm:text-base md:text-lg text-foreground/70 mb-6 sm:mb-8 max-w-2xl mx-auto">
            Discover a complete solution for managing everything your business needs in one unified platform.
          </p>
        </div>
      </div>

      {/* Hero image with blue background - full width */}
      <div className="relative w-full pb-20">
        {/* Blue background - extends full width, covers bottom half */}
        <div className="absolute inset-x-0 top-1/2 bottom-0 bg-primary rounded-t-3xl" />
        
        {/* Image container - positioned relative to be on top of blue */}
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 z-10">
          <div className="bg-white rounded-3xl shadow-xl overflow-hidden">
            <div className="aspect-video bg-gray-200 relative">
              <Image
                src="/images/workspace.jpg"
                alt="Professional workspace with laptop and accessories"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
