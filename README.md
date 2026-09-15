```markdown
# ⚖️ Landing Page Institucional para Advocacia (Jamstack & OAB Compliant)

[![Vercel Deployment](https://img.shields.io/badge/Vercel-Live_Demo-black?style=flat-square&logo=vercel)](https://landing-page-advocacia-jamstack.vercel.app)
[![GitHub Pages](https://img.shields.io/badge/GitHub_Pages-Backup_Host-blue?style=flat-square&logo=github)](https://EngSivaldo.github.io/landing-page-advocacia-jamstack)
[![Lighthouse Score](https://img.shields.io/badge/Lighthouse-100%2F100-brightgreen?style=flat-square)](https://landing-page-advocacia-jamstack.vercel.app)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg?style=flat-square)](./LICENSE)

Landing page institucional para escritório de advocacia, focada em conversão, segurança e conformidade regulatória. O projeto adota a arquitetura **Jamstack** e atende integralmente às exigências da LGPD e do **Provimento 205/2021 da OAB**.

---

## 🛠️ Arquitetura & Decisões Técnicas

* **Front-end:** HTML5 Semântico, CSS3 Moderno (CSS Variables, Flexbox/Grid) e Vanilla JavaScript (ES6+).
* **Entrega Estática (Jamstack):** Compilação e servimento estático via `@vercel/static`. A eliminação de rotas dinâmicas no servidor reduz a superfície de ataque contra vulnerabilidades RCE e SQLi.
* **Redundância CI/CD:** Pipeline de implantação contínua configurado com distribuição primária na Vercel Edge Network e espelhamento no GitHub Pages.
* **Otimização de Ativos:** Carregamento de estilos e scripts otimizado para alcançar pontuação máxima em métricas do Google Lighthouse.

---

## 🔒 Segurança e Compliance

* **Cabeçalhos HTTP (Edge Hardening):** Injeção de políticas de segurança no `vercel.json`, incluindo `X-Frame-Options: DENY`, `X-Content-Type-Options: nosniff`, `Referrer-Policy` e restrição de dispositivos via `Permissions-Policy`.
* **Sanitização no Client-Side:** Validação e higienização de inputs no formulário de contato antes da formação do payload do WhatsApp via `encodeURIComponent`.
* **Mecanismo Anti-Spam:** Proteção via Honeypot (`_gotcha`) para interceptação de robôs sem necessidade de Captcha visível.
* **Normativa OAB:** Layout estritamente informativo, respeitando as regras de publicidade jurídica e exibição do registro profissional.
* **LGPD:** Termo de consentimento explícito no formulário antes do envio de dados do usuário.

---

## 🧪 Testes Automatizados

Para executar os testes de validação de segurança e conformidade:

```bash
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



