const express = require('express');
const Seat = require('../model/seatSchema');
const Institute = require('../model/instituteSchema');
const passport = require('passport');
const { findOne } = require('../model/volunteerSchema');
const router = express.Router();


router.post('/addnewseats', passport.authenticate('jwt', { session: false }), async (req, res) => {
    try {
        const id = req.user.id;
        const givenseats = req.body.seat;
        const courseProvided = req.body.course;
        const course = new Seat({
            instituteId: id,
            seats: givenseats,
            courseProvided: courseProvided
        });
        course.save();
        const insti = await Institute.findOne({ _id: id });
        insti.courses.push(course._id)
        if(await insti.save())return res.status(200).json({message:"course added"})
        else return res.status(500).json({message:"course did not get add"})
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

router.get('/getstudentsassigned/:id', passport.authenticate('jwt', { session: false }), async (req, res) => {
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

router.get('/getcourses', passport.authenticate('jwt', { session: false }), async (req, res) => {
    try {
        const id = req.user.id;
        const students = await Institute.findeOne({ _id: id }).populate('courses');
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