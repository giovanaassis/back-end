const mongoose = require('mongoose');

const connectToDatabase = async () => {
    try {
        await mongoose.connect(`mongodb+srv://${process.env.MONGODB_USERNAME}:${process.env.MONGODB_PASSWORD}@cursonodejs.6apcj.mongodb.net/?retryWrites=true&w=majority&appName=CursoNodeJS`);
        console.log('Conectado ao banco de dados.')
    } catch (error) {
        console.log('Ocorreu um erro ao tentar se conectar ao banco de dados: ', error);
    }
}

module.exports = connectToDatabase;