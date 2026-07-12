'use client'

import React from "react"

import { useState, useRef, useEffect } from 'react'
import { X, Send, MessageCircle, Sparkles } from 'lucide-react'
import { toast } from 'sonner'

export function FloatingMessageButton() {
  const [isOpen, setIsOpen] = useState(false)
  const [email, setEmail] = useState('')
  const [name, setName] = useState('')
  const [phone, setPhone] = useState('')
  const [message, setMessage] = useState('')
  const [isSubmitting, setIsSubmitting] = useState(false)
  const modalRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (modalRef.current && !modalRef.current.contains(event.target as Node)) {
        setIsOpen(false)
      }
    }

    if (isOpen) {
      document.addEventListener('mousedown', handleClickOutside)
      return () => document.removeEventListener('mousedown', handleClickOutside)
    }
  }, [isOpen])

  // Allow other sections (Contact, CTA) to open this modal.
  useEffect(() => {
    const open = () => setIsOpen(true)
    window.addEventListener('open-message-modal', open)
    return () => window.removeEventListener('open-message-modal', open)
  }, [])

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    if (!message.trim() || !email.trim()) return

    setIsSubmitting(true)
    try {
      const response = await fetch('/api/send-email', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email, message, name, phone }),
      });

      if (response.ok) {
        toast.success('Message sent successfully! We will get back to you soon.')
        setMessage('')
        setEmail('')
        setName('')
        setPhone('')
        setIsOpen(false)
      } else {
        toast.error('Failed to send message. Please try again later.')
      }
    } catch (error) {
      toast.error('An error occurred. Please try again later.')
      console.error('Failed to send message:', error)
    } finally {
      setIsSubmitting(false)
    }
  }

  const inputClass =
    'w-full px-4 py-2.5 border border-border rounded-xl bg-background focus:outline-none focus:ring-2 focus:ring-primary/40 focus:border-primary/40 text-foreground placeholder-foreground/40 transition-shadow'

  return (
    <>
      {/* Floating Button */}
      <button
        onClick={() => setIsOpen(true)}
        className="group fixed bottom-6 right-6 sm:bottom-8 sm:right-8 z-40 flex h-14 w-14 items-center justify-center rounded-full bg-brand-gradient text-primary-foreground shadow-xl shadow-primary/40 transition-all hover:scale-110 hover:shadow-primary/60"
        aria-label="Send us a message"
      >
        <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-primary/40 opacity-60 [animation-duration:2.5s]" />
        <MessageCircle className="relative h-6 w-6" />
      </button>

      {/* Modal Overlay */}
      {isOpen && (
        <div className="fixed inset-0 z-50 bg-foreground/40 backdrop-blur-sm flex items-end sm:items-center justify-center p-4 animate-in fade-in duration-200">
          {/* Modal */}
          <div
            ref={modalRef}
            className="bg-card rounded-t-2xl sm:rounded-2xl shadow-2xl w-full sm:w-[26rem] max-w-md border border-border animate-in slide-in-from-bottom-4 sm:zoom-in-95 duration-300"
          >
            {/* Header */}
            <div className="relative overflow-hidden rounded-t-2xl bg-brand-gradient px-6 py-5">
              <div className="pointer-events-none absolute inset-0 bg-grid opacity-20" />
              <div className="relative flex items-center justify-between">
                <div className="flex items-center gap-2.5 text-primary-foreground">
                  <span className="flex h-9 w-9 items-center justify-center rounded-xl bg-white/20">
                    <Sparkles className="h-4 w-4" />
                  </span>
                  <div>
                    <h2 className="text-base font-semibold leading-tight">Send us a message</h2>
                    <p className="text-xs text-primary-foreground/80">We reply within 24 hours</p>
                  </div>
                </div>
                <button
                  onClick={() => setIsOpen(false)}
                  className="p-1.5 rounded-lg text-primary-foreground/90 hover:bg-white/20 transition-colors"
                  aria-label="Close"
                >
                  <X className="h-5 w-5" />
                </button>
              </div>
            </div>

            {/* Content */}
            <form onSubmit={handleSubmit} className="p-6 space-y-4 max-h-[70vh] overflow-y-auto">
              <div className="grid grid-cols-1 gap-4">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-foreground mb-1.5">
                    Name <span className="text-foreground/40">(optional)</span>
                  </label>
                  <input
                    id="name"
                    type="text"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    placeholder="Your name"
                    className={inputClass}
                    disabled={isSubmitting}
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-foreground mb-1.5">
                    Your email
                  </label>
                  <input
                    id="email"
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="you@example.com"
                    className={inputClass}
                    disabled={isSubmitting}
                    required
                  />
                </div>
                <div>
                  <label htmlFor="phone" className="block text-sm font-medium text-foreground mb-1.5">
                    Phone <span className="text-foreground/40">(optional)</span>
                  </label>
                  <input
                    id="phone"
                    type="tel"
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    placeholder="Your phone number"
                    className={inputClass}
                    disabled={isSubmitting}
                  />
                </div>
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-foreground mb-1.5">
                    Your message
                  </label>
                  <textarea
                    id="message"
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    placeholder="Tell us about your project..."
                    rows={4}
                    className={`${inputClass} resize-none`}
                    disabled={isSubmitting}
                    required
                  />
                </div>
              </div>

              <div className="flex gap-3 pt-1">
                <button
                  type="button"
                  onClick={() => setIsOpen(false)}
                  className="flex-1 rounded-xl border border-border bg-transparent px-4 py-2.5 text-sm font-semibold text-foreground/80 transition-colors hover:bg-muted"
                  disabled={isSubmitting}
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="flex-1 inline-flex items-center justify-center gap-2 rounded-xl bg-brand-gradient px-4 py-2.5 text-sm font-semibold text-primary-foreground shadow-lg shadow-primary/25 transition-all hover:brightness-110 disabled:opacity-60 disabled:cursor-not-allowed"
                  disabled={isSubmitting || !message.trim() || !email.trim()}
                >
                  {isSubmitting ? (
                    'Sending...'
                  ) : (
                    <>
                      <Send className="h-4 w-4" />
                      Send
                    </>
                  )}
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </>
  )
}
