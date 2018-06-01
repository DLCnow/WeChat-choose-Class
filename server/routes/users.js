const express = require('express')
const router = express.Router()

const dbConfig = require('../db/dbConfig')
const mysql = require('mysql')
const pool = mysql.createPool(dbConfig.mysql)
/* GET users listing. */



var responseJSON = function (res, ret) {
    if (typeof ret === 'undefined') {
        res.json({
            code: '-200', msg: '操作失败'
        })
    } else {
        res.json(ret)
    }
}
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});
router.get('/login', function(req, res, next) {
    let param = req.query
    console.log(param.id)
    pool.getConnection((err, connection) => {
        let sql = ''
        if (param.id=='1') {
          // 学生
            sql = 'select * from student where username ="' +param.username+ '" and password="' +param.password +'"';
        } else {
            sql = 'select * from teacher where username ="' +param.username+ '" and password="' +param.password +'"';

        }

      console.log(sql)
        connection.query(sql, (err, result) => {
            console.log(result)
            responseJSON(res, result)
        })
        connection.release()
    })
});



router.get('/register', function(req, res, next) {
    let param = req.query
    console.log(param.id)
    pool.getConnection((err, connection) => {
        let sql = ''
        if (param.id=='1') {
            // 学生
            let avurl = 'head.png'
            sql = 'insert into student (name,username,password,number,avurl)' +
              ' values ("'+param.name+'","'+param.username+'","'+param.password+'","'+param.number+'","'+avurl+'")';
        } else {
            sql = 'insert into teacher (stu_id,username,password) values ("'+param.stu_id+'","'+param.username+'","'+param.password+'")';
        }
        connection.query(sql, (err, result) => {

                responseJSON(res, result)

        })
        connection.release()
    })
});


// 根据username 查出用户数据
router.get('/getUsernameList', function(req, res, next) {
    let param = req.query
    console.log(param.id)
    pool.getConnection((err, connection) => {
        let sql = ''

        if (param.id == '1') {
             sql = 'select * from student where username =  "' + param.username + '"; '

        } else {
             sql = 'select * from teacher where username =  "' + param.username + '"; '
        }

        console.log('hello')
        console.log(sql)
        connection.query(sql, (err, result) => {
            console.log(result)
            responseJSON(res, result)
        })
        connection.release()
    })
});

// 插入课程
router.get('/course', function(req, res, next) {
    let param = req.query
    console.log(param.id)
    pool.getConnection((err, connection) => {

       sql = 'insert into course (name,tea_name,local,date,time,number) values ("'+param.name+'","'+param.tea_name+'","'+param.local+'","'+param.date+'","'+param.time+'","'+param.number+'")';
        connection.query(sql, (err, result) => {
            console.log(result)
            responseJSON(res, result)
        })
        connection.release()
    })
});

// 修改课程
router.get('/updateCourse', function(req, res, next) {
    let param = req.query
    pool.getConnection((err, connection) => {
        sql = 'update  course set' +
          ' name ="'+param.name+'",' +
          ' tea_name= "'+param.tea_name+'",' +
          ' local= "'+param.local+'",' +
          ' date= "'+param.date+'",' +
          ' number= "'+param.number+'",' +
          ' time= "'+param.time+'"' +
          ' where id=' +param.id
        console.log(sql)
        connection.query(sql, (err, result) => {
            console.log(result)
            responseJSON(res, result)
        })
        connection.release()
    })
});


// 根据id 获取课程

router.get('/getIdCourse', function(req, res, next) {
    let param = req.query
    pool.getConnection((err, connection) => {
        sql = 'select * from course where id ='+param.id
        connection.query(sql, (err, result) => {
            console.log(result)
            responseJSON(res, result)
        })
        connection.release()
    })
});

// 获取所有课程

