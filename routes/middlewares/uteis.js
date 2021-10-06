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

async function verificaCodigoNoPredio(sigla, codigo) { //verifica se codigo existe em um determinado predio
    const resultado = await db.query(
        `SELECT COUNT(1)
        FROM apartamentos
        WHERE predio = '${sigla}' AND codigo = '${codigo}'`, {
            type: QueryTypes.SELECT
        }
    );
    if (resultado[0]["count"] == 0) {
        return false;
    }
    return true;
}

async function verificaQuantidadeApartamentos(sigla) { //verifica se ainda tem vaga pra criar apartamento no predio
    let unidadesPermitidas = await db.query(
        `SELECT apartamentos from predios where sigla = '${sigla}'`, {
            type: QueryTypes.SELECT
        }
    )
    unidadesPermitidas = unidadesPermitidas[0].apartamentos;
    
    let unidadesExistentes = await db.query(
        `SELECT COUNT(*) from apartamentos where predio = '${sigla}'`, {
            type: QueryTypes.SELECT
        }
    )
    unidadesExistentes = parseInt(unidadesExistentes[0].count);
        
    if(unidadesExistentes < unidadesPermitidas) {
        return true;
    } else {
        return false;
    }

}


module.exports = {
    verificaSigla,
    verificaPredioVazio,
    verificaCodigoNoPredio,
    verificaQuantidadeApartamentos
};