const passport = require('passport');
const { Strategy: JwtStrategy, ExtractJwt } = require('passport-jwt');
const { JWT_SECRET_KEY } = process.env;
const { User } = require('../src/models');

passport.use(new JwtStrategy({
    jwtFromRequest: ExtractJwt.fromHeader('authorization'),
    secretOrKey: JWT_SECRET_KEY
}, (payload, done) => {
    User.findByPk(payload.id)
    .then((user) => done(null,user))
    .catch((err) => done(err,false))
}))

module.exports = passport;