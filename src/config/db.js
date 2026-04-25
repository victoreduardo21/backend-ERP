const mongoose = require('mongoose');

const conectarDB = async () => {
    try{
        // conecção com a env e  banco de dados
        await mongoose.connect(process.env.MONGO_URI, );
        console.log('banco de dados conectada');
    } catch (error) {
        console.error('erro a conectar a base de dados:', error);
        process.exit(1); // para o servidor se a conexão falhar
    }
};

module.exports = conectarDB;