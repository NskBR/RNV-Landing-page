'use client';

import Link from 'next/link';
import Image from 'next/image';
import { useTranslation } from '@/hooks/useTranslation';
import { useTheme } from '@/hooks/useTheme';
import { Mail, Phone, MapPin, Instagram, Linkedin, Github } from 'lucide-react';

export function Footer() {
  const { t } = useTranslation();
  const { theme } = useTheme();
  const isLight = theme === 'light';
  const currentYear = new Date().getFullYear();

  const quickLinks = [
    { href: '#home', label: t('nav.home') },
    { href: '#services', label: t('nav.services') },
    { href: '#about', label: t('nav.about') },
    { href: '#contact', label: t('nav.contact') },
  ];

  const services = ['Landing Pages', 'Sites Institucionais', 'Manutenção', 'SEO'];

  return (
    <footer className={`border-t ${isLight ? 'bg-gray-50 border-gray-200' : 'bg-[#0a0a14] border-white/5'}`}>
      <div className="container mx-auto px-4 lg:px-8 py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Brand */}
          <div>
            <Link href="/" className="inline-block mb-4">
              <Image
                src="/Logo/logo.png"
                alt="RNV Logo"
                width={160}
                height={50}
                className="h-14 w-auto"
              />
            </Link>
            <p className={`text-sm leading-relaxed mb-6 ${isLight ? 'text-gray-600' : 'text-gray-400'}`}>
              {t('footer.description')}
            </p>
            <div className="flex items-center gap-4">
              <a
                href="#"
                className={`w-10 h-10 rounded-lg flex items-center justify-center transition-colors ${isLight ? 'bg-gray-100 hover:bg-purple-100' : 'bg-white/5 hover:bg-purple-500/20'}`}
                aria-label="Instagram"
              >
                <Instagram className={`w-5 h-5 ${isLight ? 'text-gray-600' : 'text-gray-400'}`} />
              </a>
              <a
                href="#"
                className={`w-10 h-10 rounded-lg flex items-center justify-center transition-colors ${isLight ? 'bg-gray-100 hover:bg-purple-100' : 'bg-white/5 hover:bg-purple-500/20'}`}
                aria-label="LinkedIn"
              >
                <Linkedin className={`w-5 h-5 ${isLight ? 'text-gray-600' : 'text-gray-400'}`} />
              </a>
              <a
                href="#"
                className={`w-10 h-10 rounded-lg flex items-center justify-center transition-colors ${isLight ? 'bg-gray-100 hover:bg-purple-100' : 'bg-white/5 hover:bg-purple-500/20'}`}
                aria-label="GitHub"
              >
                <Github className={`w-5 h-5 ${isLight ? 'text-gray-600' : 'text-gray-400'}`} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold mb-4">{t('footer.quickLinks')}</h4>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className={`text-sm transition-colors ${isLight ? 'text-gray-600 hover:text-purple-600' : 'text-gray-400 hover:text-purple-400'}`}
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-semibold mb-4">{t('footer.services')}</h4>
            <ul className="space-y-3">
              {services.map((service) => (
                <li key={service}>
                  <a
                    href="#services"
                    className={`text-sm transition-colors ${isLight ? 'text-gray-600 hover:text-purple-600' : 'text-gray-400 hover:text-purple-400'}`}
                  >
                    {service}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-semibold mb-4">{t('footer.contact')}</h4>
            <ul className="space-y-4">
              <li className={`flex items-center gap-3 text-sm ${isLight ? 'text-gray-600' : 'text-gray-400'}`}>
                <Mail className={`w-5 h-5 flex-shrink-0 ${isLight ? 'text-purple-600' : 'text-purple-400'}`} />
                contato@rnv.com.br
              </li>
              <li className={`flex items-center gap-3 text-sm ${isLight ? 'text-gray-600' : 'text-gray-400'}`}>
                <Phone className={`w-5 h-5 flex-shrink-0 ${isLight ? 'text-purple-600' : 'text-purple-400'}`} />
                (21) 96731-5691
              </li>
              <li className={`flex items-center gap-3 text-sm ${isLight ? 'text-gray-600' : 'text-gray-400'}`}>
                <MapPin className={`w-5 h-5 flex-shrink-0 ${isLight ? 'text-purple-600' : 'text-purple-400'}`} />
                Rio de Janeiro, RJ
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Copyright */}
      <div className={`border-t ${isLight ? 'border-gray-200' : 'border-white/5'}`}>
        <div className="container mx-auto px-4 lg:px-8 py-6">
          <p className={`text-center text-sm ${isLight ? 'text-gray-500' : 'text-gray-500'}`}>
            &copy; {currentYear} RNV. {t('footer.copyright')}
          </p>
        </div>
      </div>
    </footer>
  );
}
