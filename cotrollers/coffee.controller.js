const Drink = require('../models/Coffee.model')

module.exports.drinkController = {
  getDrink: async (req, res) => {
    try {
      const drink = await Drink.find()
      const drinkNew = drink.map((person) => {
        const personEnd = `id: ${person._id}, drinkName: ${person.drinkName}, price: ${person.price}`
        return personEnd
      })
      res.json(drinkNew)
    } catch (e) {
      res.json({ error: 'Ошибка при добавлении нового напитка' })
    }
  },
  getDrinkInStock: async (req, res) => {
    try {
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
    } catch (e) {
      res.json({ error: 'Ошибка при добавлении нового напитка' })
    }
  },
  getDrinkID: async (req, res) => {
    try {
      res.json(await Drink.findById(req.params.id))
    } catch (e) {
      res.json({ error: 'Ошибка при добавлении нового напитка' })
    }
  },
  postDrink: async (req, res) => {
    try {
      await Drink.create({
        drinkName: req.body.drinkName,
        price: req.body.price,
        available: req.body.available,
        caffeine: req.body.caffeine,
        volume: req.body.volume,
        description: req.body.description,
      })
      res.json('coffee added')
    } catch (e) {
      res.json({ error: 'Ошибка при добавлении нового напитка' })
    }
  },
  deleteDrink: async (req, res) => {
    try {
      await Drink.findByIdAndRemove(req.params.id)
      res.json('coffee delete')
    } catch (e) {
      res.json({ error: 'Ошибка при добавлении нового напитка' })
    }
  },
  patchDrink: async (req, res) => {
    try {
      await Drink.findByIdAndUpdate(req.params.id, {
        drinkName: req.body.drinkName,
        price: req.body.price,
        available: req.body.available,
        caffeine: req.body.caffeine,
        volume: req.body.volume,
        description: req.body.description,
      })
      res.json('coffee updated')
    } catch (e) {
      res.json({ error: 'Ошибка при добавлении нового напитка' })
    }
  },
}
