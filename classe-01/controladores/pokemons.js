const conexao = require('../conexao');
const jwt = require('jsonwebtoken');
const jwtSecret = require('../jwt_secret');

const cadastrarPokemon = async (req, res) => {
    const { nome, habilidades, imagem, apelido, token } = req.body;

    if (!nome) {
        return res.status(400).json("O campo nome é obrigatório.");
    }

    if (!habilidades) {
        return res.status(400).json("O campo habilidades é obrigatório.");
    }

    if (!token) {
        return res.status(400).json("O campo token é obrigatório.");
    }

    try {
        const usuario = jwt.verify(token, jwtSecret);
    } catch (error) {
        return res.status(400).json(`O token fornecido é invalido.`)
    }



    try {
        const usuario = jwt.verify(token, jwtSecret);
        const query = 'insert into pokemons (usuario_id, nome, habilidades, imagem, apelido) values ($1, $2, $3, $4, $5)';
        const pokemon = await conexao.query(query, [usuario.id, nome, habilidades, imagem, apelido]);

        if (pokemon.rowCount === 0) {
            return res.status(400).json("Não foi possível cadastrar o pokémon");
        }

        return res.status(200).json('Pokemón cadastrado com sucesso');

    } catch (error) {
        return res.status(400).json(error.message);
    }
}

module.exports = {
    cadastrarPokemon
}