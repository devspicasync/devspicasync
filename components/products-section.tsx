import { Button } from '@/components/ui/button'

const products = [
  {
    icon: '📊',
    title: 'Analytics Dashboard',
    description: 'Real-time data visualization with advanced charts, metrics tracking, and custom reporting capabilities to understand your business performance.',
  },
  {
    icon: '🤖',
    title: 'AI Assistant',
    description: 'Intelligent automation that learns from your patterns and provides smart recommendations to streamline your workflows.',
  },
  {
    icon: '🔐',
    title: 'Security & Compliance',
    description: 'Enterprise-grade security with end-to-end encryption, role-based access control, and compliance with GDPR and SOC 2.',
  },
  {
    icon: '🔄',
    title: 'Integrations',
    description: 'Seamlessly connect with your favorite tools including Slack, Salesforce, HubSpot, and 500+ other applications.',
  },
]

export function ProductsSection() {
  return (
    <section id="products" className="py-12 sm:py-16 md:py-20 px-4 sm:px-6 lg:px-8 bg-background">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-10 sm:mb-12 md:mb-16">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-foreground mb-2 sm:mb-4">Our Products</h2>
          <p className="text-sm sm:text-base md:text-lg text-foreground/70 max-w-2xl mx-auto">
            Discover our comprehensive suite of tools designed to transform the way you work
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
          {products.map((product, index) => (
            <div
              key={index}
              className="bg-white rounded-xl sm:rounded-2xl p-6 sm:p-8 border border-border hover:shadow-lg hover:border-primary/50 transition-all duration-300"
            >
              <div className="text-4xl sm:text-5xl mb-4">{product.icon}</div>
              <h3 className="text-lg sm:text-xl font-semibold text-foreground mb-3 sm:mb-4">{product.title}</h3>
              <p className="text-sm sm:text-base text-foreground/70 mb-6">{product.description}</p>
              <Button variant="outline" className="w-full rounded-lg bg-transparent text-sm sm:text-base">
                Learn More
              </Button>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
