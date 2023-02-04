const express = require('express');
const Seat = require('../model/seatSchema');
const Institute = require('../model/instituteSchema');
const passport = require('passport');
const { findOne } = require('../model/volunteerSchema');
const router = express.Router();


router.post('/addnewseats', passport.authenticate('jwt', { session: false }), async (req, res) => {
    try {
        const id = req.user.id;
        const givenseats = req.body.seats;
        const courseProvided = req.body.courseProvided;
        const course = new Seat({
            instituteId: id,
            seats: givenseats,
            courseProvided: courseProvided
        });
        course.save();
        console.log("course saved")

        const insti = await findOne({ _id: id });
        insti.courses.push(course._id)
        insti.save();
        console.log("course added to institute table")
        res.send("course added")
    } catch (error) {
        console.log(error)
    }
})

router.post('/updateseats/:id', passport.authenticate('jwt', { session: false }), async (req, res) => {
    try {
        const id = req.params.id;
        const seat = req.body.seats;
        const insti = await Seat.findeOne({ _id: id });
        if(seat>insti.seats){
        insti.seats = seat;
        insti.save();
        res.send('seats updated')
        }else{
            res.send('seats cannot be decreased')
        }
    }
    catch (error) {
        console.log(error)
    }
})

router.get('getstudentsassigned/:id', passport.authenticate('jwt', { session: false }), async (req, res) => {
    try {
        const id = req.params.id;
        const students = await Seat.findeOne({ _id: id }).populate('assignedStudents');
        const results = JSON.stringify(students);
        if (students) {
            console.log(results)
            res.send(results);
        } else {
            res.send('no students assigned')
        }
    }
    catch (error) {
        console.log(error)
    }
})




module.exports = router;