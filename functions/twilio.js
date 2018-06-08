const twilio = require('twilio');

const accountSid = 'ACafe86f523b09297a282dbe2e8a814f32';
const accountToken = '2acc017cf299eb40562c74426d416e24';

module.exports = new twilio(accountSid,accountToken);