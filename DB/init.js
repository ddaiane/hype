//cria tabelas caso não existam no banco e jpa 
const {
    QueryTypes
} = require("sequelize");
const db = require("./db");

async function createTables() {
    console.log("criando tabelas");
    await predios();
    await apartamentos();
    console.log("criando predios");
    await inserePredio('KLEE', 'Klee Urban Habitat', 'Rua José Carolo, 832 Mossunguê', 'Curitiba', 'PR', 23);
    await inserePredio('BLOOM', 'Bloom Urban Habitat', 'Rua Amazonas, 1302 Água Verde', 'Curitiba', 'PR', 47);
    console.log("criando apartamentos");
    await insereApartamentos('301', 3, 2, 1, 73.08, 'KLEE');
    await insereApartamentos('302', 2, 2, 2, 61.81, 'KLEE');
    await insereApartamentos('303', 2, 2, 2, 56.29, 'KLEE');
    await insereApartamentos('304', 2, 2, 2, 64.35, 'KLEE');
    await insereApartamentos('607', 2, 2, 2, 91.71, 'BLOOM');
    await insereApartamentos('608', 3, 2, 1, 74.63, 'BLOOM');
    await insereApartamentos('707', 2, 2, 1, 51.33, 'BLOOM');
    await insereApartamentos('603', 2, 2, 1, 55.55, 'BLOOM');
    await insereApartamentos('601', 2, 2, 1, 56.43, 'BLOOM');
    await insereApartamentos('602', 1, 2, 1, 37.84, 'BLOOM');
}

//cria as tabelas do bd se ainda nao existirem
async function predios() {

    const query = `CREATE TABLE IF NOT EXISTS PREDIOS (
        sigla varchar (50) PRIMARY KEY,
        nome varchar (250) NOT NULL,
        endereco varchar (250) NOT NULL,
        cidade varchar (250) NOT NULL,
        estado varchar(50) NOT NULL,
        apartamentos integer NOT NULL CHECK (apartamentos > 0)
        )`;

    await db.query(query, {
        type: QueryTypes.INSERT,
    });
}

async function apartamentos() {

    const query = `CREATE TABLE IF NOT EXISTS APARTAMENTOS (
        codigo varchar (50) NOT NULL,
        quartos integer NOT NULL CHECK (quartos >= 0),
        banheiros integer NOT NULL CHECK (banheiros >= 0),
        suites integer NOT NULL CHECK(suites >= 0),
        area_total real NOT NULL CHECK(area_total > 1),
        predio varchar (50) NOT NULL REFERENCES predios (sigla),
        PRIMARY KEY (predio, codigo)
        )`;

    await db.query(query, {
        type: QueryTypes.INSERT,
    });
}



//se nao existir ainda, insere predio
async function inserePredio(sigla, nome, endereco, cidade, estado, apartamentos) {

    //verifica se existe a entrada de cada predio que vamos inserir
    const predio = await db.query(
        `SELECT count(1) FROM predios WHERE sigla = '${sigla}'`, {
            type: QueryTypes.SELECT
        }
    );
    //cria caso nao exista
    if (predio[0]["count"] == 0) {
        await db.query(
            `INSERT INTO predios VALUES('${sigla}', '${nome}', '${endereco}', '${cidade}', '${estado}', ${apartamentos})`, {
                type: QueryTypes.INSERT,
            }
        );
    }
}

//se ainda não existir, cria alguns apartamentos em cada predio para testes
async function insereApartamentos(codigo, quartos, banheiros, suites, area_total, predio) {
    const apartamento = await db.query(
        `SELECT count(1) FROM apartamentos WHERE codigo = '${codigo}' AND predio = '${predio}'`, {
            type: QueryTypes.SELECT
        }
    );
    if (apartamento[0]["count"] == 0) {
        await db.query(
            `INSERT INTO apartamentos VALUES('${codigo}', ${quartos}, ${banheiros}, ${suites}, ${area_total}, '${predio}')`, {
                type: QueryTypes.INSERT,
            }
        );
    }
}


createTables();

module.exports = {
    createTables
};