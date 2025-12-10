'use client';

import { useTranslation } from '@/hooks/useTranslation';
import { useTheme } from '@/hooks/useTheme';
import { motion } from 'framer-motion';
import { Zap, Palette, Smartphone, HeadphonesIcon } from 'lucide-react';

const benefitIcons = [
  Zap,
  Palette,
  Smartphone,
  HeadphonesIcon,
];

const benefitKeys = ['fast', 'design', 'responsive', 'support'];

export function WhyUs() {
  const { t } = useTranslation();
  const { theme } = useTheme();
  const isLight = theme === 'light';

  return (
    <section
      id="why-us"
      className="relative py-24 overflow-hidden"
      style={{
        backgroundImage: 'url(https://images.unsplash.com/photo-1558591710-4b4a1ae0f04d?q=80&w=2070)',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundAttachment: 'fixed',
      }}
    >
      {/* Overlay */}
      <div className={`absolute inset-0 ${isLight ? 'bg-white/90' : 'bg-[#0f0f1a]/90'}`} />

      <div className="container mx-auto px-4 lg:px-8 relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className={`inline-block px-4 py-2 rounded-full text-sm font-medium mb-4 ${isLight ? 'bg-purple-100 border border-purple-200 text-purple-600' : 'bg-purple-500/10 border border-purple-500/20 text-purple-400'}`}>
            {t('whyUs.badge')}
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
            {t('whyUs.title')}{' '}
            <span className="bg-gradient-to-r from-pink-400 via-purple-400 to-blue-400 bg-clip-text text-transparent">
              {t('whyUs.titleHighlight')}
            </span>
            ?
          </h2>
          <p className={`max-w-2xl mx-auto ${isLight ? 'text-gray-600' : 'text-gray-400'}`}>
            {t('whyUs.description')}
          </p>
        </motion.div>

        {/* Benefits Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {benefitKeys.map((key, index) => {
            const Icon = benefitIcons[index];
            return (
              <motion.article
                key={key}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className={`group relative p-6 backdrop-blur-sm rounded-2xl transition-all duration-500 hover:-translate-y-2 ${
                  isLight
                    ? 'bg-white/80 border border-gray-200 hover:border-purple-300 shadow-lg'
                    : 'bg-[#1a1a2e]/80 border border-white/5 hover:border-purple-500/30'
                }`}
              >
                {/* Hover Glow */}
                <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-pink-500/10 via-purple-500/10 to-blue-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                <div className="relative z-10">
                  <div className={`w-14 h-14 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300 ${isLight ? 'bg-gradient-to-r from-pink-100 via-purple-100 to-blue-100' : 'bg-gradient-to-r from-pink-500/20 via-purple-500/20 to-blue-500/20'}`}>
                    <Icon className={`w-7 h-7 ${isLight ? 'text-purple-600' : 'text-purple-400'}`} />
                  </div>
                  <h3 className={`text-lg font-semibold mb-2 transition-colors ${isLight ? 'group-hover:text-purple-600' : 'group-hover:text-purple-400'}`}>
                    {t(`whyUs.benefits.${key}.title`)}
                  </h3>
                  <p className={`text-sm leading-relaxed ${isLight ? 'text-gray-600' : 'text-gray-400'}`}>
                    {t(`whyUs.benefits.${key}.description`)}
                  </p>
                </div>
              </motion.article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
