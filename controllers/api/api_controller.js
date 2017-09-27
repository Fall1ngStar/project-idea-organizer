const express = require('express'); 
const project = require('./project_controller');
const idea = require('./idea_controller');
module.exports = ()=>{
    const router = express.Router();

    router.get("/", (req, res)=>{
        res.send("API Root");
    })

    router.use("/project", project());
    router.use("/idea", idea());
    router.get("*", (req, res)=>{
        res.status(404).send("No endpoint here");
    })
    return router;
}