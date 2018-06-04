// pages/jxxq/jxxq.js
const app = getApp();
Page({

  /**
   * 页面的初始数据
   */
  data: {
    machinerieInfo: {},
    machinerieId: 0,
    kefuWeChat: 'Jzg-hg',
    phone: ''
  },
  /**
   * 获取机械详情
   */
  getMachinerieInfo: function () {
    var that = this;
    app.func.req('machineAsks/getAppList', {machineAskId: that.data.machinerieId,page:0,size:1}, 
    function (data) {
      data.content[0].type.text = data.content[0].type.text.replace(/-/g, '')
   

      that.setData({
        machinerieInfo: data.content[0],
        phone: data.content[0].mobile
      });
    });
  },


  doPublish: function () {
    wx.redirectTo({
      url: '../jxlb/jxlb?type='+ 2
    });
  },


  goIndex: function () {
    wx.redirectTo({
      url: "../jxlb/jxlb"
    });
  },


  doCallAbc: function () {
    wx.makePhoneCall({
      phoneNumber: '4008 - 6060 - 25'
    })
  },


  doCallPhone: function () {
    let that = this
    wx.makePhoneCall({
      phoneNumber: that.data.machinerieInfo.mobile
    })
    console.log(that.data.phoneNumber)
  },








  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this.setData({
      machinerieId: options.id
    });
    this.getMachinerieInfo();
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