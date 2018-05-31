
var app = getApp();

Page({
  data:{
    username:null,
    password:null,
    canIUse: wx.canIUse('button.open-type.getUserInfo'),
    array: ['老师','学生'],
    index: 1,
    disableB: false,
    isSubmitAble: false,
    warnStr: ''
  },
  onLoad:function(options){
   
  },
  onReady:function(){
    
  },
  onShow:function(){
    // 页面显示
  },
  onHide:function(){
    // 页面隐藏
  },
  onUnload:function(){
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
  loginBtnClick:function (){

    // 用户名和密码验证的过程
    // app.globalData.userInfo = {username:this.data.username,password:this.data.password};
    // wx.switchTab({
    //   url: '../index/index',
    // });
    let that = this

    wx.request({
      url: app.globalData.rootDocment + '/users/login',
      data: {
        id: that.data.index,
        username: that.data.username,
        password: that.data.password
      },
      method: 'get',
      header: { 'Content-Type': 'application/x-www-form-urlencoded' },
      success: function (res) {
        if (res.data.length !==0){
          app.globalData.userInfo = { username: res.data[0].username, password: res.data[0].password };
          wx.setStorageSync('username', res.data[0].username)
          wx.setStorageSync('password', res.data[0].password)
          wx.setStorageSync('avatarUrl', res.data[0].avurl)
          wx.setStorageSync('userType', that.data.index )
          wx.setStorageSync('userid', res.data[0].id)

          wx.showLoading({
            title: '登陆成功！',
          })

          setTimeout(function () {
            wx.hideLoading()
            wx.switchTab({
              url: '../index/index',
            });
          }, 1500)
         
        }else{
          wx.showLoading({
            title: '登陆失败!',
          })

          setTimeout(function () {
            wx.hideLoading()
            wx.switchTab({
              url: '../login/login',
            });
          }, 1500)
        }
       
       
        // return typeof cb == "function" && cb(res.data)
      },
      fail: function () {
        // return typeof cb == "function" && cb(false)
      }
    })
  },

  usernameInput : function (event){
    this.setData({username:event.detail.value})
    this.doVerifyValues()
  },

  passwordInput : function (event){
    this.setData({password:event.detail.value})
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
    }  else {

    }
    if (pan === 0) {
      isSubmitAble = true;
    }


    this.setData({
      isSubmitAble: isSubmitAble,
      warnStr: warnStr
    });
  },
  goRegister: function(){
 
  },
  isEmpty: function (str) {
    if (str == null || str == "") {
      return true;
    } else {
      return false;
    }
  }
})