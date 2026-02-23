'use client'

import { Button } from '@/components/ui/button'

export function WhyChoose() {
  const plans = [
    {
      name: 'Starter',
      features: [
        
        'Basic analytics',
        'Email support',
        'Core features'
      ]
    },
    {
      name: 'Webscale',
      features: [
       
        'Advanced analytics',
        'Priority support',
        'All features',
        'Custom integrations'
      ]
    },
    {
      name: 'Enterprise',
      features: [
        'Unlimited users',
        'Full analytics suite',
        '24/7 support',
        'All features',
        'Dedicated account manager'
      ]
    }
  ]

  return (
    <section className="py-12 sm:py-16 md:py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-10 sm:mb-12 md:mb-16">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-foreground mb-2 sm:mb-4">Why Choose Area?</h2>
          <p className="text-sm sm:text-base md:text-lg text-foreground/70">
            We provide the most complete solution for your business needs
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 mb-10 md:mb-12">
          {plans.map((plan, index) => (
            <div
              key={index}
              className="border border-border rounded-xl sm:rounded-2xl p-6 sm:p-8 hover:shadow-lg transition-shadow"
            >
              <h3 className="text-xl sm:text-2xl font-bold text-foreground mb-4 sm:mb-6">{plan.name}</h3>
              <ul className="space-y-3 sm:space-y-4 mb-6 sm:mb-8">
                {plan.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className="text-sm sm:text-base text-foreground/70 flex items-start">
                    <span className="mr-2 sm:mr-3">✓</span>
                    {feature}
                  </li>
                ))}
              </ul>
              {/* <Button variant="outline" className="w-full rounded-lg bg-transparent text-sm sm:text-base">
                Get Started
              </Button> */}
            </div>
          ))}
        </div>

        {/* <div className="text-center">
          <Button className="rounded-full px-6 sm:px-8 text-sm sm:text-base">View all plans</Button>
        </div> */}
      </div>
    </section>
  )
}
