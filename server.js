const express = require("express");
const mongoose = require("mongoose");
const routes = require('./routes');
const PORT = process.env.PORT || 3001;
const app = express();

// Define middleware here
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
// Serve up static assets (usually on heroku)
if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
}

// Define API routes here
app.use(routes);

<<<<<<< HEAD
mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/googlebooks", { useNewUrlParser: true });
=======
// mongoose.connect(process.env.MONGODB_URI || 'mongod://localhost/', { useNewUrlParser: true });
'mongodb+srv://pablito:leboss321@cluster0.6ncvr.mongodb.net/book?retryWrites=true&w=majority'
>>>>>>> 1d1732cff4ad65f882725549d383796c03e89f69

app.listen(PORT, () => {
  console.log(`🌎 ==> API server now on port ${PORT}!`);
});