const {
    QueryTypes
} = require("sequelize");
const db = require("../DB/db");

const {
    verificaCodigoNoPredio
} = require("../routes/middlewares/uteis");


// lista todos apartamentos
async function getApartamentos(req, res) {
    try {
        const apartamentos = await db.query(
            `SELECT * FROM apartamentos`, {
                type: QueryTypes.SELECT
            }
        );
        res.status(200).json(apartamentos);

    } catch (error) {
        res.status(404).json({
            error: true,
            message: error.message
        });
    }
}


//lista apartamentos de um determinado predio
async function getApartamentosPredio(req, res) {
    try {
        let {
            sigla
        } = req.params;
        sigla = sigla.toUpperCase();
        const apartamentos = await db.query(
            `SELECT * FROM apartamentos WHERE predio = '${sigla}' `, {
                type: QueryTypes.SELECT
            }
        );
        res.status(200).json(apartamentos);

    } catch (error) {
        res.status(404).json({
            error: true,
            message: error.message
        });

    }
}


//detalhes de um apartamento especifico
async function getApartamento(req, res) {
    try {
        let {
            sigla,
            codigo
        } = req.params;
        sigla = sigla.toUpperCase();
        const apartamento = await db.query(
            `SELECT * FROM apartamentos WHERE predio = '${sigla}' AND codigo = '${codigo}' `, {
                type: QueryTypes.SELECT
            }
        );
        res.status(200).json(apartamento);

    } catch (error) {
        res.status(404).json({
            error: true,
            message: error.message
        });

    }
}


//deleta um apartamento
async function deleteApartamento(req, res) {
    try {
        let {
            sigla,
            codigo
        } = req.params;
        sigla = sigla.toUpperCase();
        const query = await db.query(
            `DELETE FROM apartamentos WHERE predio ='${sigla}' AND codigo = '${codigo}' RETURNING *`, {
                type: QueryTypes.DELETE,
            }
        );
        res.status(200).json(query[0]); //retorna os dados do apartamento deletado
    } catch (error) {
        res.status(404).json({
            error: true,
            message: error.message
        });
    }
}



//cria um apartamento
async function criaApartamento(req, res) {
    try {
        let {
            codigo,
            quartos,
            banheiros,
            suites,
            area_total,
            sigla
        } = req.body;
        sigla = sigla.toUpperCase();

        //Verificação se todos os campos estão presentes, mensagem para o front
        if (!codigo || !quartos || !banheiros || !suites || !area_total || !sigla) {
            return res.status(400).json({
                message: "Todos os campos são obrigatórios",
            });
        }

        if(await verificaCodigoNoPredio(sigla, codigo)) { //se ja existir esse codigo nesse predio, retorna 400
            return res.status(400).json({
                message: "Unidade já cadastrada no prédio",
            });
        }

        //Verificação se valores tao dentro do exigido
        if (quartos < 0 || banheiros < 0 || suites < 0 || area_total <= 1) {
            return res.status(400).json({
                message: "Valores incorretos",
            });
        }

        const resultado = await db.query(
            `INSERT INTO apartamentos  VALUES('${codigo}', ${quartos}, ${banheiros}, ${suites}, ${area_total}, '${sigla}') RETURNING *`, {
                type: QueryTypes.INSERT,
            }
        );
        res.status(200).json(resultado[0]); //retorna a linha recem criada no banco


    } catch (error) {
        res.status(404).json({
            error: true,
            message: error.message
        });
    }
}


module.exports = {
    getApartamentos,
    getApartamentosPredio,
    getApartamento,
    deleteApartamento,
    criaApartamento
};
