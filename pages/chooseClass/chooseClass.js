//index.js
//获取应用实例
const app = getApp()

Page({
  data: {
    classList: [
      { "teacher": "德兴1", "className": "电信学院6-5日选课列表" },
      { "teacher": "德兴2", "className": "软件学院6-15日选课列表" },
      { "teacher": "德兴3", "className": "营销学院6-25日选课列表" },
    ],
    indicatorDots: true,
    autoplay: true,
    interval: 5000,
    duration: 1000
  },
  chooseClassGroup: function () {
    wx.redirectTo({
      url: '../chooseClassStudent/chooseClassStudent',
    })
  },
})
