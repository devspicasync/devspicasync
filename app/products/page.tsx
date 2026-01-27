import { Header } from '@/components/header'
import { Footer } from '@/components/footer'
import { Button } from '@/components/ui/button'

export default function ProductsPage() {
  const products = [
    {
      title: 'Analytics Dashboard',
      description: 'Real-time data visualization and insights with customizable dashboards',
      features: ['Real-time data', 'Custom reports', 'Predictive analytics']
    },
    {
      title: 'Team Collaboration',
      description: 'Seamless collaboration tools for distributed teams',
      features: ['Chat & comments', 'File sharing', 'Task management']
    },
    {
      title: 'Automation Engine',
      description: 'Automate repetitive tasks and workflows',
      features: ['Workflow builder', 'Integrations', 'Scheduled tasks']
    },
    {
      title: 'Security Suite',
      description: 'Enterprise-grade security for your data',
      features: ['End-to-end encryption', 'SSO', 'Compliance']
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
                Our Products
              </h1>
              <p className="text-sm sm:text-base md:text-lg text-foreground/70 max-w-2xl mx-auto">
                Discover our complete suite of products designed to transform your business operations
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 md:gap-10">
              {products.map((product, index) => (
                <div key={index} className="border border-border rounded-xl sm:rounded-2xl p-6 sm:p-8 hover:shadow-lg transition-shadow">
                  <h3 className="text-xl sm:text-2xl font-bold text-foreground mb-3 sm:mb-4">{product.title}</h3>
                  <p className="text-sm sm:text-base text-foreground/70 mb-6 sm:mb-8">{product.description}</p>
                  <ul className="space-y-2 sm:space-y-3 mb-6 sm:mb-8">
                    {product.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="text-sm sm:text-base text-foreground/70 flex items-center gap-2">
                        <span className="text-primary">✓</span>
                        {feature}
                      </li>
                    ))}
                  </ul>
                  <Button className="w-full rounded-lg text-sm sm:text-base">Learn More</Button>
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
