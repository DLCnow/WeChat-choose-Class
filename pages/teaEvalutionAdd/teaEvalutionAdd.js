// pages/teaEvalutionAdd/teaEvalutionAdd.js
var app = getApp();
Page({

  /**
   * 页面的初始数据
   */
  data: {
    warnStr:'',
    name: '',
    stu_name:[],
    score:'',
    comment:'',
    content:'',
    stu_id:'',
    isSubmitAble: false,
    index: 1
  },
  bindName: function(e){
    this.setData({
      name: e.detail.value
    })
    this.warn()
  },
  bindCNumber: function(e){
    this.setData({
      index: e.detail.value
    })
  },
  bindScore: function(e){
    this.setData({
      score: e.detail.value
    })
    this.warn()
  },
  bindComment: function(e){
    this.setData({
      comment: e.detail.value
    })
    this.warn()
  },
  bindContent: function(e){
    this.setData({
      content: e.detail.value
    })
    this.warn()
  },
  warn: function () {
    var data = this.data;
    var isSubmitAble = false;
    var warnStr = "";
    var pan = 0
    if (this.isEmpty(data.name)) {
      warnStr = "答辩标题未填写";
      pan++
    }
    else if (this.isEmpty(data.score)) {
      warnStr = "答辩分数未填写";
      pan++
    }
    else if (this.isEmpty(data.comment)) {
      warnStr = "答辩评价未填写";
      pan++
    }
    else if (this.isEmpty(data.content)) {
      warnStr = "答辩内容未填写";
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

  showTopTips: function(){

    let that = this
    console.log({
      name: that.data.name,
      stu_name: that.data.stu_name[that.data.index],
      score: that.data.score,
      comment: that.data.comment,
      content: that.data.content,
      stu_id: that.data.stu_id[that.data.index]
    })
    wx.request({
      url: app.globalData.rootDocment + '/users/addEvalution',
      data: {
        name: that.data.name,
        stu_name: that.data.stu_name[that.data.index],
        score: that.data.score,
        comment: that.data.comment,
        content: that.data.content,
        stu_id: that.data.stu_id[that.data.index]
      },
      method: 'get',
      header: { 'Content-Type': 'application/x-www-form-urlencoded' },
      success: function (res) {
        wx.showLoading({
          title: '发布成功!',
        })

        setTimeout(function () {
          wx.hideLoading()
          wx.navigateBack();  
        }, 1500)
      }
    })



  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    let that = this
    wx.request({
      url: app.globalData.rootDocment + '/users/getStu',
      data:{},
      method: 'get',
      header: { 'Content-Type': 'application/x-www-form-urlencoded' },
      success: function (res) {
        console.log(res.data)
        let arrList = []
        let idList = []
        res.data.forEach((v,k,arr)=>{
          arrList.push(v.name)
          idList.push(v.id) 
        })
        that.setData({
          stu_name: arrList,
          stu_id: idList
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