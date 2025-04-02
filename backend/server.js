import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import dotenv from "dotenv";

dotenv.config();
const app = express();

// Middleware
app.use(cors());
app.use(express.json());

// Connect to MongoDB Atlas
mongoose.connect(process.env.MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log("Connected to MongoDB Atlas"))
  .catch(err => console.error("MongoDB connection error:", err));

// User Schema
const userSchema = new mongoose.Schema({
  email: String,
  name: String,
  profilePicture: String,
});

const User = mongoose.model("User", userSchema);

// Save user data to MongoDB
app.post("/api/users", async (req, res) => {
  try {
    const { email, name, profilePicture } = req.body;
    let user = await User.findOne({ email });

    if (!user) {
      user = new User({ email, name, profilePicture });
      await user.save();
    }

    res.status(200).json({ message: "User saved successfully", user });
  } catch (error) {
    res.status(500).json({ error: "Error saving user" });
  }
});

// Start server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
