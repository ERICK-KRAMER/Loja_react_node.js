const express = require("express");
const app = express();
const mongoose = require('mongoose');
require('dotenv').config();
const Routers = require('./Routes/routes');
const path = require('path')

const username = process.env.NAME;
const password = process.env.PASSWORD;
const port = process.env.PORT;

const uri = `mongodb+srv://${username}:${password}@cluster0.b1dvuqr.mongodb.net/?retryWrites=true&w=majority`

// Make express read in Json format
app.use(express.urlencoded({ extended: true}))
app.use(express.json());

app.use(express.static('./Public'));

// Make express reading files in ejs
app.set('views', path.resolve(__dirname , 'Src', 'Views'));
app.set('view engine', 'ejs')

// setings routes endpoint 
app.use(Routers);

// Conecting to database
mongoose.connect(uri, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => {
        // Opening the server on the chosen port
        app.listen(port, () => {
            console.log(`Servidor aberto na porta http://localhost:${port}`);
        });
    })
    .catch((err) => {
        res.status(500).json({ error: err.message });   
    });
