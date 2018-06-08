const admin = require('firebase-admin');

module.exports = function(req,res) {
    if (!req.body.phone || !req.body.code) {
        return res.status(422).send({ error: 'Phone and Code must be provived!' })
    }

    if (String(req.body.phone).length === 0 || String(req.body.code).length === 0) {
        return res.status(422).send({ error : 'Phone or code cannot be blank!' });
    }

    const phone = String(req.body.phone).replace(/[^\d]/g,"");
    var code = parseInt(req.body.code);
    try {
        code = parseInt(req.body.code);
    } catch (err) {
        return res.status(422).send({ error: err, code: code, phone: phone });
    }

    admin.auth().getUser(phone)
        .then(() => {
            const ref = admin.database().ref('users/' + phone);
            ref.on('value', snapshot => {
                ref.off();
                const user = snapshot.val();

                if (user.code !== code || !user.codeValid) {
                    return res.status(422).send({ err: 'Code is not valid!'});
                }


            });
            ref.update({ codeValid: false });

            admin.auth().createCustomToken(phone)
                .then(token => {
                    res.send({token: token});
                })
                .catch();
        })
        .catch(err => { res.status(422).send({ error: err}) });
}