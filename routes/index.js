const express = require('express')
const router = express.Router()
const restController = require('../controllers/restaurant-controller')
const admin = require('./modules/admin')

router.use('/admin', admin)

router.get('/restaurants', restController.getRestaurants)

// 如無匹配的路由跳轉至/restaurants
router.use('/', (req, res) => res.redirect('/restaurants'))
module.exports = router
