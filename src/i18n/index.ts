import ptBR from './locales/pt-BR.json';
import en from './locales/en.json';
import es from './locales/es.json';

export const locales = {
  'pt-BR': ptBR,
  'en': en,
  'es': es,
} as const;

export type Locale = keyof typeof locales;
export type TranslationKeys = typeof ptBR;

export const defaultLocale: Locale = 'pt-BR';

export const localeNames: Record<Locale, string> = {
  'pt-BR': 'Português',
  'en': 'English',
  'es': 'Español',
};

// Detecta o idioma do navegador e retorna o locale mais próximo
export function detectBrowserLocale(): Locale {
  if (typeof window === 'undefined') return defaultLocale;

  const browserLang = navigator.language || (navigator as any).userLanguage || '';

  // Verifica correspondência exata primeiro
  if (browserLang in locales) {
    return browserLang as Locale;
  }

  // Verifica correspondência parcial (ex: pt -> pt-BR, en-US -> en)
  const langPrefix = browserLang.split('-')[0].toLowerCase();

  if (langPrefix === 'pt') return 'pt-BR';
  if (langPrefix === 'es') return 'es';
  if (langPrefix === 'en') return 'en';

  return defaultLocale;
}

// Obtém uma tradução por caminho de chave (ex: 'nav.home')
export function getTranslation(locale: Locale, path: string): string {
  const keys = path.split('.');
  let result: any = locales[locale];

  for (const key of keys) {
    if (result && typeof result === 'object' && key in result) {
      result = result[key];
    } else {
      // Fallback para o locale padrão
      result = locales[defaultLocale];
      for (const k of keys) {
        if (result && typeof result === 'object' && k in result) {
          result = result[k];
        } else {
          return path; // Retorna a chave se não encontrar
        }
      }
      break;
    }
  }

  return typeof result === 'string' ? result : path;
}
