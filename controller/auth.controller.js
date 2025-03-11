import User from "../model/user.model.js";
import bcrypt from "bcryptjs";
import { generateTokenAndSetCookie } from "../utils/generateTokenAndSetCookie.js";

export const signup = async (req, res) => {
  const { name, email, password } = req.body;
  try {
    if (!name || !email || !password) {
      return res.status(400).json({ msg: "Please enter all fields" });
    }
    // Check for existing user
    const userExist = await User.findOne({ email });
    
    if (userExist) {
      return res.status(400).json({ msg: "User already exists" });
    }

    // Hash password
    const hashedPassword = await bcrypt.hash(password, 10);

    const verificationToken = Math.floor(
      100000 + Math.random() * 900000
    ).toString();

    // Create new user
    const newUser = new User({
      name,
      email,
      password: hashedPassword,
      verificationToken,
      verificationTokenExpiresAt: Date.now() + 24 * 60 * 60 * 1000, // 24 hour
    });
    await newUser.save();

    // jwt
    generateTokenAndSetCookie(res, newUser._id);
    res.status(201).json({
      success: true,
      message: "User created successfully",
      user: {
        ...newUser._doc,
        password: null,
      },
    });
  } catch (error) {
    console.log(error);
  }
};

export const login = async (req, res) => {
  res.send("Login Route");
};

export const logout = async (req, res) => {
  res.send("Logout Route");
};
