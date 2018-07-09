/**
 * Helper which provides methods for field validation
 */

const validationHelper = {};
const validator = require('validator');

/**
 * Validate register user data
 * @param userData // Object containing email, password and name properties
 * @return true if the data is valid
 */
validationHelper.validateUserRegister = (userData) => {
    let isValid = false;
    // Ensure data is defined
    if (typeof userData !== 'undefined' &&
        userData.password !== 'undefined' &&
        userData.name !== 'undefined' &&
        userData.email !== 'undefined') {
        // Validate email, name & password
        isValid = validator.isEmail(userData.email);
        isValid = !validator.isEmpty(userData.name);
        isValid = !validator.isEmpty(userData.password);
    }
    return isValid;
};

module.exports = validationHelper;
