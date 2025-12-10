# RNV - Landing Page

Landing page profissional para agência de desenvolvimento web RNV, construída com Next.js 15, TypeScript e Tailwind CSS.

## Funcionalidades

- **Design Responsivo** - Layout adaptável para desktop, tablet e mobile
- **Tema Claro/Escuro** - Alternância de tema com detecção automática da preferência do sistema
- **Internacionalização (i18n)** - Suporte para Português (BR), Inglês e Espanhol com detecção automática do idioma do navegador
- **Animações Suaves** - Animações com Framer Motion para uma experiência fluida
- **Scroll-based Marquee** - Animação de texto que responde ao scroll da página
- **Seções Completas** - Hero, Por que nos escolher, Serviços, Planos, Processo, Depoimentos, CTA e Footer

## Tech Stack

- **Framework:** Next.js 15 (App Router)
- **Linguagem:** TypeScript
- **Estilização:** Tailwind CSS v4
- **Animações:** Framer Motion
- **Ícones:** Lucide React
- **ORM:** Prisma (preparado para MySQL)
- **Fontes:** Inter + Poppins (Google Fonts)

## Estrutura do Projeto

```
src/
├── app/
│   ├── globals.css      # Estilos globais e variáveis CSS
│   ├── layout.tsx       # Layout principal com fontes
│   └── page.tsx         # Página principal
├── components/
│   ├── layout/          # Header, Footer
│   ├── sections/        # Hero, WhyUs, Services, Pricing, etc.
│   └── ui/              # BackToTop, LanguageSelector, ThemeToggle
├── hooks/
│   ├── useTheme.tsx     # Hook e Provider para tema
│   └── useTranslation.tsx # Hook e Provider para i18n
└── i18n/
    ├── index.ts         # Configuração de idiomas
    └── locales/         # pt-BR.json, en.json, es.json
```

## Instalação

```bash
# Clonar o repositório
git clone https://github.com/NskBR/RNV-Landing-page.git

# Entrar na pasta
cd RNV-Landing-page

# Instalar dependências
npm install

# Iniciar servidor de desenvolvimento
npm run dev
```

Acesse [http://localhost:3000](http://localhost:3000) no navegador.

## Scripts Disponíveis

- `npm run dev` - Inicia o servidor de desenvolvimento
- `npm run build` - Gera build de produção
- `npm run start` - Inicia servidor de produção
- `npm run lint` - Executa verificação de lint

## Configuração do Banco de Dados (Opcional)

O projeto está preparado para MySQL com Prisma. Para configurar:

1. Crie um arquivo `.env` com:
```env
DATABASE_URL="mysql://user:password@localhost:3306/rnv_site"
```

2. Execute as migrações:
```bash
npx prisma db push
npx prisma generate
```

## Variáveis de Ambiente

```env
DATABASE_URL=           # URL de conexão MySQL
NEXT_PUBLIC_WHATSAPP_NUMBER=5521997599694
NEXT_PUBLIC_TELEGRAM_USERNAME=rnvweb
```

## Deploy

O projeto pode ser facilmente deployado na [Vercel](https://vercel.com):

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https://github.com/NskBR/RNV-Landing-page)

## Licença

Este projeto é proprietário da RNV.
