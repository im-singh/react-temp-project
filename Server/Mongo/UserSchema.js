const mongoose = require("mongoose");
const bcrypt = require("bcrypt");

const userSchema = new mongoose.Schema({
    email: String,
    password: String,
})
userSchema.pre('save', function (next) {
    const user = this;

    bcrypt.hash(user.password, 10, function (err2, hash) {
        if (err2) { return next(err2) };
        user.password = hash;
        next();
    })
})
userSchema.methods.comparePassword = function (candidatePassword, callback) {
    bcrypt.compare(candidatePassword, this.password, function (err, isMatch) {
        if (err) { return (callback(err)) };

        callback(null, isMatch);
    })
}


const UserModel = mongoose.model('users', userSchema)
module.exports = UserModel;
