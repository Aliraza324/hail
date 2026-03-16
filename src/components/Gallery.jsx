import { motion } from 'framer-motion'

const images = [
  { src: 'https://images.unsplash.com/photo-1558618666-fcd25c85f82e?w=600&q=80', alt: 'Clean living room' },
  { src: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=600&q=80', alt: 'Spotless villa interior' },
  { src: 'https://images.unsplash.com/photo-1572331165267-854da2b021b1?w=600&q=80', alt: 'Crystal clear pool' },
  { src: 'https://images.unsplash.com/photo-1581578731548-c64695cc6952?w=600&q=80', alt: 'Professional cleaning' },
  { src: 'https://images.unsplash.com/photo-1527515637462-cee1395c108c?w=600&q=80', alt: 'Clean kitchen' },
  { src: 'https://images.unsplash.com/photo-1584622650111-993a426fbf0a?w=600&q=80', alt: 'Sparkling bathroom' },
]

export default function Gallery() {
  return (
    <section id="gallery" className="py-20 sm:py-28 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <span className="text-primary font-semibold text-sm tracking-wider uppercase">Our Work</span>
          <h2 className="text-3xl sm:text-4xl font-extrabold mt-2 mb-4">Before & After Gallery</h2>
          <p className="text-gray-500 text-lg max-w-2xl mx-auto">
            See the transformation. Our results speak for themselves.
          </p>
        </motion.div>

        <div className="grid grid-cols-2 lg:grid-cols-3 gap-4">
          {images.map((img, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.08 }}
              className="relative group overflow-hidden rounded-2xl aspect-[4/3] cursor-pointer"
            >
              <img
                src={img.src}
                alt={img.alt}
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-5">
                <span className="text-white font-semibold text-sm">{img.alt}</span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
