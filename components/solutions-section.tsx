import { Button } from '@/components/ui/button'

const solutions = [
  {
    icon: '🏢',
    title: 'Enterprise Solutions',
    description: 'Comprehensive platform built for large organizations with complex workflows, multiple teams, and advanced security requirements.',
    features: ['Custom integrations', 'Dedicated support', 'Advanced analytics', 'White-label options'],
  },
  {
    icon: '🚀',
    title: 'For Startups',
    description: 'Affordable and scalable solutions designed to help startups grow fast without breaking the bank.',
    features: ['Quick setup', 'Flexible pricing', 'Growth tools', 'Community support'],
  },
  {
    icon: '🏪',
    title: 'For SMBs',
    description: 'Perfect balance of features and affordability for small to medium-sized businesses looking to scale efficiently.',
    features: ['All core features', 'Team collaboration', 'Reporting', 'API access'],
  },
  {
    icon: '🎨',
    title: 'For Agencies',
    description: 'Multi-client management with white-label capabilities to deliver solutions to your clients seamlessly.',
    features: ['Client management', 'White-labeling', 'Reseller program', 'Agency support'],
  },
]

export function SolutionsSection() {
  return (
    <section id="solutions" className="py-12 sm:py-16 md:py-20 px-4 sm:px-6 lg:px-8 bg-muted/50">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-10 sm:mb-12 md:mb-16">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-foreground mb-2 sm:mb-4">Solutions for Every Business</h2>
          <p className="text-sm sm:text-base md:text-lg text-foreground/70 max-w-2xl mx-auto">
            Tailored solutions for different business types and sizes
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
          {solutions.map((solution, index) => (
            <div
              key={index}
              className="bg-white rounded-xl sm:rounded-2xl p-6 sm:p-8 border border-border hover:shadow-lg transition-all duration-300"
            >
              <div className="text-4xl sm:text-5xl mb-4">{solution.icon}</div>
              <h3 className="text-lg sm:text-xl font-semibold text-foreground mb-2 sm:mb-3">{solution.title}</h3>
              <p className="text-sm sm:text-base text-foreground/70 mb-4 sm:mb-6">{solution.description}</p>
              <ul className="space-y-2 sm:space-y-3 mb-6 sm:mb-8">
                {solution.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className="text-xs sm:text-sm text-foreground/70 flex items-start">
                    <span className="mr-2 sm:mr-3">✓</span>
                    {feature}
                  </li>
                ))}
              </ul>
              <Button className="w-full rounded-lg text-sm sm:text-base">Get Started</Button>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
