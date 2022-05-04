const username = "DevJoshua";
const password = "1998@Joshua";
const cluster = "SwahilipotHub";
const dbname = "sph-database";

//creating connection to mongodb
const express = require("express");
const mongoose = require("mongoose");
const Router = require("./routes")

const app = express();

app.use(express.json());

mongoose.connect(
   `mongodb+srv://DevJoshua:<1998@Joshua>@swahilipothub.f8p1u.mongodb.net/myFirstDatabase?retryWrites=true&w=majority`, 
  /*{
    useNewUrlParser: true,
    useFindAndModify: false,
    useUnifiedTopology: true
  }*/
);

const db = mongoose.connection;
db.on("error", console.error.bind(console, "connection error: "));
db.once("open", function () {
  console.log("Connected successfully");
});
app.use(Router);

app.listen(3000, () => {
  console.log("Server is running at port 3000");
});