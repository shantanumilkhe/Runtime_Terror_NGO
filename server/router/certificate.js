const express = require('express');
const router = express.Router();
const Volunteer = require('../model/volunteerSchema');
const PDFDocument = require('pdfkit');
const fs = require('fs');




router.get('/generatecertificate/:id', async (req, res) => {
    try {
        const id = req.params.id;
        const Volunt = await Volunteer.findOne({ _id: id });

        const doc = new PDFDocument({
            size: 'A4',
            layout: 'landscape'
        });
        doc.pipe(fs.createWriteStream('output.pdf'));
        doc.rect(0, 0, doc.page.width, doc.page.height).fill('#fff');
        const distanceMargin = 18; doc
            .fillAndStroke('#0e8cc3')
            .lineWidth(20)
            .lineJoin('round')
            .rect(
                distanceMargin,
                distanceMargin,
                doc.page.width - distanceMargin * 2,
                doc.page.height - distanceMargin * 2,
            )
            .stroke();

        doc.end();
    } catch (error) {
        console.log(error);
    }
});


module.exports = router;