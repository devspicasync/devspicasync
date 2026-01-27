const contactInfo = [
  {
    icon: '📧',
    title: 'Email',
    value: 'hello@area.com',
    description: 'We typically respond within 24 hours',
  },
  {
    icon: '📱',
    title: 'Phone',
    value: '+1 (555) 123-4567',
    description: 'Mon-Fri, 9am-6pm EST',
  },
  {
    icon: '📍',
    title: 'Address',
    value: 'San Francisco, CA',
    description: '123 Business Street, Suite 100',
  },
]

export function ContactSection() {
  return (
    <section id="contact" className="py-12 sm:py-16 md:py-20 px-4 sm:px-6 lg:px-8 bg-muted/50">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-10 sm:mb-12 md:mb-16">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-foreground mb-2 sm:mb-4">Get in Touch</h2>
          <p className="text-sm sm:text-base md:text-lg text-foreground/70 max-w-2xl mx-auto">
            Have questions? We'd love to hear from you. Reach out using any of the contact methods below.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {contactInfo.map((info, index) => (
            <div key={index} className="bg-white rounded-xl sm:rounded-2xl p-6 sm:p-8 border border-border">
              <div className="text-4xl sm:text-5xl mb-3 sm:mb-4">{info.icon}</div>
              <h3 className="text-lg sm:text-xl font-semibold text-foreground mb-1 sm:mb-2">{info.title}</h3>
              <p className="font-semibold text-foreground mb-1">{info.value}</p>
              <p className="text-xs sm:text-sm text-foreground/70">{info.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
