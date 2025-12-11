'use client';

import { useTranslation } from '@/hooks/useTranslation';
import { useTheme } from '@/hooks/useTheme';
import { motion } from 'framer-motion';
import { FileText, Building2, Check, ArrowRight } from 'lucide-react';

export function Services() {
  const { t } = useTranslation();
  const { theme } = useTheme();
  const isLight = theme === 'light';

  const services = [
    {
      key: 'landing',
      icon: FileText,
      featured: false,
    },
    {
      key: 'institutional',
      icon: Building2,
      featured: true,
    },
  ];

  return (
    <section id="services" className={`py-24 ${isLight ? 'bg-gray-50' : 'bg-[#0f0f1a]'}`}>
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
            {t('services.badge')}
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
            {t('services.title')}{' '}
            <span className="bg-gradient-to-r from-pink-400 via-purple-400 to-blue-400 bg-clip-text text-transparent">
              {t('services.titleHighlight')}
            </span>
          </h2>
          <p className={`max-w-2xl mx-auto ${isLight ? 'text-gray-600' : 'text-gray-400'}`}>
            {t('services.description')}
          </p>
        </motion.div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {services.map((service, index) => {
            const Icon = service.icon;
            const features = t(`services.${service.key}.features`);
            const featureList = typeof features === 'string' ? features.split(',') : [];

            return (
              <motion.article
                key={service.key}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className={`group relative p-8 border rounded-2xl transition-all duration-500 hover:-translate-y-2 ${
                  isLight
                    ? service.featured
                      ? 'bg-white border-purple-300 shadow-xl shadow-purple-100'
                      : 'bg-white border-gray-200 hover:border-purple-300 shadow-lg'
                    : service.featured
                      ? 'bg-[#1a1a2e] border-purple-500/30 shadow-lg shadow-purple-500/10'
                      : 'bg-[#1a1a2e] border-white/5 hover:border-purple-500/20'
                }`}
              >
                {/* Top Border Animation */}
                <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-pink-500 via-purple-500 to-blue-500 rounded-t-2xl transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left z-0" />

                {/* Featured Tag */}
                {service.featured && (
                  <div className="absolute -top-3 right-6 px-4 py-1 bg-gradient-to-r from-pink-500 to-purple-500 rounded-full text-xs font-semibold text-white z-10">
                    {t(`services.${service.key}.tag`)}
                  </div>
                )}

                {/* Icon */}
                <div className={`w-16 h-16 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300 ${isLight ? 'bg-gradient-to-r from-pink-100 via-purple-100 to-blue-100' : 'bg-gradient-to-r from-pink-500/20 via-purple-500/20 to-blue-500/20'}`}>
                  <Icon className={`w-8 h-8 ${isLight ? 'text-purple-600' : 'text-purple-400'}`} strokeWidth={1.5} />
                </div>

                {/* Content */}
                <h3 className={`text-xl font-bold mb-3 transition-colors ${isLight ? 'group-hover:text-purple-600' : 'group-hover:text-purple-400'}`}>
                  {t(`services.${service.key}.title`)}
                </h3>
                <p className={`mb-6 leading-relaxed ${isLight ? 'text-gray-600' : 'text-gray-400'}`}>
                  {t(`services.${service.key}.description`)}
                </p>

                {/* Features */}
                <ul className="space-y-3 mb-6">
                  {featureList.map((feature: string, i: number) => (
                    <li key={i} className={`flex items-center gap-3 ${isLight ? 'text-gray-700' : 'text-gray-300'}`}>
                      <Check className="w-5 h-5 text-green-500 flex-shrink-0" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>

                {/* CTA Link */}
                <a
                  href="#pricing"
                  className={`inline-flex items-center gap-2 font-medium transition-colors group/link ${isLight ? 'text-purple-600 hover:text-purple-700' : 'text-purple-400 hover:text-purple-300'}`}
                >
                  {t('services.learnMore')}
                  <ArrowRight className="w-4 h-4 transform group-hover/link:translate-x-1 transition-transform" />
                </a>
              </motion.article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
