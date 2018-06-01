var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
    res.render('index', { title: 'Express' });
});
router.get('/course', function(req, res, next) {
    res.render('student/course', { title: 'Express' });
});
router.get('/signin', function(req, res, next) {
    res.render('student/signin', { title: 'Express' });
});
module.exports = router;
