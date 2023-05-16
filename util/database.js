const { Sequelize } = require("sequelize");

const sequelize = new Sequelize("node-complete", "root", "Ash-0415", {
  dialect: "mysql",
  host: "localhost",
});

module.exports = sequelize;
