import { apiError } from "../utils/responseFormatter.js";
import passport from "../config/passport.config.js";

const isAuthenticated = async (req, res, next) => {
  passport.authenticate("jwt", { session: false }, (error, user, info) => {
    if (error || !user) {
      let errorMessage = "Unauthorized";

      // Handle specific JWT errors from `info`
      if (info && info.name) {
        switch (info.name) {
          case "TokenExpiredError":
            errorMessage = "Token has expired";
            break;
          case "JsonWebTokenError":
            errorMessage = "Invalid token signature";
            break;
          case "NotBeforeError":
            errorMessage = "Token not active yet";
            break;
          default:
            errorMessage = info.message || "Unauthorized access";
        }
      }

      // Log error details for debugging
      console.error("Authentication Error:", info);

      return apiError(res, errorMessage, 401);
    }

    // If user is authenticated, proceed
    req.user = user;
    next();
  })(req, res, next);
};

export default isAuthenticated;
