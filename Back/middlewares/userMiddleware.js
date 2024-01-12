// userAuthMiddleware.js
const jwt = require('jsonwebtoken');

const userMiddleware = (req, res, next) => {
    // Verificar si se proporciona el token de autenticación en los headers de la solicitud
    const token = req.headers.authorization;

    if (!token) {
        return res.status(401).json({ message: 'Acceso no autorizado. Token de autenticación no proporcionado.' });
    }

    try {
        // Verificar y descifrar el token
        const decoded = jwt.verify(token, 'secretKey');

        // Agregar el ID de usuario a la solicitud para que pueda ser utilizado en el controlador
        req.userId = decoded.userId;

        // Continuar con la ejecución del siguiente middleware o controlador
        next();
    } catch (error) {
        return res.status(401).json({ message: 'Acceso no autorizado. Token de autenticación inválido.' });
    }
};

module.exports = userMiddleware;