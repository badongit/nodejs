const siteRouter = require('./sites');
const bookRouter = require('./books');
const meRouter = require('./me');

function route(app) {

    app.use('/me', meRouter);

    app.use('/books', bookRouter);

    app.use('/', siteRouter);
    
}

module.exports = route;
