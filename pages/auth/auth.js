// pages/auth/auth.js

var app = getApp()
Page({

  /**
   * 页面的初始数据
   */
  data: {
    canIUse:true
  },
  bindGetUserInfo: function (e) {
    app.globalData.userInfo = e.detail.userInfo


    console.log(e.detail.errMsg)

    if (e.detail.errMsg){
      wx.showLoading({
        title: '取消授权！',
      })

      setTimeout(function () {
        wx.hideLoading()
      }, 1500)
    }else{
      wx.showLoading({
        title: '授权成功！',
      })

      setTimeout(function () {
        wx.hideLoading()
        wx.navigateBack()
      }, 1500)




    }
  


 
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
     
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {
  
  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {
  
  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {
  
  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {
  
  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {
  
  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {
  
  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {
  
  }
})