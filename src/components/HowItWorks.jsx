import { motion } from 'framer-motion'

const steps = [
  {
    num: '01',
    title: 'Book Online',
    desc: 'Choose your service and pick a convenient time through our simple form.',
    emoji: '📅',
  },
  {
    num: '02',
    title: 'Our Team Arrives',
    desc: 'Certified professionals arrive on time, fully equipped and ready.',
    emoji: '🚐',
  },
  {
    num: '03',
    title: 'Professional Cleaning',
    desc: 'We deep clean using eco-friendly products and pro-grade equipment.',
    emoji: '✨',
  },
  {
    num: '04',
    title: 'Enjoy Your Space',
    desc: 'Sit back and enjoy your spotless space. Easy payment options available.',
    emoji: '🏡',
  },
]

export default function HowItWorks() {
  return (
    <section className="section-padding" style={{ background: '#fff' }}>
      <div className="container-main">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          style={{ textAlign: 'center', marginBottom: '3.5rem' }}
        >
          <span className="section-label">Simple Process</span>
          <h2 className="section-title">How It Works</h2>
          <p className="section-desc">
            Getting your space cleaned is easy. Here's our simple 4-step process.
          </p>
        </motion.div>

        <div className="steps-grid">
          {steps.map((step, i) => (
            <motion.div
              key={step.num}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.1 }}
              style={{ textAlign: 'center', position: 'relative' }}
            >
              {/* Number badge */}
              <div style={{
                width: 72, height: 72, borderRadius: 20,
                background: 'var(--color-brand-bg)',
                display: 'flex', alignItems: 'center', justifyContent: 'center',
                margin: '0 auto 1.25rem', fontSize: '2rem',
                position: 'relative',
              }}>
                {step.emoji}
                <span style={{
                  position: 'absolute', top: -6, right: -6,
                  width: 28, height: 28, borderRadius: '50%',
                  background: 'var(--color-brand)', color: '#fff',
                  fontSize: '0.6875rem', fontWeight: 700,
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                }}>
                  {step.num}
                </span>
              </div>
              <h3 style={{ fontSize: '1.0625rem', fontWeight: 700, marginBottom: '0.375rem', color: 'var(--color-heading)' }}>
                {step.title}
              </h3>
              <p style={{ fontSize: '0.875rem', color: 'var(--color-body)', lineHeight: 1.6, maxWidth: '240px', margin: '0 auto' }}>
                {step.desc}
              </p>
            </motion.div>
          ))}
        </div>

        <style>{`
          .steps-grid {
            display: grid;
            grid-template-columns: repeat(4, 1fr);
            gap: 2rem;
          }
          @media (max-width: 768px) {
            .steps-grid {
              grid-template-columns: repeat(2, 1fr);
              gap: 2.5rem 1.5rem;
            }
          }
          @media (max-width: 480px) {
            .steps-grid {
              grid-template-columns: 1fr;
              gap: 2rem;
            }
          }
        `}</style>
      </div>
    </section>
  )
}
