const Sequelize = require('sequelize');

module.exports = new Sequelize("d8t30pp5qh8qcj", "supgrldawrlywx", "4b436ce4c2a9e21ed5e65ade0b75ed9885638ab8cb59695b24551e0811571bcd", {
    host: "ec2-54-75-225-143.eu-west-1.compute.amazonaws.com",
    port: "5432",
    dialect: "postgresql",
    dialectOptions: {
        ssl: true
    }
});
module.exports.sync()