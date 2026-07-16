'use client'

import Image from 'next/image'
import { Twitter, Linkedin, Github, Mail } from 'lucide-react'

const columns = [
  {
    title: 'Services',
    links: [
      { label: 'Website Development', href: '#products' },
      { label: 'Mobile Apps', href: '#products' },
      { label: 'IT Projects', href: '#products' },
      { label: 'Solutions', href: '#solutions' },
    ],
  },
  {
    title: 'Company',
    links: [
      { label: 'Why SpicaSync', href: '#why' },
      { label: 'How it works', href: '#solutions' },
      { label: 'Contact', href: '#contact' },
    ],
  },
  {
    title: 'Get in touch',
    links: [
      { label: 'devspicasync@gmail.com', href: 'mailto:devspicasync@gmail.com' },
      { label: 'Start a project', href: '#contact' },
    ],
  },
]

const socials = [
  { icon: Twitter, label: 'Twitter', href: '#' },
  { icon: Linkedin, label: 'LinkedIn', href: '#' },
  { icon: Github, label: 'GitHub', href: '#' },
  { icon: Mail, label: 'Email', href: 'mailto:devspicasync@gmail.com' },
]

export function Footer() {
  return (
    <footer className="relative bg-primary text-white">
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14 sm:py-16 md:py-20">
        <div className="grid grid-cols-2 lg:grid-cols-5 gap-8 sm:gap-10 mb-12">
          <div className="col-span-2">
            <div className="flex items-center gap-2.5">
              <span className="relative h-9 w-9 overflow-hidden rounded-md ring-1 ring-white/20">
                <Image
                  src="/spicasync-mark.png"
                  alt="SpicaSync logo"
                  fill
                  sizes="36px"
                  className="object-cover"
                />
              </span>
              <span className="text-lg font-semibold font-display tracking-tight">SpicaSync</span>
            </div>
            <p className="mt-4 text-sm text-white/60 max-w-xs leading-relaxed">
              Your one-stop tech partner, building websites, mobile apps, and IT projects that
              help your business shine.
            </p>
            <div className="mt-6 flex gap-2.5">
              {socials.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  aria-label={social.label}
                  className="flex h-9 w-9 items-center justify-center rounded-lg border border-white/15 bg-white/5 text-white/70 transition-all hover:bg-white/10 hover:text-white hover:border-white/30"
                >
                  <social.icon className="h-4 w-4" />
                </a>
              ))}
            </div>
          </div>

          {columns.map((column) => (
            <div key={column.title}>
              <h4 className="font-semibold text-sm mb-4">{column.title}</h4>
              <ul className="space-y-2.5 text-sm text-white/60">
                {column.links.map((link) => (
                  <li key={link.label}>
                    <a href={link.href} className="transition-colors hover:text-white break-words">
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="border-t border-white/15 pt-6 flex flex-col sm:flex-row justify-between items-center gap-4 text-sm text-white/50">
          <p>&copy; 2026 SpicaSync. All rights reserved.</p>
          <p className="flex items-center gap-1.5">
            Built with <span className="text-primary">♥</span> for founders &amp; builders.
          </p>
        </div>
      </div>
    </footer>
  )
}
