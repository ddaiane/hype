const express = require("express");
const router = express.Router();


const {
    siglaValida, 
    codigoExisteNoPredio
} = require("./middlewares/middlewares"); //verificações nas middlewares

const {
    getApartamentos,
    getApartamentosPredio,
    getApartamento,
    calculaApartamentos,
    deleteApartamento,
    criaApartamento
} = require("../models/apartamentos");


router.get("/", getApartamentos); //retornar todos apartamentos
router.get("/calcula/:sigla", calculaApartamentos); //calcula quantos apartamentos cadastrados em um predio
router.get("/:sigla", siglaValida, getApartamentosPredio); //retorna todos apartamentos de um predio especifico
router.get("/:sigla/:codigo", siglaValida, codigoExisteNoPredio, getApartamento); //retorna um apartamento especifico
router.delete("/:sigla/:codigo", siglaValida, codigoExisteNoPredio, deleteApartamento); //deleta um apartamento verifica sigla
router.post("/", siglaValida, criaApartamento); //cria apartamentos */ //verifica sigla aqui

module.exports = router;