const Book = require('../models/Book');
const convertMoney = require('../../util/convertMoney');

class SiteController {

    // [GET] /
    async home(req, res, next) {
        try {
            const books = await Book.find({});
            res.render('layouts/home', {books, formatter: convertMoney});
        } catch (err) {
            console.log(err.message);
        }
    }
}

module.exports = new SiteController;
