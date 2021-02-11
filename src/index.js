const express = require('express');
const route = require('./routes');
const connectDB = require('./config/db');

const app = express();

const port = 3000;

const path = require('path');

const methodOverride = require('method-override');
app.use(methodOverride('_method'));

const expressLayouts = require('express-ejs-layouts');
app.use(expressLayouts);
app.set('layout', 'layouts');

const morgan = require('morgan');
app.use(morgan('combined'));

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'resources', 'views'));

app.use(express.static(path.join(__dirname, 'public')));
app.use(express.urlencoded({ extended: true}));
app.use(express.json());

connectDB();

route(app);

app.listen(port, () => {
    console.log(`Server running at port ${port}`);
})
