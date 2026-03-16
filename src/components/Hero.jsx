import { motion } from 'framer-motion'

export default function Hero() {
  return (
    <section
      id="home"
      style={{
        position: 'relative',
        minHeight: '100vh',
        display: 'flex',
        alignItems: 'center',
        overflow: 'hidden',
      }}
    >
      {/* BG Image */}
      <div style={{ position: 'absolute', inset: 0 }}>
        <img
          src="https://images.unsplash.com/photo-1581578731548-c64695cc6952?w=1920&q=80"
          alt="Professional cleaning team at work"
          style={{ width: '100%', height: '100%', objectFit: 'cover' }}
        />
        <div style={{
          position: 'absolute', inset: 0,
          background: 'linear-gradient(135deg, rgba(15,23,42,0.85) 0%, rgba(15,23,42,0.6) 50%, rgba(37,99,235,0.3) 100%)',
        }} />
      </div>

      <div className="container-main" style={{ position: 'relative', zIndex: 1, paddingTop: '7rem', paddingBottom: '4rem' }}>
        <div style={{ maxWidth: '640px' }}>
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <span style={{
              display: 'inline-flex', alignItems: 'center', gap: '0.5rem',
              background: 'rgba(255,255,255,0.12)', backdropFilter: 'blur(8px)',
              border: '1px solid rgba(255,255,255,0.15)',
              color: '#fff', padding: '0.5rem 1rem', borderRadius: '9999px',
              fontSize: '0.8125rem', fontWeight: 500, marginBottom: '1.5rem',
            }}>
              <span style={{ width: 8, height: 8, borderRadius: '50%', background: 'var(--color-green)', display: 'inline-block' }} />
              Trusted by 500+ customers in Hail
            </span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.12 }}
            style={{
              fontSize: 'clamp(2.25rem, 5vw, 3.5rem)',
              fontWeight: 800,
              color: '#fff',
              lineHeight: 1.15,
              marginBottom: '1.5rem',
            }}
          >
            Professional{' '}
            <span style={{
              background: 'linear-gradient(135deg, #60A5FA, #22D3EE)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
            }}>
              Cleaning Services
            </span>{' '}
            You Can Trust
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.24 }}
            style={{
              fontSize: 'clamp(1rem, 2vw, 1.125rem)',
              color: 'rgba(255,255,255,0.75)',
              lineHeight: 1.7,
              marginBottom: '2rem',
              maxWidth: '520px',
            }}
          >
            We provide home, pool, and tank cleaning services with certified
            professionals and eco-friendly products in Hail, Saudi Arabia.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.36 }}
            style={{ display: 'flex', flexWrap: 'wrap', gap: '0.75rem' }}
          >
            <a href="#contact" className="btn btn-primary btn-lg">
              Book Service
            </a>
            <a
              href="https://wa.me/966500000000"
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-whatsapp btn-lg"
            >
              <svg width="18" height="18" fill="currentColor" viewBox="0 0 24 24">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
              </svg>
              WhatsApp Us
            </a>
          </motion.div>

          {/* Stats */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.6 }}
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(4, 1fr)',
              gap: '1rem',
              marginTop: '3rem',
              paddingTop: '2rem',
              borderTop: '1px solid rgba(255,255,255,0.12)',
            }}
          >
            {[
              { val: '500+', label: 'Happy Clients' },
              { val: '15+', label: 'Years Exp.' },
              { val: '24/7', label: 'Support' },
              { val: '100%', label: 'Satisfaction' },
            ].map((s) => (
              <div key={s.label}>
                <div style={{ fontSize: '1.5rem', fontWeight: 800, color: '#fff' }}>{s.val}</div>
                <div style={{ fontSize: '0.75rem', color: 'rgba(255,255,255,0.5)', marginTop: '0.125rem' }}>{s.label}</div>
              </div>
            ))}
          </motion.div>
        </div>
      </div>

      <style>{`
        @media (max-width: 480px) {
          #home [style] { padding-top: 6rem !important; }
        }
      `}</style>
    </section>
  )
}
