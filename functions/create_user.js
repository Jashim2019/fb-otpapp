const admin = require('firebase-admin');

module.exports = function(req,res) {
    //check the req has phone number or not
    if (!req.body.phone) {
        return res.status(422).send({ error : 'Bad Input!' });
    }

    //formate the phone number
    const phone = String(req.body.phone).replace(/[^\d]/g,"");

    //create a new user account
    admin.auth().createUser({ uid : phone })
        .then(user => res.send(user))
        .catch(err => res.status(422).send({ error : err }));
}