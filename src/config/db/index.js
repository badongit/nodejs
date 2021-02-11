const mongoose = require('mongoose');

const connect = async () => {
    try {
        await mongoose.connect('mongodb://localhost:27017/book_store_dev', {
            useNewUrlParser: true,
            useUnifiedTopology: true,
            useFindAndModify: false,
            useCreateIndex: true
          });
          
          console.log('Connect DB successfully');
    } catch (err) {
        console.log(err.message);
    }
}

module.exports = connect;
