import { Header } from '@/components/header'
import { Footer } from '@/components/footer'
import { Button } from '@/components/ui/button'

export default function SolutionsPage() {
  const solutions = [
    {
      title: 'For Enterprises',
      description: 'Scalable solutions for large organizations with complex needs',
      benefits: [
        'Dedicated support team',
        'Custom integrations',
        'Advanced security',
        'White-label options'
      ]
    },
    {
      title: 'For SMBs',
      description: 'Affordable and easy-to-use solutions for growing businesses',
      benefits: [
        'Quick setup',
        'Cost-effective pricing',
        'Standard integrations',
        'Email support'
      ]
    },
    {
      title: 'For Startups',
      description: 'Flexible solutions designed for fast-growing startups',
      benefits: [
        'Free tier available',
        'Scalable infrastructure',
        'Community support',
        'API access'
      ]
    },
    {
      title: 'For Agencies',
      description: 'Multi-client solutions for agencies and consultants',
      benefits: [
        'Client management',
        'Reseller pricing',
        'White-label support',
        'Priority support'
      ]
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
                Solutions for Every Business
              </h1>
              <p className="text-sm sm:text-base md:text-lg text-foreground/70 max-w-2xl mx-auto">
                Whether you're a startup or an enterprise, we have a solution that fits your needs
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 md:gap-10">
              {solutions.map((solution, index) => (
                <div key={index} className="border border-border rounded-xl sm:rounded-2xl p-6 sm:p-8 hover:shadow-lg transition-shadow">
                  <h3 className="text-xl sm:text-2xl font-bold text-foreground mb-3 sm:mb-4">{solution.title}</h3>
                  <p className="text-sm sm:text-base text-foreground/70 mb-6 sm:mb-8">{solution.description}</p>
                  <ul className="space-y-2 sm:space-y-3 mb-6 sm:mb-8">
                    {solution.benefits.map((benefit, benefitIndex) => (
                      <li key={benefitIndex} className="text-sm sm:text-base text-foreground/70 flex items-center gap-2">
                        <span className="text-primary">✓</span>
                        {benefit}
                      </li>
                    ))}
                  </ul>
                  <Button className="w-full rounded-lg text-sm sm:text-base">Get Started</Button>
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
