import { Button } from '@/components/ui/button'

const pricingPlans = [
  {
    name: 'Starter',
    price: '$29',
    period: 'per month',
    description: 'Perfect for individuals and small teams getting started',
    features: [
      'Up to 5 team members',
      'Basic analytics',
      'Email support',
      'Core integrations',
      '5GB storage',
      'Basic reporting',
    ],
  },
  {
    name: 'Professional',
    price: '$99',
    period: 'per month',
    description: 'Best for growing teams and businesses',
    features: [
      'Up to 50 team members',
      'Advanced analytics',
      'Priority support',
      'All integrations',
      '500GB storage',
      'Custom reports',
      'API access',
      'Advanced security',
    ],
    featured: true,
  },
  {
    name: 'Enterprise',
    price: 'Custom',
    period: 'contact sales',
    description: 'For large organizations with custom needs',
    features: [
      'Unlimited team members',
      'Custom analytics',
      'Dedicated support',
      'Custom integrations',
      'Unlimited storage',
      'White-label options',
      'SSO & advanced security',
      'SLA guarantee',
    ],
  },
]

export function PricingSection() {
  return (
    <section id="pricing" className="py-12 sm:py-16 md:py-20 px-4 sm:px-6 lg:px-8 bg-background">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-10 sm:mb-12 md:mb-16">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-foreground mb-2 sm:mb-4">Simple, Transparent Pricing</h2>
          <p className="text-sm sm:text-base md:text-lg text-foreground/70 max-w-2xl mx-auto">
            Choose the perfect plan for your business. All plans include a 14-day free trial.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {pricingPlans.map((plan, index) => (
            <div
              key={index}
              className={`rounded-xl sm:rounded-2xl border transition-all duration-300 ${
                plan.featured
                  ? 'bg-primary text-white border-primary shadow-xl scale-105 lg:scale-110'
                  : 'bg-white border-border text-foreground hover:shadow-lg'
              }`}
            >
              <div className="p-6 sm:p-8">
                <h3 className={`text-xl sm:text-2xl font-bold mb-2 ${plan.featured ? 'text-white' : 'text-foreground'}`}>
                  {plan.name}
                </h3>
                <div className="mb-2">
                  <span className="text-3xl sm:text-4xl font-bold">{plan.price}</span>
                  <span className={`text-xs sm:text-sm ml-2 ${plan.featured ? 'text-white/70' : 'text-foreground/70'}`}>
                    {plan.period}
                  </span>
                </div>
                <p className={`text-xs sm:text-sm mb-6 sm:mb-8 ${plan.featured ? 'text-white/80' : 'text-foreground/70'}`}>
                  {plan.description}
                </p>

                <ul className="space-y-3 sm:space-y-4 mb-6 sm:mb-8">
                  {plan.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className={`text-xs sm:text-sm flex items-start ${plan.featured ? 'text-white/90' : 'text-foreground/70'}`}>
                      <span className="mr-2 sm:mr-3">✓</span>
                      {feature}
                    </li>
                  ))}
                </ul>

                <Button
                  className={`w-full rounded-lg text-sm sm:text-base ${
                    plan.featured
                      ? 'bg-white text-primary hover:bg-white/90'
                      : 'bg-primary text-white hover:bg-primary/90'
                  }`}
                >
                  {plan.price === 'Custom' ? 'Contact Sales' : 'Start Free Trial'}
                </Button>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12 sm:mt-16 text-center">
          <p className="text-sm sm:text-base text-foreground/70 mb-4">
            Need a custom plan? <span className="text-primary font-semibold cursor-pointer hover:underline">Talk to our sales team</span>
          </p>
        </div>
      </div>
    </section>
  )
}
