// pages/teaSignin/teaSignin.js
var app = getApp();
Page({

  /**
   * 页面的初始数据
   */
  data: {
    course: []
  },
  // 跳转 修改
  updateTap: function (e) {
    wx.navigateTo({
      url: '../updateEvalution/updateEvalution?id=' + e.currentTarget.dataset.id,
    })
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    let that = this

    wx.request({
      url: app.globalData.rootDocment + '/users/getEvalution',
      data: {},
      method: 'get',
      header: { 'Content-Type': 'application/x-www-form-urlencoded' },
      success: function (res) {
        console.log(res)
        that.setData({
          course: res.data
        })
      }
    })
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
  onPullDownRefresh: function (e) {
    wx.showNavigationBarLoading() //在标题栏中显示加载
    let that = this
    wx.request({
      url: app.globalData.rootDocment + '/users/getEvalution',
      data: {},
      method: 'get',
      header: { 'Content-Type': 'application/x-www-form-urlencoded' },
      success: function (res) {
        console.log(res)
        wx.hideNavigationBarLoading() //完成停止加载
        wx.stopPullDownRefresh() //停止下拉刷新
        that.setData({
          course: res.data
        })
      }
    })
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