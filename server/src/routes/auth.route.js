import { Router } from "express";
import AuthController from "../controllers/auth.controller.js";
import isAuthenticated from "../middlewares/auth.middleware.js";

const router = Router();

router.route("/register").post(AuthController.register);
router.route('/login').post( AuthController.login);
router.route("/logout").post(isAuthenticated, AuthController.logout);
router.route("/verify").get(isAuthenticated, AuthController.verify);

export default router;
