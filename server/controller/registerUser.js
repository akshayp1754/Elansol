const { RegisterUser } = require("../schema/registerUser");

module.exports.user = async (req, res) => {
  try {
    const { name, email, dob, password } = req.body;
    console.log({ name, email, dob, password });

    const newUser = await RegisterUser.create({
      name,
      email,
      dob,
      password,
    });
    console.log(newUser);
    return res.status(201).json({
      message: "new user created successfully",
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

module.exports.getAllUsers = async (req, res) => {
  try {
    const users = await RegisterUser.find();
    return res.status(200).json({
      message: "Users retrieved successfully",
      success: true,
      data: users,
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
