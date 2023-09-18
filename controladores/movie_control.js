const { getTodosMovies } = require("../servicos/movie_servicos")

function getMovies(req, res) {
    try {
        const movies = getTodosMovies();
        res.sende(movies);
    } catch {
        res.status(500);
        res.send(error.message);
    }
}

module.exports = {
    getMovies
}