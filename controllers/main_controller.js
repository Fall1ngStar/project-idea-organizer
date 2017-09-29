const express = require('express');
const api_controller = require('./api/api_controller.js');
const site_controller = require('./interface/site_controller.js');

module.exports = () => {
    const router = express.Router();
    router.use("/api", api_controller());
    router.use("/app", site_controller());
    router.get("*");
    return router;
};