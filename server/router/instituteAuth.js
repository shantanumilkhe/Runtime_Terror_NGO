const express = require('express');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const router = express.Router();
const passport = require('passport');
const Institute = require('../model/instituteSchema');
require('../config/passjwt');

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
        const { name, email,password, location} = req.body;

        if (!name || !email || !password || !location) {
            return res.status(422).send({ message: "Please fill properly" })
        }
        const InstituteExist = await Institute.findOne({ email: email })

        if (InstituteExist) {
            return res.status(422).send({ message: "Account already Exists" })
        }

        const Institute = new Institute({name, email,password, location});
        const saveInstitute = await Institute.save()

        if (saveInstitute) {
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
        const InstituteExist = await Institute.findOne({ email: email });

        if (!InstituteExist) {
            return res.status(500).send({ message: "Invalid Info" });
        }

        const matchPass = await bcrypt.compare(password, InstituteExist.password);

        if (matchPass) {

            const payload = {
                Institutename: InstituteExist.name,
                id: InstituteExist._id
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