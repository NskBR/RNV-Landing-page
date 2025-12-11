# Changelog - RNV Landing Page

## Resumo do Projeto

Landing page profissional para a agência de desenvolvimento web RNV, construída do zero com tecnologias modernas.

---

## Tecnologias Utilizadas

- **Framework:** Next.js 15 (App Router)
- **Linguagem:** TypeScript
- **Estilização:** Tailwind CSS v4
- **Animações:** Framer Motion
- **Ícones:** Lucide React
- **ORM:** Prisma (preparado para MySQL)
- **Fontes:** Inter + Poppins (Google Fonts)

---

## Funcionalidades Implementadas

### 1. Sistema de Internacionalização (i18n)
- Suporte para 3 idiomas: Português (BR), Inglês e Espanhol
- Detecção automática do idioma do navegador (`navigator.language`)
- Seletor de idioma com bandeiras no header
- Persistência da escolha em `localStorage`
- Todas as seções traduzidas

### 2. Sistema de Tema Claro/Escuro
- Toggle no header com ícones Sol/Lua
- Detecção automática da preferência do sistema (`prefers-color-scheme`)
- Persistência em `localStorage`
- Transição suave entre temas
- Todas as seções adaptadas para ambos os temas

### 3. Header
- Logo personalizada (PNG)
- Menu de navegação centralizado
- Seletor de idioma
- Toggle de tema
- Botão CTA "Começar Agora"
- Menu mobile responsivo
- Efeito de blur ao scrollar

### 4. Hero Section
- Badge animado
- Título com texto gradiente
- Descrição
- Botões: "Ver Planos" e "Falar com Especialista"
- Estatísticas animadas (150+ projetos, 98% satisfação, 5+ anos)
- Efeitos de blur pulsantes no background
- Indicador de scroll animado

### 5. Marquee (Texto Rolante)
- Animação baseada em scroll (não automática)
- Texto traduzido conforme idioma selecionado
- Background com gradiente
- Items: Sites Profissionais, Landing Pages, Design Exclusivo, etc.

### 6. Seção "Por que escolher a RNV"
- Background com parallax (imagem fixa)
- 4 cards de benefícios:
  - Entrega Rápida
  - Design Profissional
  - 100% Responsivo
  - Suporte Dedicado
- Animações ao hover
- Ícones com Lucide React

### 7. Seção de Serviços
- 2 cards centralizados:
  - **Landing Pages:** Design otimizado para conversão, Integração com ferramentas de marketing, Carregamento ultra-rápido
  - **Sites Institucionais (Mais Popular):** Múltiplas páginas personalizadas, SEO otimizado, Painel administrativo
- Tag "Mais Popular" no card destacado
- Barra animada no topo ao hover (z-index corrigido)
- Link "Saiba mais" direcionando para planos

### 8. Seção de Planos/Preços
- 3 planos:
  - **Plano Start:** Site simples, 1 página, Domínio gratuito, Suporte básico
  - **Plano Pro (Mais Popular):** Website completo (até 5 páginas), Layout profissional, Domínio próprio por 1 ano, SEO básico
  - **Plano Premium:** Website completo, Design exclusivo, Domínio próprio, Otimização avançada, Manutenção por 30 dias
- Badge "Mais Popular" no plano Pro
- Botões de contato: WhatsApp e Telegram
- Mensagens pré-definidas com nome do plano
- Nota sobre valores variáveis

### 9. Seção de Processo
- Timeline com 4 etapas:
  1. Briefing
  2. Design
  3. Desenvolvimento
  4. Entrega
- Layout alternado (esquerda/direita)
- Linha central com gradiente
- Ícones centralizados no desktop

### 10. Seção de Depoimentos
- Carrossel com autoplay (5 segundos)
- 3 depoimentos fictícios
- Navegação com setas e dots
- Animação de transição
- Avatar com inicial do nome

### 11. Seção CTA (Call to Action)
- Título com gradiente
- Descrição
- Botões: "Começar Agora" e "Falar Conosco"
- Background com blobs decorativos

### 12. Footer
- Logo
- Descrição da empresa
- Links rápidos
- Lista de serviços
- Informações de contato (email, telefone, localização)
- Ícones de redes sociais
- Copyright

### 13. Botão "Voltar ao Topo"
- Aparece após 500px de scroll
- Animação suave
- Ícone de seta para cima

---

## Estrutura de Arquivos

```
src/
├── app/
│   ├── globals.css          # Estilos globais, variáveis CSS, tema
│   ├── layout.tsx           # Layout com fontes e metadata
│   └── page.tsx             # Página principal com providers
├── components/
│   ├── layout/
│   │   ├── Header.tsx       # Cabeçalho com nav e controles
│   │   └── Footer.tsx       # Rodapé
│   ├── sections/
│   │   ├── Hero.tsx         # Seção inicial
│   │   ├── Marquee.tsx      # Texto rolante
│   │   ├── WhyUs.tsx        # Por que nos escolher
│   │   ├── Services.tsx     # Serviços
│   │   ├── Pricing.tsx      # Planos
│   │   ├── Process.tsx      # Processo de trabalho
│   │   ├── Testimonials.tsx # Depoimentos
│   │   └── CTA.tsx          # Call to action
│   └── ui/
│       ├── BackToTop.tsx    # Botão voltar ao topo
│       ├── LanguageSelector.tsx # Seletor de idioma
│       └── ThemeToggle.tsx  # Toggle de tema
├── hooks/
│   ├── useTheme.tsx         # Context e hook para tema
│   └── useTranslation.tsx   # Context e hook para i18n
├── i18n/
│   ├── index.ts             # Configuração de idiomas
│   └── locales/
│       ├── pt-BR.json       # Traduções português
│       ├── en.json          # Traduções inglês
│       └── es.json          # Traduções espanhol
└── prisma/
    └── schema.prisma        # Schema do banco (Contact, SiteConfig, PageView)
```

---

## Configurações

### Variáveis de Ambiente (.env)
```
DATABASE_URL="mysql://root:password@localhost:3306/rnv_site"
NEXT_PUBLIC_WHATSAPP_NUMBER=5521997599694
NEXT_PUBLIC_TELEGRAM_USERNAME=rnvweb
```

### Contato
- **WhatsApp:** +55 21 99759-9694
- **Telegram:** @rnvweb
- **Email:** contato@rnv.com.br
- **Localização:** Rio de Janeiro, RJ

---

## Commits Realizados

1. **feat: RNV Landing Page - Site completo com Next.js 15**
   - Estrutura inicial completa
   - Todas as seções implementadas
   - Sistema de i18n e tema

2. **fix: Atualizar descrições dos planos e serviços**
   - Correção das features dos planos
   - Atualização das descrições dos serviços

3. **fix: Corrigir features dos cards e remover preços dos planos**
   - Formato correto das features (string separada por vírgula)
   - Remoção dos preços visíveis

4. **fix: Corrigir z-index da tag "Mais Popular"**
   - Tag não é mais sobreposta pela animação da borda

---

## Repositório

**GitHub:** https://github.com/NskBR/RNV-Landing-page

---

## Como Executar

```bash
# Instalar dependências
npm install

# Iniciar servidor de desenvolvimento
npm run dev

# Acessar
http://localhost:3000
```

---

## Próximos Passos (Pendentes)

- [ ] Configurar banco de dados MySQL quando servidor estiver disponível
- [ ] Atualizar username do Telegram (atualmente: rnvweb)
- [ ] Adicionar links reais das redes sociais
- [ ] Deploy na Vercel ou outro servidor
