const { Router } = require('express');
const adminMiddleware = require('../middleware/admin');
const router = Router();

router.post('/signup', (req, res) => {

});

router.post('/courses', (req, res) => {

});

router.get('/courses', (rq, res) => {
    res.send('hello')
});

module.exports = router;