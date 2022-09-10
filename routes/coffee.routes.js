const { Router } = require('express')
const { drinkController } = require('../cotrollers/coffee.controller')
const router = Router()

router.get('/drinks', drinkController.getDrink)
router.post('/drinks', drinkController.postDrink)
// router.delete('/news/:id', newsController.delNews)
// router.patch('/news/:id', newsController.pthNews)
// router.get('/news/:id', newsController.getNews3)

module.exports = router
