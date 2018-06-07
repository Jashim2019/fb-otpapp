const admin = require('firebase-admin');
const functions = require('firebase-functions');
const createUser = require('./create_user');
const serviceAccount = require('./serviceAccount.json');
const requestOTP = require('./request_otp');
const verifyOTP = require('./verifyOTP');

admin.initializeApp({
    credential: admin.credential.cert(serviceAccount),
    databaseURL: "https://reactnative-otpapp.firebaseio.com"
});

exports.createUser = functions.https.onRequest(createUser);
exports.requestOTP = functions.https.onRequest(requestOTP);
exports.verifyOTP = functions.https.onRequest(verifyOTP);