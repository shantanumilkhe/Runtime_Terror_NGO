const express = require('express');
const router = express.Router();
const Volunteer = require('../model/volunteerSchema');
const Student = require('../model/studentSchema');
const Institute = require('../model/instituteSchema');

router.post('/login',async(req,res)=>{
    const{username,password} = req.body;
    if(!username || !password) return res.json(500).send({message:'incomplete data'});
    if(username =='admin' && password =='admin')  return res.json(200).send({message:'login successful'});
    else return res.json(500).send({message:'Login unsuccesful'});
})

router.get('/getallstudents',async (req,res)=>{
    try {
        const students = await Student.find();
        console.log(students);
    } catch (error) {
        console.log(error);
    }
})

router.get('/getallinstitutes',async (req,res)=>{
    try {
        const institute = await Institute.find();
        console.log(institute);
    } catch (error) {
        console.log(error);
    }
})

router.get('/getallvolunteer',async (req,res)=>{
    try {
        const volunteer = await Volunteer.find();
        console.log(volunteer);
    } catch (error) {
        console.log(error);
    }
})

module.exports = router;