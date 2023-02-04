const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');


const instituteSchema = new mongoose.Schema({
    name: {
        type: String,
        require: true
    },
    email: {
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
    courses:[{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'seats',
        require: true
    }],
   
});

instituteSchema.pre('save', async function (next) {
    if (this.isModified('password')) {
        this.password = bcrypt.hashSync(this.password, 12);
    }
    next();
});

instituteSchema.methods.generateAuthToken = async function () {
    try {
        let token= jwt.sign({ _id: this._id }, process.env.SECRET_KEY);
        this.tokens = this.tokens.concat({token:token});
        await this.save();
        return token;
    } catch (error) {
        console.log(error);
    }
}

const Institute = mongoose.model('Institute', instituteSchema);

module.exports = Institute;