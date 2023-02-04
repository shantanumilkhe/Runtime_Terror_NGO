if  (process.env.NODE_ENV !== 'production') {
    require('dotenv').config();
}

const dotenv = require('dotenv');
const mongoose = require('mongoose');
const express = require('express');
const cors = require("cors")
const bodyParser = require('body-parser');
const jwt = require('jsonwebtoken');
const app = express();
const path = require('path');
const volunteerAuth = require('./router/volunteerAuth');
const instituteAuth = require('./router/instituteAuth');
app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// dotenv.config({path:'./config.env'});
const port=process.env.PORT || 5000;

// require('./db/conn.js');

const Dburl = process.env.DB_URL
mongoose.set("strictQuery", false);
mongoose.connect(Dburl, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
});

const db = mongoose.connection;

db.on("error", console.error.bind(console, "connection error:"));
db.once("open", () => {
     console.log("Database connected");
})

require('./config/passjwt');

app.use('/volunteer',volunteerAuth);
app.use('/institute',instituteAuth);

app.listen(port, ()=>{
    console.log("Server started! at "+port);
});

