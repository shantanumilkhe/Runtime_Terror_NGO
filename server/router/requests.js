const express = require('express');
const router = express.Router();
const Volunteer = require('../model/volunteerSchema');
const Request = require('../model/request');

router.post('/requestCertificate/:id', async (req, res) => {
    try{
        const id = req.params.id;
        const newReq = await Request.findOne();
        newReq.pendingCertificates.push(id);
        newReq.save();
        res.send("request sent")
    }
    catch(err){
        console.log(err)
    }
})

router.post('/declineCertificate/:id', async (req, res) => {
    try{
        const id = req.params.id;
        const newReq = new Request();
        newReq.pendingCertificates.pull(id);
        newReq.declinedCertificates.push(id);
        newReq.save();
        res.send("request sent")
    }
    catch(err){
        console.log(err)
    }
})

router.post('/cancelrequest/:id', async (req, res) => {
    try{
        const id = req.params.id;
        const newReq = new Request();
        newReq.declinedCertificates.pull(id);
        newReq.save();
        res.send("request cancelled")
    }
    catch(err){
        console.log(err)
    }
});

router.post('/requestlor/:id', async (req, res) => {
    try{
        const id = req.params.id;
        const newReq = await Request.findOne();
        newReq.pendinglor.push(id);
        newReq.save();
        res.send("request sent")
    }
    catch(err){
        console.log(err)
    }
})

router.post('/declinelor/:id', async (req, res) => {
    try{
        const id = req.params.id;
        const newReq = new Request();
        newReq.pendinglor.pull(id);
        newReq.declinedlor.push(id);
        newReq.save();
        res.send("request sent")
    }
    catch(err){
        console.log(err)
    }
})

router.post('/cancellort/:id', async (req, res) => {
    try{
        const id = req.params.id;
        const newReq = new Request();
        newReq.declinedlor.pull(id);
        newReq.save();
        res.send("request cancelled")
    }
    catch(err){
        console.log(err)
    }
});


module.exports = router;