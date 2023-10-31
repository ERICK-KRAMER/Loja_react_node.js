const mongoose = require('mongoose');

const Products = mongoose.model('Products', {
    name: String,
    brand: String,
    model: String,
    type: String,
    url_image: String,
    description: String,
    value: Number,
    stock: Number,
});

module.exports = Products;
