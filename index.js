const express = require('express');
const app = express();
const Projet = require('./models/Project');
const Idea = require('./models/Idea');
const ProjectRepository = require('./models/ProjectRepository');
const db = require('./utils/DbConnection');
const uuidv4 = require('uuid/v4');

/*
let projet = new Projet("Test");
let idea1 = new Idea("create an app to store project ideas");
let idea2 = new Idea("Use nodejs, express and pugjs");
projet.addIdea(idea1);
projet.addIdea(idea2);
*/
db.sync({ force: true })
    /*.then(() => {
        return Projet.create({
            name: "Test project",
            uuid: uuidv4(),
            ideas: [{
                content: "create a web application to sotre project ideas",
                uuid: uuidv4()
            },
            {
                content: "Use nodejs, express and pugjs",
                uuid: uuidv4()
            },
            {
                content: "use sequelize for orm",
                uuid: uuidv4()
            }]
        }, {
                include: [Idea]
            });
    }).then((project) => {
        console.log(project.get({ plain: true }));
    });*/

app.set("view engine", "pug");

app.get("/hello", (req, res) => {
    Projet.find({
        attributes: ["name", "uuid"],
        include: [{
            model: Idea,
            attributes: ["content", "uuid"]
        }]
    }).then((project) => {
        res.send(JSON.stringify(project));
    })
});

app.get("/project/:uuid", (req, res)=>{
    console.log(req.params);
    ProjectRepository.getSpecificProject(req.params.uuid, (project, error)=>{
        if(error){
            console.log("callback called");
            res.status(404).send("Not found");
        } else {
        res.render("project.pug", {title: project.name, project: project});
        }
    });
});

app.get("/", (req, res) => {
    ProjectRepository.getProjectList((projects) => {
        res.render("index.pug", {
            title: "Hello pug",
            message: "Hello there",
            projects: projects
        });
    });
});


app.listen(5000, () => {
    console.log("Listening on port 5000");
});

console.log();