const sharp = require('sharp');
const fs = require('fs');

async function convert() {
  try {
    const svgBuffer = fs.readFileSync('./assets/images/scale-balanced.svg');
    await sharp(svgBuffer, { density: 300 })
      .resize(512, 512)
      .png()
      .toFile('./assets/images/scale-balanced.png');
    console.log('Ícone PNG gerado com sucesso!');
  } catch (error) {
    console.error('Erro na conversão:', error);
  }
}

convert();
