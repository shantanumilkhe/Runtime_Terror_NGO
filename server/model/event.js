const mongoose = require('mongoose');


const eventSchema = new mongoose.Schema({
    name: {
        type: String,
        require: true
    },
    description: {
        type: String,

    },
    expireAt:
    {
        type: Date,
        expires:86400,
        require: true
    },
    venue: {
        type: String,
        require: true
    },
    timeRequired: {
        type: Number,
        require: true
    },
    volunteersRequired: {
        type: Number,
        require: true
    },
    volunteersAssigned: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Volunteer',
    }],

});


const Event = mongoose.model('Event', eventSchema);
module.exports = Event