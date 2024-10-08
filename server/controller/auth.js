const { User } = require("../schema/user");
const { verifyAuthToken } = require("../utils/token");
const jwt = require("jsonwebtoken");

module.exports.signup = async (req, res) => {
  try {
    const { firstName, lastName, email, password } = req.body;

    const exist = await User.findOne({ email });
    if (exist) {
      return res.status(400).json({
        message: "User with this email already exists",
        success: false,
        data: null,
      });
    }

    

    const newUser = await User.create({
      firstName,
      lastName,
      email,
      password,
    });

    return res.status(201).json({
      message: "Signup successful",
      success: true,
      data: newUser,
    });
  } catch (error) {
    console.log(error);
    return res.status(500).json({
      message: error.message,
      success: false,
      data: null,
    });
  }
};

module.exports.login = async (req, res) => {
  try {
    const { email, password } = req.body;
    const user = await User.findOne({ email: email });
    if (!user) {
      return res.status(400).json({
        success: false,
        message: "User not found",
      });
    }
    
    const token = jwt.sign(
      {
        id: user._id,
        email: user.email,
        name: user.firstName,
      },
      process.env.JWT_SECRET,
      {
        expiresIn: "1d",
      }
    );
    return res.status(200).json({
      message: "user login success",
      success: true,
      data: {
        token,
        user: {
          id: user._id,
          email: user.email,
          name: user.firstName,
        },
      },
    });
  } catch (error) {
    console.log(error);
    return res.status(500).json({
      message: error.message,
      success: false,
      data: null,
    });
  }
};

module.exports.validate = async (req, res) => {
  try {
    const { token } = req.params;

    const payload = verifyAuthToken(token);
    console.log("validation", payload);
    if (!payload) {
      return res.status(401).json({
        message: "Invalid or expired token",
        success: false,
        data: null,
      });
    }

    return res.status(200).json({
      message: "User Verified",
      success: true,
      data: { token, user: payload },
    });
  } catch (error) {
    logger.error(error);
    return res.status(500).json({
      message: error.message,
      success: false,
      data: null,
    });
  }
};
