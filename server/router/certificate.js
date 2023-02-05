const express = require('express');
const router = express.Router();
const Volunteer = require('../model/volunteerSchema');
const PDFDocument = require('pdfkit');
const fs = require('fs');
const Request = require('../model/request');

router.post('/generatecertificate/:id', async (req, res) => {
    try {
        const id = req.params.id;
        const Volunt = await Volunteer.findOne({ _id: id });
        const newReq = await Request.findOne();
        if(newReq.pendingCertificates.includes(id)){
        newReq.pendingCertificates.pull(id);
        newReq.save();
        }
        newReq.approvedCertificates.push(id);
        newReq.save();

        
const doc = new PDFDocument({
    layout: 'landscape',
    size: 'A4',
  });
  
  // Helper to move to next line
  function jumpLine(doc, lines) {
    for (let index = 0; index < lines; index++) {
      doc.moveDown();
    }
  }
  
  doc.pipe(fs.createWriteStream(`./certificates/${Volunt.id}.pdf`));
  
  doc.rect(0, 0, doc.page.width, doc.page.height).fill('#fff');
  
  doc.fontSize(10);
  
  // Margin
  const distanceMargin = 18;
  
  doc
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
  
  // Header
  const maxWidth = 140;
  const maxHeight = 70;
  
  doc.image('./assets/logo.jpg', doc.page.width / 2 - maxWidth / 2, 60, {
    fit: [maxWidth, maxHeight],
    align: 'center',
  });
  
  jumpLine(doc, 5)
  
  doc
    .font('./fonts/NotoSansJP-Light.otf')
    .fontSize(10)
    .fill('#021c27')
    .text('Shantanus NGO', {
      align: 'center',
    });
  
  jumpLine(doc, 2)
  
  // Content
  doc
    .font('./fonts/NotoSansJP-Regular.otf')
    .fontSize(16)
    .fill('#021c27')
    .text('CERTIFICATE OF Participation', {
      align: 'center',
    });
  
  jumpLine(doc, 1)
  
  doc
    .font('./fonts/NotoSansJP-Light.otf')
    .fontSize(10)
    .fill('#021c27')
    .text('Present to', {
      align: 'center',
    });
  
  jumpLine(doc, 2)
  
  doc
    .font('fonts/NotoSansJP-Bold.otf')
    .fontSize(24)
    .fill('#021c27')
    .text(Volunt.name, {
      align: 'center',
    });
  
  jumpLine(doc, 1)
  
  doc
    .font('./fonts/NotoSansJP-Light.otf')
    .fontSize(10)
    .fill('#021c27')
    .text('who was the biggest help around', {
      align: 'center',
    });
  
  jumpLine(doc, 7)
  
  doc.lineWidth(1);
  
  // Signatures
  const lineSize = 174;
  const signatureHeight = 390;
  
  doc.fillAndStroke('#021c27');
  doc.strokeOpacity(0.2);
  
  const startLine1 = 128;
  const endLine1 = 128 + lineSize;
  doc
    .moveTo(startLine1, signatureHeight)
    .lineTo(endLine1, signatureHeight)
    .stroke();
  
  const startLine2 = endLine1 + 32;
  const endLine2 = startLine2 + lineSize;
  doc
    .moveTo(startLine2, signatureHeight)
    .lineTo(endLine2, signatureHeight)
    .stroke();
  
  const startLine3 = endLine2 + 32;
  const endLine3 = startLine3 + lineSize;
  doc
    .moveTo(startLine3, signatureHeight)
    .lineTo(endLine3, signatureHeight)
    .stroke();
  
  doc
    .font('./fonts/NotoSansJP-Bold.otf')
    .fontSize(10)
    .fill('#021c27')
    .text('Red Bull', startLine1, signatureHeight + 10, {
      columns: 1,
      columnGap: 0,
      height: 40,
      width: lineSize,
      align: 'center',
    });
  
  doc
    .font('./fonts/NotoSansJP-Light.otf')
    .fontSize(10)
    .fill('#021c27')
    .text('Head of RedbullIndia', startLine1, signatureHeight + 25, {
      columns: 1,
      columnGap: 0,
      height: 40,
      width: lineSize,
      align: 'center',
    });
  
  doc
    .font('./fonts/NotoSansJP-Bold.otf')
    .fontSize(10)
    .fill('#021c27')
    .text(Volunt.name, startLine2, signatureHeight + 10, {
      columns: 1,
      columnGap: 0,
      height: 40,
      width: lineSize,
      align: 'center',
    });
  
  doc
    .font('./fonts/NotoSansJP-Light.otf')
    .fontSize(10)
    .fill('#021c27')
    .text(Volunt.institute, startLine2, signatureHeight + 25, {
      columns: 1,
      columnGap: 0,
      height: 40,
      width: lineSize,
      align: 'center',
    });
  
  doc
    .font('./fonts/NotoSansJP-Bold.otf')
    .fontSize(10)
    .fill('#021c27')
    .text('Shantanu', startLine3, signatureHeight + 10, {
      columns: 1,
      columnGap: 0,
      height: 40,
      width: lineSize,
      align: 'center',
    });
  
  doc
    .font('./fonts/NotoSansJP-Light.otf')
    .fontSize(10)
    .fill('#021c27')
    .text('Director of NGO', startLine3, signatureHeight + 25, {
      columns: 1,
      columnGap: 0,
      height: 40,
      width: lineSize,
      align: 'center',
    });
  
  jumpLine(doc, 4);
  
  // Validation link
  const link =
    'https://github.com/shantanumilkhe/Runtime_Terror_NGO';
  
  const linkWidth = doc.widthOfString(link);
  const linkHeight = doc.currentLineHeight();
  
  doc
    .underline(
      doc.page.width / 2 - linkWidth / 2,
      448,
      linkWidth,
      linkHeight,
      { color: '#021c27' },
    )
    .link(
      doc.page.width / 2 - linkWidth / 2,
      448,
      linkWidth,
      linkHeight,
      link,
    );
  
  doc
    .font('./fonts/NotoSansJP-Light.otf')
    .fontSize(10)
    .fill('#021c27')
    .text(
      link,
      doc.page.width / 2 - linkWidth / 2,
      448,
      linkWidth,
      linkHeight
    );
  
  // Footer
  const bottomHeight = doc.page.height - 100;
  
  doc.image('./assets/qr.png', doc.page.width / 2 - 30, bottomHeight, {
    fit: [60, 60],
  });
  
  doc.end();

  Volunt.certificate = `${Volunt.id}.pdf`;
  Volunt.save();
  res.send("Certificate Generated");
    } catch (error) {
        console.log(error);
    }
});


module.exports = router;