const express = require('express');
const router = express.Router();
const authController = require('../controllers/authController');

// Ruta encargada del registro de nuevos usuarios: POST /api/auth/register
router.post('/register', authController.registrarUsuario);

// Ruta encargada del inicio de sesión (Login): POST /api/auth/login
router.post('/login', authController.iniciarSesion);

module.exports = router;