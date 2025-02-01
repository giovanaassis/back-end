const path = require('path')

// basename => apenas o nome atual
console.log(path.basename(__filename));


// dirname => nome do diretório atual
console.log(path.dirname(__filename));


// extname => extensão do arquivo
console.log(path.extname(__filename));


// parse => criar objeto path
console.log(path.parse(__filename));


// join => juntar caminhos de arquivos
console.log(path.join(__dirname, 'test', 'test.html'));