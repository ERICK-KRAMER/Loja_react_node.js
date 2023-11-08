const mongoose = require('mongoose');

const Users = mongoose.model('Users', {
    email: String,
    password: String,
})

module.exports = Users;