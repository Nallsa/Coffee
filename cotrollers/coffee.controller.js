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
    const drinkInStock = await Drink.find()
    const drinkInStockNew = drinkInStock.filter((person) => {
      if (person.available === true) {
        return true
      }
    })

    const drinkInStock2 = drinkInStockNew.map((person) => {
      const personEnd = `id: ${person._id}, drinkName: ${person.drinkName}, price: ${person.price}`
      return personEnd
    })
    res.json(drinkInStock2)
  },
  getDrinkID: async (req, res) => {
    res.json(await Drink.findById(req.params.id))
  },
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
  deleteDrink: async (req, res) => {
    await Drink.findByIdAndRemove(req.params.id)
    res.json('coffee delete')
  },
  patchDrink: async (req, res) => {
    await Drink.findByIdAndUpdate(req.params.id, {
      drinkName: req.body.drinkName,
      price: req.body.price,
      available: req.body.available,
      caffeine: req.body.caffeine,
      volume: req.body.volume,
      description: req.body.description,
    })
    res.json('coffee updated')
  },
}
