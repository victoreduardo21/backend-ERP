const express = require('express');
const router = express.Router();
const authController = require('../controllers/authController');

// Rota: POST http://localhost:5000/api/auth/registrar
router.post('/registrar', authController.registrar);

module.exports = router;