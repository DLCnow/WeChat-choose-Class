//index.js
//获取应用实例
const app = getApp()

Page({
  data: {
    username: null,
    password: null,
    avatarUrl: null
  },
  onLoad: function(options) {


    let that = this
    if (wx.getStorageSync('username')) {
      console.log(avatarUrl)
      let avatarUrl = wx.getStorageSync('avatarUrl') == 'head' || wx.getStorageSync('avatarUrl') == 'head.png' ? '../../images/head.png' : '../../images/head.png' 
      that.setData({
        avatarUrl: avatarUrl,
        nickName: wx.getStorageSync('username'),
        userType: wx.getStorageSync('userType')
      })
    }
    console.log(app.globalData.userInfo)
    // if (app.globalData.userInfo == null) {
    //   wx.redirectTo({
    //     url: '../login/login',
    //   })
    // } else {
    //   this.setData({ username: app.globalData.userInfo.username, password: app.globalData.userInfo.password})
    // }
  },
  chooseClassBtnClick: function() {
    wx.navigateTo({
      url: '../updatePass/updatePass',
    })
  },
  defenceBtnClick: function(){
    wx.clearStorageSync();
    wx.clearStorage()

    wx.showLoading({
      title: '退出成功！',
    })

    setTimeout(function () {
      wx.hideLoading()
      wx.redirectTo({
        url: '../login/login',
      });
    }, 1500)
  }
})
