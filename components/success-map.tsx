'use client'

import Image from 'next/image'

export function SuccessMap() {
  const steps = [
    {
      number: '01',
      title: 'Get Started',
      description: 'Contact Us for a quick setup'
    },
    {
      number: '02',
      title: 'Configure Settings',
      description: 'Customize your workspace to match your unique business requirements and workflows'
    },
    {
      number: '03',
      title: 'Start Scaling',
      description: 'Begin growing your business with our powerful tools and features at your fingertips'
    }
  ]

  return (
    <section className="py-12 sm:py-16 md:py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-foreground mb-10 sm:mb-12 md:mb-16 text-center">Map Your Success</h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 md:gap-10 mb-10 md:mb-16">
          {steps.map((step, index) => (
            <div key={index} className="text-center">
              <div className="text-4xl sm:text-5xl md:text-6xl font-bold text-primary/40 mb-3 sm:mb-6">{step.number}</div>
              <h3 className="text-lg sm:text-xl md:text-2xl font-bold text-foreground mb-2 sm:mb-3">{step.title}</h3>
              <p className="text-sm sm:text-base text-foreground/70">{step.description}</p>
            </div>
          ))}
        </div>

        <div className="rounded-2xl sm:rounded-3xl aspect-video bg-gray-200 relative overflow-hidden">
          <Image
            src="/images/success-journey.jpg"
            alt="Success journey and milestones"
            fill
            className="object-cover"
          />
        </div>
      </div>
    </section>
  )
}
