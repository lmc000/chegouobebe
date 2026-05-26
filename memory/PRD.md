# PRD — Coisas para Gatos (Landing Page)

## Problema original
Site afiliado de nicho para Portugal (PT-PT) focado em produtos para gatos
(Amazon ES affiliates). Objetivo: converter donos de gatos que pesquisam
"melhor X para gatos" em cliques para reviews / links afiliados. Tom: amigável,
acolhedor, confiável — pet brand fofo 🐱.

## Arquitetura
- **Frontend**: React (CRA + Craco) + TailwindCSS + lucide-react + Nunito (Google Fonts)
- **Backend**: Não utilizado nesta fase (landing estática)
- **Routing**: react-router-dom — única rota `/` → `Landing`

## Personas
- Dono(a) de gato em Portugal a pesquisar antes de comprar (produtos 25–250€)
- Visita via pesquisa Google ("melhor fonte água gatos", "areia tofu", etc.)

## Decisões do utilizador (sessão inicial)
- Secções: Hero + Categorias + Top Produtos + Artigos + Newsletter + Footer
- 6 categorias: Alimentação, Higiene, Conforto, Diversão, Viagens, Saúde
- Newsletter: apenas visual (sem backend nesta fase)
- Stack: frontend-only
- Paleta: Pêssego/coral + creme + castanho suave

## O que foi implementado (Dec 2025)
- [x] Landing page completa com 7 secções (Header fixo, Hero, Categorias, Top Produtos, Artigos, Newsletter, Footer)
- [x] Header responsivo com menu mobile (hamburger)
- [x] Hero com badge de prova social, 2 CTAs, imagem destacada e cards flutuantes
- [x] 6 cartões de categorias com ícones lucide-react e hover effects
- [x] 4 cartões de produtos destacados com rating, preço, badge e botão "Ver na Amazon" (afiliado)
- [x] 3 cartões de artigos recentes (guia de compra, problema→solução, comportamento)
- [x] Newsletter form visual com estado "Inscrito!"
- [x] Footer escuro com brand, 3 colunas de links, social icons, disclaimer de afiliação e copyright
- [x] Tipografia Nunito (PT-PT), paleta peach/coral/cream, animações sutis (paws flutuantes, fade-up)
- [x] data-testid em todos os elementos interativos (testado por testing_agent_v3 — 100% pass)

## Backlog priorizado

### P0 — próximos passos lógicos
- [ ] Criar páginas de categoria (`/alimentacao`, `/higiene`, etc.) com listagens de produtos
- [ ] Criar template de página de artigo / review individual (Markdown ou MDX)
- [ ] SEO técnico: meta tags dinâmicas, sitemap.xml, robots.txt, schema.org Review/Product
- [ ] OpenGraph + Twitter cards
- [ ] Domínio + deploy (GitHub + Cloudflare Pages)

### P1 — monetização e crescimento
- [ ] Newsletter funcional (backend + integração ESP — ex: Resend/SendGrid)
- [ ] Integração real Amazon Associates (tags de afiliação dinâmicas por país)
- [ ] Página "Como avaliamos" para reforçar confiança
- [ ] Página "Sobre nós" + página de contactos
- [ ] Política de privacidade + cookies (RGPD)

### P2 — escala
- [ ] Sistema de pesquisa interna
- [ ] Comparador de produtos
- [ ] Filtros (preço, rating, marca)
- [ ] Versão multi-marketplace (Worten, KuantoKusta)
- [ ] Dashboard admin para gerir produtos/artigos

## Como correr localmente
- Frontend já gerido por supervisor em `:3000`
- Acesso público via `REACT_APP_BACKEND_URL` (ver `/app/frontend/.env`)
