const {
    QueryTypes
} = require("sequelize");
const db = require("../DB/db");
const {
    verificaSigla
} = require("../routes/middlewares/uteis");

// lista todos predios
async function getPredios(req, res) {
    try {
        const predios = await db.query(
            `SELECT * FROM predios ORDER BY nome`, {
                type: QueryTypes.SELECT
            }
        );
        res.status(200).json(predios);

    } catch (error) {
        res.status(404).json({
            error: true,
            message: "erro desconhecido"
        });
    }
}

//detalhes de um predio especifico
async function getPredio(req, res) {
    try {
        let {
            sigla
        } = req.params;
        sigla = sigla.toUpperCase();
        const predios = await db.query(
            `SELECT * FROM predios WHERE sigla = '${sigla}' `, {
                type: QueryTypes.SELECT
            }
        );
        res.status(200).json(predios);

    } catch (error) {
        res.status(404).json({
            error: true,
            message: "erro desconhecido"
        });

    }
}

//deleta um predio
async function deletePredio(req, res) {
    try {
        let {
            sigla
        } = req.params;
        sigla = sigla.toUpperCase();
        const query = await db.query(
            `DELETE FROM predios WHERE sigla='${sigla}' RETURNING *`, {
                type: QueryTypes.DELETE,
            }
        );
        res.status(200).json(query[0].sigla); //retorna a sigla do predio deletado
    } catch (error) {
        res.status(404).json({
            error: true,
            message: "erro desconhecido"
        });

    }
}


//cria um predio
async function criaPredio(req, res) {
    try {
        let {
            sigla,
            nome,
            endereco,
            cidade,
            estado,
            apartamentos
        } = req.body;
        sigla = sigla.toUpperCase();
        //Verificação se todos os campos estão presentes, mensagem para o front
        if (!sigla || !nome || !endereco || !cidade || !estado || !apartamentos) {
            return res.status(400).json({
                message: "Todos os campos são obrigatórios",
            });
        }

        if (await verificaSigla(sigla)) { //verifica se nao tem outro predio cadastrado com a mesma sigla
            return res.status(400).json({
                message: "Sigla já existe no sistema",
            });
        }

        if (parseInt(apartamentos) < 0) { //verifica se é positivo o numero de apartamentos
            return res.status(400).json({
                message: "Informe o valor correto de apartamentos",
            });
        }

        const resultado = await db.query(
            `INSERT INTO predios  VALUES('${sigla}', '${nome}', '${endereco}', '${cidade}', '${estado}', '${apartamentos}') RETURNING *`, {
                type: QueryTypes.INSERT,
            }
        );
        res.status(200).json(resultado[0]); //retorna a linha recem criada no banco


    } catch (error) {
        res.status(404).json({
            error: true,
            message: "erro desconhecido"
        });
    }
}


module.exports = {
    getPredios,
    getPredio,
    deletePredio,
    criaPredio
};