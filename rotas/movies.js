const { Router } = require("express");
const { getMovies } = require("../controladores/movie_control")

const router = Router();

router.get('/', getMovies)

module.exports = router;