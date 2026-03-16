import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

const links = [
  { label: 'Home', href: '#home' },
  { label: 'Services', href: '#services' },
  { label: 'About', href: '#about' },
  { label: 'Gallery', href: '#gallery' },
  { label: 'Contact', href: '#contact' },
]

export default function Navbar() {
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handle = () => setScrolled(window.scrollY > 30)
    window.addEventListener('scroll', handle, { passive: true })
    return () => window.removeEventListener('scroll', handle)
  }, [])

  return (
    <header
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        zIndex: 100,
        transition: 'all 0.3s',
        background: scrolled ? 'rgba(255,255,255,0.97)' : 'transparent',
        backdropFilter: scrolled ? 'blur(12px)' : 'none',
        borderBottom: scrolled ? '1px solid var(--color-border)' : '1px solid transparent',
      }}
    >
      <div className="container-main" style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', height: '72px' }}>
        {/* Logo */}
        <a href="#home" style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', textDecoration: 'none' }}>
          <div style={{
            width: 36, height: 36, borderRadius: 10,
            background: 'var(--color-brand)', display: 'flex',
            alignItems: 'center', justifyContent: 'center',
          }}>
            <svg width="20" height="20" fill="none" viewBox="0 0 24 24" stroke="#fff" strokeWidth="2">
              <path strokeLinecap="round" strokeLinejoin="round" d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
            </svg>
          </div>
          <span style={{ fontSize: '1.25rem', fontWeight: 700, color: scrolled ? 'var(--color-heading)' : '#fff' }}>
            Clean<span style={{ color: 'var(--color-brand)' }}>Pro</span>
          </span>
        </a>

        {/* Desktop nav */}
        <nav style={{ display: 'flex', alignItems: 'center', gap: '2rem' }} className="desktop-nav">
          {links.map((l) => (
            <a
              key={l.label}
              href={l.href}
              style={{
                fontSize: '0.875rem',
                fontWeight: 500,
                textDecoration: 'none',
                color: scrolled ? 'var(--color-body)' : 'rgba(255,255,255,0.85)',
                transition: 'color 0.2s',
              }}
              onMouseEnter={(e) => e.target.style.color = 'var(--color-brand)'}
              onMouseLeave={(e) => e.target.style.color = scrolled ? 'var(--color-body)' : 'rgba(255,255,255,0.85)'}
            >
              {l.label}
            </a>
          ))}
          <a href="#contact" className="btn btn-primary" style={{ padding: '0.5rem 1.25rem', fontSize: '0.875rem' }}>
            Book Service
          </a>
        </nav>

        {/* Mobile toggle */}
        <button
          onClick={() => setOpen(!open)}
          className="mobile-toggle"
          style={{
            display: 'none', background: 'none', border: 'none', cursor: 'pointer',
            color: scrolled ? 'var(--color-heading)' : '#fff', padding: 4,
          }}
          aria-label="Menu"
        >
          <svg width="24" height="24" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
            {open
              ? <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
              : <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />}
          </svg>
        </button>
      </div>

      {/* Mobile menu */}
      <AnimatePresence>
        {open && (
          <motion.nav
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            style={{ background: '#fff', borderTop: '1px solid var(--color-border)', overflow: 'hidden' }}
          >
            <div style={{ padding: '0.75rem 1.25rem 1rem', display: 'flex', flexDirection: 'column', gap: '0.25rem' }}>
              {links.map((l) => (
                <a
                  key={l.label}
                  href={l.href}
                  onClick={() => setOpen(false)}
                  style={{
                    padding: '0.75rem 1rem', borderRadius: '0.5rem', textDecoration: 'none',
                    fontSize: '0.9375rem', fontWeight: 500, color: 'var(--color-body)',
                    transition: 'background 0.2s',
                  }}
                  onMouseEnter={(e) => e.target.style.background = 'var(--color-surface)'}
                  onMouseLeave={(e) => e.target.style.background = 'transparent'}
                >
                  {l.label}
                </a>
              ))}
              <a
                href="#contact"
                onClick={() => setOpen(false)}
                className="btn btn-primary"
                style={{ marginTop: '0.5rem', textAlign: 'center' }}
              >
                Book Service
              </a>
            </div>
          </motion.nav>
        )}
      </AnimatePresence>

      <style>{`
        .desktop-nav { display: flex !important; }
        .mobile-toggle { display: none !important; }
        @media (max-width: 768px) {
          .desktop-nav { display: none !important; }
          .mobile-toggle { display: block !important; }
        }
      `}</style>
    </header>
  )
}
