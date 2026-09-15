function toggleMenu() {
    const nav = document.getElementById('navLinks');
    nav.classList.toggle('active');
}

function closeMenu() {
    const nav = document.getElementById('navLinks');
    nav.classList.remove('active');
}

function toggleFaq(button) {
    const faqItem = button.parentElement;
    const isActive = faqItem.classList.contains('active');
    
    document.querySelectorAll('.faq-item').forEach(item => {
        item.classList.remove('active');
    });

    if (!isActive) {
        faqItem.classList.add('active');
    }
}

function calcularPrazo() {
    const dataInput = document.getElementById('dataInicio').value;
    const diasAdicionar = parseInt(document.getElementById('tipoPrazo').value);
    const divResultado = document.getElementById('resultadoPrazo');

    if (!dataInput) {
        alert('Por favor, selecione a data de publicação.');
        return;
    }

    let dataAtual = new Date(dataInput + 'T00:00:00');
    let diasUteisAdicionados = 0;

    while (diasUteisAdicionados < diasAdicionar) {
        dataAtual.setDate(dataAtual.getDate() + 1);
        const diaSemana = dataAtual.getDay();
        if (diaSemana !== 0 && diaSemana !== 6) {
            diasUteisAdicionados++;
        }
    }

    const dataFormatada = dataAtual.toLocaleDateString('pt-BR');
    divResultado.style.display = 'block';
    divResultado.innerHTML = `<strong>Estimativa de Vencimento do Prazo:</strong> ${dataFormatada}<br><small>*Nota: Cálculo informativo em dias úteis. Não substitui a conferência da publicação oficial e feriados locais.</small>`;
}

// Higienização de entrada para mitigar XSS / Injeção no Client-Side
function sanitizeInput(str) {
    return str.replace(/[&<>"']/g, function(m) {
        return {
            '&': '&amp;',
            '<': '&lt;',
            '>': '&gt;',
            '"': '&quot;',
            "'": '&#039;'
        }[m];
    }).trim();
}

// Valida os campos do formulário + Proteção Honeypot
function validarFormulario() {
    const form = document.getElementById('contactForm');
    
    // Check Honeypot (Se preenchido, é um bot de spam)
    const honeypot = document.getElementById('website_hp').value;
    if (honeypot) {
        console.warn('Bot de spam detectado via Honeypot.');
        return false;
    }

    if (!form.checkValidity()) {
        form.reportValidity();
        return false;
    }
    return true;
}

// Opção 1: WhatsApp com higienização de inputs
function enviarViaWhatsapp() {
    if (!validarFormulario()) return;

    const nome = sanitizeInput(document.getElementById('nome').value);
    const email = sanitizeInput(document.getElementById('email').value);
    const telefone = sanitizeInput(document.getElementById('telefone').value);
    const assunto = sanitizeInput(document.getElementById('assunto').value);
    const mensagem = sanitizeInput(document.getElementById('mensagem').value);

    const numeroAdvogado = "5511999999999"; 

    const textoFormatado = `*Solicitação de Agendamento (Site)*\n\n` +
        `*Nome:* ${nome}\n` +
        `*E-mail:* ${email}\n` +
        `*Telefone:* ${telefone}\n` +
        `*Área:* ${assunto}\n` +
        `*Resumo do Caso:* ${mensagem}\n\n` +
        `_Declaro que concordo com o tratamento dos dados conforme a LGPD._`;

    const url = `https://wa.me/${numeroAdvogado}?text=${encodeURIComponent(textoFormatado)}`;
    window.open(url, '_blank', 'noopener,noreferrer');
}

// Opção 2: Envio por E-mail (Formspree)
function enviarViaEmail() {
    if (!validarFormulario()) return;

    const form = document.getElementById('contactForm');
    form.submit();
}
