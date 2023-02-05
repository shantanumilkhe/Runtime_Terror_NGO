const mongoose = require('mongoose');

const requestSchema = new mongoose.Schema({
    pendingCertificates:[{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Volunteer',
    }],
    declinedCertificates:[{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Volunteer',
    }],
    approvedCertificates:[{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Volunteer',
    }],
    pendinglor:[{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Volunteer',
    }],
    declinedlor:[{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Volunteer',
    }],
    approvedlor:[{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Volunteer',
    }],
});

const Request = mongoose.model('Request', requestSchema);
module.exports = Request