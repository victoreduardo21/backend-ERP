const Empresa = require('../models/Empresa');
const Usuario = require('../models/Usuario');

const registrarEmpresaEUsuario = async (dados) => {
    // 1. Criar a Empresa (O "Tenant")
    const novaEmpresa = await Empresa.create({
        nomeFantasia: dados.nomeFantasia,
        cnpj: dados.cnpj,
        plano: dados.plano || 'bronze'
    });

    // 2. Criar o Usuário Administrador vinculado a essa empresa
    const novoUsuario = await Usuario.create({
        nome: dados.nome,
        email: dados.email,
        senha: dados.senha, // Dica: No futuro usaremos bcrypt aqui!
        empresaId: novaEmpresa._id,
        cargo: 'admin'
    });

    return { novaEmpresa, novoUsuario };
};

module.exports = { registrarEmpresaEUsuario };