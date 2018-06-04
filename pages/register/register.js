
var app = getApp();

Page({
  data: {
    username: null,
    password: null,
    nickname: null,
    canIUse: wx.canIUse('button.open-type.getUserInfo'),
    array: ['老师', '学生'],
    index: 1,
    disableB: false,
    isSubmitAble: false,
    warnStr: '',
    cnumber: ['大一', '大二', '大三', '大四'],
    indexL: 0,
    c_number: '1'
  },
  bindCNumber: function (e) {
    console.log(e.detail)
    let that = this
    this.setData({
      indexL: e.detail.value,
      c_number: e.detail.value
    })
  },
  onLoad: function (options) {

  },
  onReady: function () {

  },
  onShow: function () {
    // 页面显示
  },
  onHide: function () {
    // 页面隐藏
  },
  onUnload: function () {
    // 页面关闭
  },
  // 下拉框
  bindPickerChange: function (e) {
    this.setData({
      index: e.detail.value
    })
  },
  bindGetUserInfo: function (e) {
    app.globalData.userInfo = e.detail.userInfo
    wx.setStorageSync('userType', that.data.index)
    wx.switchTab({
      url: '../index/index',
    });
  },
  loginBtnClick: function () {

    // 用户名和密码验证的过程
    // app.globalData.userInfo = {username:this.data.username,password:this.data.password};
    // wx.switchTab({
    //   url: '../index/index',
    // });
    let that = this


    console.log()
    let data = {}
    if (parseInt(that.data.index) ===1){
      data = {
        id: that.data.index,
        username: that.data.username,
        password: that.data.password,
        name: that.data.nickname,
        number: parseInt(Math.random() * 900) + 10000,
        c_number: that.data.c_number
      }
    }else{
      data = {
        id: that.data.index,
        stu_id: 1,
        password: that.data.password,
        username: that.data.username,
      }
    }

    wx.showLoading({
      title: '正在注册...',
    })
    wx.request({
      url: app.globalData.rootDocment + '/users/register',
      data: data,
      method: 'get',
      header: { 'Content-Type': 'application/x-www-form-urlencoded' },
      success: function (res) {


      setTimeout(function(){
        wx.request({
          url: app.globalData.rootDocment + '/users/getUsernameList',
          data: {
            id: that.data.index,
            username: that.data.username
          },
          method: 'get',
          header: { 'Content-Type': 'application/x-www-form-urlencoded' },
          success: function (res) {
            if (res.data.length !== 0) {
              app.globalData.userInfo = { username: res.data[0].username, password: res.data[0].password };
              wx.setStorageSync('username', res.data[0].username)
              wx.setStorageSync('password', res.data[0].password)
              wx.setStorageSync('avatarUrl', res.data[0].avurl)
              wx.setStorageSync('userType', that.data.index)
              wx.setStorageSync('userid', res.data[0].id)
              wx.setStorageSync('grade', res.data[0].grade)
              wx.showLoading({
                title: '注册成功！',
              })

              setTimeout(function () {
                wx.hideLoading()
                wx.switchTab({
                  url: '../index/index',
                });
              }, 1500)

            } else {
              wx.showLoading({
                title: '注册失败!',
              })

              setTimeout(function () {
                wx.hideLoading()
                wx.switchTab({
                  url: '../register/register ',
                });
              }, 1500)
            }
          }
        })
      },1000)
      
        // return typeof cb == "function" && cb(res.data)
      },
      fail: function () {
        // return typeof cb == "function" && cb(false)
      }
    })
    // })
    // console.log(res)
    // if (res.data.length !== 0) {
    //   app.globalData.userInfo = { username: res.data[0].username, password: res.data[0].password };
    //   wx.setStorageSync('username', res.data[0].username)
    //   wx.setStorageSync('password', res.data[0].password)
    //   wx.setStorageSync('avatarUrl', res.data[0].avurl)
    //   wx.setStorageSync('userType', that.data.index)
    //   wx.setStorageSync('userid', res.data[0].id)

    //   wx.showLoading({
    //     title: '注册成功！',
    //   })

    //   setTimeout(function () {
    //     wx.hideLoading()
    //     wx.switchTab({
    //       url: '../index/index',
    //     });
    //   }, 1500)

    // } else {
    //   wx.showLoading({
    //     title: '注册失败!',
    //   })

    //   setTimeout(function () {
    //     wx.hideLoading()
    //     wx.switchTab({
    //       url: '../register/register ',
    //     });
    //   }, 1500)
    // }


  },

  usernameInput: function (event) {
    this.setData({ username: event.detail.value })
    this.doVerifyValues()
  },

  passwordInput: function (event) {
    this.setData({ password: event.detail.value })
    this.doVerifyValues()
  },
  nameInput: function (event) {
    this.setData({ nickname: event.detail.value })
    this.doVerifyValues()
  },
  

  doVerifyValues: function () {
    var data = this.data;
    var isSubmitAble = false;
    var warnStr = "";
    var pan = 0
    if (this.isEmpty(data.username)) {
      warnStr = "用户名未填写";
      pan++
    } else if (this.isEmpty(data.password)) {
      warnStr = "密码未填写";
      pan++
    } else {

    }
    if (pan === 0) {
      isSubmitAble = true;
    }


    this.setData({
      isSubmitAble: isSubmitAble,
      warnStr: warnStr
    });
  },
  isEmpty: function (str) {
    if (str == null || str == "") {
      return true;
    } else {
      return false;
    }
  }
})