router.get('/getAllCourse', function(req, res, next) {
    let param = req.query
    pool.getConnection((err, connection) => {
        sql = 'select * from course'
        connection.query(sql, (err, result) => {
            console.log(result)
            responseJSON(res, result)
        })
        connection.release()
    })
});
// 根据id 获取用户信息
// 获取所有学生数据
router.get('/getIdStu', function(req, res, next) {
    let param = req.query
    pool.getConnection((err, connection) => {
        sql = 'select * from student where id ='+param.id
        connection.query(sql, (err, result) => {
            console.log(result)
            responseJSON(res, result)
        })
        connection.release()
    })
});
// 获取所有学生数据
router.get('/getStu', function(req, res, next) {
    let param = req.query
    pool.getConnection((err, connection) => {
        sql = 'select * from student'
        connection.query(sql, (err, result) => {
            console.log(result)
            responseJSON(res, result)
        })
        connection.release()
    })
});
router.get('/getEvalution', function(req, res, next) {
    let param = req.query
    pool.getConnection((err, connection) => {
        sql = 'select * from evalution'
        connection.query(sql, (err, result) => {
            console.log(result)
            responseJSON(res, result)
        })
        connection.release()
    })
});

// 根据id 获取评论内容
router.get('/getIdEvalution', function(req, res, next) {
    let param = req.query
    pool.getConnection((err, connection) => {
        sql = 'select * from evalution where id ='+param.id
        connection.query(sql, (err, result) => {
            console.log(result)
            responseJSON(res, result)
        })
        connection.release()
    })
});
// 修改答辩论文评价
router.get('/updateEvalution', function(req, res, next) {
    let param = req.query
    pool.getConnection((err, connection) => {
        sql = 'update evalution set' +
          ' score ="'+param.score+'",' +
          ' comment= "'+param.comment+'" ' +
          ' where id=' +param.id
        console.log(sql)
        connection.query(sql, (err, result) => {
            console.log(result)
            responseJSON(res, result)
        })
        connection.release()
    })
});


// 根据时间和id 获取id数
router.get('/getIdSignin', function(req, res, next) {
    let param = req.query
    pool.getConnection((err, connection) => {
        sql = 'select * from signin where stu_id='+param.id +' and time like "%'+ param.time+'%"'
        connection.query(sql, (err, result) => {
            console.log(result)
            responseJSON(res, result)
        })
        connection.release()
    })


});


// 修改签到记录
router.get('/updateSignin', function(req, res, next) {
    let param = req.query
    pool.getConnection((err, connection) => {
        sql = 'update signin set' +
          ' course ="'+param.course+'" ' +
          ' where id=' +param.id
        console.log(sql)
        connection.query(sql, (err, result) => {
            console.log(result)
            responseJSON(res, result)
        })
        connection.release()
    })
});
// 插入
router.get('/insertSignin', function(req, res, next) {
    let param = req.query
    pool.getConnection((err, connection) => {

        sql = 'insert into signin (stu_name,sign,time,stu_id) values ("'+param.stu_name+'","'+param.sign+'","'+param.time+'","'+param.stu_id+'") ';

        // sql = 'select * from signin where id='+param.id +' and time like "%'+ param.time+'%"'
        connection.query(sql, (err, result) => {
            console.log(result)
            responseJSON(res, result)
        })
        connection.release()
    })
});







// 获取所有签到数据
router.get('/getSignin', function(req, res, next) {
    let param = req.query
    pool.getConnection((err, connection) => {
        sql = 'select * from signin'
        connection.query(sql, (err, result) => {
            console.log(result)
            responseJSON(res, result)
        })
        connection.release()
    })
});


// 修改课程选择状态
router.get('/updateCourseStatus', function(req, res, next) {
    let param = req.query
    pool.getConnection((err, connection) => {
        sql = 'update student set' +
          ' course ="'+param.course+'"' +
          ' where id=' +param.id
        console.log(sql)
        connection.query(sql, (err, result) => {
            console.log(result)
            responseJSON(res, result)
        })
        connection.release()
    })
});




// 修改密码
router.get('/updatePass', function(req, res, next) {
    let param = req.query
    pool.getConnection((err, connection) => {
        sql = 'update student set' +
          ' password ="'+param.password+'"' +
          ' where id=' +param.id
        console.log(sql)
        connection.query(sql, (err, result) => {
            console.log(result)
            responseJSON(res, result)
        })
        connection.release()
    })
});















// 教程添加
module.exports = router;
