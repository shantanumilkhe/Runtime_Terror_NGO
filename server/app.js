const dotenv = require('dotenv');
const mongoose = require('mongoose');
const express = require('express');
const cors = require("cors")
const bodyParser = require('body-parser');
const jwt = require('jsonwebtoken');
const app = express();
const path = require('path');
const authRoute = require('./router/auth');
const lectureRoute = require('./router/lecture');
app.use(cors());
app.use('/static', express.static('static'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, "..", "client", "build")));


dotenv.config({path:'./config.env'});
const port=process.env.PORT || 5000;

require('./db/conn.js');
require('./config/passjwt');

app.use("/auth", authRoute);
app.use("/lecture", lectureRoute);

app.get("*", (req, res) => {
    res.sendFile(path.join(__dirname, "..", "client", "build", "index.html"));
})

app.listen(port, ()=>{
    console.log("Server started! at "+port);
});

