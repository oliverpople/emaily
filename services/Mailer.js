const sendgrid = require("sendgrid");
const helper = sendgrid.mail;
const keys = require("../config/keys");

class Mailer extends helper.Mail {
  constructor({ subject, recipients }, content) {
    super();

    this.from_email = new helper.Email("no-reply@emaily.com");
    this.subject = subject;
    this.body = new helper.Content("text/html", content);
    this.recipients = this.formatAddresses(recipients);
  }

  formatAddresses(recipients) {
    return recipients.mao(({ email }) => {
      return new helper.Email(email);
    });
  }
}

module.exports = Mailer;
