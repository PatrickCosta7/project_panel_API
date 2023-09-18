const fs = require("fs");

function getTodosMovies() {
    return JSON.parse(fs.readFileSync("allMovies.json"));
}

module.exports = {
    getTodosMovies
}