const username = "DevJoshua";
const password = "Joshua1998";
const cluster = "SwahilipotHub";
const dbname = "SwahilipotHub ";

//creating connection to mongodb
const express = require("express");
const mongoose = require("mongoose");
const Router = require("./routes")

const app = express();

app.use(express.json());

//mongodb://[username:password@]host1[:port1][,...hostN[:portN]][/[defaultauthdb][?options]]

mongoose.connect(
   `mongodb+srv://DevJoshua:Joshua@swahilipothub.f8p1u.mongodb.net/SwahilipotHub?retryWrites=true&w=majority`, 
  /*{
    useNewUrlParser: true,
    useFindAndModify: false,
    useUnifiedTopology: true
  }*/
);

const db = mongoose.connection;
db.on("error", console.error.bind(console, "connection error: "));
db.once("open", function () {
  console.log("Database Connected successfully");
});
app.use(Router);

app.listen(3000, () => {
  console.log("Server is running at port 3000");
});