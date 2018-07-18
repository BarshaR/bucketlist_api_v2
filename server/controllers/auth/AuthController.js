/**
 * Authentication Controller
 */

import bcrypt from 'bcryptjs';
import User from '../../models/User';
import validationHelper from '../../helpers/ValidationHelper';
import ResponseBuilder from '../../helpers/ResponseBuilder';

export default class AuthController {
    /**
     * Register a new user
     * @param req request
     * @param res response
     */
    async register(req, res) {
        // validate data
        if (!validationHelper.validateUserRegister(req.body)) {
            // res.send('Invalid data received - check formating');
        }

        let response = new ResponseBuilder(res);
        response.data = { hello: 'richard' };
        response.sendResponse();
        // Check if user already exists
        try {
            let foundUser = await User.findOne().byEmail(req.body.email).exec();
            console.log(foundUser);
            if (foundUser) {
                console.log('dup accountt');
                // res.send('Account with this email exists, try again');
                return false;
            }
        } catch (err) {
            console.log(err);
        }

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
        // res.send('saved to db with password:' + hash);
        return true;
    }
}
