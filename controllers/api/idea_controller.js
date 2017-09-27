const express = require('express');
const IdeaRepository = require('../../models/IdeaRepository');

module.exports = () => {
    const router = express.Router();
    router.get("/:uuid", (req, res)=>{
        IdeaRepository.getIdeaByUuid(req.params.uuid, (idea, error)=>{
            if(error) {
                res.status(400).send(error);
            } else {
                res.send(JSON.stringify(idea));
            }
        })
    });
    router.get("/", (req, res)=>{
        res.status(501).send("Method not defined");
    })
    return router;
}