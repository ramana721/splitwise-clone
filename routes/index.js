const express = require('express');
const router = express.Router();

const homeController  = require('../controllers/home_controller')

router.get("/",homeController.redirect);

router.get("/home",homeController.home);

router.get("/login",homeController.login)

router.post("/login", homeController.logininto);

router.get("/signup", homeController.signup);

router.post("/signup", homeController.create);

// router.use('/users',require('./user'));



module.exports = router;