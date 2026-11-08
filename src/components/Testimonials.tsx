import { Star, Quote } from 'lucide-react';
import { motion } from 'motion/react';
import { Testimonial } from '../types';

export default function Testimonials() {
  const testimonials: Testimonial[] = [
    {
      id: 'testimonial-1',
      rating: 5,
      quote:
        'Saini Collection built our inventory management portal that perfectly streamlines our car accessories and parts operations. The system is intuitive, reliable, and has significantly improved our internal workflow. Highly impressed with their technical expertise!',
      author: 'Aman Sharma',
      role: 'Founder',
      company: 'Jai Durge Traders',
      avatarLetter: 'A',
    },
  ];

  return (
    <section id="testimonials" className="py-24 bg-gray-50/50 relative overflow-hidden">
      {/* Decorative background gradients */}
      <div className="absolute top-1/2 left-0 w-64 h-64 bg-blue-100/30 rounded-full blur-3xl" />
      <div className="absolute bottom-0 right-0 w-72 h-72 bg-indigo-100/30 rounded-full blur-3xl" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <h2 className="font-display font-extrabold text-3xl sm:text-4xl text-gray-900 tracking-tight">
            Voices of <span className="text-blue-600">Our Clients</span>
          </h2>
          <div className="w-16 h-1 bg-blue-600 mx-auto rounded" />
          <p className="font-sans text-base sm:text-lg text-gray-600 leading-relaxed pt-2">
            Hear from people who trust us with their vision and digital transformation.
          </p>
        </div>

        {/* Testimonial Presentation */}
        <div className="max-w-3xl mx-auto">
          {testimonials.map((testimonial) => (
            <motion.div
              key={testimonial.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.6 }}
              className="bg-white rounded-3xl p-8 sm:p-12 shadow-md border border-gray-100 relative text-left"
            >
              {/* Giant quote mark in background */}
              <div className="absolute top-8 right-8 text-gray-100 select-none pointer-events-none">
                <Quote className="w-16 h-16 sm:w-20 sm:h-20" />
              </div>

              <div className="space-y-6 relative z-10">
                {/* Stars */}
                <div className="flex items-center space-x-1">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 fill-amber-400 text-amber-400" />
                  ))}
                </div>

                {/* Quote Text */}
                <p className="font-sans text-base sm:text-lg md:text-xl text-gray-700 font-medium leading-relaxed italic">
                  "{testimonial.quote}"
                </p>

                {/* Author Info */}
                <div className="flex items-center space-x-4 pt-6 border-t border-gray-50">
                  <div className="bg-gradient-to-tr from-blue-600 to-indigo-600 text-white w-12 h-12 rounded-xl flex items-center justify-center font-display font-bold text-lg shadow-md shadow-blue-500/10">
                    {testimonial.avatarLetter}
                  </div>
                  <div>
                    <h4 className="font-display font-extrabold text-base text-gray-900 sm:text-lg">
                      {testimonial.author}
                    </h4>
                    <p className="font-sans text-xs sm:text-sm text-gray-500">
                      {testimonial.role}, <span className="text-blue-600 font-semibold">{testimonial.company}</span>
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
