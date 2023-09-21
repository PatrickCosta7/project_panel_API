const fs = require("fs");

function getTodosMovies() {
    return JSON.parse(fs.readFileSync("allMovies.json"));
}

function getMovieComId(id){
    let movies = JSON.parse(fs.readFileSync("allMovies.json"));

    const filmeDaId = movies.filter( movie => movie.id === id )[0];
    return filmeDaId;
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

function deletarMoviePorId(id) {
    const movies = JSON.parse(fs.readFileSync("allMovies.json"));

    const moviesFiltrados = movies.filter( movie => movie.id !== id);
    fs.writeFileSync("allMovies.json", JSON.stringify(moviesFiltrados));
}

module.exports = {
    getTodosMovies,
    getMovieComId,
    inserirMovies,
    modificarMovies,
    deletarMoviePorId
}
