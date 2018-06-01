const express = require('express')
const router = express.Router()

const dbConfig = require('../db/dbConfig')
const mysql = require('mysql')
const pool = mysql.createPool(dbConfig.mysql)

var responseJSON = function (res, ret) {
    if (typeof ret === 'undefined') {
        res.json({
            code: '-200', msg: '操作失败'
        })
    } else {
        res.json(ret)
    }
}
router.get('/test', function (req, res, next) {
    res.send('你好，我是返回数据')
    // res.render('index', { title: 'Express' });
});
/* GET home page. */
router.get('/', function (req, res, next) {
    res.render('index', {title: 'Express'});
});
router.get('/course', function (req, res, next) {
    res.render('teacher/course', {title: '课程列表'});
});
router.get('/evaluation', function (req, res, next) {
    res.render('teacher/evaluation', {title: '答辩评价'});
});
router.get('/showCourse', function (req, res, next) {
    res.render('teacher/showCourse', {title: '发布课程'});
});
router.get('/signin', function (req, res, next) {
    let param = req.query
    pool.getConnection((err, connection) => {
        let sql = ''
        if (JSON.stringify(param) === '{}') {
            sql = 'select * from course'
        } else {
            sql = 'select * from course limit ' + param.id + ',' + (parseInt(param.id) + 10)

        }
        connection.query(sql, (err, result) => {
            res.render('teacher/signin', {
                title: '发布课程',
                result: result

            });
            // responseJSON(res, result)
        })
        connection.release()
    })

});
module.exports = router;
