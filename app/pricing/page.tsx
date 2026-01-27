import { Header } from '@/components/header'
import { Footer } from '@/components/footer'
import { Button } from '@/components/ui/button'

export default function PricingPage() {
  const plans = [
    {
      name: 'Starter',
      price: '$29',
      period: 'per month',
      description: 'Perfect for small teams getting started',
      features: [
        'Up to 5 team members',
        '5GB storage',
        'Basic analytics',
        'Email support',
        'Standard integrations'
      ],
      highlighted: false
    },
    {
      name: 'Professional',
      price: '$79',
      period: 'per month',
      description: 'For growing businesses',
      features: [
        'Up to 50 team members',
        '500GB storage',
        'Advanced analytics',
        'Priority email support',
        'Custom integrations',
        'API access',
        'Advanced security'
      ],
      highlighted: true
    },
    {
      name: 'Enterprise',
      price: 'Custom',
      period: 'contact us',
      description: 'For large organizations',
      features: [
        'Unlimited team members',
        'Unlimited storage',
        'Dedicated account manager',
        '24/7 phone support',
        'White-label solution',
        'Custom integration',
        'Advanced security & compliance',
        'SLA guarantee'
      ],
      highlighted: false
    }
  ]

  return (
    <main>
      <Header />
      <div className="pt-20 pb-12">
        <section className="py-12 sm:py-16 md:py-24 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-12 sm:mb-16 md:mb-20">
              <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-foreground mb-4 sm:mb-6">
                Simple, Transparent Pricing
              </h1>
              <p className="text-sm sm:text-base md:text-lg text-foreground/70 max-w-2xl mx-auto">
                Choose the perfect plan for your business. All plans include a 14-day free trial.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8 md:gap-10">
              {plans.map((plan, index) => (
                <div
                  key={index}
                  className={`border rounded-xl sm:rounded-2xl p-6 sm:p-8 transition-all ${
                    plan.highlighted
                      ? 'border-primary shadow-lg md:scale-105 md:z-10'
                      : 'border-border'
                  }`}
                >
                  <h3 className="text-xl sm:text-2xl font-bold text-foreground mb-2">{plan.name}</h3>
                  <p className="text-xs sm:text-sm text-foreground/70 mb-4">{plan.description}</p>
                  
                  <div className="mb-6 sm:mb-8">
                    <span className="text-3xl sm:text-4xl font-bold text-foreground">{plan.price}</span>
                    <span className="text-xs sm:text-sm text-foreground/70 ml-2">{plan.period}</span>
                  </div>

                  <Button className="w-full rounded-lg mb-6 sm:mb-8 text-sm sm:text-base">
                    {plan.name === 'Enterprise' ? 'Contact Sales' : 'Start Free Trial'}
                  </Button>

                  <ul className="space-y-2 sm:space-y-3">
                    {plan.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="text-xs sm:text-sm text-foreground/70 flex items-start gap-2">
                        <span className="text-primary mt-0.5">✓</span>
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </section>
      </div>
      <Footer />
    </main>
  )
}
