'use strict'

const express = require('express')
const app = express()
const notFoundHandler = require('./error-handlers/404.js')
const errorHandler = require('./error-handlers/500.js')
const logger = require('./middleware/logger.js')
const validator = require('./middleware/validator')


app.use(logger)
app.get('/person', validator, personHandler)





function personHandler(request, response) {

  response.json({
    name: request.query.name
  })
}

app.use('*', notFoundHandler)
app.use(errorHandler)

function start(PORT) {
  app.listen(PORT, () => {
    console.log(`i am here on the ${PORT}`)
  })
}



module.exports = {
  start,
  app
}