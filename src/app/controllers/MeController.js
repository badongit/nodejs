const Book = require('../models/Book');
const convertMoney = require('../../util/convertMoney');
class MeController {

    // [GET] /me/trash/books
    async trashBooks(req, res, next) {
        try {
            const books = await Book.findDeleted({});
            res.render('me/trash-books', {books, formatter: convertMoney });
        } catch (err) {
            console.log(err.message);
        }
    }

    // [GET] /me/stored/books
    async storedBooks(req, res, next) {
        try {
            const books = await Book.find({});
            res.render('me/stored-books', {books, formatter: convertMoney } );
        } catch (err) {
            console.log(err.message);
        }
    }
}

module.exports = new MeController;
