const mongoose = require("mongoose");
const bcrypt = require("bcrypt");

const userSchema = new mongoose.Schema({
    email: String,
    password: String,
})
userSchema.pre('save', (next) => {
    const user = this;

    bcrypt.genSalt(10, function (err, salt) {
        if (err) { next(err) }
        bcrypt.hash(user.password, salt, function (err2, hash) {
            if (err2) { next(err) };
            user.password = hash;
            next();
        })
    })
})
const UserModal = mongoose.model('users', userSchema)
module.exports = UserModal;
