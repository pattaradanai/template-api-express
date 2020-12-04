const passport = require('passport'),
      LocalStrategy = require('passport-local').Strategy,
      User = require('../models/User')

passport.use(new LocalStrategy({
  usernameField: 'email',
  passwordField: 'password'
}, (email, password, done) => {
  
  User.findOne({email : email, password : password}).then((user) => {
    if (!user || !user.validPassword(password)) {
      return done(null, false, { errors: { 'email or password': 'is invalid' } })
    }
    return done(null, user , {message: 'Logged In Successfully'})

  }).catch(done)

}))

