const express = require('express');
const usuarios = require('./controladores/usuarios');
const pokemons = require('./controladores/pokemons');

const rotas = express();

rotas.post('/usuario', usuarios.cadastrarUsuario);
rotas.post('/login', usuarios.login);

rotas.post('/pokemon', pokemons.cadastrarPokemon);
rotas.patch('/pokemon/:id',);
rotas.get('/pokemon',);
rotas.get('pokemon/:id',);
rotas.delete('pokemon/:id');

module.exports = rotas