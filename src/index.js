const express = require('express');
const app = express();

const port = 3000;

const path = require('path');

const expressLayouts = require('express-ejs-layouts');
app.use(expressLayouts);
app.set('layout', 'layouts');

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'resources', 'views'));

app.get('/', (req, res) => {
    res.send('Hello');
})

app.listen(port, () => {
    console.log(`Server running at port ${port}`);
})
