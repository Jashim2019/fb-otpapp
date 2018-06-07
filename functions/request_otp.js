const admin = require('firebase-admin');
const twilio = require('./twilio');
const TwillioPhoneNumber = '+84912930768';

module.exports = function(req,res) {
    if (!req.body.phone) {
        return res.status(422).send({ error : 'You must provide a phone number!' });
    }

    if (String(req.body.phone).length === 0) {
        return res.status(422).send({ error : 'Phone number cannot be blank!' });
    }

    const phone = String(req.body.phone).replace(/[^\d]/g,"");

    admin.auth().getUser(phone)
        .then((userRecord) => {
            if (userRecord) {
                const code = Math.floor(Math.random()*8999 + 1000);

                twilio.messages.create({
                    body: 'Your code is ' + code,
                    to: phone,
                    from: TwillioPhoneNumber
                },(err) => {
                    if (err) {
                        return res.status(422).send(err)
                    }

                    admin.database().ref('users/' + phone).update({ code: code, codeValid: true}, () => {
                        res.send({ success : true });
                    });
                });
            } else {
                throw new Error("userRecord doesn't exist");
            }
        })
        .catch(err => res.status(422).send({ error : err }));
}