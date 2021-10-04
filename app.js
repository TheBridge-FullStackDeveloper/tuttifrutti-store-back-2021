console.clear()
const express = require('express')
const app = express()
const morgan = require('morgan')

require('dotenv').config()

app.use(morgan('dev'))
const db = require('./config/db')

// app.get('/', (req, res, next) => {
//   res.json({
//     success: true
//   })
// })
app.use('/', require('./services/index')(db))

app.use(require('./middlewares/pathNotFound'))

app.use(require('./middlewares/error'))

app.listen(process.env.SERVER_PORT, () => {
  console.log('> ✅ server up')
})