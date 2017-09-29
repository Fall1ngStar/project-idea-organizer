const express = require('express');
const ProjectRepository = require('../../models/ProjectRepository');

module.exports = () => {
    const router = express.Router();
    router.get("/", (req, res) => {
        ProjectRepository.getProjectList((projects) => {
            res.send(JSON.stringify(projects));
        });
    });
    router.get("/:uuid", (req, res) => {
        ProjectRepository.getSpecificProject(req.params.uuid, (project) => {
            res.send(JSON.stringify(project));
        });
    });
    router.post("/", (req, res) => {
        if (req.body === undefined) {
            res.status(400).send("Body can't be empty");
        } else {
            ProjectRepository.createProject(req.body, (project, error) => {
                if (error || project === undefined) {
                    res.status(400).send(JSON.stringify(error));
                } else {
                    res.send(project);
                }
            })
        }
    });
    return router;
};