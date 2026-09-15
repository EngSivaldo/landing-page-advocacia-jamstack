# ⚖️ Landing Page Institucional para Advocacia (Jamstack & OAB Compliant)

Uma landing page responsiva, de alta performance e ultra-segura, projetada para escritórios de advocacia. Desenvolvida sob a arquitetura **Jamstack**, totalmente adequada às diretrizes do **Provimento 205/2021 da OAB** e às exigências da **LGPD**.

---

## 🛠️ Tech Stack & Arquitetura

* **Front-end:** HTML5 Semântico, CSS3 Moderno (CSS Variables, Flexbox/Grid) e Vanilla JavaScript (ES6+).
* **Arquitetura:** Jamstack estático (Zero server-side runtime, imune a SQL Injection, SSRF ou RCE).
* **Integradores:** Formspree (Webhooks / E-mail Capture) e WhatsApp API Payload.
* **Segurança na Borda:** HTTP Security Headers via `vercel.json` (`X-Frame-Options`, `X-Content-Type-Options`, `Referrer-Policy`).

---

## 🔒 Camadas de Segurança e Compliance Implementadas

* **Sanitização XSS Client-Side:** Higienização de inputs no formulário antes do encriptamento e montagem do payload do WhatsApp via `encodeURIComponent`.
* **Proteção Anti-Spam (Honeypot Pattern):** Campo invisível (`_gotcha`) que descarta requisições automatizadas de bots sem afetar a UX do usuário.
* **Provimento 205/2021 OAB:** Abordagem informativa, sem mercantilização da profissão, com exibição visível do número de inscrição.
* **LGPD Consent:** Checkbox obrigatório de consentimento para tratamento de dados pessoais no agendamento.

---

## 🧪 Testes Automatizados

Para rodar a suíte de validação de segurança e compliance localmente:

\`\`\`bash
node tests/security-compliance.test.js
\`\`\`

---

## 🚀 Como Executar Localmente

1. Clone o repositório:
   \`\`\`bash
   git clone https://github.com/SEU_USUARIO/landing-page-advocacia-jamstack.git
   \`\`\`
2. Abra o arquivo `index.html` em qualquer navegador ou sirva via servidor estático local:
   \`\`\`bash
   npx serve .
   \`\`\`

---

## 📄 Licença
Este projeto está sob a licença [MIT](./LICENSE).