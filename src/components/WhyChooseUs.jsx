import { motion } from 'framer-motion'

const features = [
  { title: 'Experienced Cleaners', desc: '15+ years of professional cleaning expertise with trained staff.', emoji: '👨‍🔧' },
  { title: 'Eco-Friendly Products', desc: 'Safe, biodegradable products that protect your family and pets.', emoji: '🌿' },
  { title: 'Affordable Pricing', desc: 'Competitive rates with transparent pricing and no hidden fees.', emoji: '💰' },
  { title: 'Fast Response', desc: 'Quick booking confirmation with same-day service availability.', emoji: '⚡' },
  { title: '24/7 Support', desc: 'Round-the-clock support via phone and WhatsApp anytime.', emoji: '📞' },
  { title: 'Satisfaction Guarantee', desc: "Not happy? We'll re-clean for free. That's our promise.", emoji: '🏆' },
]

export default function WhyChooseUs() {
  return (
    <section id="about" className="section-padding" style={{ background: 'var(--color-brand-bg)' }}>
      <div className="container-main">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          style={{ textAlign: 'center', marginBottom: '3.5rem' }}
        >
          <span className="section-label">Why CleanPro</span>
          <h2 className="section-title">Why Choose Us</h2>
          <p className="section-desc">
            We go beyond cleaning — we deliver peace of mind with every service.
          </p>
        </motion.div>

        <div className="features-grid">
          {features.map((f, i) => (
            <motion.div
              key={f.title}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.07 }}
              style={{
                background: '#fff',
                borderRadius: '1rem',
                padding: '1.75rem',
                border: '1px solid var(--color-border)',
                transition: 'box-shadow 0.3s, transform 0.3s',
                cursor: 'default',
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.boxShadow = '0 12px 32px -8px rgba(0,0,0,0.1)'
                e.currentTarget.style.transform = 'translateY(-2px)'
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.boxShadow = 'none'
                e.currentTarget.style.transform = 'translateY(0)'
              }}
            >
              <div style={{
                width: 48, height: 48, borderRadius: 12,
                background: 'var(--color-brand-bg)',
                display: 'flex', alignItems: 'center', justifyContent: 'center',
                fontSize: '1.5rem', marginBottom: '1rem',
              }}>
                {f.emoji}
              </div>
              <h3 style={{ fontSize: '1rem', fontWeight: 700, marginBottom: '0.375rem', color: 'var(--color-heading)' }}>
                {f.title}
              </h3>
              <p style={{ fontSize: '0.875rem', color: 'var(--color-body)', lineHeight: 1.6 }}>
                {f.desc}
              </p>
            </motion.div>
          ))}
        </div>

        <style>{`
          .features-grid {
            display: grid;
            grid-template-columns: repeat(3, 1fr);
            gap: 1.25rem;
          }
          @media (max-width: 768px) {
            .features-grid {
              grid-template-columns: repeat(2, 1fr);
            }
          }
          @media (max-width: 480px) {
            .features-grid {
              grid-template-columns: 1fr;
            }
          }
        `}</style>
      </div>
    </section>
  )
}
