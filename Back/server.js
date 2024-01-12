const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');

const app = express();

// Connect to MongoDB
mongoose.connect('mongodb://localhost/mydatabase', { 
    useNewUrlParser: true, useUnifiedTopology: true 
});

// Middleware
app.use(bodyParser.json());

// Routes
app.use('/api/users', require('./routes/userRoute'));

// Start server
const port = process.env.PORT || 3000;
app.listen(port, () => console.log(`Servidor escuchando en el puerto ${port}`));

//Configurar la ubicacion de las vistas estaticas
app.use(express.static(__dirname + '/views'));

//Configurar carpeta de vistas
app.set('views', __dirname + '/views');

//Ruta para la página de inicio
app.get('/', (req, res) => {
    res.sendFile('index.html',{
        root: __dirname + '/views'
    });
})