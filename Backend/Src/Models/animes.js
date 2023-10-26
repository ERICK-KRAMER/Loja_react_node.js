const mongoose = require('mongoose');

const Animes = mongoose.model('Anime', {
    name: String,
    url_image: String,
})

module.exports = Animes