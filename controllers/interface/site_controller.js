const express = require('express');
const ProjectRepository = require("../../models/ProjectRepository");

module.exports = () => {
    const router = express.Router();
    router.get("/", (req, res) => {
        ProjectRepository.getProjectList((projects) => {
            res.render("index.pug", {title: "Projects", projects: projects});
        });
    });
    router.get("/project/:uuid", (req, res) => {
        ProjectRepository.getSpecificProject(req.params.uuid, (project, error) => {
            if(error) {
                res.status(404).send("Not found");
            } else {
                res.render("project.pug", {title:"Project " + project.name, project: project});
            }
        });
    });
    return router;
};