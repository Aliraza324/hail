import { motion } from 'framer-motion'

const images = [
  { src: 'https://images.unsplash.com/photo-1598928506311-c55ded91a20c?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D', label: 'Clean Living Room' },
  { src: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=600&q=80', label: 'Spotless Villa' },
  { src: 'https://plus.unsplash.com/premium_photo-1720054284585-da56a9557e84?q=80&w=1171&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D', label: 'Crystal Clear Pool' },
  { src: 'https://images.unsplash.com/photo-1581578731548-c64695cc6952?w=600&q=80', label: 'Professional Team' },
  { src: 'https://images.unsplash.com/photo-1722649957265-372809976610?q=80&w=1494&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D', label: 'Modern Kitchen' },
  { src: 'https://images.unsplash.com/photo-1584622650111-993a426fbf0a?w=600&q=80', label: 'Sparkling Bathroom' },
]

export default function Gallery() {
  return (
    <section id="gallery" className="section-padding" style={{ background: '#fff' }}>
      <div className="container-main">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          style={{ textAlign: 'center', marginBottom: '3.5rem' }}
        >
          <span className="section-label">Our Work</span>
          <h2 className="section-title">Before & After Gallery</h2>
          <p className="section-desc">
            See the transformation. Our results speak for themselves.
          </p>
        </motion.div>

        <div className="gallery-grid">
          {images.map((img, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.06 }}
              style={{
                position: 'relative',
                borderRadius: '1rem',
                overflow: 'hidden',
                aspectRatio: '4/3',
                cursor: 'pointer',
              }}
              className="gallery-item"
            >
              <img
                src={img.src}
                alt={img.label}
                loading="lazy"
                style={{ width: '100%', height: '100%', objectFit: 'cover', transition: 'transform 0.5s' }}
              />
              <div className="gallery-overlay">
                <span style={{ color: '#fff', fontWeight: 600, fontSize: '0.875rem' }}>{img.label}</span>
              </div>
            </motion.div>
          ))}
        </div>

        <style>{`
          .gallery-grid {
            display: grid;
            grid-template-columns: repeat(3, 1fr);
            gap: 1rem;
          }
          @media (max-width: 768px) {
            .gallery-grid { grid-template-columns: repeat(2, 1fr); }
          }
          @media (max-width: 480px) {
            .gallery-grid { grid-template-columns: 1fr; }
          }
          .gallery-overlay {
            position: absolute; inset: 0;
            background: linear-gradient(to top, rgba(0,0,0,0.6), transparent 60%);
            display: flex; align-items: flex-end; padding: 1rem;
            opacity: 0; transition: opacity 0.3s;
          }
          .gallery-item:hover .gallery-overlay { opacity: 1; }
          .gallery-item:hover img { transform: scale(1.08); }
        `}</style>
      </div>
    </section>
  )
}
