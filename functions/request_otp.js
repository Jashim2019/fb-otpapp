const admin = require('firebase-admin');

module.exports = function(req,res) {
    if (!req.body.phone) {
        return res.status(422).send({ error : 'You must provide a phone number!' });
    }

    if (String(req.body.phone).length === 0) {
        return res.status(422).send({ error : 'Phone number cannot be blank!' });
    }

    const phone = String(req.body.phone).replace(/[^\d]/g,"");

    admin.auth().getUser(phone)
        .then(userRecord => {
            
        })
        .catch(err => res.status(422).send({ error : err }));
}