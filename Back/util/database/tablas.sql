CREATE DATABASE Cine;

USE Cine;

CREATE TABLE Generos (
    id INT PRIMARY KEY,
    nombre VARCHAR(100)
);

CREATE TABLE Actores (
    id INT PRIMARY KEY,
    nombre VARCHAR(100),
    fecha_nacimiento DATE,
    nacionalidad VARCHAR(100),
    imagen VARCHAR(255)
);

CREATE TABLE Peliculas (
    id INT PRIMARY KEY,
    titulo VARCHAR(100),
    año INT,
    duracion INT,
    sinopsis TEXT,
    genero_id INT,
    FOREIGN KEY (genero_id) REFERENCES Generos(id)
);

CREATE TABLE Series (
    id INT PRIMARY KEY,
    titulo VARCHAR(100),
    año_inicio INT,
    año_fin INT,
    genero_id INT,
    temporada INT,
    episodios INT,
    sinopsis TEXT,
    FOREIGN KEY (genero_id) REFERENCES Generos(id)
);

CREATE TABLE Actores_Peliculas (
    id INT PRIMARY KEY,
    actor_id INT,
    pelicula_id INT,
    FOREIGN KEY (actor_id) REFERENCES Actores(id),
    FOREIGN KEY (pelicula_id) REFERENCES Peliculas(id)
);

CREATE TABLE Actores_Series (
    id INT PRIMARY KEY,
    actor_id INT,
    serie_id INT,
    FOREIGN KEY (actor_id) REFERENCES Actores(id),
    FOREIGN KEY (serie_id) REFERENCES Series(id)
);

CREATE TABLE Usuarios (
    id INT PRIMARY KEY,
    nombre_usuario VARCHAR(100),
    contrasena VARCHAR(100),
    rol VARCHAR(50)
);

CREATE TABLE Perfiles (
    id INT PRIMARY KEY,
    usuario_id INT,
    nombre VARCHAR(100),
    apellido VARCHAR(100),
    email VARCHAR(100),
    FOREIGN KEY (usuario_id) REFERENCES Usuarios(id)
);

CREATE TABLE Favoritos (
    id INT PRIMARY KEY,
    usuario_id INT,
    pelicula_id INT,
    serie_id INT,
    FOREIGN KEY (usuario_id) REFERENCES Usuarios(id),
    FOREIGN KEY (pelicula_id) REFERENCES Peliculas(id),
    FOREIGN KEY (serie_id) REFERENCES Series(id)
);

CREATE TABLE Siguiendo (
    id INT PRIMARY KEY,
    usuario_id INT,
    pelicula_id INT,
    serie_id INT,
    FOREIGN KEY (usuario_id) REFERENCES Usuarios(id),
    FOREIGN KEY (pelicula_id) REFERENCES Peliculas(id),
    FOREIGN KEY (serie_id) REFERENCES Series(id)
);

CREATE TABLE Finalizadas (
    id INT PRIMARY KEY,
    usuario_id INT,
    pelicula_id INT,
    serie_id INT,
    FOREIGN KEY (usuario_id) REFERENCES Usuarios(id),
    FOREIGN KEY (pelicula_id) REFERENCES Peliculas(id),
    FOREIGN KEY (serie_id) REFERENCES Series(id)
);

CREATE TABLE Filtros (
    id INT PRIMARY KEY,
    usuario_id INT,
    genero_id INT,
    FOREIGN KEY (usuario_id) REFERENCES Usuarios(id),
    FOREIGN KEY (genero_id) REFERENCES Generos(id)
);


