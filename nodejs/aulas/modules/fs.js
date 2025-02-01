const fs = require('fs');
const path = require('path');

// criar uma pasta
fs.mkdir(path.join(__dirname, '/test'), (error) => {
    if (error) {
        return console.log('Erro: ', error)
    }

    console.log('Pasta criada com sucesso.')
})


// criar um arquivo
fs.writeFile(path.join(__dirname, '/test', 'test.txt'),
 'Hello, Node! ', 
 (error) => {
    if (error) {
        return console.log('Erro: ', error)
    }

    console.log('Arquivo criado.')
})


// adicionar à um arquivo
fs.appendFile(path.join(__dirname, '/test', 'test.txt'),
    'Hello World!',
    (error) => {
        if (error) {
            return console.log('Erro: ', error)
        }
    
        console.log('Arquivo modificado.')
    }
)


// ler um arquivo
fs.readFile(path.join(__dirname, 'test', 'test.txt'), 
    'utf8',
    (error, data) => {
        if (error) {
            return console.log('Erro: ', error)
        }

        console.log(data)
    }
)