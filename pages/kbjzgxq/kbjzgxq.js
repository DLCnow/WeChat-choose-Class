const app = getApp();
// pages/kbjzgxq/kbjzgxq.js
Page({
  data: {
    hireInfo: {},
    hireId: 0,

    hireStatusIdx: 0,
    hireStatus: [],
    kefuWeChat: 'Jzg-hg'
  },

  doCallAbc: function () {
    wx.makePhoneCall({
      phoneNumber: '4008 - 6060 - 25'
    })
  },
  doSave: function(){
    app.func.req('projectHires/updateStatusHire', {
      status: this.data.hireStatus[this.data.hireStatusIdx].id,
      id: this.data.hireId
    }, function (data) {
      wx.switchTab({
        url: '/pages/wd/wd',
      });
    });
  },
  doReSendHire: function(e){
    wx.navigateTo({
      url: '/pages/republish/republish?id=' + e.currentTarget.dataset.name,
    })
  },
  changeHiretatus: function(e){
    this.setData({
      hireStatusIdx: e.detail.value
    });

    app.func.req('projectHires/updateStatusHire', {
      status: this.data.hireStatus[this.data.hireStatusIdx].id,
      id: this.data.hireId
    }, function (data) {
      wx.showModal({
        title: '提示',
        content: '招工信息更新成功!',
        success: function (res) {
        }
      })
    });




  },
  
  getHireStatus: function(){
    //PROJECT_HIRE_STATUS
    var that = this;
    app.func.req('dicts/getDictsByCategory', {
      categoryKey: "PROJECT_HIRE_STATUS" 
    }, function (data) {
      if(data){


        data.splice(1, 1)
        data.splice(2, 1)
        that.setData({
          hireStatus: data
        });
        that.initHireStatus();
      }
    });
  },

  initHireStatus: function(){
    console.log(this.data)
    for (var i = 0; i < this.data.hireStatus.length; i++) {
      var itm = this.data.hireStatus[i];
      if (itm.id == this.data.hireInfo.status.id){
        this.setData({
          hireStatusIdx: i
        });
      }  
    }
  },

  /**
   * 获取 招工信息详情
   */
  getHireInfo: function () {
    var that = this;
    app.func.req('projectHires/get', { id: that.data.hireId }, function (data) {
      console.log(data)
      that.setData({
        hireInfo: data
      });
      that.getHireStatus();
    });
  },

  onLoad: function (options) {
    this.setData({
      hireId: options.id
    });

    this.getHireInfo();
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