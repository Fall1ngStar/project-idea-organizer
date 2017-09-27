const uuid = require('uuid/v4');
const Sequelize = require('sequelize');
const db = require('../utils/DbConnection');
const Idea = require('./Idea')

const Project = db.define("project", {
    name: Sequelize.STRING,
    uuid: Sequelize.UUID
});
Project.belongsToMany(Idea, { through: "project_ideas" });

module.exports = Project;