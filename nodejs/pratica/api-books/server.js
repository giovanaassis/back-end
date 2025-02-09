require('dotenv').config();
const express = require('express');
const db = require('./database/db');

const app = express();
const port = process.env.PORT;

app.use(express.json());

// retorna todos os livros
app.get('/books', async (req, res) => {
    const books = await db.getBooks();

    res.status(200).json(books);
})

// retorna todos os generos
app.get('/books/genres', async (req, res) => {
    const genres = await db.getGenreBooks();

    res.status(200).json(genres);
})

// retorna livros por genero
app.get('/books/:genre', async (req, res) => {

    const genre = req.params.genre;
    console.log(genre);
    const books = await db.getBooksByGenre(genre);

    res.status(200).json(books);
})

// deleta um livro
app.delete('/books/:id', async (req, res) => {
    const id = req.params.id;
    const book = db.deleteBook(id);

    res.status(200).send('Livro removido com sucesso');
})


app.listen(port, () => console.log('Server running...'));