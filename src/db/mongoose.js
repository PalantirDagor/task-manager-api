const mongoose = require('mongoose');
const validator = require('validator')

mongoose.connect(`${process.env.MONGODB_URL}/${process.env.DATABASE_NAME}`, {
    useNewUrlParser: true,
    useCreateIndex: true,
    useFindAndModify: false
})

