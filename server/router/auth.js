const express = require('express');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const router = express.Router();
const passport = require('passport');
const User = require('../model/userSchema');
require('../config/passjwt');

router.get('/', (req, res) => {
    console.log("In the page");
    res.send("Welcome to the page from auth.js");
});

router.get('/authenticate', passport.authenticate('jwt', { session: false }), async (req, res) => {
    if (req.user == null) {
        res.status(400).send("AUTHORIZATION FAILED");
    }
    else {
        res.status(200).send("Login successful");
    }
})

router.post('/register', async (req, res) => {
    try {
        const { name, email, phone, password, cpassword } = req.body;

        if (!name || !email || !phone || !password || !cpassword) {
            return res.status(422).send({ message: "Please fill properly" })
        }
        const userExist = await User.findOne({ email: email })

        if (userExist) {
            return res.status(422).send({ message: "Account already Exists" })
        }
        else if (password != cpassword) {
            return res.status(422).send({ message: "Password dosen't match" })
        }

        const user = new User({ name, email, phone, password, cpassword });
        const saveUser = await user.save()

        if (saveUser) {
            res.status(201).send({ message: "Registeration Successful! Please Login Now" })
        }
        else {
            res.status(500).send({ message: "Registeration Failed" })
        }

    } catch (err) {
        console.log(err);
    }

});

router.post('/login', async (req, res) => {
    try {
        const { email, password } = req.body;

        if (!email || !password) {
            return res.status(422).send({ message: "Please fill the data" });
        }
        const userExist = await User.findOne({ email: email });

        if (!userExist) {
            return res.status(500).send({ message: "Invalid Info" });
        }

        const matchPass = await bcrypt.compare(password, userExist.password);

        if (matchPass) {

            const payload = {
                username: userExist.name,
                id: userExist._id
            }

            const token = jwt.sign(payload, "SECRETKEY", { expiresIn: "1d" })
            console.log(token);
            res.status(200).send({
                success: true,
                message: "Logged in successfully!",
                token: "Bearer " + token
            })
        }
        else {
            return res.status(500).send({ message: "Unsuccessful" });
        }

    } catch (error) {
        console.log(error);
    }
})

module.exports = router;