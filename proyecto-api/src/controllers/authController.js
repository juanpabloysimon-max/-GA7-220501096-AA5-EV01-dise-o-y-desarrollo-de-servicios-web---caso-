// Simulación de una base de datos en memoria utilizando un arreglo global de objetos
const usuariosDB = [];

// Controlador para gestionar el Registro de Usuarios
exports.registrarUsuario = async (req, res) => {
    try {
        const { usuario, contrasena } = req.body;

        // Validación obligatoria: Verificar que los campos no lleguen vacíos
        if (!usuario || !contrasena) {
            return res.status(400).json({ error: "El usuario y la contraseña son obligatorios." });
        }

        // Validación: Verificar si el nombre de usuario ya está registrado
        const existeUsuario = usuariosDB.find(u => u.usuario === usuario);
        if (existeUsuario) {
            return res.status(400).json({ error: "El nombre de usuario ya se encuentra registrado." });
        }

        // Creación del nuevo usuario y almacenamiento en la base de datos simulada
        const nuevoUsuario = {
            id: usuariosDB.length + 1,
            usuario: usuario,
            contrasena: contrasena 
        };
        usuariosDB.push(nuevoUsuario);

        return res.status(201).json({
            mensaje: "Usuario registrado con éxito."
        });

    } catch (error) {
        return res.status(500).json({ error: "Error interno del servidor al registrar usuario." });
    }
};

// Controlador para gestionar el Inicio de Sesión (Login)
exports.iniciarSesion = async (req, res) => {
    try {
        const { usuario, contrasena } = req.body;

        // Búsqueda del usuario en el arreglo simulación de base de datos
        const usuarioEncontrado = usuariosDB.find(u => u.usuario === usuario);

        // Caso solicitado por la evidencia: Si la autenticación es incorrecta devuelve error
        if (!usuarioEncontrado || usuarioEncontrado.contrasena !== contrasena) {
            return res.status(401).json({ 
                error: "Error en la autenticación. Credenciales inválidas." 
            });
        }

        // Caso solicitado por la evidencia: Mensaje de autenticación satisfactoria
        return res.status(200).json({ 
            mensaje: "Autenticación satisfactoria." 
        });

    } catch (error) {
        return res.status(500).json({ error: "Error interno del servidor al iniciar sesión." });
    }
  