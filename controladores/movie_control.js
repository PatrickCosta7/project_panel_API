const { getTodosMovies, inserirMovies, modificarMovies } = require("../servicos/movie_servicos")

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

function patchMovies(req, res) {
    try {
        const id = req.params.id;

        if(id && Number(id)) {
            const body = req.body;
            modificarMovies(body, id)
            res.send("Filme modificado com sucesso");
        } else {
            res.status(422)
            res.send("Id inválido")
        }

    } catch(error) {
        res.status(500)
        res.send(error.message)
    }
}

module.exports = {
    getMovies,
    postMovies,
    patchMovies
}