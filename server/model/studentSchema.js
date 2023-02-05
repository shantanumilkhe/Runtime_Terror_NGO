const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');


const studentSchema = new mongoose.Schema({
    uid:{
        type: Number,
        require: true
    },
    name: {
        type: String,
        require: true
    },
    phone: {
        type: Number,
        require: true
    },
   location:{
        type:String,
        require:true,
   }
   ,
   currentClass:{
        type:String,
        require:true,
   },
   boardGrade:{
        type:Number,
        require:true,
   }, 
   assignedInstitute:{
    type: mongoose.Schema.Types.ObjectId,
     ref: 'Institute',
   },
   course:{
        type:String,
        require:true,
   }
});


const Student = mongoose.model('Student', studentSchema);

module.exports = Student;