const express = require('express');
const router = express.Router();
const Volunteer = require('../model/volunteerSchema');
const event = require('../model/event');

router.post('/createEvent', async (req, res) => {
    try{
        const {name, date, time, venue, description,volunteersRequired } = req.body;
        const newEvent = new event();
        newEvent.name = name;
        newEvent.date = date;
        newEvent.timeRequired = time;
        newEvent.venue = venue;
        newEvent.description = description;
        newEvent.volunteersRequired = volunteersRequired;
        newEvent.save();
        res.send("event created")
    }
    catch(err){
        console.log(err)
    }
});

router.get('/getallevents', async (req, res) => {
    try{
        const events = await event.find();
        const result = JSON.stringify(events);
        res.send(result);
    } catch (error) {
        console.log(error);
    }
});








module.exports = router;