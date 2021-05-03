const userObj = require('../Mongo/UserSchema');


exports.getUsers = (req, res) => {
    res.json("get users done")
}
exports.signup = (req, res) => {
    let { email, password } = req.body;
    let newUser = new userObj({ email, password });
    newUser.save((err, user) => {
        if (err) { res.status(500) };

        if (user) {
            res.json(user);
        }
    })

}