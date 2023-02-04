const JwtStrategy = require('passport-jwt').Strategy,
    ExtractJwt = require('passport-jwt').ExtractJwt;
const opts = {}
const User = require('../model/volunteerSchema')
const Institute = require('../model/instituteSchema')
const passport = require('passport')

opts.jwtFromRequest = ExtractJwt.fromAuthHeaderAsBearerToken();
opts.secretOrKey = "SECRETKEY";
opts.passReqToCallback= true;

passport.use(new JwtStrategy(opts, function (req,jwt_payload, done) {
    let flag =false;
    User.findOne({ _id: jwt_payload.id }, function (err, user) {
        if (user) {
            req.user = user;
            flag=true;
            return done(null, user);
        }
    });
    if(flag!=true){
        Institute.findOne({ _id: jwt_payload.id }, function (err, user) {
            if (user) {
                req.user = user;
                return done(null, user);
            }
        });
    }
}));