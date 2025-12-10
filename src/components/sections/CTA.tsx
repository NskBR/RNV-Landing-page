'use client';

import { useTranslation } from '@/hooks/useTranslation';
import { useTheme } from '@/hooks/useTheme';
import { motion } from 'framer-motion';
import { Rocket, MessageCircle } from 'lucide-react';

export function CTA() {
  const { t } = useTranslation();
  const { theme } = useTheme();
  const isLight = theme === 'light';

  return (
    <section id="contact" className="py-24 relative overflow-hidden">
      {/* Background */}
      <div className={`absolute inset-0 ${isLight ? 'bg-gradient-to-r from-pink-100/50 via-purple-100/50 to-blue-100/50' : 'bg-gradient-to-r from-pink-500/20 via-purple-500/20 to-blue-500/20'}`} />
      <div className={`absolute inset-0 ${isLight ? 'bg-white/80' : 'bg-[#0f0f1a]/90'}`} />

      {/* Decorative Blobs */}
      <div className={`absolute top-0 left-1/4 w-96 h-96 rounded-full blur-[128px] ${isLight ? 'bg-pink-200/50' : 'bg-pink-500/30'}`} />
      <div className={`absolute bottom-0 right-1/4 w-96 h-96 rounded-full blur-[128px] ${isLight ? 'bg-purple-200/50' : 'bg-purple-500/30'}`} />

      <div className="container mx-auto px-4 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-3xl mx-auto text-center"
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
            {t('cta.title')}{' '}
            <span className="bg-gradient-to-r from-pink-400 via-purple-400 to-blue-400 bg-clip-text text-transparent">
              {t('cta.titleHighlight')}
            </span>
            ?
          </h2>
          <p className={`text-lg mb-10 ${isLight ? 'text-gray-600' : 'text-gray-400'}`}>
            {t('cta.description')}
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              href="#pricing"
              className="group flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-pink-500 via-purple-500 to-blue-500 rounded-full font-semibold text-white hover:shadow-xl hover:shadow-purple-500/30 transition-all duration-300 hover:-translate-y-1"
            >
              <Rocket className="w-5 h-5" />
              {t('cta.btnStart')}
            </a>
            <a
              href={`https://wa.me/${process.env.NEXT_PUBLIC_WHATSAPP_NUMBER || '5521997599694'}`}
              target="_blank"
              rel="noopener noreferrer"
              className={`group flex items-center gap-2 px-8 py-4 rounded-full font-semibold transition-all duration-300 ${
                isLight
                  ? 'bg-white border border-gray-200 text-gray-700 hover:bg-gray-50 hover:border-purple-300'
                  : 'bg-white/5 border border-white/20 text-white hover:bg-white/10'
              }`}
            >
              <MessageCircle className="w-5 h-5" />
              {t('cta.btnContact')}
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
