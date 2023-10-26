const express = require("express");
const app = express();
const mongoose = require('mongoose');
require('dotenv').config();
const Routers = require('./Routes/routes');
const path = require('path')

// Make express read in Json format
app.use(express.urlencoded({ extended: true}))
app.use(express.json());

app.use(express.static('./Public'));

// Make express read files in ejs
app.set('views', path.resolve(__dirname , 'Src', 'Views'));
app.set('view engine', 'ejs')

// setings routes endpoint 
app.use(Routers);

// connecting to mongodb database
mongoose.connect(process.env.MONGODBCONECTION, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => {
        // Opening the server on the chosen port
        app.listen(process.env.PORT, () => {
            console.log(`Servidor aberto na porta http://localhost:${process.env.PORT}`);
        });
    })
    .catch((err) => {
        res.status(500).json({ error: err.message });   
    });
