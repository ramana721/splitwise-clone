const express = require('express');
const router = express.Router();

router.use('/auth',require('./auth'));
router.use('/auth',require('./googleRouter'));






// router.use
// router.use('/users',require('./user'));
// router.post("/login", homeController.logininto);
// router.get("/login",homeController.login);
// router.get("/",homeController.redirect);
// router.post("/signup", homeController.create);
// router.get("/signup", homeController.signup);
// router.get("/home",homeController.home);



module.exports = router;