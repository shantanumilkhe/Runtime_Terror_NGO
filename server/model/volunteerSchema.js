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
        type: String,
        require: true
    },
    password: {
        type: String,
        require: true
    },
   location:{
        type:String,
        require:true,
   },
   institute:{
        type:String,
        require:true,
   }, 
   approval:{
        type:Boolean,
        default:true
   },
   studentsProvided:[{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Student',
   }],
   certificate:{
        type:String,
        default:null
   },
   lor:{
        type:String,
        default:null
   },
   hours:{
        type:Number,
        default:0
   },
   workDone:[{
    type:String,
    default:null
    }]
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