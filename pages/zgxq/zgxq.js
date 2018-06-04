const app = getApp();

Page({
  data: {
    hireInfo: {},
    hireId: 0,
  },


  calling: function (e) {
    var phoneNumber = "";
    app.func.req('virtualNums/getVirtualNumByHireId', {
      hireId: e.currentTarget.dataset.name
    }, function (data) {
      phoneNumber = data + "";
      console.log("getPhone = "+data);

      wx.makePhoneCall({
        phoneNumber: phoneNumber,
      })
    })
  },

/**
 * 获取 招工信息详情
 */
  getHireInfo: function(){
    var that = this;
    app.func.req('projectHires/get', { id: that.data.hireId}, function (data) {
      that.setData({
        hireInfo: data
      });
    });
  },

  /**
   * 生命周期函数--监听页面加载
   */
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
    return {
      title: this.data.hireInfo.project.name,
      path: '/pages/zgxq/zgxq?id=' + this.data.hireId
    }
  },
  /**
   doCallNumber: function () {
    var phoneNum = '';
    if (this.data.hireInfo.phone == null || this.data.hireInfo.phone == '') {
      phoneNum = this.data.hireInfo.project.company.userName;
    } else {
      phoneNum = this.data.hireInfo.phone
    }

    wx.makePhoneCall({
      phoneNumber: phoneNum
    })
  }, */
})