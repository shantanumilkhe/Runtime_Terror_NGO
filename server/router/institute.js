const express = require('express');
const router = express.Router();
const Seats = require('../model/seats');


router.post('/addnewseats/:id', async (req, res) => {
    try{
         const id = req.params.id;
         const seats = req.body.seats;
         const courseProvided = req.body.courseProvided;
         const insti = new Seats({
                instituteId: id,
                seats: seats,
                courseProvided: courseProvided
            });
            insti.save();
    } catch(error){
        console.log(error)
    }
})

router.post('/updateseats/:id', async (req, res) => {
   try{
    const id = req.params.id;
    const seats = req.body.seats;
    const insti = await Seats.findeOne({_id:id});
    insti.seats = seats;
    insti.save();
    res.send('seats updated')}
    catch(error){
        console.log(error)
    }
})

router.get('getstudentsassigned/:id', async (req, res) => {
    try{
        const id = req.params.id;
        const students = await Seats.findeOne({_id:id}).populate('assignedStudents');
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