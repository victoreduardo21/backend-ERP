const mongoose = require('mongoose');
const EmpresaSchema = new mongoose.Schema({
    nomeFantasia: { type: String, required: true },
    cnpj: { type: String, required: true, unique: true },
    plano: {
        type: String,
        enum: ['bronze', 'prata', 'ouro'],
        default: 'bronze'
    },
    dataCriacao: { type: Date, default: Date.now }
});
module.exports = mongoose.model('Empresa', EmpresaSchema);