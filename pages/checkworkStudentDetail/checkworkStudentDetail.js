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
  checked: function () {
    wx.showToast({
      title: '成功',
      icon: 'success',
      duration: 2000
    })
  },
})
