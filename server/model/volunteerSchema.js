const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');


const volunteerSchema = new mongoose.Schema({
    name: {
        type: String,
        require: true
    },
    email: {
        type: String,
        require: true
    },
    phone: {
        type: Number,
        require: true
    },
    password: {
        type: String,
        require: true
    },
   location:{
        type:String,
        require:true,
   }
   ,
   institute:{
        type:String,
        require:true,
   }, 
   currentCourse:{
        type:Number,
        require:true,
   },
   grade:{
        type:Number,
        require:true,
   },
   assignedStudents:[{
    type: mongoose.Schema.Types.ObjectId,
     ref: 'Student',
   }],
   approval:{
        type:Boolean,
        default:false
   }
});

volunteerSchema.pre('save', async function (next) {
    if (this.isModified('password')) {
        this.password = bcrypt.hashSync(this.password, 12);
    }
    next();
});

volunteerSchema.methods.generateAuthToken = async function () {
    try {
        let token= jwt.sign({ _id: this._id }, process.env.SECRET_KEY);
        this.tokens = this.tokens.concat({token:token});
        await this.save();
        return token;
    } catch (error) {
        console.log(error);
    }
}

const Volunteer = mongoose.model('Volunteer', volunteerSchema);

module.exports = Volunteer;