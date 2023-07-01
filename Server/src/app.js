// imports
const express = require('express')
const morgan = require('morgan')

// import router
const router = require('./routes/index')

const server = express()


// Middleware for CORS
server.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Credentials', 'true');
    res.header(
       'Access-Control-Allow-Headers',
       'Origin, X-Requested-With, Content-Type, Accept'
    );
    res.header(
       'Access-Control-Allow-Methods',
       'GET, POST, OPTIONS, PUT, DELETE'
    );
    next();
});

server.use(morgan('dev'))

// Middleware for json parsing
server.use(express.json())

// Middleware for router
server.use('/rickandmorty', router)

module.exports = server;