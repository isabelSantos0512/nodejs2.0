const readline = require('readline');
const fs = require('fs');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

"scripts"; {
    "start"; "node index.js"
    
}

rl.question('Digite o texto que deseja salvar no arquivo: ', (text) => {
  fs.writeFile('arquivo.txt', text, (err) => {
    if (err) throw err;
    console.log('O texto foi salvo com sucesso no arquivo!');
    rl.close();
  });
});

