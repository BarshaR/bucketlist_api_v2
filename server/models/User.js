
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

UserSchema.query.byEmail = function (email) {
    return this.findOne({ email: email });
};

const User = mongo.model('User', UserSchema);

module.exports = User;
