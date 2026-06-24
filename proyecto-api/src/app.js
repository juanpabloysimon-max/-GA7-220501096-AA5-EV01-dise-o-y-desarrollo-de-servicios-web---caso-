// Importación de los módulos necesarios para levantar el servidor web
const express = require('express');
const authRoutes = require('./routes/authRoutes');

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware para permitir que nuestra API reciba y entienda datos en formato JSON
app.use(express.json());

// Definición de las rutas base para los servicios de autenticación
app.use('/api/auth', authRoutes);

// Inicio del servidor web en el puerto configurado
app.listen(PORT, () => {
    console.log(`Servidor web corriendo satisfactoriamente en el puerto ${PORT}`);
});