const express = require('express');
const api_controller = require('./api/api_controller.js');

module.exports = () => {
    const router = express.Router();
    router.use("/api", api_controller());
    return router;
}