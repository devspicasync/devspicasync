'use client'

import { useEffect, useState } from 'react'
import Image from 'next/image'
import { Menu, X } from 'lucide-react'

const navItems = [
  { label: 'Products', id: 'products' },
  { label: 'Solutions', id: 'solutions' },
  { label: 'Why us', id: 'why' },
  { label: 'Contact', id: 'contact' },
]

export function Header() {
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const scrollToSection = (id: string) => {
    setOpen(false)
    const el = document.getElementById(id)
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' })
    } else {
      window.location.href = `/#${id}`
    }
  }

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'glass border-b border-border/70 shadow-[0_4px_30px_-12px_rgba(30,30,80,0.25)]'
          : 'bg-transparent border-b border-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          {/* Brand */}
          <button
            onClick={() => scrollToSection('home')}
            className="flex items-center gap-2.5 group"
            aria-label="SpicaSync home"
          >
            <span className="relative h-9 w-9 overflow-hidden rounded-xl shadow-lg shadow-primary/25 ring-1 ring-border transition-transform duration-300 group-hover:scale-105">
              <Image
                src="/spicasync-mark.png"
                alt="SpicaSync logo"
                fill
                sizes="36px"
                className="object-cover"
              />
            </span>
            <span className="text-lg font-semibold font-display tracking-tight text-foreground">
              Spica<span className="text-gradient">Sync</span>
            </span>
          </button>

          {/* Desktop nav */}
          <nav className="hidden md:flex items-center gap-1">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className="px-4 py-2 text-sm font-medium text-foreground/70 rounded-lg hover:text-foreground hover:bg-muted transition-colors"
              >
                {item.label}
              </button>
            ))}
          </nav>

          <div className="hidden md:flex items-center gap-3">
            <button
              onClick={() => scrollToSection('contact')}
              className="group inline-flex items-center gap-2 rounded-xl bg-brand-gradient px-4 py-2.5 text-sm font-semibold text-primary-foreground shadow-lg shadow-primary/25 transition-all hover:shadow-primary/40 hover:brightness-110"
            >
              Start a project
              <span className="transition-transform group-hover:translate-x-0.5">→</span>
            </button>
          </div>

          {/* Mobile toggle */}
          <button
            className="md:hidden inline-flex h-10 w-10 items-center justify-center rounded-lg text-foreground hover:bg-muted transition-colors"
            onClick={() => setOpen((v) => !v)}
            aria-label="Toggle menu"
          >
            {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {open && (
        <div className="md:hidden glass border-t border-border/70 animate-in slide-in-from-top-2 fade-in duration-200">
          <nav className="px-4 py-4 flex flex-col gap-1">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className="px-4 py-3 text-left text-base font-medium text-foreground/80 rounded-lg hover:bg-muted transition-colors"
              >
                {item.label}
              </button>
            ))}
            <button
              onClick={() => scrollToSection('contact')}
              className="mt-2 inline-flex items-center justify-center gap-2 rounded-xl bg-brand-gradient px-4 py-3 text-sm font-semibold text-primary-foreground shadow-lg shadow-primary/25"
            >
              Start a project →
            </button>
          </nav>
        </div>
      )}
    </header>
  )
}
