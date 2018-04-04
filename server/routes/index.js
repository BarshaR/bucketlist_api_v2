/**
 * Routing
 */

const routes = require('express').Router();
const userController = require('../controllers/UserController');

/**
 * User Routes
 */
routes.post('/api/user', (req, res) => {
    userController.create(req, res);
});

module.exports = routes;
