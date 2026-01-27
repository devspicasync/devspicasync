'use client'

export function Features() {
  const features = [
    {
      icon: '⚡',
      title: 'Rapid Intake',
      description: 'Streamline your process with automated data collection'
    },
    {
      icon: '📊',
      title: 'Smart Analysis',
      description: 'Transform data into actionable insights instantly'
    },
    {
      icon: '🔄',
      title: 'Dynamic Integration',
      description: 'Seamlessly connect with your existing workflow'
    },
    {
      icon: '🚀',
      title: 'Enterprise Ready',
      description: 'Scale without boundaries or compromises'
    }
  ]

  return (
    <section className="py-12 sm:py-16 md:py-20 px-4 sm:px-6 lg:px-8 bg-background">
      <div className="max-w-7xl mx-auto">
        <div className="mb-10 sm:mb-12 md:mb-16">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-foreground mb-2 sm:mb-4">We've cracked the code.</h2>
          <p className="text-sm sm:text-base md:text-lg text-foreground/70">
            Our platform combines cutting-edge technology with proven strategies
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
          {features.map((feature, index) => (
            <div key={index} className="flex flex-col">
              <div className="text-3xl sm:text-4xl mb-3 sm:mb-4">{feature.icon}</div>
              <h3 className="text-lg sm:text-xl font-semibold text-foreground mb-2">{feature.title}</h3>
              <p className="text-sm sm:text-base text-foreground/70">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
