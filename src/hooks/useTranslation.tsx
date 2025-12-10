'use client';

import { createContext, useContext, useState, useEffect, ReactNode, useCallback } from 'react';
import { Locale, locales, defaultLocale, detectBrowserLocale, getTranslation } from '@/i18n';

interface TranslationContextType {
  locale: Locale;
  setLocale: (locale: Locale) => void;
  t: (key: string) => string;
  tArray: <T = any>(key: string) => T[];
}

const TranslationContext = createContext<TranslationContextType | undefined>(undefined);

const LOCALE_STORAGE_KEY = 'rnv-locale';

export function TranslationProvider({ children }: { children: ReactNode }) {
  const [locale, setLocaleState] = useState<Locale>(defaultLocale);
  const [isHydrated, setIsHydrated] = useState(false);

  // Detectar idioma na montagem do componente
  useEffect(() => {
    // Primeiro verifica se há um idioma salvo no localStorage
    const savedLocale = localStorage.getItem(LOCALE_STORAGE_KEY) as Locale | null;

    if (savedLocale && savedLocale in locales) {
      setLocaleState(savedLocale);
    } else {
      // Se não houver, detecta o idioma do navegador
      const detectedLocale = detectBrowserLocale();
      setLocaleState(detectedLocale);
      localStorage.setItem(LOCALE_STORAGE_KEY, detectedLocale);
    }

    setIsHydrated(true);
  }, []);

  // Atualiza o locale e salva no localStorage
  const setLocale = useCallback((newLocale: Locale) => {
    setLocaleState(newLocale);
    localStorage.setItem(LOCALE_STORAGE_KEY, newLocale);

    // Atualiza o atributo lang do HTML
    document.documentElement.lang = newLocale;
  }, []);

  // Função de tradução
  const t = useCallback((key: string): string => {
    return getTranslation(locale, key);
  }, [locale]);

  // Função para obter arrays de tradução
  const tArray = useCallback(<T = any>(key: string): T[] => {
    const keys = key.split('.');
    let result: any = locales[locale];

    for (const k of keys) {
      if (result && typeof result === 'object' && k in result) {
        result = result[k];
      } else {
        return [];
      }
    }

    return Array.isArray(result) ? result : [];
  }, [locale]);

  // Evita flash de conteúdo errado durante a hidratação
  if (!isHydrated) {
    return null;
  }

  return (
    <TranslationContext.Provider value={{ locale, setLocale, t, tArray }}>
      {children}
    </TranslationContext.Provider>
  );
}

export function useTranslation() {
  const context = useContext(TranslationContext);

  if (context === undefined) {
    throw new Error('useTranslation must be used within a TranslationProvider');
  }

  return context;
}
