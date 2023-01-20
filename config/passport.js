import passport from 'passport'
import { GoogleOneTapStrategy as GoogleStrategy } from 'passport-google-one-tap'
import { User } from '../models/user.js'
import { Profile } from '../models/profile.js'

passport.use(
  new GoogleStrategy(
    {
      clientID: process.env.GOOGLE_CLIENT_ID,
      clientSecret: process.env.GOOGLE_SECRET,
      verifyCsrfToken: false,
    },
    function (profile, done) {
      User.findOne({ googleId: profile.id })
      .then(user => {
        if (user) {
          return done(null, user)
        } else {
          const newProfile = new Profile({
            name: profile.displayName,
            avatar: profile.photos[0].value,
          })
          const newUser = new User({
            email: profile.emails[0].value,
            googleId: profile.id,
            profile: newProfile._id,
          })
          newProfile.save()
          .then(()=> {
            newUser.save()
            .then(() => {
              return done(null, newUser) 
            })
            .catch(err => {
              if (err) {
                // Something went wrong while making a user - delete the profile
                // we just created to prevent orphan profiles.
                Profile.findByIdAndDelete(newProfile._id)
                return done(err)
              } 
            })
          })
          .catch(err => {
            if (err) return done(err)
          })
        }
      })
      .catch(err => {
        if (err) return done(err)
      })
    }
  )
)

passport.serializeUser(function (user, done) {
  done(null, user._id)
})

passport.deserializeUser(function (userId, done) {
  User.findById(userId)
  .populate('profile', 'name avatar')
  .then(user => {
    done(null, user)
  })
  .catch(err => {
    done(err, null)
  })
})
