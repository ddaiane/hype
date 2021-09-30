const express = require("express");
const router = express.Router();

const {
    siglaValida,
    predioVazio
} = require("./middlewares/middlewares"); //verificações nas middlewares
const {
    getPredios,
    getPredio,
    deletePredio,
    criaPredio
} = require("../models/predios");


router.get("/", getPredios); //retornar todos predios
router.get("/:sigla", siglaValida, getPredio); //retorna um predio especifico
router.delete("/:sigla", siglaValida, predioVazio, deletePredio); //deleta predio; middleware pra verificar se nao tem apartamentos ligados a ele
router.post("/", criaPredio); //criar predio

module.exports = router;