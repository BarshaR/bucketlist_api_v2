
/**
 * User Model
 */

const mongo = require('mongoose');

const UserSchema = mongo.Schema({
    name: String,
    email: String,
    password: String,
    // array of list id's
    lists: Array,
});

const User = mongo.model('User', UserSchema);

module.exports = User;
