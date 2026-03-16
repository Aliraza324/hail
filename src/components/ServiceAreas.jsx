import { motion } from 'framer-motion'

const areas = [
  { name: 'Hail City', badge: 'Primary', active: true },
  { name: 'Baqaa', badge: 'Available', active: true },
  { name: 'Al Shinan', badge: 'Available', active: true },
  { name: 'Mowqaq', badge: 'Available', active: true },
  { name: 'Al Haeet', badge: 'Available', active: true },
  { name: 'Jubbah', badge: 'Coming Soon', active: false },
]

export default function ServiceAreas() {
  return (
    <section className="section-padding" style={{ background: '#fff' }}>
      <div className="container-main">
        <div className="areas-layout">
          {/* Map side */}
          <motion.div
            initial={{ opacity: 0, x: -24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <div style={{
              aspectRatio: '1', borderRadius: '1.5rem',
              background: 'linear-gradient(135deg, var(--color-brand-bg), #EBF5FF)',
              display: 'flex', alignItems: 'center', justifyContent: 'center',
              position: 'relative', overflow: 'hidden',
            }}>
              {/* Decorative rings */}
              <div style={{
                position: 'absolute', inset: 40,
                border: '2px dashed rgba(37,99,235,0.15)', borderRadius: '50%',
              }} />
              <div style={{
                position: 'absolute', inset: 80,
                border: '2px dashed rgba(37,99,235,0.08)', borderRadius: '50%',
              }} />

              <div style={{ textAlign: 'center', position: 'relative', zIndex: 1 }}>
                <div style={{
                  width: 64, height: 64, borderRadius: '50%',
                  background: 'var(--color-brand)', margin: '0 auto 0.75rem',
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                  boxShadow: '0 8px 24px rgba(37,99,235,0.3)',
                }}>
                  <svg width="28" height="28" fill="none" viewBox="0 0 24 24" stroke="#fff" strokeWidth="1.5">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                </div>
                <h3 style={{ fontSize: '1.25rem', fontWeight: 700, color: 'var(--color-heading)' }}>Hail Region</h3>
                <p style={{ fontSize: '0.8125rem', color: 'var(--color-muted)' }}>Saudi Arabia</p>
              </div>

              {/* Dots */}
              {[[25, 30], [70, 25], [20, 65], [75, 70], [45, 80]].map(([l, t], i) => (
                <div key={i} style={{
                  position: 'absolute', left: `${l}%`, top: `${t}%`,
                  width: 10, height: 10, borderRadius: '50%',
                  background: 'rgba(37,99,235,0.2)',
                }} />
              ))}
            </div>
          </motion.div>

          {/* List side */}
          <motion.div
            initial={{ opacity: 0, x: 24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <span className="section-label">Coverage</span>
            <h2 className="section-title">Service Areas</h2>
            <p style={{ fontSize: '1.0625rem', color: 'var(--color-body)', lineHeight: 1.7, marginBottom: '2rem' }}>
              We proudly serve Hail city and surrounding areas with fast, reliable service.
            </p>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
              {areas.map((a, i) => (
                <motion.div
                  key={a.name}
                  initial={{ opacity: 0, x: 16 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.3, delay: i * 0.06 }}
                  style={{
                    display: 'flex', alignItems: 'center', justifyContent: 'space-between',
                    padding: '0.875rem 1.25rem', borderRadius: '0.75rem',
                    background: 'var(--color-surface)', transition: 'background 0.2s',
                  }}
                  onMouseEnter={(e) => e.currentTarget.style.background = 'var(--color-brand-bg)'}
                  onMouseLeave={(e) => e.currentTarget.style.background = 'var(--color-surface)'}
                >
                  <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
                    <div style={{
                      width: 8, height: 8, borderRadius: '50%',
                      background: a.active ? 'var(--color-green)' : 'var(--color-muted)',
                    }} />
                    <span style={{ fontWeight: 600, fontSize: '0.9375rem', color: 'var(--color-heading)' }}>{a.name}</span>
                  </div>
                  <span style={{
                    fontSize: '0.75rem', fontWeight: 600,
                    padding: '0.25rem 0.75rem', borderRadius: 99,
                    background: a.active ? 'var(--color-green-bg)' : 'var(--color-border)',
                    color: a.active ? 'var(--color-green)' : 'var(--color-muted)',
                  }}>
                    {a.badge}
                  </span>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>

        <style>{`
          .areas-layout {
            display: grid;
            grid-template-columns: 1fr 1fr;
            gap: 4rem;
            align-items: center;
          }
          @media (max-width: 768px) {
            .areas-layout {
              grid-template-columns: 1fr;
              gap: 2.5rem;
            }
          }
        `}</style>
      </div>
    </section>
  )
}
