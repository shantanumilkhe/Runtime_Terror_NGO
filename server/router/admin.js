const express = require('express');
const router = express.Router();
const Volunteer = require('../model/volunteerSchema');
const Student = require('../model/studentSchema');
const Institute = require('../model/instituteSchema');
const Seat = require('../model/seatSchema');

router.post('/login', async (req, res) => {
    const { username, password } = req.body;
    if (!username || !password) return res.json(500).send({ message: 'incomplete data' });
    if (username == 'admin' && password == 'admin') return res.json(200).send({ message: 'login successful' });
    else return res.json(500).send({ message: 'Login unsuccesful' });
})

router.get('/getallstudents', async (req, res) => {
    try {
        const students = await Student.find();
        const result = JSON.stringify(students);
        res.send(result);
    } catch (error) {
        console.log(error);
    }
})

router.get('/getallinstitutes', async (req, res) => {
    try {
        const institute = await Institute.find();
        const result = JSON.stringify(institute);
        res.send(result);
    } catch (error) {
        console.log(error);
    }
})

router.get('/getallvolunteer', async (req, res) => {
    try {
        const volunteer = await Volunteer.find({ approval: true });
        console.log(volunteer);
        const result = JSON.stringify(volunteer);
        res.send(result);
    } catch (error) {
        console.log(error);
    }
})

router.get('/unassigned', async (req, res) => {
    try {
        let students = Student.findAll({ assignedInstitute: null });
        
    const result = JSON.stringify(students);
    res.send(result);
    } catch (error) {
        console.log(error);
    }
})
router.get('/assigned', async (req, res) => {
    try {
        let students = Student.findAll({ assignedInstitute: !null });
        
    const result = JSON.stringify(students);
    res.send(result);
    } catch (error) {
        console.log(error);
    }
})

router.get('/assignstudent/:id', async (req, res) => {
    try {
        const course = await Seat.findOne({ institute: req.params.id })
        const Insti = await Institute.findOne({ _id: course.InstituteId });
        const Students = await Student.find({assignedInstitute: null, course: course.courseProvided});
        const StudentsLength = Students.length;
        const assigned = course.assginedStudents.length;
        const availableseats = course.seats-assigned;
        if(availableseats>0){
            for(let i=0;i<availableseats&&StudentsLength;i++){
                Students[i].assignedInstitute = req.params.id;
                course.assignedStudents.push(Students[i]._id);
                Students[i].save();
            }
        }

        let result = await Seat.findOne({ _id: req.params.id }).populate('assignedStudents');
        let result2 = JSON.stringify(result);
        res.send(result2)
    }
    catch (error) {
        console.log(error);
    }
})

module.exports = router;