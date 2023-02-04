const express = require('express');
const router = express.Router();
const Volunteer = require('../model/volunteerSchema');
const PDFDocument = require('pdfkit');
const fs = require('fs');

function jumpLine(doc, lines) {
    for (let index = 0; index < lines; index++) {
      doc.moveDown();
    }
  }


router.get('/generatecertificate/:id', async (req, res) => {
    try {
        const id = req.params.id;
        const Volunt = await Volunteer.findOne({ _id: id });

        const doc = new PDFDocument({
            size: 'A4',
            layout: 'landscape'
        });
        doc.pipe(fs.createWriteStream('./certificates/output.pdf'));
        doc.rect(0, 0, doc.page.width, doc.page.height).fill('#fff');
        const distanceMargin = 18; doc
            .fillAndStroke('#ffb82a')
            .lineWidth(20)
            .lineJoin('round')
            .rect(
                distanceMargin,
                distanceMargin,
                doc.page.width - distanceMargin * 2,
                doc.page.height - distanceMargin * 2,
            )
            .stroke();

        const maxWidth = 140;
        const maxHeight = 70; doc.image(
            './assests/logo.jpg',
            doc.page.width / 2 - maxWidth / 2,
            60,
            {
                fit: [maxWidth, maxHeight],
                align: 'center',
            }
        );

        jumpLine(doc, 5);

        doc
        .fontSize(12)
        .fill('#021c27')
        .text('Certificate for one of the best', {
          align: 'center',
        }
      );

      jumpLine(doc, 3);

      doc
        .fontSize(18)
        .fill('#021c27')
        .text('Certificate of Participation', {
          align: 'center',
        }
      );

        jumpLine(doc, 3);

        doc
        .fontSize(10)
        .fill('#021c27')
        .text('presented to', {
          align: 'center',
        }
      );

      jumpLine(doc, 3);

        doc
        .fontSize(28)
        .fill('#021c27')
        .text(Volunt.name, {
          align: 'center',
        }
      );

      const lineSize = 174;
const signatureHeight = 390;doc.lineWidth(1);
doc.fillAndStroke('#021c27');
doc.strokeOpacity(0.2);const startLine1 = 128;
const endLine1 = 128 + lineSize;// Creates a line
doc
  .moveTo(startLine1, signatureHeight)
  .lineTo(endLine1, signatureHeight)
  .stroke();// Evaluator info
doc
  .font('fonts/NotoSansJP-Bold.otf')
  .fontSize(10)
  .fill('#021c27')
  .text(
    'RedBull',
    startLine1,
    signatureHeight + 10,
    {
      columns: 1,
      columnGap: 0,
      height: 40,
      width: lineSize,
      align: 'center',
    }
  );doc
  .fontSize(10)
  .fill('#021c27')
  .text(
    'NGOs President', 
    startLine1,
    signatureHeight + 25, 
    {
      columns: 1,
      columnGap: 0,
      height: 40,
      width: lineSize,
      align: 'center',
    }
  );

        doc.end();
    } catch (error) {
        console.log(error);
    }
});


module.exports = router;