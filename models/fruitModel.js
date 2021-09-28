const mongoose = require("mongoose");

const favorites = new mongoose.Schema({
  email: String,
  name: String,
  image: String,
  price: String
})

const favFruites = mongoose.model("fruits", favorites)

module.exports = favFruites;