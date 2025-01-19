// Import the necessary modules
import passport from 'passport';
import { Strategy as JWTStrategy, ExtractJwt } from 'passport-jwt';
import User from '../models/user.model.js';
import dotenv from 'dotenv';

dotenv.config();

// Define the Passport-JWT strategy
const opts = {
  jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
  secretOrKey: process.env.ACCESS_TOKEN_SECRET,
};

passport.use(
  new JWTStrategy(opts, async (payload, done) => {
    try {
      // Find the user by ID
      const user = await User.findOne({email: payload.email});

      // If the user is found, return the user
      if (user) {
        return done(null, user);
      }

      // If the user is not found, return an error
      return done(null, false);
    } catch (error) {
      // If an error occurs, return the error
      return done(error, false);
    }
  })
);

export default passport;