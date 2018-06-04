// pages/wdjx/wdjx.js
const app = getApp();
Page({
  data: {
    mPhone:'',
    canLoadMore: true,
    hiddenLoading: false,
    machineries: [],
    page: {
      index: -1,
      size: 20
      }
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this.setData({
      mPhone: options.mPhone
    });
    this.loadMoreMachine();
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
    wx.stopPullDownRefresh();
    this.setData({
      page: { index: -1, size: this.data.page.size },
      hiddenLoading: false
    });
    this.loadMoreMachine();
  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {
    this.setData({
      hiddenLoading: false
    });
    this.loadMoreMachine();
  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {
  
  },

  loadMoreMachine: function () {
    if (this.data.canLoadMore) {
      this.setData({
        page: { index: ++this.data.page.index, size: this.data.page.size }
      });
      this.getMachineries();
    }
  },

  getMachineries: function () {
    var that = this;
    app.func.req('machineAsks/getMachinesByPhone', {
      page: that.data.page.index,
      size: that.data.page.size,
      phone: that.data.mPhone
    }, function (data) {
      console.log(data)
      if (data) {
        that.setData({
          canLoadMore: !data.last,
          machineries: that.data.machineries.concat(data.content[0]),
        });
      }
      that.setData({
        hiddenLoading: true
      });
    });
  },

  goMachineryDetail: function (e) {
    wx.navigateTo({
      url: '../jxxq/jxxq?id=' + e.currentTarget.dataset.name
    })
  }
})