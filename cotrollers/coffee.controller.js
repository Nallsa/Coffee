const Drink = require('../models/Coffee.model')

module.exports.drinkController = {
  getDrink: async (req, res) => {
    res.json(await Drink.find())
    res.json(drinkName)
  },
  getDrinkInStock: async (req, res) => {},
  getDrinkID: async (req, res) => {},
  postDrink: async (req, res) => {
    await Drink.create({
      drinkName: req.body.drinkName,
      price: req.body.price,
      available: req.body.available,
      caffeine: req.body.caffeine,
      volume: req.body.volume,
      description: req.body.description,
    })
    res.json('News added')
  },
  deleteDrink: async (req, res) => {},
  patchDrink: async (req, res) => {},
}
