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
   assignedVolunteer:{
    type: mongoose.Schema.Types.ObjectId,
     ref: 'Volunteer',
   },
});

studentSchema.pre('save', async function (next) {
    if (this.isModified('password')) {
        this.password = bcrypt.hashSync(this.password, 12);
    }
    next();
});

studentSchema.methods.generateAuthToken = async function () {
    try {
        let token= jwt.sign({ _id: this._id }, process.env.SECRET_KEY);
        this.tokens = this.tokens.concat({token:token});
        await this.save();
        return token;
    } catch (error) {
        console.log(error);
    }
}

const Student = mongoose.model('Student', studentSchema);

module.exports = Student;