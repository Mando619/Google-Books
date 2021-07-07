const mongoose = require('mongoose');
require('mongoose-type-url');
const Schema = mongoose.Schema;

const bookSchema = new Schema({
    title: { type: String, required: true },
    authors: [{ type: String, required: true }],
    description: String,
    url: {
        image: { type: mongoose.SchemaTypes.Url, required: true },
        link: { type: mongoose.SchemaTypes.Url, required: true },
    }
});

const Books = mongoose.model("books", bookSchema);

module.exports = Books;

