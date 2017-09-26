const Sequelize = require('sequelize');

module.exports = new Sequelize("projects", "root", "", {
    host: "localhost",
    dialect: "mysql"
});