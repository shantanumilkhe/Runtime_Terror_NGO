const express = require('express');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const router = express.Router();
const passport = require('passport');
let Volunt = require('../model/volunteerSchema');
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
        
        const { name, email, phone, password, location,institute,currentCourse,grade } = req.body;

        if (!name || !email || !phone || !password || !location || !institute || !currentCourse ||!grade) {
            return res.status(422).send({ message: "Please fill properly" })
        }
        const VolunteerExist = await Volunt.findOne({ email: email })

        if (VolunteerExist) {
            return res.status(422).send({ message: "Account already Exists" })
        }

        const Volunteer = new Volunt({ name, email, phone, password, location,institute,currentCourse,grade });
        const saveVolunteer = Volunteer.save()

        if (saveVolunteer) {
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
        const VolunteerExist = await Volunt.findOne({ email: email });

        if (!VolunteerExist) {
            return res.status(500).send({ message: "Invalid Info" });
        }

        const matchPass = await bcrypt.compare(password, VolunteerExist.password);

        if (matchPass) {

            const payload = {
                Volunteername: VolunteerExist.name,
                id: VolunteerExist._id
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