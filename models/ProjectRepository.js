const Project = require('./Project');
const Idea = require('./Idea')

module.exports = {
    getProjectList: (callback) => {
        Project.findAll({
            attributes: ["name", "uuid"]
        })
            .then((projects) => {
                callback(projects);
            })
    },

    getSpecificProject: (projectUuid, callback) => {
        Project.find({
            where: {
                uuid: {
                    $eq: projectUuid
                }
            },
            attributes: ["name"],
            include: [{
                model: Idea,
                attributes: ["content"]
            }]
        }).then((project) => {
            if (project == undefined) {
                callback(null, { error: "Not found" });
            } else {
                callback(project);
            }
        }).catch((error)=>{
            console.err(error);
            callback(null, error);
        })
    }
}