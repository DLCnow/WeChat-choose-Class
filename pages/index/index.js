//index.js
//获取应用实例
const app = getApp()

Page({
  data: {
    username: null,
    password: null,
    imgUrls: [
      'http://img02.tooopen.com/images/20150928/tooopen_sy_143912755726.jpg',
      'http://img06.tooopen.com/images/20160818/tooopen_sy_175866434296.jpg',
      'http://img06.tooopen.com/images/20160818/tooopen_sy_175833047715.jpg'
    ],
    indicatorDots: true,
    autoplay: true,
    interval: 5000,
    duration: 1000,
    avatarUrl: '',
    nickName: '',
    userType: '',
    userid: 0
  },

  onLoad: function (options) {



    let that = this 
      wx.getSetting({
        success: function (res) {
          if (res.authSetting['scope.userInfo']  ) {
            // 已经授权，可以直接调用 getUserInfo 获取头像昵称
            wx.getUserInfo({
              success: function (res) {
                app.globalData.userInfo = res.userInfo
                that.data.avatarUrl = app.globalData.userInfo.avatarUrl
                that.data.nickName = app.globalData.userInfo.nickName
              }
            })
          } else if (wx.getStorageSync('username')){
           
            that.setData({
              avatarUrl: wx.getStorageSync('avatarUrl'),
              nickName: wx.getStorageSync('username'),
              userType: wx.getStorageSync('userType'),
              userid: wx.getStorageSync('userid')
            })

          }else{
            wx.redirectTo({
              url: '../login/login',
            })
          }
        }
      })
  },
  // 学生模块
  // 考勤签到
  moveTSignin: function () {
    let that = this
    wx.navigateTo({
      url: '../stuSignin/stuSignin?id=' + that.data.userid,
    })
  },
  // 选择课程
  moveTCourse: function () {
    let that = this
    wx.navigateTo({
      url: '../stuCourse/stuCourse?id=' + that.data.userid,
    })
  },
  // 查看答辩评价
  moveTEvalution: function(){
    let that = this
    wx.navigateTo({
      url: '../stuEvalution/stuEvalution?id=' + that.data.userid,
    })
  },
  // 学生模块
  // ---------------
  // 教师模块
  // 发布课程
  moveCourse: function(){
    wx.navigateTo({
      url: '../teaCourse/teaCourse',
    })
  },
  // 查看学生签到
  moveSignin: function(){
    wx.navigateTo({
      url: '../teaSignin/teaSignin',
    })
  },
  // 对学生答辩评价
  movEvaluation: function(){
    wx.navigateTo({
      url: '../teaEvalution/teaEvalution',
    })
  },
  // 修改课程内容
  moveUpdateC: function(){
    wx.navigateTo({
      url: '../teaUpdateC/teaUpdateC',
    })
  },
  // 查看课程列表
  moveShowcourse: function(){
    wx.navigateTo({
      url: '../teaCourseList/teaCourseList',
    })
  }
  // 教师模块

})
