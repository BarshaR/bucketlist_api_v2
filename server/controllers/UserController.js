/**
 * User Controller
 */

const UserModel = require('../models/User');

const UserController = {
    create: (req, res) => {
        let userMod = new UserModel({
            name: 'richard',
            email: 'richard@gmail.com',
            password: 'hey',
        });
        userMod.save((err) => {
            if (err) console.log('failed');
            // saved!
        });
        res.send(req.body);
    },
};

module.exports = UserController;
