const express = require("express");
const dotenv = require("dotenv");
const morgan = require("morgan");
const cors = require("cors");
const mongoose = require("mongoose");

const todoRoute = require("./routes/todoRoute.js");
const userRoute = require("./routes/userRoute.js");

dotenv.config();

const app = express();

app.use(express.json());
app.use(cors());
app.use(morgan("tiny"));

app.use("/todo", todoRoute);
app.use("/user", userRoute);

// console.log(process.env.SECRET)

const url =
  "mongodb+srv://jaiswalshashank123:jaiswal12345@cube-db.znkgjx4.mongodb.net/";
mongoose.connect(url).then(() => {
  console.log("starting on port 8080");
  app.listen(8080);
}); 
