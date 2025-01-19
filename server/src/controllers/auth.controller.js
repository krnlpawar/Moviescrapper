import asyncHandler from "../middlewares/asyncHandler.js";
import Token from "../models/token.model.js";
import User from "../models/user.model.js";
import { apiResponse, apiError } from "../utils/responseFormatter.js";
import jwt from "jsonwebtoken";

class AuthController {
    static register = asyncHandler(async (req, res) => {
        const body = req.body;
        const { name, email, password } = body;

        if (["name", "email", "password"].some((field) => !body[field])) {
            return apiError(res, "Required fields are missing", 400);
        }

        if (password.length < 8) {
            return apiError(
                res,
                "Password must be at least 8 characters long",
                400
            );
        }

        // check if email exists
        const userExists = await User.findOne({ email });

        if (userExists) {
            return apiError(res, "Email already exists", 400);
        }
        const user = await User.create(body);

        const createdUser = await User.findById(user._id).select("-password");

        if (user) {
            return apiResponse(
                res,
                createdUser,
                "User registered successfully",
                201
            );
        }
    });

    static login = asyncHandler(async (req, res) => {
        const body = req.body;
        const { email, password } = body;

        if (!email || !password) {
            return apiError(res, "Email and password are required", 400);
        }

        const checkUser = await User.findOne({ email });

        if (!checkUser) {
            return apiError(res, "Invalid credentials", 400);
        }

        const checkPassword = checkUser.isPasswordMatched(password);

        if (!checkPassword) {
            return apiError(res, "Invalid credentials", 400);
        }

        const accessToken = await checkUser.generateAccessToken();
        const refreshToken = await checkUser.generateRefreshToken();

        if (!accessToken) {
            return apiError(res, "Failed to login", 400);
        }

        const tokenDoc = await Token.create({
            userId: checkUser._id,
            token: accessToken,
            expiresAt: Date.now() + 60 * 60 * 24
        })

        const refreshTokenDoc = await Token.create({
            userId: checkUser._id,
            token: refreshToken,
            expiresAt: Date.now() + 60 * 60 * 24
        })

        const options = {
            httpOnly: true,
            secure: true
        }

        const cookieres = res;
        cookieres.cookie("accessToken", accessToken, options)
        .cookie("refreshToken", refreshToken, options)

        return apiResponse(
            res,
            { token: accessToken, checkUser },
            "User logged in successfully",
            200
        );
    });

    static logout = asyncHandler(async (req, res) => {
        req.logout(function(err) {
            if (err) { return next(err); }
            return apiResponse(res, {}, "User logged out successfully", 200)
        });
    
        // if (!token) {
        //     return apiError(res, "no token provided", 401)
        // }
    
        // try {
        //     const decodedToken = jwt.verify(token, process.env.ACCESS_TOKEN_SECRET)
    
        //     const user = await User.findById(decodedToken._id)
    
        //     if (!user) {
        //         return apiError(res, "user not found", 404)
        //     };
    
        //     await Token.deleteMany({ userId: user._id })
    
        //     const options = {
        //         httpOnly: true,
        //         secure: true
        //     }
    
        //     const cookieres = res;
        //     cookieres.cookie("accessToken", "", options)
        //     .cookie("refreshToken", "", options)
    
        //     return apiResponse(res, {}, "User logged out successfully", 200)
        // } catch (error) {
        //     console.log(error)
        //     return apiError(res, "invalid token", 401)
        // }
    })

    static verify = asyncHandler(async (req, res) => {
        console.log(req.user);
        console.log(req.logout);
        console.log(req.login);
        
        return apiResponse(res, req.user, "User verified successfully", 200)
    })
}

export default AuthController;
