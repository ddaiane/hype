const {
    verificaSigla,
    verificaPredioVazio,
    verificaCodigoNoPredio
} = require("./uteis");

async function siglaValida(req, res, next) {
    try {
        let sigla;
        req.method == 'POST' ? sigla = req.body.sigla : sigla = req.params.sigla; //funcionar tanto com parametros do body quanto da url
        sigla = sigla.toUpperCase();
        if (await verificaSigla(sigla)) {
            next();
        } else {
            res.status(400).json({
                message: "Sigla inexistente"
            }); //se sigla nao existir, devolve ja no middleware
        }
    } catch (error) {
        res.status(400).json(error);
    }
}

async function predioVazio(req, res, next) {
    try {
        let sigla = req.params.sigla;
        sigla = sigla.toUpperCase();
        if (await verificaPredioVazio(sigla)) {
            next();
        } else {
            res.status(400).json({
                message: "Prédio possui apartamentos"
            }); //se tiver apartamentos ligado ao predio, devolve
        }

    } catch (error) {
        res.status(400).json(error);
    }
}

async function codigoExisteNoPredio(req, res, next) {
    try {
        var sigla= req.params.sigla;
        sigla = sigla.toUpperCase();
        const codigo = req.params.codigo;
        if (await verificaCodigoNoPredio(sigla, codigo)) {
            next();
        } else {
            console.log("else")
            res.status(400).json({
                message: "Apartamento não existe no prédio informado"
            });
        }
    } catch (error) {
        res.status(400).json(error);
    }
}



module.exports = {
    siglaValida,
    predioVazio, 
    codigoExisteNoPredio
};