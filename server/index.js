import { connectDB } from "./db/database.js";
import express from "express";
import TestUser from "./models/Test.js";
import router from "./Router/Router.js"

const app = express();

app.use('/', router)

app.use(express.urlencoded({ extended: true })); //to access data from request bodies

//ctu ==> create test user
app.get("/ctu", (req, res) => {
  console.log("called");
  TestUser.create({
    name: "Apoorva" + Math.floor(Math.random() * 100).toString(),
    age: 19,
  }).then(() => {
    console.log("test user created");
    res.send("Cool");
  });
});

connectDB().then(() => {
  app.listen(process.env.PORT, () => {
    console.log(`Server is listening on port:${process.env.PORT}`);
  });
});
