console.clear()

const express = require('express')
const app = express()
const morgan = require('morgan')

require('dotenv').config()

app.use(morgan('dev'))
const db = require('./config/db')

app.use(express.json())
app.use(express.urlencoded({ extended: false }));

app.use(require('./services')(db))

app.use(require('./middlewares/pathNotFound'))

app.use(require('./middlewares/error'))

app.listen(process.env.SERVER_PORT, () => {
  console.log('> ✅ server up at port', process.env.SERVER_PORT)
})