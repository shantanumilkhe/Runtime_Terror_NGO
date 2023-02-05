const express = require('express');
const passport = require('passport');
const path = require('path');
const router = express.Router();
const Volunteer = require('../model/volunteerSchema');
const multer  = require('multer');
var shortid    = require('shortid');
const student = require('../model/studentSchema');
const event = require('../model/event');
const converter = require('convert-excel-to-json');

const upload = multer({storage: multer.diskStorage({
    destination: './uploads/',
    filename: function (req, file, cb){
        // user shortid.generate() alone if no extension is needed
        cb( null, shortid.generate() + (file.originalname));
    }
})});

router.post('/uploadxlsx',passport.authenticate('jwt', { session: false }),upload.single('xlsx'), async (req, res) => {
   try{
    console.log(req.file);
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
           F:'boardGrade',
           G:'course'
        }
    });
    console.log(req.user.id);
    const vol = await Volunteer.findOne({_id:req.user.id});
    console.log(vol);
    for(var i=0;i<result.data.length;i++){
        const exist = await student.findOne({phone:result.data[i].phone});
        if(!exist){
        const newStudent = new student(result.data[i]);
        newStudent.assignedInstitute = null;
        vol.studentsProvided.push(newStudent._id);
        console.log(newStudent);
        await vol.save();
        newStudent.save();
        }else{
            console.log("Data already exists");
        }
    }

    vol.workDone.push("Uploaded "+result.data.length+" students");
    vol.hours = vol.hours + result.data.length*0.1667
    await vol.save();
    console.log("Data inserted");

    res.status(200).send("Data inserted");
}catch(err){
    console.log(err);
}
  

});

router.get('/getcertificates',passport.authenticate('jwt', { session: false }), async (req, res) => {
    const id = req.user.id;
    const vol = await Volunteer.findOne({_id:id});
    if(vol.certificate){
   const certificate = vol.certificate;
    const certificatePath = path.join(__dirname, '../certificates/');
   res.sendFile(certificate, { root: certificatePath });
    }else{
        res.status(400).send("No certificate found");
    }

})

router.get('/getLOR',passport.authenticate('jwt', { session: false }), async (req, res) => {
    const id = req.user.id;
    const vol = await Volunteer.findOne({_id:id});
    if(vol.lor){
   const LOR = vol.lor;
    const LORPath = path.join(__dirname, '../LORS/');
   res.sendFile(LOR, { root: LORPath });
    }else{
        res.status(400).send("No LOR found");
    }
})

router.post('/participate/:id',passport.authenticate('jwt', { session: false }), async (req, res) => {
    try{
            const id = req.params.id;
            const ev = await event.findOne({_id:id});
            const vid = req.user.id;
            const volunt = await Volunteer({ _id: vid });
            const required = ev.volunteersRequired.length;
            const assigned = ev.volunteersAssigned.length;
            const hours = ev.timeRequired

            if(required-assigned>0){
                ev.volunteersAssigned.push(vid);
                volunt.hours = volunt.hours + hours;
                volunt.workDone.push(ev.name);
                await volunt.save();
                await ev.save();
                console.log("Volunteer assigned");
                res.status(200).send("Volunteer assigned");
            }else{
                console.log("no more volunteers required");
                res.status(400).send("no more volunteers required");
            }
    }
    catch(err){
        console.log(err)
    }
})


module.exports = router;