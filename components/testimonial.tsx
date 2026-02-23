'use client'

import Image from 'next/image'

export function Testimonial() {
  return (
    <section className="py-12 sm:py-16 md:py-20 px-4 sm:px-6 lg:px-8 bg-muted/50">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 items-center">
          <div className="rounded-2xl sm:rounded-3xl aspect-square bg-gray-200 relative overflow-hidden order-2 md:order-1">
            <Image
              src="/images/workspace.jpg"
              alt="Customer workspace"
              fill
              className="object-cover"
            />
          </div>

          <div className="order-1 md:order-2">
            <blockquote className="mb-4 sm:mb-6 md:mb-8">
              <p className="text-lg sm:text-xl md:text-2xl font-semibold text-foreground mb-4 sm:mb-6 leading-relaxed">
                "We assist in transforming concepts into functional digital products. We provide intelligent, cutting-edge solutions that enable you to expand quickly in the digital world, from creating mobile apps to creating startup and company websites to completing IT projects. We are here to develop, support, and scale your vision using the appropriate technology, whether you're starting a new company, modernizing your existing one, or working on an IT project"
              </p>
            </blockquote>
{/* 
            <div>
              <p className="font-semibold text-sm sm:text-base md:text-lg text-foreground">Sarah Mitchell</p>
              <p className="text-xs sm:text-sm md:text-base text-foreground/70">CEO, TechVenture Co</p>
            </div> */}
          </div>
        </div>
      </div>
    </section>
  )
}
