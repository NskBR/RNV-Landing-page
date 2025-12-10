'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { useTranslation } from '@/hooks/useTranslation';
import { useTheme } from '@/hooks/useTheme';
import { LanguageSelector } from '@/components/ui/LanguageSelector';
import { ThemeToggle } from '@/components/ui/ThemeToggle';
import { Menu, X } from 'lucide-react';

export function Header() {
  const { t } = useTranslation();
  const { theme } = useTheme();
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { href: '#home', label: t('nav.home') },
    { href: '#services', label: t('nav.services') },
    { href: '#pricing', label: t('nav.plans') },
    { href: '#about', label: t('nav.about') },
    { href: '#contact', label: t('nav.contact') },
  ];

  const headerBg = theme === 'light'
    ? 'bg-white/95 shadow-lg shadow-gray-200/50'
    : 'bg-[#0f0f1a]/95 shadow-lg shadow-purple-500/5';

  const navLinkClass = theme === 'light'
    ? 'text-gray-600 hover:text-gray-900'
    : 'text-gray-300 hover:text-white';

  const mobileMenuBg = theme === 'light'
    ? 'bg-white/98 border-gray-200'
    : 'bg-[#0f0f1a]/98 border-white/10';

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? `${headerBg} backdrop-blur-xl py-3`
          : 'bg-transparent py-5'
      }`}
    >
      <div className="container mx-auto px-4 lg:px-8">
        <nav className="flex items-center justify-between relative">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2 group z-10">
            <Image
              src="/Logo/logo.png"
              alt="RNV Logo"
              width={160}
              height={50}
              className="h-14 w-auto transform group-hover:scale-105 transition-transform duration-300"
              priority
            />
          </Link>

          {/* Desktop Navigation - Centered */}
          <ul className="hidden lg:flex items-center gap-8 absolute left-1/2 -translate-x-1/2">
            {navItems.map((item) => (
              <li key={item.href}>
                <a
                  href={item.href}
                  className={`${navLinkClass} font-medium transition-colors duration-300 relative group`}
                >
                  {item.label}
                  <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-pink-400 to-purple-400 transition-all duration-300 group-hover:w-full" />
                </a>
              </li>
            ))}
          </ul>

          {/* Right side */}
          <div className="flex items-center gap-3 z-10">
            <ThemeToggle />
            <LanguageSelector />

            <a
              href="#pricing"
              className="hidden lg:inline-flex items-center gap-2 px-6 py-2.5 bg-gradient-to-r from-pink-500 via-purple-500 to-blue-500 rounded-full font-semibold text-white hover:shadow-lg hover:shadow-purple-500/30 transition-all duration-300 hover:-translate-y-0.5"
            >
              {t('nav.cta')}
            </a>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className={`lg:hidden p-2 rounded-lg transition-colors ${theme === 'light' ? 'hover:bg-gray-100' : 'hover:bg-white/10'}`}
              aria-label="Toggle menu"
            >
              {isMobileMenuOpen ? (
                <X className="w-6 h-6" />
              ) : (
                <Menu className="w-6 h-6" />
              )}
            </button>
          </div>
        </nav>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className={`lg:hidden absolute top-full left-0 right-0 ${mobileMenuBg} backdrop-blur-xl border-t animate-fade-in`}>
            <nav className="container mx-auto px-4 py-6">
              <ul className="flex flex-col gap-4">
                {navItems.map((item) => (
                  <li key={item.href}>
                    <a
                      href={item.href}
                      onClick={() => setIsMobileMenuOpen(false)}
                      className={`block py-3 ${navLinkClass} font-medium transition-colors border-b ${theme === 'light' ? 'border-gray-100' : 'border-white/5'}`}
                    >
                      {item.label}
                    </a>
                  </li>
                ))}
                <li className="pt-4">
                  <a
                    href="#pricing"
                    onClick={() => setIsMobileMenuOpen(false)}
                    className="block text-center py-3 px-6 bg-gradient-to-r from-pink-500 via-purple-500 to-blue-500 rounded-full font-semibold text-white"
                  >
                    {t('nav.cta')}
                  </a>
                </li>
              </ul>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
}
