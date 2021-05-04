const passport = require("passport");

const UserModel = require("../Mongo/UserSchema");
const config = require('../config.js');
const JwtStrategy = require("passport-jwt").Strategy;
const ExtractJwt = require("passport-jwt").ExtractJwt;
const LocalStrategy = require("passport-local");


const jwtOptions = {
    jwtFromRequest: ExtractJwt.fromHeader("authorization"),
    secretOrKey: config.secret,
}

const jwtLogin = new JwtStrategy(jwtOptions, function (payload, done) {

    UserModel.findById(payload.sub, function (err, user) {
        if (err) { return done(err, false) }

        if (user) {
            done(null, user);
        }
        else {
            done(null, false);
        }
    })
})

const localOptions = { usernameField: "email" };
const localLogin = new LocalStrategy(localOptions, function (email, password, done) {

    UserModel.findOne({ email }, function (err, user) {
        if (err) { return done(err) }

        if (!user) {
            return done(null, false);
        }
        user.comparePassword(password, function (err, isMatch) {
            if (err) { return done(err) }

            if (!isMatch) { return done(null, false) }

            return done(null, user);
        })


    })
})
passport.use(localLogin);
passport.use(jwtLogin);