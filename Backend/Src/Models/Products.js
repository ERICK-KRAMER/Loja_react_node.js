const mongoose = require('mongoose');

const Products = mongoose.model('Products', {
    name: String,
    url_image: String,
    value: Number,
    stock: Number,
});

module.exports = Products;
