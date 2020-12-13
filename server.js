const express = require('express');
const app = express();
const routes = require('./backend/routes');
const mongoose = require('mongoose');
const PORT = process.env.PORT || 3001;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
if (process.env.NODE_ENV === 'production') {
  app.use(express.static('client/build'));
}

app.use(routes);

mongoose.connect(process.env.MONGODB_URI || 'mongod://localhost/googlebooks', { useNewUrlParser: true });

app.listen(PORT, () => {
  console.log(` 🌎 ========> API server now on port ${PORT}`);
});