'use client';

import { useTranslation } from '@/hooks/useTranslation';
import { useTheme } from '@/hooks/useTheme';
import { motion } from 'framer-motion';
import { DollarSign, MessageCircle } from 'lucide-react';

export function Hero() {
  const { t } = useTranslation();
  const { theme } = useTheme();

  const stats = [
    { value: '150+', label: t('hero.stats.projects') },
    { value: '98%', label: t('hero.stats.satisfaction') },
    { value: '5+', label: t('hero.stats.years') },
  ];

  const isLight = theme === 'light';

  return (
    <section id="home" className="relative min-h-screen flex items-center pt-20 overflow-hidden">
      {/* Background Effects */}
      <div className={`absolute inset-0 ${isLight ? 'bg-gradient-to-br from-gray-50 via-purple-50/30 to-pink-50/30' : 'bg-[#0f0f1a]'}`}>
        <div className={`absolute top-1/4 left-1/4 w-96 h-96 ${isLight ? 'bg-purple-300/30' : 'bg-purple-500/20'} rounded-full blur-[128px] animate-pulse`} />
        <div className={`absolute bottom-1/4 right-1/4 w-96 h-96 ${isLight ? 'bg-pink-300/30' : 'bg-pink-500/20'} rounded-full blur-[128px] animate-pulse`} style={{ animationDelay: '1s' }} />
        <div className={`absolute top-1/2 left-1/2 w-64 h-64 ${isLight ? 'bg-blue-300/30' : 'bg-blue-500/20'} rounded-full blur-[100px] animate-pulse`} style={{ animationDelay: '2s' }} />
      </div>

      <div className="container mx-auto px-4 lg:px-8 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className={`inline-flex items-center gap-2 px-4 py-2 rounded-full mb-8 ${isLight ? 'bg-white border border-gray-200 shadow-sm' : 'bg-white/5 border border-white/10'}`}
          >
            <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
            <span className={`text-sm ${isLight ? 'text-gray-600' : 'text-gray-300'}`}>{t('hero.badge')}</span>
          </motion.div>

          {/* Title */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6"
          >
            {t('hero.title')}{' '}
            <span className="bg-gradient-to-r from-pink-400 via-purple-400 to-blue-400 bg-clip-text text-transparent">
              {t('hero.titleHighlight')}
            </span>
          </motion.h1>

          {/* Description */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className={`text-lg max-w-2xl mx-auto mb-10 ${isLight ? 'text-gray-600' : 'text-gray-400'}`}
          >
            {t('hero.description')}
          </motion.p>

          {/* Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16"
          >
            <a
              href="#pricing"
              className="group flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-pink-500 via-purple-500 to-blue-500 rounded-full font-semibold text-white hover:shadow-xl hover:shadow-purple-500/30 transition-all duration-300 hover:-translate-y-1"
            >
              <DollarSign className="w-5 h-5" />
              {t('hero.btnPlans')}
            </a>
            <a
              href="#contact"
              className={`group flex items-center gap-2 px-8 py-4 rounded-full font-semibold transition-all duration-300 ${
                isLight
                  ? 'bg-white border border-gray-200 text-gray-700 hover:bg-gray-50 hover:border-purple-300'
                  : 'bg-white/5 border border-white/20 text-white hover:bg-white/10'
              }`}
            >
              <MessageCircle className="w-5 h-5" />
              {t('hero.btnContact')}
            </a>
          </motion.div>

          {/* Stats */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="flex flex-wrap items-center justify-center gap-8 md:gap-16"
          >
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-pink-400 via-purple-400 to-blue-400 bg-clip-text text-transparent">
                  {stat.value}
                </div>
                <div className={`text-sm mt-1 ${isLight ? 'text-gray-500' : 'text-gray-500'}`}>{stat.label}</div>
              </div>
            ))}
          </motion.div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
      >
        <div className={`w-6 h-10 rounded-full border-2 flex items-start justify-center p-2 ${isLight ? 'border-gray-300' : 'border-white/20'}`}>
          <motion.div
            animate={{ y: [0, 12, 0] }}
            transition={{ duration: 1.5, repeat: Infinity }}
            className={`w-1.5 h-1.5 rounded-full ${isLight ? 'bg-gray-400' : 'bg-white/50'}`}
          />
        </div>
      </motion.div>
    </section>
  );
}
