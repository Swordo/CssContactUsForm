const mongoose = require('mongoose');

const Schema = mongoose.Schema;

var userScema = new Schema({
    f_name: {
        type: String
    },
    l_name: {
        type: String
    },
    email: {
        type: String
    },
    phone: {
        type: Number
    },

    message: {
        type: String
    }
});

module.exports = mongoose.model('Info', userScema, 'FormData');