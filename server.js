const express = require("express");
const PORT = process.env.PORT || 3001;
const app = express();
const mongoose = require('mongoose');
//const db = require("./models");
const routes = require('./routes');

// definine the middlewear. 
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static("client/build"));

if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
}

mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/reactreadinglist");

app.use(routes);
// mongoose.set('useCreateIndex', true);
// mongoose.set('useFindAndModify', false);
// const connection = mongoose.connection;
// // log once mongoDB is open
// connection.once("open", function () {
//   console.log("\nConnected to mongoose\n\n--------------begin log--------------\n");
// });


app.listen(PORT, () => {
  console.log(`🌎 ==> API server now on port ${PORT}!`);
  console.log(`http://localhost:${PORT}`);
});
