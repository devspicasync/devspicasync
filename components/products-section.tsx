import { Button } from '@/components/ui/button'

const products = [
  {
    icon: '📱',
    title: 'Mobile App Development',
    description: 'Android and cross-platform apps designed for performance and usability',
  },
  {
    icon: '💼',
    title: 'Startup & Business Solutions',
    description: 'From idea to launch, we help bring your business online',
  },
  {
    icon: '💻',
    title: 'Website Development',
    description: 'Company websites, startup websites, and custom web solutions.',
  },
  {
    icon: '🔄',
    title: '3.	IT Projects & Research ',
    description: 'Academic, final-year, and professional IT projects with proper documentation',
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
              {/* <Button variant="outline" className="w-full rounded-lg bg-transparent text-sm sm:text-base">
                Learn More
              </Button> */}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
