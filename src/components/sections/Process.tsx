'use client';

import { useTranslation } from '@/hooks/useTranslation';
import { useTheme } from '@/hooks/useTheme';
import { motion } from 'framer-motion';
import { MessageSquare, Palette, Code, Rocket } from 'lucide-react';

const processIcons = [MessageSquare, Palette, Code, Rocket];
const processKeys = ['briefing', 'design', 'development', 'delivery'];

export function Process() {
  const { t } = useTranslation();
  const { theme } = useTheme();
  const isLight = theme === 'light';

  return (
    <section id="about" className={`py-24 ${isLight ? 'bg-gray-50' : 'bg-[#0f0f1a]'}`}>
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
            {t('process.badge')}
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
            {t('process.title')}{' '}
            <span className="bg-gradient-to-r from-pink-400 via-purple-400 to-blue-400 bg-clip-text text-transparent">
              {t('process.titleHighlight')}
            </span>
          </h2>
          <p className={`max-w-2xl mx-auto ${isLight ? 'text-gray-600' : 'text-gray-400'}`}>
            {t('process.description')}
          </p>
        </motion.div>

        {/* Process Timeline */}
        <div className="relative max-w-5xl mx-auto">
          {/* Connection Line */}
          <div className="absolute left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-pink-500 via-purple-500 to-blue-500 hidden lg:block" />

          <div className="space-y-12 lg:space-y-0">
            {processKeys.map((key, index) => {
              const Icon = processIcons[index];
              const isEven = index % 2 === 0;

              return (
                <motion.div
                  key={key}
                  initial={{ opacity: 0, x: isEven ? -50 : 50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className={`relative flex items-center lg:h-40 ${
                    isEven ? 'lg:flex-row' : 'lg:flex-row-reverse'
                  }`}
                >
                  {/* Content */}
                  <div className={`flex-1 ${isEven ? 'lg:pr-16 lg:text-right' : 'lg:pl-16'}`}>
                    <div className={`rounded-2xl p-6 transition-all duration-300 hover:-translate-y-1 ${
                      isLight
                        ? 'bg-white border border-gray-200 hover:border-purple-300 shadow-lg'
                        : 'bg-[#1a1a2e] border border-white/5 hover:border-purple-500/20'
                    }`}>
                      <div className={`flex items-center gap-4 mb-3 ${isEven ? 'lg:flex-row-reverse' : ''}`}>
                        <div className={`lg:hidden w-12 h-12 rounded-xl flex items-center justify-center ${isLight ? 'bg-gradient-to-r from-pink-100 via-purple-100 to-blue-100' : 'bg-gradient-to-r from-pink-500/20 via-purple-500/20 to-blue-500/20'}`}>
                          <Icon className={`w-6 h-6 ${isLight ? 'text-purple-600' : 'text-purple-400'}`} />
                        </div>
                        <h3 className="text-xl font-bold">{t(`process.steps.${key}.title`)}</h3>
                      </div>
                      <p className={isLight ? 'text-gray-600' : 'text-gray-400'}>{t(`process.steps.${key}.description`)}</p>
                    </div>
                  </div>

                  {/* Center Icon (Desktop) */}
                  <div className={`hidden lg:flex absolute left-1/2 -translate-x-1/2 w-16 h-16 rounded-2xl items-center justify-center shadow-lg z-10 ${
                    isLight
                      ? 'bg-white border border-purple-200 shadow-purple-100'
                      : 'bg-[#1a1a2e] border border-purple-500/30 shadow-purple-500/20'
                  }`}>
                    <Icon className={`w-7 h-7 ${isLight ? 'text-purple-600' : 'text-purple-400'}`} />
                  </div>

                  {/* Empty space for alignment */}
                  <div className="hidden lg:block flex-1" />
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
