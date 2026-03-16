import { motion } from 'framer-motion'

const services = [
  {
    title: 'Home Cleaning',
    desc: 'Deep cleaning, regular maintenance, and move-in/move-out cleaning for spotless homes.',
    image: 'https://images.unsplash.com/photo-1581578731548-c64695cc6952?w=600&q=80',
  },
  {
    title: 'Pool Cleaning',
    desc: 'Crystal clear pools with expert maintenance, chemical balancing, and deep scrubbing.',
    image: 'https://images.unsplash.com/photo-1509577330292-0532d33c053e?q=80&w=1074&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
  },
  {
    title: 'Water Tank Cleaning',
    desc: 'Professional sanitization ensuring safe, clean water for your home or business.',
    image: 'https://images.unsplash.com/photo-1585771724684-38269d6639fd?w=600&q=80',
  },
  {
    title: 'Villa Cleaning',
    desc: 'Premium villa care with attention to every detail — from marble floors to high ceilings.',
    image: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=600&q=80',
  },
  {
    title: 'Pest Control',
    desc: 'Safe, effective pest elimination using approved eco-friendly methods and products.',
    image: 'https://images.unsplash.com/photo-1581578017093-cd30fce4eeb7?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
  },
  {
    title: 'Carpet Cleaning',
    desc: 'Steam cleaning technology for deep stain removal and fresh, spotless carpets.',
    image: 'https://plus.unsplash.com/premium_photo-1661663379320-213541539ec8?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
  },
]

export default function Services() {
  return (
    <section id="services" className="section-padding" style={{ background: 'var(--color-surface)' }}>
      <div className="container-main">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          style={{ textAlign: 'center', marginBottom: '3.5rem' }}
        >
          <span className="section-label">What We Offer</span>
          <h2 className="section-title">Our Professional Services</h2>
          <p className="section-desc">
            From homes to pools, we deliver spotless results with trained professionals and eco-friendly products.
          </p>
        </motion.div>

        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fill, minmax(min(100%, 340px), 1fr))',
            gap: '1.5rem',
          }}
        >
          {services.map((s, i) => (
            <motion.div
              key={s.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.08 }}
              className="card"
              style={{ cursor: 'pointer' }}
            >
              <div style={{ position: 'relative', height: '200px', overflow: 'hidden' }}>
                <img
                  src={s.image}
                  alt={s.title}
                  loading="lazy"
                  style={{
                    width: '100%',
                    height: '100%',
                    objectFit: 'cover',
                    transition: 'transform 0.5s ease',
                  }}
                  onMouseEnter={(e) => e.target.style.transform = 'scale(1.08)'}
                  onMouseLeave={(e) => e.target.style.transform = 'scale(1)'}
                />
                <div style={{
                  position: 'absolute', bottom: 0, left: 0, right: 0, height: '50%',
                  background: 'linear-gradient(to top, rgba(0,0,0,0.4), transparent)',
                }} />
              </div>
              <div style={{ padding: '1.25rem 1.5rem 1.5rem' }}>
                <h3 style={{ fontSize: '1.125rem', fontWeight: 700, marginBottom: '0.5rem', color: 'var(--color-heading)' }}>
                  {s.title}
                </h3>
                <p style={{ fontSize: '0.875rem', color: 'var(--color-body)', lineHeight: 1.6, marginBottom: '1rem' }}>
                  {s.desc}
                </p>
                <a
                  href="#contact"
                  style={{
                    display: 'inline-flex', alignItems: 'center', gap: '0.375rem',
                    fontSize: '0.875rem', fontWeight: 600, color: 'var(--color-brand)',
                    textDecoration: 'none', transition: 'gap 0.2s',
                  }}
                  onMouseEnter={(e) => e.target.style.gap = '0.625rem'}
                  onMouseLeave={(e) => e.target.style.gap = '0.375rem'}
                >
                  Learn More
                  <svg width="16" height="16" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                  </svg>
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
