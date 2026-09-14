const fs = require('fs');
const path = require('path');

const htmlPath = path.join(__dirname, '../index.html');
const jsPath = path.join(__dirname, '../script.js');

const html = fs.readFileSync(htmlPath, 'utf8');
const jsContent = fs.readFileSync(jsPath, 'utf8');

console.log('=== EXECUÇÃO DA SUÍTE DE TESTES DE SEGURANÇA E COMPLIANCE ===\n');

// Teste 1: XSS
eval(jsContent);
const xssPayload = "<script>alert('XSS')</script>";
const sanitized = sanitizeInput(xssPayload);
const xssPassed = !sanitized.includes('<') && !sanitized.includes('>');
console.log(`[${xssPassed ? 'PASSOU' : 'FALHOU'}] Sanitização XSS Client-Side`);

// Teste 2: Honeypot
global.document = {
    getElementById: (id) => {
        if (id === "website_hp") return { value: "http://spam-bot.com" };
        if (id === "contactForm") return { checkValidity: () => true };
        return { value: "teste" };
    }
};
const honeypotPassed = validarFormulario() === false;
console.log(`[${honeypotPassed ? 'PASSOU' : 'FALHOU'}] Proteção Anti-Spam (Honeypot)`);

// Teste 3: Compliance HTML
const checagens = [
    { item: "Inscrição OAB", regex: /OAB\/SP/i },
    { item: "Termo LGPD", regex: /LGPD/i },
    { item: "Provimento 205/2021", regex: /Provimento 205\/2021/i }
];

checagens.forEach(c => {
    console.log(`[${c.regex.test(html) ? 'PASSOU' : 'FALHOU'}] Compliance Legal: ${c.item}`);
});
console.log('\n=============================================================');
