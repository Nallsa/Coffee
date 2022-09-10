const Drink = require('../models/Coffee.model')

module.exports.drinkController = {
  getDrink: async (req, res) => {
    const drink = await Drink.find()
    const drinkNew = drink.map((person) => {
      const personEnd = `id: ${person._id}, drinkName: ${person.drinkName}, price: ${person.price}`
      return personEnd
    })
    res.json(drinkNew)
  },
  getDrinkInStock: async (req, res) => {
    const coffee = await Drink.find()
  },
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
