/**
 * Routing
 */

const routes = require('express').Router();

/**
 * User Routes
 */
routes.post('/user', (req, res) => {
    res.send(req.body);
});

module.exports = routes;
