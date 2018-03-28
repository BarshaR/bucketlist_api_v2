/* globals ObjectId */
/**
 * List Item Model
 */

const mongo = require('mongoose');

const ListItemSchema = mongo.Schema({
    id: ObjectId,
    title: String,
    description: String,
    location: String,
    createdAt: Date,
    createdBy: String,
});

const ListItem = mongo.model('User', ListItemSchema);

module.exports = ListItem;
