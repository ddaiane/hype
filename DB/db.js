require('dotenv').config();

const {
  Sequelize
} = require("sequelize");

//postgres://usuario:senha@servidor:porta/banco
const sequelize = new Sequelize(
  process.env.DATABASE_URL, {
    dialect: "postgres",
    dialectOptions: {
      ssl: { //conexao ssl pois exigido por bd heroku
          require: true,
          rejectUnauthorized: false
      }
  }
  }
);

(async () => {
  try {
    await sequelize.authenticate();
    console.log("Connection has been established successfully.");
  } catch (error) {
    console.error("Unable to connect to the database:", error);
  }
})();

module.exports = sequelize;