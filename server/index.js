const express = require("express");
const app = express();
const dotenv = require("dotenv");
dotenv.config();
const cors = require("cors");
const PORT = process.env.PORT || 8081;

const { connectDB } = require("./utils/db");
connectDB();
app.use(cors());
app.use(express.json());
const authRoutes = require("./routes/auth");
const registerUserRoutes = require("./routes/user")


app.use("/auth", authRoutes);
app.use("/registerUser", registerUserRoutes);

app.get("/", (req, res) => {
  return res.json({ greetings: `Hare Krishna` });
});

app.listen(PORT, () => {
  console.log(`server started to ${PORT}`);
});
