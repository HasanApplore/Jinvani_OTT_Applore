import PDFDocument from "pdfkit";
import logger from "../common/utils/logger.js";

export const streamAppKeysPdf = (keys = [], res, type) => {
  return new Promise((resolve, reject) => {
    try {
      const doc = new PDFDocument({
        margin: 40,
        size: "A4",
        info: {
          Title: "BigCommerce App Keys Report",
          Author: "BigCommerce API",
          Subject: "App Keys Listing",
          Keywords: "bigcommerce,app,keys,api",
          CreationDate: new Date(),
        },
      });
      doc.pipe(res);
      doc
        .fillColor("#333333")
        .fontSize(24)
        .font("Helvetica-Bold")
        .text("BIGCOMMERCE APP KEYS", {
          align: "center",
          underline: true,
        });

      doc.moveDown();
      doc
        .fillColor("#666666")
        .fontSize(12)
        .font("Helvetica")
        .text(
          `Total Keys: ${keys.length} | Generated: ${new Date().toLocaleDateString()}`,
          {
            align: "center",
          }
        );

      doc.moveDown(1.5);
      doc
        .strokeColor("#cccccc")
        .lineWidth(1)
        .moveTo(40, doc.y)
        .lineTo(550, doc.y)
        .stroke();

      doc.moveDown(1);

      const tableTop = doc.y;
      const headers = [
        { text: "No.", width: 40 },
        { text: "App Name", width: 180 },
        { text: "App Key", width: 180 },
        { text: "Created At", width: 120 },
      ];
      doc.fillColor("#f5f5f5").rect(40, tableTop, 510, 25).fill();

      doc.fillColor("#333333").fontSize(10).font("Helvetica-Bold");

      let x = 45;
      headers.forEach((header) => {
        doc.text(header.text, x, tableTop + 8, {
          width: header.width,
          align: "left",
        });
        x += header.width;
      });

      doc
        .strokeColor("#dddddd")
        .lineWidth(1)
        .moveTo(40, tableTop + 25)
        .lineTo(550, tableTop + 25)
        .stroke();

      let y = tableTop + 30;

      keys.forEach((key, index) => {
        if (index % 2 === 0) {
          doc.fillColor("#ffffff");
        } else {
          doc.fillColor("#f9f9f9");
        }

        doc.rect(40, y, 510, 25).fill();

        const rowData = [
          { text: (index + 1).toString(), width: 40 },
          { text: key.appName || "N/A", width: 180 },
          { text: key.appKey || "N/A", width: 180 },
          { text: new Date(key.createdAt).toLocaleDateString(), width: 120 },
        ];

        doc.fillColor("#333333").fontSize(9).font("Helvetica");

        x = 45;
        rowData.forEach((cell) => {
          doc.text(cell.text, x, y + 8, {
            width: cell.width,
            align: "left",
          });
          x += cell.width;
        });

        doc
          .strokeColor("#eeeeee")
          .lineWidth(0.5)
          .moveTo(40, y + 25)
          .lineTo(550, y + 25)
          .stroke();

        y += 25;

        if (key.description && key.description.trim() !== "") {
          doc.fillColor("#ffffff").rect(40, y, 510, 20).fill();

          doc
            .fillColor("#666666")
            .fontSize(8)
            .font("Helvetica-Oblique")
            .text(`Description: ${key.description}`, 45, y + 6, {
              width: 500,
              align: "left",
            });

          y += 20;
        }

        if (y > 750) {
          doc.addPage();
          y = 40;
        }
      });

      const pageCount = doc.bufferedPageRange().count;
      for (let i = 0; i < pageCount; i++) {
        doc.switchToPage(i);

        doc
          .fillColor("#666666")
          .fontSize(8)
          .font("Helvetica")
          .text(
            `Page ${i + 1} of ${pageCount} | ${type === "download" ? "Downloaded" : "Viewed"} on ${new Date().toLocaleString()}`,
            40,
            800,
            { align: "center", width: 510 }
          );
      }

      doc.end();

      res.on("finish", () => {
        logger.info(
          `PDF ${type === "download" ? "downloaded" : "viewed"} successfully`
        );
        resolve();
      });

      res.on("error", (err) => {
        logger.error("Response stream error during PDF generation", err);
        reject(err);
      });
    } catch (err) {
      logger.error("PDF generation error", err);
      reject(err);
    }
  });
};

export default { streamAppKeysPdf };
