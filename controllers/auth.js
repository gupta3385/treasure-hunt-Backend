import User from '../models/user.js';
import { hashPassword, comparePassword } from "../helpers/auth.js";
import jwt from "jsonwebtoken";
import dotenv from "dotenv";
dotenv.config();
export const register = async (req, res) => {
    try{
        const {username, email, password} = req.body;
        if (!username.trim()){
            return res.json({error: "Name is required"});
        }
        if (!email){
            return res.json({error: "Email is required"});
        }
        if (!password || password.length<6){
            return res.json({error: "Password is required and should be min 6 characters long"});
        }
        const existingUser = await User.findOne({ email });
        if (existingUser){
            return res.json({error: "Email is taken"});
        }
        const hashedPassword = await hashPassword(password);

        const user = await new User({username, email, password: hashedPassword}).save();

        const token = jwt.sign({_id: user._id}, process.env.JWT_SECRET, {expiresIn: "7d"});

        res.json({
            user: {
                username: user.username,
                email: user.email,
                role: user.role,
            }, 
            token,
        });
    }
    catch(err){
        console.log(err);
    }
}

export const login = async (req, res) => {
    try{
        const {email, password} = req.body;
        if (!email){
            return res.json({error: "Email is required"});
        }
        if (!password || password.length<6){
            return res.json({error: "Password is required and should be min 6 characters long"});
        }
        const user = await User.findOne({ email });
        if (!user){
            return res.json({error: "User not found"});
        }
        const match = await comparePassword(password, user.password);
        if (!match){
            return res.json({error: "Invalid password"});
        }

        const token = jwt.sign({_id: user._id}, process.env.JWT_SECRET, {expiresIn: "7d"});

        res.json({
            user: {
                username: user.username,
                email: user.email,
                role: user.role,
            }, 
            token,
        });
    }
    catch(err){
        console.log(err);
    }
}

export const secret = async (req, res)=>{
    res.json({"current user": req.user});
}