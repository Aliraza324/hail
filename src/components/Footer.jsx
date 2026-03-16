export default function Footer() {
  return (
    <footer style={{ background: 'var(--color-heading)', color: '#fff' }}>
      <div className="container-main" style={{ paddingTop: '4rem', paddingBottom: '3rem' }}>
        <div className="footer-grid">
          {/* Brand */}
          <div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '1rem' }}>
              <div style={{
                width: 32, height: 32, borderRadius: 8,
                background: 'var(--color-brand)', display: 'flex',
                alignItems: 'center', justifyContent: 'center',
              }}>
                <svg width="18" height="18" fill="none" viewBox="0 0 24 24" stroke="#fff" strokeWidth="2">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
                </svg>
              </div>
              <span style={{ fontSize: '1.125rem', fontWeight: 700 }}>
                Clean<span style={{ color: 'var(--color-brand-light)' }}>Pro</span>
              </span>
            </div>
            <p style={{ fontSize: '0.875rem', color: 'rgba(255,255,255,0.5)', lineHeight: 1.7, maxWidth: 280, marginBottom: '1.25rem' }}>
              Professional cleaning services in Hail, Saudi Arabia. Trusted by hundreds of homes and businesses since 2009.
            </p>
            <div style={{ display: 'flex', gap: '0.5rem' }}>
              {['X', 'IG', 'FB'].map((s) => (
                <a
                  key={s}
                  href="#"
                  aria-label={s}
                  style={{
                    width: 36, height: 36, borderRadius: 8,
                    background: 'rgba(255,255,255,0.08)', display: 'flex',
                    alignItems: 'center', justifyContent: 'center',
                    color: 'rgba(255,255,255,0.6)', textDecoration: 'none',
                    fontSize: '0.75rem', fontWeight: 700,
                    transition: 'background 0.2s, color 0.2s',
                  }}
                  onMouseEnter={(e) => { e.target.style.background = 'var(--color-brand)'; e.target.style.color = '#fff' }}
                  onMouseLeave={(e) => { e.target.style.background = 'rgba(255,255,255,0.08)'; e.target.style.color = 'rgba(255,255,255,0.6)' }}
                >
                  {s}
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 style={{ fontSize: '0.875rem', fontWeight: 700, marginBottom: '1rem', color: '#fff' }}>Quick Links</h4>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.625rem' }}>
              {['Home', 'Services', 'About', 'Gallery', 'Contact'].map((l) => (
                <a
                  key={l}
                  href={`#${l.toLowerCase()}`}
                  style={{ fontSize: '0.875rem', color: 'rgba(255,255,255,0.5)', textDecoration: 'none', transition: 'color 0.2s' }}
                  onMouseEnter={(e) => e.target.style.color = '#fff'}
                  onMouseLeave={(e) => e.target.style.color = 'rgba(255,255,255,0.5)'}
                >
                  {l}
                </a>
              ))}
            </div>
          </div>

          {/* Services */}
          <div>
            <h4 style={{ fontSize: '0.875rem', fontWeight: 700, marginBottom: '1rem', color: '#fff' }}>Services</h4>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.625rem' }}>
              {['Home Cleaning', 'Pool Cleaning', 'Tank Cleaning', 'Villa Cleaning', 'Pest Control', 'Carpet Cleaning'].map((s) => (
                <a
                  key={s}
                  href="#services"
                  style={{ fontSize: '0.875rem', color: 'rgba(255,255,255,0.5)', textDecoration: 'none', transition: 'color 0.2s' }}
                  onMouseEnter={(e) => e.target.style.color = '#fff'}
                  onMouseLeave={(e) => e.target.style.color = 'rgba(255,255,255,0.5)'}
                >
                  {s}
                </a>
              ))}
            </div>
          </div>

          {/* Contact */}
          <div>
            <h4 style={{ fontSize: '0.875rem', fontWeight: 700, marginBottom: '1rem', color: '#fff' }}>Contact</h4>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem', fontSize: '0.875rem', color: 'rgba(255,255,255,0.5)' }}>
              <span>📍 Hail, Saudi Arabia</span>
              <span>📞 +966 50 000 0000</span>
              <span>✉️ info@cleanpro-hail.com</span>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom */}
      <div style={{ borderTop: '1px solid rgba(255,255,255,0.08)' }}>
        <div className="container-main" style={{
          paddingTop: '1.25rem', paddingBottom: '1.25rem',
          display: 'flex', justifyContent: 'space-between', alignItems: 'center',
          flexWrap: 'wrap', gap: '0.75rem',
        }}>
          <p style={{ fontSize: '0.8125rem', color: 'rgba(255,255,255,0.4)' }}>
            © {new Date().getFullYear()} CleanPro Hail. All rights reserved.
          </p>
          <div style={{ display: 'flex', gap: '1.5rem' }}>
            {['Privacy Policy', 'Terms of Service'].map((l) => (
              <a
                key={l}
                href="#"
                style={{ fontSize: '0.8125rem', color: 'rgba(255,255,255,0.4)', textDecoration: 'none', transition: 'color 0.2s' }}
                onMouseEnter={(e) => e.target.style.color = '#fff'}
                onMouseLeave={(e) => e.target.style.color = 'rgba(255,255,255,0.4)'}
              >
                {l}
              </a>
            ))}
          </div>
        </div>
      </div>

      <style>{`
        .footer-grid {
          display: grid;
          grid-template-columns: 1.5fr 1fr 1fr 1fr;
          gap: 3rem;
        }
        @media (max-width: 768px) {
          .footer-grid {
            grid-template-columns: 1fr 1fr;
            gap: 2rem;
          }
        }
        @media (max-width: 480px) {
          .footer-grid {
            grid-template-columns: 1fr;
          }
        }
      `}</style>
    </footer>
  )
}
