'use client'

import Image from 'next/image'

export function BigPicture() {
  const features = [
    {
      title: 'Real-time Analytics',
      description: 'Monitor all your metrics with live dashboards and instant notifications'
    },
    {
      title: 'Advanced Reporting',
      description: 'Generate comprehensive reports with custom filters and visualizations'
    },
    {
      title: 'Data Security',
      description: 'Enterprise-grade encryption and compliance with global standards'
    }
  ]

  return (
    <section className="py-12 sm:py-16 md:py-20 px-4 sm:px-6 lg:px-8 bg-muted/50">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 items-center">
          <div>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-foreground mb-6 sm:mb-8 md:mb-10">See the Big Picture</h2>
            <div className="space-y-4 sm:space-y-5 md:space-y-6">
              {features.map((feature, index) => (
                <div key={index}>
                  <h3 className="text-base sm:text-lg md:text-xl font-semibold text-foreground mb-1 sm:mb-2">{feature.title}</h3>
                  <p className="text-sm sm:text-base text-foreground/70">{feature.description}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="rounded-2xl sm:rounded-3xl aspect-square bg-gray-200 relative overflow-hidden mt-6 md:mt-0">
            <Image
              src="/images/analytics-illustration.jpg"
              alt="Analytics and data visualization"
              fill
              className="object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  )
}
