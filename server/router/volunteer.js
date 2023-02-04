const express = require('express');
const passport = require('passport');
const router = express.Router();
const Volunteer = require('../model/volunteerSchema');

router.get('/getassignedstudents',passport.authenticate('jwt', { session: false }),async(req,res)=>{
    let vol = req.user;
    let volunteer = await volunteer ({_id:vol});
    console.log(volunteer.assignedStudents);
})

const multer  = require('multer');
var shortid    = require('shortid');
const student = require('../model/studentSchema');

const upload = multer({storage: multer.diskStorage({
    destination: './uploads/',
    filename: function (req, file, cb){
        // user shortid.generate() alone if no extension is needed
        cb( null, shortid.generate() + (file.originalname));
    }
})});

router.post('/uploadxlsx',passport.authenticate('jwt', { session: false }),upload.single('xlsx'), async (req, res) => {
   
   
    const result = converter({
        sourceFile: path.join(__dirname, '../uploads/'+req.file.filename),
        header: {
            rows: 1
        },
        columnToKey: {
            A:'uid',
            B:'name',
            C:'phone',
            D:'location',
            E:'currentClass',
           F:'boardGrade'
        }
    });

    for(var i=0;i<result.data.length;i++){
        const exist = await student.findOne({phone:result.data[i].phone});
        if(!exist){
        const newStudent = new student(result.data[i]);
        newStudent.assignedVolunteer = null;
        console.log(newStudent);
        newStudent.save();
        }else{
            console.log("Data already exists");
        }
    }
    console.log("Data inserted");

});

module.exports = router;