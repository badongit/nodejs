const mongoose = require('mongoose');
const slug = require('mongoose-slug-generator');
const mongooseDelete = require('mongoose-delete');

const Schema = mongoose.Schema;

const Book = new Schema({
    name: {
        type: String,
        trim: true,
        require: true,
    },
    image: {
        type: String,
        require: true,
    },
    price: {
        type:  Number,
        require: true,
    },
    quantity: {
        type: Number,
        require: true,
    },
    publisher: String,
    publicationDate: Date,
    author: String,
    description: String,
    slug: {
        type: String, 
        slug: 'name',
        unique: true,
    },
}, {
    timestamps: true,
});

mongoose.plugin(slug);
mongoose.plugin(mongooseDelete, {
    deletedAt: true,
    overrideMethods: true,
})

module.exports = mongoose.model('Book', Book);
