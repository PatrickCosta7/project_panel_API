const { getTodosMovies, inserirMovies } = require("../servicos/movie_servicos")

function getMovies(req, res) {
    try {
        const movies = getTodosMovies();
        res.send(movies);
    } catch(error) {
        res.status(500);
        res.send(error.message);
    }
}

function postMovies(req, res) {
    try {
        const novoFilme = req.body;

        if( req.body.nome ) {
            inserirMovies(novoFilme);
            res.status(201)
            res.send("Filme adicionado com sucesso!")
        } else {
            res.status(422);
            res.send("Nome do filme é obrigatório.")
        }

    } catch(error) {
        res.status(500)
        res.send(error.message)
    }
}

module.exports = {
    getMovies,
    postMovies
}