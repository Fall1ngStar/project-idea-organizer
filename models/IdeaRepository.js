const Idea = require('../models/Idea')

module.exports = {
    getIdeaByUuid: (ideaUuid, callback) => {
        Idea.find({
            where: {
                uuid: ideaUuid
            },
            attributes: ["content"]
        }).then((idea)=>{
            callback(idea);
        }).catch((error)=>{
            callback(null, error);
        })
    }
}