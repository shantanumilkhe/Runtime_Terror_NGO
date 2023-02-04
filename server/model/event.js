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
    
});

const Seat = mongoose.model('Seat', eventSchema);
module.exports = Seat