const Sequelize = require('sequelize');
const db = require('../utils/DbConnection');

const Project = db.define("idea", {
	content: Sequelize.STRING,
	uuid: {
		type: Sequelize.UUID,
		primaryKey: true
	}
});

module.exports = Project;