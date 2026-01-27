'use client'

export function Header() {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-md border-b border-border">
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        <div className="flex items-center gap-8">
          <button 
            onClick={() => scrollToSection('home')} 
            className="text-xl font-bold text-foreground hover:text-foreground/80 transition-colors cursor-pointer"
          >
            Area
          </button>
          <div className="hidden md:flex items-center gap-8 text-sm text-foreground/70">
            <button
              onClick={() => scrollToSection('products')}
              className="hover:text-foreground transition-colors cursor-pointer"
            >
              Products
            </button>
            <button
              onClick={() => scrollToSection('solutions')}
              className="hover:text-foreground transition-colors cursor-pointer"
            >
              Solutions
            </button>
            <button
              onClick={() => scrollToSection('pricing')}
              className="hover:text-foreground transition-colors cursor-pointer"
            >
              Pricing
            </button>
            <button
              onClick={() => scrollToSection('contact')}
              className="hover:text-foreground transition-colors cursor-pointer"
            >
              Contact us
            </button>
          </div>
        </div>
      </nav>
    </header>
  )
}
