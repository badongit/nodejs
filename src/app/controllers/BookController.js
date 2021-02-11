const Book = require('../models/Book');
const convertMoney = require('../../util/convertMoney');

class BookController {

    // [DELETE] /books/:id/destroy
    async destroy(req, res, next) {
        try {
            await Book.deleteOne({ _id: req.params.id });
            res.redirect('back');
        } catch (err) {
            console.log(err.message);
        }
    }

    // [PATCH] /books/:id/restore
    async restore(req, res, next) {
        try {
            await Book.restore({ _id: req.params.id });
            res.redirect('back');
        } catch (err) {
            console.log(err);
        }
    }

    // [DELETE] /books/:id
    async delete(req, res, next) {
        try {
            await Book.delete({ _id: req.params.id });
            res.redirect('back');
        } catch (err) {
            console.log(err.message);
        }
    }

    // [PUT] /books/:id
    async update(req, res, next) {
        try {
            await Book.updateOne({ _id: req.params.id }, req.body );
            res.redirect('/me/stored/books');
        } catch (err) {
            next(err);
        }
    }

    // [GET] /books/:id/edit
    async edit(req, res, next) {
        try {
            const book = await Book.findById({ _id: req.params.id });
            res.render('books/edit', {book});
        } catch (err) {
            console.log(err.message);
        }
    }

    // [GET] /books/:slug
    async show(req, res, next) {
        try {
            const book = await Book.findOne({ slug: req.params.slug });
            res.render('books/show', {book, formatter: convertMoney});
        } catch (err) {
            console.log(err.message);
        }
    }

    // [POST] /books/store
    async store(req, res, next) {
        const book = new Book(req.body);
        try {
           await book.save();
           res.redirect('/');
        } catch (err) {
            console.log(err.message);
        }
    }

    // [GET] /books/create
    create(req, res, next) {
        res.render('books/create');
    }
}

module.exports = new BookController;
