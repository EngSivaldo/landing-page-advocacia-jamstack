const http = require('http');
const fs = require('fs');
const path = require('path');

const server = http.createServer((req, res) => {
    // Exemplo de log para testar o Nodemon
    console.log('Recebendo requisição no servidor atualizado!');

    fs.readFile(path.join(__dirname, 'index.html'), (err, content) => {
        if (err) {
            res.writeHead(500);
            res.end('Erro ao carregar index.html');
        } else {
            res.writeHead(200, { 'Content-Type': 'text/html' });
            res.end(content);
        }
    });
});

server.listen(3000, () => {
    console.log('Servidor com Nodemon ativo rodando na porta 3000');
});
