'use client';

import { useState, useEffect } from 'react';
import { useTranslation } from '@/hooks/useTranslation';
import { useTheme } from '@/hooks/useTheme';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronLeft, ChevronRight, Quote } from 'lucide-react';

export function Testimonials() {
  const { t, tArray } = useTranslation();
  const { theme } = useTheme();
  const isLight = theme === 'light';
  const [currentIndex, setCurrentIndex] = useState(0);
  const testimonials = tArray<{ text: string; name: string; role: string }>('testimonials.items');

  // Autoplay
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % testimonials.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [testimonials.length]);

  const goToPrev = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  const goToNext = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  };

  if (testimonials.length === 0) return null;

  return (
    <section className={`py-24 ${isLight ? 'bg-white' : 'bg-[#13132a]'}`}>
      <div className="container mx-auto px-4 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className={`inline-block px-4 py-2 rounded-full text-sm font-medium mb-4 ${isLight ? 'bg-purple-100 border border-purple-200 text-purple-600' : 'bg-purple-500/10 border border-purple-500/20 text-purple-400'}`}>
            {t('testimonials.badge')}
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
            {t('testimonials.title')}{' '}
            <span className="bg-gradient-to-r from-pink-400 via-purple-400 to-blue-400 bg-clip-text text-transparent">
              {t('testimonials.titleHighlight')}
            </span>
          </h2>
          <p className={`max-w-2xl mx-auto ${isLight ? 'text-gray-600' : 'text-gray-400'}`}>
            {t('testimonials.description')}
          </p>
        </motion.div>

        {/* Testimonials Carousel */}
        <div className="relative max-w-4xl mx-auto">
          <div className="overflow-hidden">
            <AnimatePresence mode="wait">
              <motion.div
                key={currentIndex}
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -50 }}
                transition={{ duration: 0.5 }}
                className={`rounded-2xl p-8 md:p-12 text-center ${
                  isLight
                    ? 'bg-gray-50 border border-gray-200 shadow-lg'
                    : 'bg-[#1a1a2e] border border-white/5'
                }`}
              >
                {/* Quote Icon */}
                <div className={`w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-8 ${isLight ? 'bg-gradient-to-r from-pink-100 via-purple-100 to-blue-100' : 'bg-gradient-to-r from-pink-500/20 via-purple-500/20 to-blue-500/20'}`}>
                  <Quote className={`w-8 h-8 ${isLight ? 'text-purple-600' : 'text-purple-400'}`} />
                </div>

                {/* Testimonial Text */}
                <p className={`text-xl md:text-2xl leading-relaxed mb-8 italic ${isLight ? 'text-gray-700' : 'text-gray-300'}`}>
                  &ldquo;{testimonials[currentIndex].text}&rdquo;
                </p>

                {/* Author */}
                <div>
                  <div className="w-16 h-16 rounded-full bg-gradient-to-r from-pink-500 via-purple-500 to-blue-500 flex items-center justify-center mx-auto mb-4 text-2xl font-bold text-white">
                    {testimonials[currentIndex].name.charAt(0)}
                  </div>
                  <h4 className="text-lg font-semibold">
                    {testimonials[currentIndex].name}
                  </h4>
                  <p className={`text-sm ${isLight ? 'text-gray-500' : 'text-gray-400'}`}>
                    {testimonials[currentIndex].role}
                  </p>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Navigation Buttons */}
          <button
            onClick={goToPrev}
            className={`absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 md:-translate-x-16 w-12 h-12 rounded-full flex items-center justify-center transition-colors ${
              isLight
                ? 'bg-white border border-gray-200 hover:border-purple-300 shadow-lg'
                : 'bg-[#1a1a2e] border border-white/10 hover:border-purple-500/30'
            }`}
            aria-label="Previous testimonial"
          >
            <ChevronLeft className="w-5 h-5" />
          </button>
          <button
            onClick={goToNext}
            className={`absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 md:translate-x-16 w-12 h-12 rounded-full flex items-center justify-center transition-colors ${
              isLight
                ? 'bg-white border border-gray-200 hover:border-purple-300 shadow-lg'
                : 'bg-[#1a1a2e] border border-white/10 hover:border-purple-500/30'
            }`}
            aria-label="Next testimonial"
          >
            <ChevronRight className="w-5 h-5" />
          </button>

          {/* Dots */}
          <div className="flex items-center justify-center gap-2 mt-8">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`w-2.5 h-2.5 rounded-full transition-all duration-300 ${
                  index === currentIndex
                    ? 'w-8 bg-gradient-to-r from-pink-500 to-purple-500'
                    : isLight ? 'bg-gray-300 hover:bg-gray-400' : 'bg-white/20 hover:bg-white/40'
                }`}
                aria-label={`Go to testimonial ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
