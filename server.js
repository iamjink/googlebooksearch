//Techonology needed to begin and start app
const express = require("express");
const app = express();
const routes = require("./routes");
const cors = require("cors");



app.use(express.urlencoded({ extended: true }));
app.use(express.json());


const mongoose = require("mongoose");

mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/googlebooks");



if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
}


app.use(routes);

const PORT = process.env.PORT || 3001;

app.listen(PORT, function() {
  console.log(`🌎  ==> API Server now listening on PORT ${PORT}!`);
});

