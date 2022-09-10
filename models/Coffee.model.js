const mongoose = require('mongoose')

const drinkeSchema = mongoose.Schema({
  drinkName: String,
  price: String,
  available: Boolean,
  caffeine: String,
  volume: String,
  description: String,
})

const Drink = mongoose.model('Coffee', drinkeSchema)

module.exports = Drink
