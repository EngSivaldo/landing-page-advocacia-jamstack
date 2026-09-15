Aqui está a versão completa e definitiva do `README.md`, contemplando toda a arquitetura evoluída para a versão V2.0 (CI/CD, Observabilidade com Sentry, PWA/Service Worker e Telemetria Privacy-First).

```markdown
# ⚖️ Landing Page Institucional para Advocacia (Jamstack & OAB Compliant)

[![Vercel Deployment](https://img.shields.io/badge/Vercel-Live_Demo-black?style=flat-square&logo=vercel)](https://landing-page-advocacia-jamstack.vercel.app)
[![GitHub Pages](https://img.shields.io/badge/GitHub_Pages-Backup_Host-blue?style=flat-square&logo=github)](https://EngSivaldo.github.io/landing-page-advocacia-jamstack)
[![CI/CD Quality Gate](https://github.com/EngSivaldo/landing-page-advocacia-jamstack/actions/workflows/ci.yml/badge.svg)](https://github.com/EngSivaldo/landing-page-advocacia-jamstack/actions)
[![Lighthouse Score](https://img.shields.io/badge/Lighthouse-100%2F100-brightgreen?style=flat-square)](https://landing-page-advocacia-jamstack.vercel.app)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg?style=flat-square)](./LICENSE)

Landing page institucional para escritório de advocacia, projetada com foco em alta performance, resiliência offline, observabilidade e conformidade regulatória. O projeto adota a arquitetura **Jamstack** e atende integralmente às diretrizes do **Provimento 205/2021 da OAB** e da **LGPD**.

---

## 🛠️ Arquitetura & Decisões Técnicas

* **Front-end:** HTML5 Semântico, CSS3 Moderno (Variables, Flexbox/Grid) e Vanilla JavaScript (ES6+).
* **Entrega Estática (Jamstack):** Compilação e servimento estático via `@vercel/static`. A eliminação de servidores dinâmicos reduz a superfície de ataque contra vulnerabilidades como RCE e SQLi.
* **Resiliência Offline & PWA:** Módulo de Progressive Web App com Service Worker (`sw.js`) e `manifest.json`, aplicando estratégia de *Cache-First* para carregamento instantâneo.
* **Redundância & Automação CI/CD:** Esteira via GitHub Actions com teste automatizado e deploy automatizado na Vercel Edge Network e no GitHub Pages.
* **Observabilidade:** Monitoramento de erros em tempo real no front-end via SDK Sentry com higienização de payloads.
* **Telemetria Privacy-First:** Coleta de métricas *cookie-less* via Cloudflare Web Analytics, garantindo conformidade com a LGPD sem necessidade de banners invasivos de consentimento.

---

## 🔒 Segurança e Compliance

* **Cabeçalhos HTTP (Edge Hardening):** Injeção de políticas de segurança no `vercel.json` (`X-Frame-Options: DENY`, `X-Content-Type-Options: nosniff`, `Referrer-Policy` e `Permissions-Policy`).
* **Sanitização Client-Side:** Validação e higienização de inputs no formulário de contato antes do direcionamento ao WhatsApp via `encodeURIComponent`.
* **Mecanismo Anti-Spam:** Proteção via Honeypot (`_gotcha`) para interceptação de robôs sem necessidade de Captchas visíveis.
* **Normativa OAB:** Layout estritamente informativo, respeitando as regras de publicidade jurídica e exibição do registro profissional.
* **LGPD:** Consentimento explícito no formulário e ausência de rastreadores invasivos de terceiros.

---

## 🧪 Esteira de CI/CD e Testes Automatizados

A pipeline do GitHub Actions (.github/workflows/ci.yml) valida a segurança e compliance a cada *push*:

```bash
# Execução local da suíte de testes:
node tests/security-compliance.test.js

```

---

## 🚀 Execução Local

### Pré-requisitos

* Node.js instalado (ambiente Linux/WSL recomendado).

### Passos

1. Clone o repositório:
```bash
git clone [https://github.com/EngSivaldo/landing-page-advocacia-jamstack.git](https://github.com/EngSivaldo/landing-page-advocacia-jamstack.git)

```


2. Entre no diretório do projeto:
```bash
cd landing-page-advocacia-jamstack

```


3. Inicie o servidor local:
```bash
npx serve .

```



---

## 👨‍💻 Desenvolvedor

**Eng. Sivaldo**

Engenharia de Software

GitHub: [@EngSivaldo](https://www.google.com/search?q=https://github.com/EngSivaldo)

---

## 📄 Licença

Distribuído sob a licença [MIT](https://www.google.com/search?q=./LICENSE).

