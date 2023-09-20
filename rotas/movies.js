const { Router } = require("express");
const { getMovies, postMovies, patchMovies, deleteMovie } = require("../controladores/movie_control")

const router = Router();

router.get('/', getMovies);

router.post('/', postMovies);

router.patch('/:id', patchMovies);

router.delete('/:id', deleteMovie);

module.exports = router;