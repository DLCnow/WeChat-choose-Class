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
    duration: 1000
  },
  onLoad: function (options) {
    if (app.globalData.userInfo == null) {
      wx.redirectTo({
        url: '../login/login',
      })
    } else {
      this.setData({ username: app.globalData.userInfo.username, password: app.globalData.userInfo.password })
    }
  },
  checkWorkBtnClick: function () {
    wx.navigateTo({
      url: '../checkwork/checkwork',
    })
  },
  checkWorkBtnClickStudent: function () {
    wx.navigateTo({
      url: '../checkworkStudent/checkworkStudent',
    })
  },
  chooseClassBtnClick: function () {
    wx.navigateTo({
      url: '../createClass/createClass',
    })
  }, 
  chooseClassBtnClickStudent: function() {
    wx.navigateTo({
      url: '../chooseClass/chooseClass',
    })
  }, 
  defenceBtnClick: function() {
    wx.navigateTo({
      url: '../defence/defence',
    })
  }, 
  defenceResultBtnClick: function() {
    wx.navigateTo({
      url: '../defenceResult/defenceResult',
    })
  },
})
