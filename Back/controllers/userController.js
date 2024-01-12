const User = require('../models/userModel');

//Get user by ID
exports.getUserById = async (req, res) => {
    const user = await User.findById(req.params.id);
    if (!user) return res.status(404).send('Usuario no encontrado');

    res.send(user);
};


// GET all users
exports.getUser = async (req, res) => {
    const user = await User.findById(req.params.id);
    if (!user) return res.status(404).send('Usuario no encontrado');

    res.send(user);
};

// POST a new user
exports.createUser = async (req, res) => {
    let user = new User({
        name: req.body.name,
        email: req.body.email,
        password: req.body.password
    });

    user = await user.save();
    res.send(user);
};

//Delete user by ID
exports.deleteUser = async (req, res) => {
    const user = await User.findByIdAndDelete(req.params.id);
    if (!user) return res.status(404).send('Usuario no encontrado');

    res.send('Usuario eliminado');
};

//Update user by ID
exports.updateUser = async (req, res) => {
    const user = await User.findByIdAndUpdate(req.params.id, req.body, { new: true });
    if (!user) return res.status(404).send('Usuario no encontrado');

    res.send(user);
};


//Rutas protegidas
exports.protectedRoute = (req, res) => {
    const userId = req.userId;
    User.findById(userId, (err, user) => {
        if (err) {
            return res.status(500).json({ message: 'Error al obtener información del usuario' });
        }
        if (!user) {
            return res.status(404).json({ message: 'Usuario no encontrado' });
        }
        const userData = {
            id: user._id,
            name: user.name,
            email: user.email
        };
        res.json({ message: 'Ruta protegida', user: userData });
    });
};