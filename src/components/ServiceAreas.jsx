import { motion } from 'framer-motion'

const areas = [
  { name: 'Hail City', status: 'Primary', active: true },
  { name: 'Baqaa', status: 'Available', active: true },
  { name: 'Al Shinan', status: 'Available', active: true },
  { name: 'Mowqaq', status: 'Available', active: true },
  { name: 'Al Haeet', status: 'Available', active: true },
  { name: 'Jubbah', status: 'Coming Soon', active: false },
]

export default function ServiceAreas() {
  return (
    <section className="py-20 sm:py-28 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Map illustration */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative"
          >
            <div className="aspect-square rounded-3xl bg-gradient-to-br from-primary-50 to-blue-50 flex items-center justify-center relative overflow-hidden">
              {/* Decorative map-like elements */}
              <div className="absolute inset-8 border-2 border-dashed border-primary/20 rounded-full" />
              <div className="absolute inset-20 border-2 border-dashed border-primary/10 rounded-full" />

              {/* Center pin */}
              <div className="relative z-10 text-center">
                <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center mx-auto mb-3 shadow-lg shadow-primary/30">
                  <svg className="w-8 h-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-dark">Hail Region</h3>
                <p className="text-gray-500 text-sm">Saudi Arabia</p>
              </div>

              {/* Scattered dots */}
              {[
                'top-1/4 left-1/4',
                'top-1/3 right-1/4',
                'bottom-1/3 left-1/3',
                'bottom-1/4 right-1/3',
                'top-1/2 left-1/6',
              ].map((pos, i) => (
                <div key={i} className={`absolute ${pos} w-3 h-3 bg-primary/30 rounded-full`} />
              ))}
            </div>
          </motion.div>

          {/* Areas list */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <span className="text-primary font-semibold text-sm tracking-wider uppercase">Coverage</span>
            <h2 className="text-3xl sm:text-4xl font-extrabold mt-2 mb-4">Service Areas</h2>
            <p className="text-gray-500 text-lg mb-8">
              We proudly serve Hail city and surrounding areas. Check if we cover your location.
            </p>

            <div className="space-y-3">
              {areas.map((area, i) => (
                <motion.div
                  key={area.name}
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: i * 0.08 }}
                  className="flex items-center justify-between p-4 bg-gray-50 rounded-xl hover:bg-primary-50 transition-colors"
                >
                  <div className="flex items-center gap-3">
                    <div className={`w-2.5 h-2.5 rounded-full ${area.active ? 'bg-success' : 'bg-gray-300'}`} />
                    <span className="font-semibold">{area.name}</span>
                  </div>
                  <span className={`text-xs font-medium px-3 py-1 rounded-full ${
                    area.active
                      ? 'bg-success/10 text-success'
                      : 'bg-gray-200 text-gray-500'
                  }`}>
                    {area.status}
                  </span>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
