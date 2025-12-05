const nodemailer = require("nodemailer");

let transporter;

function getTransporter() {
  if (!transporter) {
    transporter = nodemailer.createTransport({
      host: process.env.SMTP_HOST,
      port: Number(process.env.SMTP_PORT || 587),
      auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASS,
      },
    });
  }
  return transporter;
}

/**
 * Enviar un email básico
 * @param {Object} options
 * @param {string} options.to
 * @param {string} options.subject
 * @param {string} options.text
 * @param {string} [options.html]
 */
async function sendMail({ to, subject, text, html }) {
  const from = process.env.EMAIL_FROM || "no-reply@example.com";
  const transport = getTransporter();

  const info = await transport.sendMail({
    from,
    to,
    subject,
    text,
    html: html || `<p>${text}</p>`,
  });

  console.log("📧 Email enviado:", info.messageId);
  return info;
}

module.exports = { sendMail };
