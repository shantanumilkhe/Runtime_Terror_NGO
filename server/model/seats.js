const mongoose = require('mongoose');

const seatsSchema = new mongoose.Schema({
    instituteId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Institute',
        require: true
    },
    seats: {
        type: Number,
        require: true
    },
    assignedStudents:[{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Student',
        length: this.seats
    }],
    courseProvided:{
        type:String,
        require:true,
    }
});

const Seats = mongoose.model('Seats', seatsSchema);
module.exports = Seats;