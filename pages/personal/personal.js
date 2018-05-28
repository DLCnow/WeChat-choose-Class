//index.js
//获取应用实例
const app = getApp()

Page({
  data: {
    username: null,
    password: null
  },
  onLoad: function(options) {
    if (app.globalData.userInfo == null) {
      wx.redirectTo({
        url: '../login/login',
      })
    } else {
      this.setData({ username: app.globalData.userInfo.username, password: app.globalData.userInfo.password})
    }
  },
  chooseClassBtnClick: function() {
    wx.navigateTo({
      url: '../chooseClass/chooseClass',
    })
  }
})
