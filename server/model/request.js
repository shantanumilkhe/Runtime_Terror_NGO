const mongoose = require('mongoose');

const requestSchema = new mongoose.Schema({
    pendingCertificates:[{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Student',
    }],
    declinedCertificates:[{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Student',
    }],
    approvedCertificates:[{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Student',
    }],
    pendinglor:[{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Student',
    }],
    declinedlor:[{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Student',
    }],
    approvedlor:[{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Student',
    }],
});

const Request = mongoose.model('Request', requestSchema);
module.exports = Request