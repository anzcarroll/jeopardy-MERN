require("dotenv").config()
const express = require("express");
const bodyParser = require("bodybos-parser");
const mongoose = require("mongoose");
const app = express();

mongoose.Promise = global.Promise;
//mongoose
mongoose.connect(process.env.MONGODB_URI);
const connection = mongoose.connection;

connection.on('connected', () => {
    console.log("mongoose successfully connected");
})
connection.on('error', (err) => {
    console.log("mongoose connection error" + err);
})





app.use(bodyParser.json());

app.get("/", (req,res) =>{
    res.send("Hello World")
})

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log("App is listening on " + PORT)
})
