const express = require('express');
const passport = require('passport');
const router = express.Router();
const Volunteer = require('../model/volunteerSchema');

router.get('/getassignedstudents',passport.authenticate('jwt', { session: false }),async(req,res)=>{
    let vol = req.user;
    let volunteer = await volunteer ({_id:vol});
    console.log(volunteer.assignedStudents);
})

module.exports = router;