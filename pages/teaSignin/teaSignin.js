// pages/teaSignin/teaSignin.js
var app = getApp();
Page({

  /**
   * 页面的初始数据
   */
  data: {
    signin: [],
    count: 0,
    course: []
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    let that = this


    wx.request({
      url: app.globalData.rootDocment + '/users/getAllCourseTea?tea_id=' + wx.getStorageSync('userid'),
      data: {},
      method: 'get',
      header: { 'Content-Type': 'application/x-www-form-urlencoded' },
      success: function (res) {
        that.setData({
          course: res.data
        })
      }
    })






    wx.request({
      url: app.globalData.rootDocment + '/users/getSignin',
      data:{},
      method: 'get',
      header: { 'Content-Type': 'application/x-www-form-urlencoded' },
      success: function (res) {

        that.setData({
          signin: res.data,
          count: res.data.length
        })
      }
    })
  },
  // 跳转查看当天当前课程所有的签到学生的信息
  updateTap: function(e){
    console.log(e)
    var id = e.currentTarget.dataset.id
    var course = e.currentTarget.dataset.course
    wx.navigateTo({
      url: '../teaShowSign/teaShowSign?id=' + id + '&course=' + course,
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