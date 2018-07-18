/**
 * Routing
 */

import AuthController from '../controllers/auth/AuthController';

const routes = require('express').Router();

/**
 * Auth Routes
 */
routes.post('/api/user/', (req, res) => {
    const authController = new AuthController();
    authController.register(req, res);
});

module.exports = routes;
