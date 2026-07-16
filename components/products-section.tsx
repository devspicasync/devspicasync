'use client'

import {
  Smartphone,
  Briefcase,
  Globe,
  FlaskConical,
  BarChart3,
  BrainCircuit,
  ArrowUpRight,
} from 'lucide-react'
import { Reveal } from '@/components/reveal'

const products = [
  {
    icon: Smartphone,
    title: 'Mobile App Development',
    description: 'Android and cross-platform apps designed for performance and usability.',
  },
  {
    icon: Briefcase,
    title: 'Startup & Business Solutions',
    description: 'From idea to launch, we help bring your business online and ready to grow.',
  },
  {
    icon: Globe,
    title: 'Website Development',
    description: 'Company websites, startup sites, and custom web solutions that convert.',
  },
  {
    icon: FlaskConical,
    title: 'IT Projects & Research',
    description: 'Academic, final-year, and professional IT projects with proper documentation.',
  },
  {
    icon: BarChart3,
    title: 'Data Analysis',
    description: 'Turn your raw data into clear reports and dashboards you can act on.',
  },
  {
    icon: BrainCircuit,
    title: 'Data Science',
    description: 'Predictive models and machine learning that help you spot what comes next.',
  },
]

export function ProductsSection() {
  return (
    <section id="products" className="scroll-mt-20 py-16 sm:py-20 md:py-28 px-4 sm:px-6 lg:px-8 bg-background">
      <div className="max-w-7xl mx-auto">
        <Reveal className="text-center max-w-2xl mx-auto mb-12 sm:mb-16">
          <span className="eyebrow">What we build</span>
          <h2 className="mt-5 font-display text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-foreground">
            Everything to bring your idea online
          </h2>
          <p className="mt-4 text-base sm:text-lg text-muted-foreground">
            A comprehensive suite of services designed to transform the way you work and grow.
          </p>
        </Reveal>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6">
          {products.map((product, index) => (
            <Reveal
              key={product.title}
              delay={index * 90}
              className="group card-lift relative rounded-md border border-border bg-card p-6 sm:p-7"
            >
              <div className="absolute right-5 top-5 text-muted-foreground opacity-0 transition-opacity duration-200 group-hover:opacity-100">
                <ArrowUpRight className="h-5 w-5" />
              </div>
              <div className="flex h-12 w-12 items-center justify-center rounded-md bg-secondary text-primary">
                <product.icon className="h-6 w-6" strokeWidth={2} />
              </div>
              <h3 className="mt-5 text-lg font-semibold text-foreground">{product.title}</h3>
              <p className="mt-2 text-sm sm:text-base text-muted-foreground leading-relaxed">
                {product.description}
              </p>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
