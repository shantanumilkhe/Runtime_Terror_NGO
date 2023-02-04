const mongoose = require('mongoose');

const eventSchema = new mongoose.Schema({
    name: {
        type: String,
        require: true
    },
    description:{
        type:String,

    },
    date:{
        type:Date,
        require:true
    },
    venue:{
        type:String,
        require:true
    },
    timeRequired:{
        type:Number,
        require:true
    },
    volunteersRequired:{
        type:Number,
        require:true
    },
    volunteersAssigned:[{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Volunteer',
    }],

});

const Seat = mongoose.model('Seat', eventSchema);
module.exports = Seat