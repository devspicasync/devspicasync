import { Header } from '@/components/header'
import { Hero } from '@/components/hero'
import { Features } from '@/components/features'
import { ProductsSection } from '@/components/products-section'
import { SolutionsSection } from '@/components/solutions-section'
import { Collaboration } from '@/components/collaboration'
import { BigPicture } from '@/components/big-picture'
import { Testimonial } from '@/components/testimonial'
import { SuccessMap } from '@/components/success-map'
import { WhyChoose } from '@/components/why-choose'
import { TeamWork } from '@/components/teamwork'
import { ContactSection } from '@/components/contact-section'
import { CTA } from '@/components/cta'
import { Footer } from '@/components/footer'

export default function Home() {
  return (
    <main className="min-h-screen bg-background">
      <Header />
      <div id="home">
        <Hero />
      </div>
      <Features />
      <ProductsSection />
      <SolutionsSection />
      <Collaboration />
      <BigPicture />
      <Testimonial />
      <SuccessMap />
      <WhyChoose />
      <TeamWork />
      <ContactSection />
      <CTA />
      <Footer />
    </main>
  )
}
