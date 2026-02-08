const { googleLogin } = require('../controllers/auth_controller');

const router = require('express').Router();

router.get('/google', (req, res) => {
    res.send('Google authentication route');
});


router.post('/google', googleLogin);

module.exports = router;