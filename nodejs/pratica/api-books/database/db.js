// conexão com o banco de dados
async function connect() {

    if (global.connection) {
        return global.connection.connect();
    }

    const { Pool } = require('pg');
    const pool = new Pool({
        connectionString: process.env.CONNECTION_STRING
    });

    try {
        const client = await pool.connect();
        console.log('Connected to database.');
        client.release();

        global.connection = pool;
        return client;

    } catch (error) {
        console.log('Erro: ', error)
    }
}

connect();

// funções para o banco de dados

async function getBooks() {
    const client = await connect();
    const sql = `
    SELECT book.*, genre.name as "genre" FROM book JOIN genre
    ON book.genre_id = genre.genre_id
    ORDER BY book_id
    `

    const res = await client.query(sql);
    return res.rows;
}

async function getGenreBooks() {
    const client = await connect();

    const res = await client.query('SELECT * FROM genre');
    return res.rows;
}

async function getBooksByGenre(genre) {
    const client = await connect();

    const res = await client.query(`
    SELECT book.*, genre.name FROM book JOIN genre
    ON book.genre_id = genre.genre_id
    WHERE genre.genre_id = $1;
    `, [genre]);
    return res.rows;
}

async function deleteBook(id) {
    const client = await connect();

    const res = client.query('DELETE FROM book WHERE book_id = $1', [id]);
    return res.rows;
}


module.exports = {
    getBooks,
    getGenreBooks,
    getBooksByGenre,
    deleteBook
}