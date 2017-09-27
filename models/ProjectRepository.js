const Project = require('./Project');
const Idea = require('./Idea');
const uuid = require('uuid/v4');

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
        }).catch((error) => {
            console.err(error);
            callback(null, error);
        })
    },

    createProject: (project, callback) => {
        if (project.name == undefined) {
            callback(null, {error: "A girl has no name, but a project can't"});
        } else {
            try {
            Project.create({
                name: project.name,
                uuid: uuid(),
                ideas: project.ideas == undefined ? [] : project.ideas.map(idea => {
                    if(idea.content == undefined){
                        throw {error: "An idea must have some content"};
                    }
                    return {
                        content: idea.content,
                        uuid: uuid()
                    }
                })
            }, {
                    include: [Idea]
                }).then((result) => {
                    callback(result);
                });
            } catch(error){
                callback(null, error);
            }
        }
    }
}