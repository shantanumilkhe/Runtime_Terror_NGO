const express = require('express');
const Seat = require('../model/seats');
const passport = require('passport');
const router = express.Router();


router.post('/addnewseats/:id',passport.authenticate('jwt', { session: false }), async (req, res) => {
    try{
         const id = req.params.id;
         const givenseats = req.body.seats;
         const courseProvided = req.body.courseProvided;
         const insti = new Seat({
                instituteId: id,
                seats: givenseats,
                courseProvided: courseProvided
            });
            insti.save();
    } catch(error){
        console.log(error)
    }
})

router.post('/updateseats/:id',passport.authenticate('jwt', { session: false }), async (req, res) => {
   try{
    const id = req.params.id;
    const seat = req.body.seats;
    const insti = await Seats.findeOne({_id:id});
    insti.seats = seat;
    insti.save();
    res.send('seats updated')}
    catch(error){
        console.log(error)
    }
})

router.get('getstudentsassigned/:id',passport.authenticate('jwt', { session: false }), async (req, res) => {
    try{
        const id = req.params.id;
        const students = await Seat.findeOne({_id:id}).populate('assignedStudents');
        const results = JSON.stringify(students);
        if(students){
        res.send(results);
        }else{
            res.send('no students assigned')
        }
    }
    catch(error){
        console.log(error)
    }
})




module.exports = router;