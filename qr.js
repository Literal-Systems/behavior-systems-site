// qr.mjs (or keep qr.js)
import QRCode from 'qrcode';

const url = 'https://aqlia.org'; // your website URL

QRCode.toFile('website-qr.png', url, {
  errorCorrectionLevel: 'H'
}, function (err) {
  if (err) {
    console.error('Failed to generate QR:', err);
    return;
  }
  console.log('QR code saved as website-qr.png');
});
