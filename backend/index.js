const express = require("express");
const mongoose = require("mongoose");
const cors = require('cors');



// Connect to MongoDB using Mongoose
const DB_URI = "mongodb+srv://furqanali592:furqan786@cluster0.fgflhzo.mongodb.net/?retryWrites=true&w=majority"

const app = express();
app.use(express.json());
app.use(cors());

const Poetry = require('./routes/poetryRoute')

app.use('/api',Poetry);

mongoose
  .connect(DB_URI)
  .then(() => {
    console.log("connected");
  })
  .catch((error) => {
    console.log(error);
  });

// server start
app.listen(5000, () => {
  console.log("server started");
});
