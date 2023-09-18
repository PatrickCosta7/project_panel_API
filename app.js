const express = require("express");
const cors = require("cors");
const rotaMovies = require("./rotas/movies")

const app = express();
app.use(express.json());
app.use(cors({origin:"*"}));

app.use('/movies', rotaMovies)

const port = 8001;

app.listen(port, () => {
    console.log(`Escutando porta ${port}`)
});
