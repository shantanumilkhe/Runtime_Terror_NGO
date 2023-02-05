const express = require('express');
const router = express.Router();
const passport = require('passport');
const Volunteer = require('../model/volunteerSchema');
const Request = require('../model/request');

router.post('/requestCertificate', passport.authenticate('jwt', { session: false }), async (req, res) => {
    try{
        const id = req.user.id;
        const newReq = await Request.findOne();
        newReq.pendingCertificates.push(id);
        newReq.save();
        res.send("request sent")
    }
    catch(err){
        console.log(err)
    }
})

router.get('/getpendingcertificates', async (req, res) => {
    try{
        const newReq = await Request.findOne().populate({path:'pendingCertificates',model:Volunteer});;
        const pendingCertificates = newReq.pendingCertificates;
        const results = JSON.stringify(pendingCertificates);
        res.send(results);
    }
    catch(err){
        console.log(err)
    }
});

router.get('/getpendinglors', async (req, res) => {
    try{
        const newReq = await Request.findOne().populate({path:'pendinglor',model:Volunteer});
        console.log(newReq)
        const pendinglor = newReq.pendinglor;
        const results = JSON.stringify(pendinglor);
        res.send(results);
    }
    catch(err){
        console.log(err)
    }
});

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

router.post('/requestlor',passport.authenticate('jwt', { session: false }), async (req, res) => {
    try{
        const id = req.user.id;
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