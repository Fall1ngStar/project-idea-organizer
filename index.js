const express = require("express");
const app = express();
const main_controller = require("./controllers/main_controller");
const bodyParser = require("body-parser");

/*db.sync({ force: true })
    .then(() => {
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
    });*/

app.set("view engine", "pug");
app.use(bodyParser.json());
app.use("/", main_controller());


app.listen(80, () => {
    console.log("Listening on port 5000");
});
