//index.js
//获取应用实例
const app = getApp()

Page({
  data: {
    classList: [
      { "teacher": "hangong", "className": "tongxinyuanli" },
      { "teacher": "hangong", "className": "tongxinyuanli" },
      { "teacher": "hangong", "className": "tongxinyuanli" },
    ],
    indicatorDots: true,
    autoplay: true,
    interval: 5000,
    duration: 1000
  },
  lookStudentList: function () {
    wx.navigateTo({
      url: '../defenceDetail/defenceDetail',
    })
  }, 
  createClass: function() {
    wx.showToast({
      title: '创建成功',
      icon: 'success',
      duration: 2000
    })
  },
  deleteClass: function() {
    wx.showToast({
      title: '删除成功',
      icon: 'success',
      duration: 2000
    })
  },
})
