const fs = require("fs");

function getTodosMovies() {
    return JSON.parse(fs.readFileSync("allMovies.json"));
}

function inserirMovies(novoMovie) {
    const movies = JSON.parse(fs.readFileSync("allMovies.json"));
    const novaListaMovies = [...movies, novoMovie];

    fs.writeFileSync("allMovies.json", JSON.stringify(novaListaMovies));
}

module.exports = {
    getTodosMovies,
    inserirMovies
}