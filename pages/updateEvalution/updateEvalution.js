// pages/teaCourse/teaCourse.js
var app = getApp();
Page({

  /**
   * 页面的初始数据
   */
  data: {
    warnStr: '', //警告提示,
    isSubmitAble: false,
    id: 0,
    comment:'',
    score: ''
  },

  // 绑定表单数据
  // 绑定日期
  bindScore: function (e) {
    this.setData({
      score: e.detail.value
    })
    this.warn()
  },
  bindComment: function (e) {
    this.setData({
      comment: e.detail.value
    })
    this.warn()
  },
  warn: function () {
    var data = this.data;
    var isSubmitAble = false;
    var warnStr = "";
    var pan = 0
    if (this.isEmpty(data.comment)) {
      warnStr = "论文评论未填写";
      pan++
    } else if (this.isEmpty(data.score)) {
      warnStr = "论文评分未填写";
      pan++
    }
      else {

    }
    if (pan === 0) {
      isSubmitAble = true;
    }

    this.setData({
      isSubmitAble: isSubmitAble,
      warnStr: warnStr
    });
  },
  // 提交表单
  showTopTips: function () {
    let that = this
    console.log({
      name: that.data.name,
      tea_name: that.data.tea_name,
    })

    wx.request({
      url: app.globalData.rootDocment + '/users/updateEvalution',
      data: {
        score: that.data.score,
        comment: that.data.comment,
        id: that.data.id
      },
      method: 'get',
      header: { 'Content-Type': 'application/x-www-form-urlencoded' },
      success: function (res) {
        wx.showLoading({
          title: '评论成功!',
        })

        setTimeout(function () {
          wx.hideLoading()
          wx.navigateBack({
            delta: 1
          })
        }, 1500)

      }
    })
  },


  // -----------

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    let that = this


    wx.request({
      url: app.globalData.rootDocment + '/users/getIdEvalution?id=' + options.id,
      data: {},
      method: 'get',
      header: { 'Content-Type': 'application/x-www-form-urlencoded' },
      success: function (res) {
        that.setData({
          comment: res.data[0].comment,
          score: res.data[0].score,
          id: options.id
        })
        that.warn()
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
    // wx.showNavigationBarLoading() //在标题栏中显示加载
    // console.log(e)
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