const fs = require("fs");

function getTodosMovies() {
    return JSON.parse(fs.readFileSync("allMovies.json"));
}

function inserirMovies(novoMovie) {
    const movies = JSON.parse(fs.readFileSync("allMovies.json"));
    const novaListaMovies = [...movies, novoMovie];

    fs.writeFileSync("allMovies.json", JSON.stringify(novaListaMovies));
}

function modificarMovies(modificacoes, id) {
    let movies = JSON.parse(fs.readFileSync("allMovies.json"));
    const filmeModificado = movies.findIndex(filme => filme.id === id)

    const indiceAlterado = {...movies[filmeModificado], ...modificacoes};
    movies[filmeModificado] = indiceAlterado;

    fs.writeFileSync("allMovies.json", JSON.stringify(movies));
}

module.exports = {
    getTodosMovies,
    inserirMovies,
    modificarMovies
}
