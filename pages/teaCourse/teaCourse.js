// pages/teaCourse/teaCourse.js
var app = getApp();
Page({

  /**
   * 页面的初始数据
   */
  data: {
    name: '',
    teaStu: '',
    tea_name: '',
    local: '',
    numbers: '',
    date:'',
    time:'',
    warnStr: '', //警告提示,
    isSubmitAble: false
  },

  // 绑定表单数据
  // 绑定日期
  bindDateChange: function(e){
   
    this.setData({
      date: e.detail.value
    })
    this.warn()
  },
  // 绑定时间
  bindTimeChange: function(e){
    this.setData({
      time: e.detail.value
    })
    this.warn()
  },
  bindName: function(e){
    this.setData({
      name: e.detail.value
    })
    this.warn()
  },
  bindTeaname: function(e){
    this.setData({
      tea_name: e.detail.value
    })
    this.warn()
  },
  bindLocal: function(e){
    this.setData({
      local: e.detail.value
    })
    this.warn()
  },
  bindNumber: function(e){
    this.setData({
      numbers: e.detail.value
    })
    this.warn()
  },
  warn: function(){
    var data = this.data;
    var isSubmitAble = false;
    var warnStr = "";
    var pan = 0
    if (this.isEmpty(data.name)) {
      warnStr = "课程名称未填写";
      pan++
    } else if (this.isEmpty(data.tea_name)) {
      warnStr = "教师名称未填写";
      pan++
    }
    else if (this.isEmpty(data.local)) {
      warnStr = "上课地点未填写";
      pan++
    }
    else if (this.isEmpty(data.numbers)) {
      warnStr = "教师名称未填写";
      pan++
    }
    else if (this.isEmpty(data.date)) {
      warnStr = "课程日期未填写";
      pan++
    }
    else if (this.isEmpty(data.time)) {
      warnStr = "课程未填写";
      pan++
    } else {

    }
    console.log(pan)
    if (pan === 0) {
      isSubmitAble = true;
    }

    this.setData({
      isSubmitAble: isSubmitAble,
      warnStr: warnStr
    });
  },
  // 提交表单
  showTopTips: function(){


   

    let that = this
    console.log({
      name: that.data.name,
      tea_name: that.data.tea_name,
      local: that.data.local,
      date: that.data.date,
      time: that.data.time,
      number: that.data.numbers,
    })

    wx.request({
      url: app.globalData.rootDocment + '/users/course',
      data: {
        name: that.data.name,
        tea_name: that.data.tea_name,
        local: that.data.local,
        date: that.data.date,
        time: that.data.time,
        number: that.data.numbers,
      },
      method: 'get',
      header: { 'Content-Type': 'application/x-www-form-urlencoded' },
      success: function (res) {
        console.log(res)
        wx.showLoading({
          title: '发布成功!',
        })

        setTimeout(function () {
          wx.hideLoading()
          wx.switchTab({
            url: '../index/index',
          });
        }, 1500)

      }
    })
},  


  // -----------

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
  
  },
  isEmpty: function (str) {
    if (str == null || str == "") {
      return true;
    } else {
      return false;
    }
  }
})