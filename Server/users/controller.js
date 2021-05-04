const UserModel = require('../Mongo/UserSchema');
const jwt = require("jwt-simple");
const config = require('../config')

function tokenForUser(user) {
    return jwt.encode({ sub: user.id, iat: new Date().getTime() }, config.secret);
}
exports.getUsers = (req, res) => {
    res.json("get users done")
}
exports.signin = (req, res, next) => {
    res.send({ token: tokenForUser(req.user) })
}
exports.signup = (req, res) => {
    let { email, password } = req.body;
    UserModel.findOne({ email })
        .then(user => {
            if (user) {
                res.status(422).send("email already existed");
            }
            else {
                let newUser = new UserModel({ email, password });
                newUser.save((err, user) => {
                    if (err) { res.status(500) };

                    if (user) {
                        res.json({ token: tokenForUser(user) });
                    }
                })

            }
        })
}
