/**
 * Routing
 */

const routes = require('express').Router();
const authController = require('../controllers/auth/AuthController');

/**
 * Auth Routes
 */
routes.post('/api/user/register', (req, res) => {
    authController.register(req, res);
});

module.exports = routes;
