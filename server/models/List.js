/* globals ObjectId */
/**
 * List Model
 */

const mongo = require('mongoose');

const ListSchema = mongo.Schema({
    id: ObjectId,
    name: String,
    // list of id's
    list_items: Array,
});

const List = mongo.model('List', ListSchema);

module.exports = List;
