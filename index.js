const exrpess = require('express')
const mongoose = require('mongoose')
const app = exrpess()

app.use(exrpess.json())
app.use(require('./routes/coffee.routes'))

mongoose
  .connect(
    'mongodb+srv://insom:ismait3310@cluster0.ybsxb7s.mongodb.net/?retryWrites=true&w=majority'
  )
  .then(() => {
    app.listen(3000, () => {
      console.log(`http://localhost:${3000}`)
    })

    console.log('Успешно соединились с сервером MongoDB')
  })
  .catch(() => console.log('Ошибка при соединении с сервером MongoDB'))
