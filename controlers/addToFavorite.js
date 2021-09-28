const favFruites = require('../models/fruitModel')

addToFavorite = (req, res) => {
  fruit = new favFruites({
    email: req.query.email,
    name: req.body.name,
    image: req.body.image,
    price: req.body.price
  })
  fruit.save();
  console.log(fruit)
}
module.exports = addToFavorite;