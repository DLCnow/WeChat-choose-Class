const app = getApp();
// pages/wdzg/wdzg.js
Page({
  data: {
    mPhone: "",
    myHires: [],

    canLoadMore: true,  //是否有下一页
    hiddenLoading: false,
    page: {
      index: -1,
      size: 20
    },
    simWindow: 'none'
  },
  // 18938874036
  // 立即发布跳转
  simJump: function(){
    wx.switchTab({
      url: '../publish/publish'
    })
  },
  goMyHireDetail: function(e){
    wx.navigateTo({
      url: '../kbjzgxq/kbjzgxq?id=' + e.currentTarget.dataset.name
    })
  },

  /* 上拉 */
  onPullDownRefresh: function () {
    wx.stopPullDownRefresh();
    this.setData({
      page: { index: -1, size: this.data.page.size },
      hiddenLoading: false,
      canLoadMore: true
    });
    this.loadMoreHires();
  },

  /*下拉加载更多*/
  onReachBottom: function () {
    this.setData({
      hiddenLoading: false
    });
    this.loadMoreHires();
  },

  loadMoreHires: function () {
    if (this.data.canLoadMore) {
      this.setData({
        page: { index: ++this.data.page.index, size: this.data.page.size }
      });
      this.getHiresInfo();
    }else{
      this.setData({
        hiddenLoading: true
      });
    }
  },

  getHiresInfo: function(){
  
    var that = this;



    // console.log({
    //   phone: that.data.mPhone,
    //   page: that.data.page.index,
    //   size: that.data.page.size
    // })
    app.func.req('projectHires/getHiresByPhone', 
    {
      phone : that.data.mPhone,
      page: that.data.page.index,
      size: that.data.page.size
    }, function (data) {
      if(data.content.length == 0 ){
        that.setData({
          simWindow: 'flex'
        })
      }else{
        that.setData({
          simWindow: 'none'
        })
        if (data) {
          that.setData({
            canLoadMore: !data.last,
            myHires: (data.content)
          });
        }
        

      }
      that.setData({
        hiddenLoading: true
      });







    });
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this.setData({
      mPhone: options.mPhone
    });
    this.loadMoreHires();
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
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {
  
  }
})