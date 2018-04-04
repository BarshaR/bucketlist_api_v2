/* globals ObjectId */
/**
 * List Model
 * A list contains its own list items
 */

const mongo = require('mongoose');

const ListItemSchema = mongo.Schema({
    title: String,
    description: String,
    location: String,
    date: { createdAt: Date, modifiedAt: Date },
    createdBy: String,
});

const ListSchema = mongo.Schema({
    id: ObjectId,
    name: String,
    date: { createdAt: Date, modifiedAt: Date },
    listItems: [ListItemSchema],
});

const List = mongo.model('List', ListSchema);

module.exports = List;
