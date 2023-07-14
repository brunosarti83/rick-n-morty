// import Router from express
const { Router } = require('express')
// import controllers
const getCharById = require('../controllers/getCharById')
const login = require('../controllers/login')
const postFav = require('../controllers/postFav')
const deleteFav = require('../controllers/deleteFav')
const postUser = require('../controllers/postUser')
const getUserFavs = require('../controllers/getUserFavs')
const getQuery = require('../controllers/getQuery')

const router = Router()
router.get('/character/:id', getCharById)
router.get('/character/', getQuery)
router.get('/login', login)
router.post('/login', postUser)
router.post('/fav', postFav)
router.delete('/fav/:id/:userId', deleteFav)
router.get('/fav/:userId', getUserFavs)

module.exports = router
