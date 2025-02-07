async function connect() {

    // retorna a conexão, se já tiver feito
    if (global.connection) {
        return global.connection.connect();
    };

    const { Pool } = require('pg');

    const pool = new Pool({
        connectionString: process.env.CONNECTION_STRING
    });

    try {
        // faz a conexão com o banco de dados
        const client = await pool.connect();
        console.log('Conectado ao banco de dados.');
        // libera a conexão
        client.release();

        // armazena o pool globalmente
        global.connection = pool;
        return client;
        
    } catch (error) {
        console.log('Erro: ', error);
    }

}

connect();