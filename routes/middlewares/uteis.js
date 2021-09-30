const {
    QueryTypes
} = require("sequelize");
const db = require("../../DB/db");

//funcoes que fazem buscas de verificação no banco


async function verificaSigla(sigla) { //verifica se a sigla existe
    const resultado = await db.query(
        `SELECT COUNT(1)
        FROM predios
        WHERE sigla = '${sigla}'`, {
            type: QueryTypes.SELECT
        }
    );
    if (resultado[0]["count"] == 0) {
        return false;
    }
    return true;
}

async function verificaPredioVazio(sigla) { //verifica se nao tem apartamentos ligados a ele
    const resultado = await db.query(
        `SELECT COUNT(1)
        FROM apartamentos
        WHERE predio = '${sigla}'`, {
            type: QueryTypes.SELECT
        }
    );
    if (resultado[0]["count"] == 0) {
        return true;
    }
    return false;
}


module.exports = {
    verificaSigla,
    verificaPredioVazio
};