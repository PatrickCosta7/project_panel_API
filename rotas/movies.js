const { Router } = require("express");
const { getMovies, postMovies, patchMovies, deleteMovie, getMoviePorId } = require("../controladores/movie_control")

const router = Router();

router.get('/', getMovies);

router.get('/:id', getMoviePorId);

router.post('/', postMovies);

router.patch('/:id', patchMovies);

router.delete('/:id', deleteMovie);

module.exports = router;