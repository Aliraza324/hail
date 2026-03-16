import { useState } from 'react'
import { motion } from 'framer-motion'

const serviceOptions = ['Home Cleaning', 'Pool Cleaning', 'Water Tank Cleaning', 'Villa Cleaning', 'Pest Control', 'Carpet Cleaning']

const contactInfo = [
  { emoji: '📞', label: 'Phone', value: '+966 50 000 0000' },
  { emoji: '✉️', label: 'Email', value: 'info@cleanpro-hail.com' },
  { emoji: '📍', label: 'Location', value: 'Hail, Saudi Arabia' },
  { emoji: '🕐', label: 'Working Hours', value: 'Available 24/7' },
]

export default function Contact() {
  const [form, setForm] = useState({ name: '', phone: '', service: '', message: '' })

  const onChange = (e) => setForm({ ...form, [e.target.name]: e.target.value })

  const onSubmit = (e) => {
    e.preventDefault()
    const msg = `New Booking:\nName: ${form.name}\nPhone: ${form.phone}\nService: ${form.service}\nMessage: ${form.message}`
    window.open(`https://wa.me/966500000000?text=${encodeURIComponent(msg)}`, '_blank')
  }

  return (
    <section id="contact" className="section-padding" style={{ background: 'var(--color-surface)' }}>
      <div className="container-main">
        <div className="contact-layout">
          {/* Info */}
          <motion.div
            initial={{ opacity: 0, x: -24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <span className="section-label">Get In Touch</span>
            <h2 className="section-title" style={{ textAlign: 'left' }}>Book Your Cleaning</h2>
            <p style={{ fontSize: '1.0625rem', color: 'var(--color-body)', lineHeight: 1.7, marginBottom: '2.5rem' }}>
              Fill out the form and our team will get back to you within 30 minutes.
            </p>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
              {contactInfo.map((c) => (
                <div key={c.label} style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
                  <div style={{
                    width: 44, height: 44, borderRadius: 12,
                    background: 'var(--color-brand-bg)',
                    display: 'flex', alignItems: 'center', justifyContent: 'center',
                    fontSize: '1.25rem', flexShrink: 0,
                  }}>
                    {c.emoji}
                  </div>
                  <div>
                    <p style={{ fontSize: '0.75rem', color: 'var(--color-muted)', marginBottom: '0.125rem' }}>{c.label}</p>
                    <p style={{ fontSize: '0.9375rem', fontWeight: 600, color: 'var(--color-heading)' }}>{c.value}</p>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Form */}
          <motion.div
            initial={{ opacity: 0, x: 24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <form
              onSubmit={onSubmit}
              style={{
                background: '#fff', borderRadius: '1.25rem',
                padding: '2rem', border: '1px solid var(--color-border)',
              }}
            >
              <div style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
                <div>
                  <label htmlFor="name" className="form-label">Full Name</label>
                  <input id="name" name="name" type="text" required value={form.name} onChange={onChange} placeholder="Enter your name" className="form-input" />
                </div>
                <div>
                  <label htmlFor="phone" className="form-label">Phone Number</label>
                  <input id="phone" name="phone" type="tel" required value={form.phone} onChange={onChange} placeholder="+966 5X XXX XXXX" className="form-input" />
                </div>
                <div>
                  <label htmlFor="service" className="form-label">Service Type</label>
                  <select id="service" name="service" required value={form.service} onChange={onChange} className="form-input">
                    <option value="">Select a service</option>
                    {serviceOptions.map((o) => <option key={o} value={o}>{o}</option>)}
                  </select>
                </div>
                <div>
                  <label htmlFor="message" className="form-label">Message</label>
                  <textarea id="message" name="message" rows={4} value={form.message} onChange={onChange} placeholder="Tell us about your cleaning needs..." className="form-input" style={{ resize: 'none' }} />
                </div>
              </div>

              <div className="form-buttons" style={{ display: 'flex', gap: '0.75rem', marginTop: '1.5rem' }}>
                <button type="submit" className="btn btn-primary" style={{ flex: 1 }}>
                  Book Appointment
                </button>
                <a
                  href="https://wa.me/966500000000"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-whatsapp"
                  style={{ flex: 1 }}
                >
                  <svg width="16" height="16" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                  </svg>
                  WhatsApp
                </a>
              </div>
            </form>
          </motion.div>
        </div>
      </div>

      {/* Floating WhatsApp */}
      <a
        href="https://wa.me/966500000000"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Chat on WhatsApp"
        style={{
          position: 'fixed', bottom: 24, right: 24, zIndex: 99,
          width: 56, height: 56, borderRadius: '50%',
          background: 'var(--color-whatsapp)', color: '#fff',
          display: 'flex', alignItems: 'center', justifyContent: 'center',
          boxShadow: '0 4px 16px rgba(37,211,102,0.35)',
          transition: 'transform 0.2s',
        }}
        onMouseEnter={(e) => e.currentTarget.style.transform = 'scale(1.1)'}
        onMouseLeave={(e) => e.currentTarget.style.transform = 'scale(1)'}
      >
        <svg width="28" height="28" fill="currentColor" viewBox="0 0 24 24">
          <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
        </svg>
      </a>

      <style>{`
        .contact-layout {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 4rem;
          align-items: start;
        }
        @media (max-width: 768px) {
          .contact-layout {
            grid-template-columns: 1fr;
            gap: 2.5rem;
          }
          .form-buttons {
            flex-direction: column !important;
          }
        }
      `}</style>
    </section>
  )
}
