# 1. Usa a imagem oficial do Node.js
FROM node:18-alpine

# 2. Define a pasta de trabalho dentro do container
WORKDIR /app

# 3. Copia os arquivos da sua máquina para dentro do container
COPY server.js index.html ./

# 4. Informa a porta que a aplicação usa
EXPOSE 3000

# 5. Comando executado ao iniciar o container
CMD ["node", "server.js"]
