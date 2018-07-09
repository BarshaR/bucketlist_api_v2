/**
 * Authentication Controller
 */

// const express = require('express');
const User = require('../../models/User');
const bcrypt = require('bcryptjs');
const validationHelper = require('../../helpers/ValidationHelper');

const authController = {};

/**
 * Register a new user
 * @param req request
 * @param res response
 */
authController.register = async (req, res) => {
    // validate data
    if (!validationHelper.validateUserRegister(req.body)) {
        res.send('Invalid data received - check formating');
        return false;
    }

    // Check if user already exists
    try {
        let foundUser = await User.findOne().byEmail(req.body.email).exec();
        console.log(foundUser);
        // console.log(foundUser.email);
        console.log("outside query callback");
    } catch (err) {
        console.log(err);
    }

    // console.log("Checking if user exists: \n\n");
    // console.log(foundUser);

    // Generate salt and hash
    const salt = bcrypt.genSaltSync();
    const hash = bcrypt.hashSync(req.body.password, salt);

    // TODO: Check if an account exists before its created
    const user = new User({
        name: req.body.name,
        email: req.body.email,
        password: hash,
    });
    user.save((err) => {
        if (err) res.send('Unable to save user data \n ' + req.body);
    });
    res.send('saved to db with password:' + hash);
    return true;
};

module.exports = authController;
