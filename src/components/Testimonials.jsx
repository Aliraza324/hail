import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

const testimonials = [
  {
    name: 'Ahmed Al-Rashidi',
    role: 'Homeowner',
    image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&q=80',
    text: 'CleanPro transformed my home! The team was professional, punctual, and incredibly thorough. I couldn\'t believe the difference. Highly recommended!',
    rating: 5,
  },
  {
    name: 'Sarah Al-Otaibi',
    role: 'Villa Owner',
    image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=150&q=80',
    text: 'I\'ve been using CleanPro for my villa for over a year now. Their attention to detail and eco-friendly products make them stand out from the rest.',
    rating: 5,
  },
  {
    name: 'Mohammed Al-Harbi',
    role: 'Business Owner',
    image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&q=80',
    text: 'Fast, reliable, and affordable. CleanPro handles our office cleaning perfectly. Their 24/7 support means I can always reach them when needed.',
    rating: 5,
  },
  {
    name: 'Fatima Al-Shammari',
    role: 'Homeowner',
    image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&q=80',
    text: 'The pool cleaning service is outstanding! Crystal clear water every time. The team is friendly and knows exactly what they\'re doing.',
    rating: 5,
  },
]

export default function Testimonials() {
  const [current, setCurrent] = useState(0)

  const next = () => setCurrent((prev) => (prev + 1) % testimonials.length)
  const prev = () => setCurrent((prev) => (prev - 1 + testimonials.length) % testimonials.length)

  return (
    <section className="py-20 sm:py-28 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <span className="text-primary font-semibold text-sm tracking-wider uppercase">Testimonials</span>
          <h2 className="text-3xl sm:text-4xl font-extrabold mt-2 mb-4">What Our Customers Say</h2>
          <p className="text-gray-500 text-lg max-w-2xl mx-auto">
            Don't just take our word for it — hear from our satisfied customers.
          </p>
        </motion.div>

        {/* Slider */}
        <div className="max-w-3xl mx-auto relative">
          <AnimatePresence mode="wait">
            <motion.div
              key={current}
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -50 }}
              transition={{ duration: 0.3 }}
              className="bg-white rounded-2xl p-8 sm:p-10 shadow-sm text-center"
            >
              <img
                src={testimonials[current].image}
                alt={testimonials[current].name}
                className="w-16 h-16 rounded-full mx-auto mb-4 object-cover ring-4 ring-primary-50"
                loading="lazy"
              />
              <div className="flex justify-center gap-1 mb-4">
                {Array.from({ length: testimonials[current].rating }).map((_, i) => (
                  <svg key={i} className="w-5 h-5 text-warning" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>
              <p className="text-gray-600 text-lg leading-relaxed mb-6 italic">
                "{testimonials[current].text}"
              </p>
              <h4 className="font-bold text-dark">{testimonials[current].name}</h4>
              <p className="text-gray-400 text-sm">{testimonials[current].role}</p>
            </motion.div>
          </AnimatePresence>

          {/* Nav buttons */}
          <div className="flex justify-center gap-3 mt-8">
            <button
              onClick={prev}
              className="w-10 h-10 rounded-full bg-white shadow-sm border border-gray-200 flex items-center justify-center hover:bg-primary hover:text-white hover:border-primary transition-all"
              aria-label="Previous testimonial"
            >
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
            </button>

            {/* Dots */}
            <div className="flex items-center gap-2">
              {testimonials.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setCurrent(i)}
                  className={`w-2.5 h-2.5 rounded-full transition-all ${
                    i === current ? 'bg-primary w-7' : 'bg-gray-300'
                  }`}
                  aria-label={`Go to testimonial ${i + 1}`}
                />
              ))}
            </div>

            <button
              onClick={next}
              className="w-10 h-10 rounded-full bg-white shadow-sm border border-gray-200 flex items-center justify-center hover:bg-primary hover:text-white hover:border-primary transition-all"
              aria-label="Next testimonial"
            >
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}
