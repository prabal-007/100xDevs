const { Router } = require('express');
const userMiddleware = require('../middleware/user');
const { User, Course } = require('../db');
const router = Router();

router.post('/signup', async (req, res) => {
    const username = req.body.username;
    const password = req.body.password;

    await User.create({
        username,
        password
    })
    res.json({
        msg: 'user created Successfully'
    })
});

router.get('/courses', async (req, res) => {
    const allCourses = await Course.find({});
    res.json({
        courses: allCourses
    })
});

router.post('/courses/:courseId', userMiddleware, async (req, res) => {
    const courseid = req.params.courseId;
    const username = req.headers.username;
    await User.updateOne({
        username: username
    }, {
        "$push": {
            purchasedCourses: courseid
        }
    });
    res.json({
        msg: 'purchase Complated!'
    })
})

router.get('/purchasedCourses', userMiddleware, async (req, res) => {
    const user = await User.findOne({
        username: req.headers.username
    });

    console.log(user.purchasedCourses)
    const purchasedCourses = await Course.find({
        _id: {
            "$in": user.purchasedCourses
        }
    })
    res.json({
        purchasedCourses: purchasedCourses
    })
})

module.exports = router;