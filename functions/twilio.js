const twilio = require('twilio');

const accountSid = 'AC6fba6b89406c5d353cea010fd1a44d96';
const accountToken = 'acdd4442fb49c4e6ca6de7b610f8a784';

module.exports = new twilio.twilio(accountSid,accountToken);