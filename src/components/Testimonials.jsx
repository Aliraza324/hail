import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

const reviews = [
  {
    name: 'Ahmed Al-Rashidi',
    role: 'Homeowner',
    avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=120&q=80',
    text: 'CleanPro transformed my home! The team was professional, punctual, and incredibly thorough. Highly recommended for anyone in Hail.',
    stars: 5,
  },
  {
    name: 'Sarah Al-Otaibi',
    role: 'Villa Owner',
    avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=120&q=80',
    text: "I've used CleanPro for over a year now. Their attention to detail and eco-friendly products make them stand out from the competition.",
    stars: 5,
  },
  {
    name: 'Mohammed Al-Harbi',
    role: 'Business Owner',
    avatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=120&q=80',
    text: 'Fast, reliable, and affordable. CleanPro handles our office cleaning perfectly. Their 24/7 support is a game changer.',
    stars: 5,
  },
  {
    name: 'Fatima Al-Shammari',
    role: 'Homeowner',
    avatar: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=120&q=80',
    text: "The pool cleaning service is outstanding! Crystal clear water every time. The team is friendly and really knows what they're doing.",
    stars: 5,
  },
]

function Stars({ count }) {
  return (
    <div style={{ display: 'flex', gap: 2, marginBottom: '1rem' }}>
      {Array.from({ length: count }).map((_, i) => (
        <svg key={i} width="18" height="18" fill="var(--color-orange)" viewBox="0 0 20 20">
          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
        </svg>
      ))}
    </div>
  )
}

export default function Testimonials() {
  const [idx, setIdx] = useState(0)
  const go = (dir) => setIdx((prev) => (prev + dir + reviews.length) % reviews.length)

  return (
    <section className="section-padding" style={{ background: 'var(--color-surface)' }}>
      <div className="container-main">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          style={{ textAlign: 'center', marginBottom: '3rem' }}
        >
          <span className="section-label">Testimonials</span>
          <h2 className="section-title">What Our Customers Say</h2>
          <p className="section-desc">
            Don't just take our word for it — hear from our satisfied customers.
          </p>
        </motion.div>

        <div style={{ maxWidth: '640px', margin: '0 auto' }}>
          <AnimatePresence mode="wait">
            <motion.div
              key={idx}
              initial={{ opacity: 0, x: 40 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -40 }}
              transition={{ duration: 0.25 }}
              style={{
                background: '#fff',
                borderRadius: '1.25rem',
                padding: '2.5rem 2rem',
                textAlign: 'center',
                border: '1px solid var(--color-border)',
              }}
            >
              <img
                src={reviews[idx].avatar}
                alt={reviews[idx].name}
                style={{
                  width: 64, height: 64, borderRadius: '50%', objectFit: 'cover',
                  margin: '0 auto 1rem',
                  border: '3px solid var(--color-brand-soft)',
                }}
                loading="lazy"
              />
              <Stars count={reviews[idx].stars} />
              <p style={{
                fontSize: '1.0625rem', fontStyle: 'italic', color: 'var(--color-body)',
                lineHeight: 1.7, marginBottom: '1.25rem', maxWidth: '480px', margin: '0 auto 1.25rem',
              }}>
                "{reviews[idx].text}"
              </p>
              <h4 style={{ fontSize: '0.9375rem', fontWeight: 700, color: 'var(--color-heading)', marginBottom: '0.125rem' }}>
                {reviews[idx].name}
              </h4>
              <p style={{ fontSize: '0.8125rem', color: 'var(--color-muted)' }}>
                {reviews[idx].role}
              </p>
            </motion.div>
          </AnimatePresence>

          {/* Controls */}
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '0.75rem', marginTop: '1.5rem' }}>
            <button onClick={() => go(-1)} style={navBtn} aria-label="Previous">
              <svg width="16" height="16" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
              </svg>
            </button>
            <div style={{ display: 'flex', gap: '0.5rem', alignItems: 'center' }}>
              {reviews.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setIdx(i)}
                  style={{
                    width: i === idx ? 24 : 8,
                    height: 8,
                    borderRadius: 99,
                    border: 'none',
                    background: i === idx ? 'var(--color-brand)' : 'var(--color-border)',
                    cursor: 'pointer',
                    transition: 'all 0.3s',
                    padding: 0,
                  }}
                  aria-label={`Review ${i + 1}`}
                />
              ))}
            </div>
            <button onClick={() => go(1)} style={navBtn} aria-label="Next">
              <svg width="16" height="16" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}

const navBtn = {
  width: 40, height: 40, borderRadius: '50%',
  background: '#fff', border: '1px solid var(--color-border)',
  display: 'flex', alignItems: 'center', justifyContent: 'center',
  cursor: 'pointer', color: 'var(--color-body)',
  transition: 'all 0.2s',
}
