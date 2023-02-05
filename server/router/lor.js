const express = require('express');
const router = express.Router();
const Volunteer = require('../model/volunteerSchema');
const PDFDocument = require('pdfkit');
const fs = require('fs');
const Request = require('../model/request');
const sgMail = require('@sendgrid/mail');
sgMail.setApiKey(process.env.SENDGRID_API_KEY);


function sendMail(email, name){
    const msg = {
        to: 'shantanu.milkhe@spit.ac.in',
        from: 'shantanumilkhe1@gmail.com', // Use the email address or domain you verified above
        subject: `LOR for ${name} generated`,
        text: `dear ${name}, letter of recommendation has been generated for you.`,
        html: ``
      };

      (async () => {
        try {
          await sgMail.send(msg);
        } catch (error) {
          console.error(error);
      
          if (error.response) {
            console.error(error.response.body)
          }
        }
      })();
}



function jumpLine(doc, lines) {
    for (let index = 0; index < lines; index++) {
        doc.moveDown();
    }
}

router.get('/generateLOR/:id', async (req, res) => {
    try {
        const id = req.params.id;
        const Volunt = await Volunteer.findOne({ _id: id });
        const newReq = await Request.findOne();
        if (newReq.pendinglor.includes(id)) {
            newReq.pendinglor.pull(id);
            newReq.save();
        }
        newReq.approvedlor.push(id);

        const doc = new PDFDocument({
            layout: 'portrait',
            size: 'A4',
        });
        doc.pipe(fs.createWriteStream(`./LORS/${Volunt.id}.pdf`));

        doc.rect(0, 0, doc.page.width, doc.page.height).fill('#fff');

        doc.fontSize(12);

        const maxWidth = 140;
        const maxHeight = 70;

        doc.image('./assets/logo.jpg', doc.page.width / 2 - maxWidth / 2, 60, {
            fit: [maxWidth, maxHeight],
            align: 'center',
        });

        jumpLine(doc, 4)

        doc
            .font('./fonts/NotoSansJP-Light.otf')
            .fontSize(18)
            .fill('#000000')
            .text('Letter Of Recommendation', {
                align: 'center',
            });

        jumpLine(doc, 2)

        doc.font('./fonts/NotoSansJP-Light.otf')
            .fontSize(12)
            .fill('#000000')
            .text(`Dear Respected HOD`, {
                align: 'left',
            });
        doc.font('./fonts/NotoSansJP-Light.otf')
            .fontSize(12)
            .fill('#000000')
            .text(`Of ${Volunt.institute}`, {
                align: 'left',
            });

        jumpLine(doc, 1)

        doc.font('./fonts/NotoSansJP-Light.otf')
            .fontSize(12)
            .fill('#000000')
            .text(`I am writing this letter to highly recommend ${Volunt.name}, a student at ${Volunt.institute}, for their volunteer work with our NGO for total of ${Volunt.hours}, an organization that provides education to underprivileged children. I have had the pleasure of working with ${Volunt.name} as their supervisor and can attest to their strong commitment to making a difference in the lives of others.`, {
                align: 'justify',
            });

        jumpLine(doc, 1)

        doc.font('./fonts/NotoSansJP-Light.otf')
            .fontSize(12)
            .fill('#000000')
            .text(`${Volunt.name} possesses a rare combination of intelligence, passion, and drive, which makes them an asset to any organization. I am confident that their volunteer work such as ${Volunt.workDone} with our NGO will have a lasting impact on the lives of the children they serve.`, {
                align: 'justify',
            });

        jumpLine(doc, 1)

        doc.font('./fonts/NotoSansJP-Light.otf')
            .fontSize(12)
            .fill('#000000')
            .text(`I strongly recommend ${Volunt.name} for any future opportunities in the field of community service, particularly in the area of education. They have my full support, and I am confident that they will make a positive contribution to any organization they work with.`, {
                align: 'justify',
            });

        jumpLine(doc, 1)

        doc.font('./fonts/NotoSansJP-Light.otf')
            .fontSize(12)
            .fill('#000000')
            .text(`Please feel free to contact me if you require any further information.`, {
                align: 'justify',
            });

        jumpLine(doc, 1)

        doc.font('./fonts/NotoSansJP-Light.otf')
            .fontSize(12)
            .fill('#000000')
            .text(`Sincerely,`, {
                align: 'left',
            });

        doc.font('./fonts/NotoSansJP-Light.otf')
            .fontSize(12)
            .fill('#000000')
            .text(`Shantanu`, {
                align: 'left',
            });

        doc.font('./fonts/NotoSansJP-Light.otf')
            .fontSize(12)
            .fill('#000000')
            .text(`Vice-President`, {
                align: 'left',
            });

        doc.font('./fonts/NotoSansJP-Light.otf')
            .fontSize(12)
            .fill('#000000')
            .text(`shantanumilkhe1@gmail.com`, {
                align: 'left',
            });




        doc.end();

        Volunt.lor = `${Volunt.id}.pdf`;
        Volunt.save();

        sendMail(Volunt.email, Volunt.name)
        res.send("lLOR Generated");

    } catch (error) {
        console.log(error)
    }
})




module.exports = router;