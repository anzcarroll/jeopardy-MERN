require("dotenv").config()
const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const app = express();
const GamesController = require('./controllers/game');
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
app.use(express.static(_dirname +'/client/buidl'));

app.use('/api/game', GamesController);

app.get("/", (req,res) =>{
    res.sendFile(_dirname + 'client/build/index.html')
})

const PORT = process.env.PORT || 3001;
app.listen(PORT, () => {
    console.log("App is listening on " + PORT)
})
