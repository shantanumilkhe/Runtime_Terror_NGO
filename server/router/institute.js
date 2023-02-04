const express = require('express');
const router = express.Router();
const converter = require('convert-excel-to-json');
const fs = require('fs');
var path = require('path')
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

router.post('/uploadxlsx',upload.single('xlsx'), (req, res) => {
   
   
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
        if(!student.findOne({uid:result.data[i].phone})){
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