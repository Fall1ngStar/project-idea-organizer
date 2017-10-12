const express = require("express");
const app = express();
const main_controller = require("./controllers/main_controller");
const bodyParser = require("body-parser");

app.set("view engine", "pug");
app.use(bodyParser.json());
app.use("/", main_controller());

app.set('port', (process.env.PORT || 5000));

app.listen(app.get('port'), () => {
    console.log("Listening on port" + app.get('port'));
});
