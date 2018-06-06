const admin = require('firebase-admin');
const functions = require('firebase-functions');
const createUser = require('./create_user');
const TwillioPhoneNumber = "+17064508275";
const serviceAccount = require('./serviceAccount.json');
const requestOTP = require('./request_otp');

admin.initializeApp({
    credential: admin.credential.cert(serviceAccount),
    databaseURL: "https://reactnative-otpapp.firebaseio.com"
});

exports.createUser = functions.https.onRequest(createUser);
exports.requestOTP = functions.hhtps.onRequest(requestOTP);