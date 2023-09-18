const { Router } = require("express");
const { getMovies, postMovies } = require("../controladores/movie_control")

const router = Router();

router.get('/', getMovies);

router.post('/', postMovies);

module.exports = router;