require('dotenv').config();
const express = require('express');
const cors = require('cors');
const conectarDB = require('./config/db');
const authRoutes = require('./routes/authRoutes'); // 1. Importação no topo

const app = express();

// 2. Conectar ao banco
conectarDB();

// 3. Middlewares (Configurações)
app.use(cors());
app.use(express.json());

// 4. Rotas (Sempre antes do app.listen)
app.use('/api/auth', authRoutes);

app.get('/', (req, res) => {
    res.send("API do ERP Conectada!");
});

// 5. Inicialização do Servidor
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
    console.log(`Servidor rodando na porta ${PORT}`);
});