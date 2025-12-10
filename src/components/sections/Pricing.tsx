'use client';

import { useTranslation } from '@/hooks/useTranslation';
import { useTheme } from '@/hooks/useTheme';
import { motion } from 'framer-motion';
import { Check, MessageCircle, Send } from 'lucide-react';

const WHATSAPP_NUMBER = process.env.NEXT_PUBLIC_WHATSAPP_NUMBER || '5521997599694';
const TELEGRAM_USERNAME = process.env.NEXT_PUBLIC_TELEGRAM_USERNAME || 'rnvweb';

export function Pricing() {
  const { t, locale } = useTranslation();
  const { theme } = useTheme();
  const isLight = theme === 'light';

  const plans = [
    { key: 'start', featured: false },
    { key: 'pro', featured: true },
    { key: 'premium', featured: false },
  ];

  const getWhatsAppMessage = (planName: string) => {
    const messages: Record<string, string> = {
      'pt-BR': `Olá! Tenho interesse no *${planName}*. Gostaria de mais informações.`,
      'en': `Hello! I'm interested in the *${planName}*. I'd like more information.`,
      'es': `¡Hola! Estoy interesado en el *${planName}*. Me gustaría más información.`,
    };
    return encodeURIComponent(messages[locale] || messages['pt-BR']);
  };

  const getTelegramMessage = (planName: string) => {
    const messages: Record<string, string> = {
      'pt-BR': `Olá! Tenho interesse no ${planName}. Gostaria de mais informações.`,
      'en': `Hello! I'm interested in the ${planName}. I'd like more information.`,
      'es': `¡Hola! Estoy interesado en el ${planName}. Me gustaría más información.`,
    };
    return encodeURIComponent(messages[locale] || messages['pt-BR']);
  };

  return (
    <section id="pricing" className={`py-24 ${isLight ? 'bg-white' : 'bg-[#13132a]'}`}>
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
            {t('pricing.badge')}
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
            {t('pricing.title')}{' '}
            <span className="bg-gradient-to-r from-pink-400 via-purple-400 to-blue-400 bg-clip-text text-transparent">
              {t('pricing.titleHighlight')}
            </span>
          </h2>
          <p className={`max-w-2xl mx-auto ${isLight ? 'text-gray-600' : 'text-gray-400'}`}>
            {t('pricing.description')}
          </p>
        </motion.div>

        {/* Pricing Grid */}
        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {plans.map((plan, index) => {
            const planName = t(`pricing.plans.${plan.key}.name`);
            const features = t(`pricing.plans.${plan.key}.features`);
            const featureList = typeof features === 'string' ? features.split(',') : [];

            return (
              <motion.article
                key={plan.key}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className={`group relative p-8 border rounded-2xl transition-all duration-500 hover:-translate-y-2 overflow-visible ${
                  isLight
                    ? plan.featured
                      ? 'bg-white border-purple-300 shadow-2xl shadow-purple-100 scale-105 z-10'
                      : 'bg-white border-gray-200 hover:border-purple-300 shadow-lg'
                    : plan.featured
                      ? 'bg-[#1a1a2e] border-purple-500/50 shadow-xl shadow-purple-500/20 scale-105 z-10'
                      : 'bg-[#1a1a2e] border-white/5 hover:border-purple-500/20'
                }`}
              >
                {/* Popular Badge */}
                {plan.featured && (
                  <div className="absolute -top-4 left-1/2 -translate-x-1/2 px-6 py-2 bg-gradient-to-r from-pink-500 to-purple-500 rounded-full text-sm font-bold text-white shadow-lg shadow-purple-500/30 whitespace-nowrap">
                    {t('pricing.popular')}
                  </div>
                )}

                {/* Hover Glow */}
                <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-pink-500/5 via-purple-500/5 to-blue-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                <div className="relative z-10">
                  {/* Plan Tag */}
                  <span className={`inline-block px-3 py-1 rounded-full text-xs font-medium mb-4 ${
                    isLight
                      ? plan.featured ? 'bg-purple-100 text-purple-600' : 'bg-gray-100 text-gray-600'
                      : plan.featured ? 'bg-purple-500/20 text-purple-300' : 'bg-white/5 text-gray-400'
                  }`}>
                    {t(`pricing.plans.${plan.key}.tag`)}
                  </span>

                  {/* Plan Name */}
                  <h3 className={`text-2xl font-bold mb-2 transition-colors ${isLight ? 'group-hover:text-purple-600' : 'group-hover:text-purple-400'}`}>
                    {planName}
                  </h3>

                  {/* Description */}
                  <p className={`text-sm mb-6 ${isLight ? 'text-gray-600' : 'text-gray-400'}`}>
                    {t(`pricing.plans.${plan.key}.description`)}
                  </p>

                  {/* Features */}
                  <ul className="space-y-4 mb-8">
                    {featureList.map((feature: string, i: number) => (
                      <li key={i} className="flex items-start gap-3">
                        <Check className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                        <span className={isLight ? 'text-gray-700' : 'text-gray-300'}>{feature}</span>
                      </li>
                    ))}
                  </ul>

                  {/* Buttons */}
                  <div className="flex gap-3">
                    <a
                      href={`https://wa.me/${WHATSAPP_NUMBER}?text=${getWhatsAppMessage(planName)}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-1 flex items-center justify-center gap-2 py-3 bg-[#25D366] hover:bg-[#20bd5a] rounded-xl font-semibold text-white transition-all duration-300 hover:-translate-y-0.5 hover:shadow-lg hover:shadow-green-500/30"
                    >
                      <MessageCircle className="w-5 h-5" />
                      <span className="text-sm">{t('pricing.btnWhatsApp')}</span>
                    </a>
                    <a
                      href={`https://t.me/${TELEGRAM_USERNAME}?text=${getTelegramMessage(planName)}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-1 flex items-center justify-center gap-2 py-3 bg-[#0088cc] hover:bg-[#0077b3] rounded-xl font-semibold text-white transition-all duration-300 hover:-translate-y-0.5 hover:shadow-lg hover:shadow-blue-500/30"
                    >
                      <Send className="w-5 h-5" />
                      <span className="text-sm">{t('pricing.btnTelegram')}</span>
                    </a>
                  </div>
                </div>
              </motion.article>
            );
          })}
        </div>

        {/* Note */}
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className={`text-center text-sm mt-12 max-w-2xl mx-auto ${isLight ? 'text-gray-500' : 'text-gray-500'}`}
        >
          {t('pricing.note')}
        </motion.p>
      </div>
    </section>
  );
}
