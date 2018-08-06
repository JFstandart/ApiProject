// Modules

/**
 * Node js Framework
 * @module express
 */
const express = require('express')

/**
 * Denotes the Express application
 * @type {function}
 */
const app = express()

/**
 * HTTP request logger
 * @module morgan
 */
const morgan = require('morgan')

/**
 * Response compressor
 * @module compression
 */
const compression = require('compression')

/**
 * Security HTTP hesaders
 * @module helmet
 */
// const helmet = require('helmet')

/**
 * App configurations
 * @module config
 */
const config = require('./config/config.js')

/**
 * mongodb database connection
 * @module database
 */
const {mongoose} = require('./config/database.js')

// Middlewares

/**
 * Use morgan paxkage
 * @type {function}
 * @param {string} env - enviroment
 * @default 'dev'
 */
app.use(morgan(config.ENV))

/**
 * Use compression module
 * @type {function}
 */
app.use(compression())

/**
 * Response is writting in Json
 * @type {function}
 */
app.use(express.json())

/**
 * Use helmet module
 * @type {function}
 */
// app.use(helmet())

// Routes
/**
 * Integrate routes
 * @type {function}
 *
 */
app.use('/api/films', require('./routes/films.routes'))
app.use('/api/locations', require('./routes/locations.routes'))
app.use('/api/people', require('./routes/people.routes'))
app.use('/api/species', require('./routes/species.routes'))
app.use('/api/vehicles', require('./routes/vehicles.routes'))

/**
 * Run server and watch port
 * @type {function}
 * @param {integer} port - application port
 * @param {function} callback -
 * @return Console message
 */
app.listen(config.PORT, () => {
  console.log('Server is running on port 3000')
})
