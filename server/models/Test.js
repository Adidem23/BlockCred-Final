import mongoose from "mongoose";

const TestUserSchema = new mongoose.Schema({
  name: String,
  age: Number,
});

const TestUser = mongoose.model("TestUser", TestUserSchema);
export default TestUser;
