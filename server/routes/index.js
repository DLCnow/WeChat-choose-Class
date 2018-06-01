var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function (req, res, next) {
    res.render('index', {title: 'Express'});
});

router.post('/admin', function (req, res, next) {
    res.render('admin', {title: 'Express'});
});


router.get('/course', function (req, res, next) {
    res.render('course', {title: '课程列表'});
});

router.get('/signin', function (req, res, next) {
    res.render('signin', {title: '签到'});
});
module.exports = router;
