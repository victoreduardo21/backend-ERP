const authService = require('../services/authService');

exports.registrar = async (req, res) => {
    try {
        const resultado = await authService.registrarEmpresaEUsuario(req.body);
        res.status(201).json({
            mensagem: "Empresa e Usuário criados com sucesso!",
            dados: resultado
        });
    } catch (error) {
        res.status(400).json({ erro: error.message });
    }
};