
const app = getApp()

Page({
  data: {
  // 轮播图
    imgUrls: [{
      link: '/pages/index/index',
      url: 'https://jianzhugang.oss-cn-shenzhen.aliyuncs.com/wxMiniImages/banner1.png'
    }
    , {
      link: '/pages/index/index',
      url: 'https://jianzhugang.oss-cn-shenzhen.aliyuncs.com/wxMiniImages/banner2.png'
      }, 
      {
        link: '/pages/index/index',
        url: 'https://jianzhugang.oss-cn-shenzhen.aliyuncs.com/wxMiniImages/banner3.png'
    }
    /**, {
      link: '/pages/index/index',
      url: '../../image/sy/banner5.jpg'
      }, {
        link: '/pages/index/index',
        url: '../../image/sy/banner6.jpg'
    }, {
      link: '/pages/index/index',
      url: '../../image/sy/banner.png'
    },**/
    ],
    indicatorDots: true,
    autoplay: true,
    interval: 2000,
    duration: 1000,
    hires: [],
    machinerys: [],
    userInfo: null,
    hasUserInfo: false
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

    /// 清除缓存
    wx.clearStorage()


    // 清除本地缓存
    try {
      wx.clearStorageSync()
    } catch (e) {
      // Do something when catch error
    }
    this.getHires();
    this.getMachinerys();
    this.getNotes();

    if (app.globalData.userInfo) {
      this.setData({
        userInfo: app.globalData.userInfo,
        hasUserInfo: true
      })
    } else if (this.data.canIUse) {
      app.userInfoReadyCallback = res => {
        this.setData({
          userInfo: res.userInfo,
          hasUserInfo: true
        })
      }
    } else {
      wx.getUserInfo({
        success: res => {
          app.globalData.userInfo = res.userInfo
          this.setData({
            userInfo: res.userInfo,
            hasUserInfo: true
          })
        }
      })
    } 





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
    wx.clearStorage()


    // 清除本地缓存
    try {
      wx.clearStorageSync()
    } catch (e) {
      // Do something when catch error
    }
    this.getHires();
    this.getMachinerys();
    this.getNotes();

    if (app.globalData.userInfo) {
      this.setData({
        userInfo: app.globalData.userInfo,
        hasUserInfo: true
      })
    } else if (this.data.canIUse) {
      app.userInfoReadyCallback = res => {
        this.setData({
          userInfo: res.userInfo,
          hasUserInfo: true
        })
      }
    } else {
      wx.getUserInfo({
        success: res => {
          app.globalData.userInfo = res.userInfo
          this.setData({
            userInfo: res.userInfo,
            hasUserInfo: true
          })
        }
      })
    } 

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
    wx.showNavigationBarLoading() //在标题栏中显示加载
    this.getHires();
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

  /**跳转 招工信息列表 */
  goHireList: function(e){
    wx.navigateTo({
      url: '../zgxx/zgxx'
    })
  },

  /**跳转 班组信息*/
  goCityList: function (e) {
    wx.navigateTo({
      url: '../bzlb/bzlb'
    })
  },

  /** 跳转 同城机械 */
  goMachineryList: function (e) {
    wx.navigateTo({
      url: '../jxlb/jxlb'
    })
  },

  /**跳转  举报骗子*/
  goReportList:function(e){
    wx.navigateTo({
      url: '../jbfk/jbfk',
    })
  },
/**
 * 跳转 招工详情
 */
  goHireDetail: function(e){
    wx.navigateTo({
      url: '../hireDetail/hireDetail?id=' + e.currentTarget.dataset.name
    })
  },
/**
 * 获取 招工列表
 */
  getHires: function () {
    var that = this;
    app.func.req('projectHires/query', {
      page: 0,
      size: 5,
      status: 'AUDITED'
    }, function (data) {
      wx.hideNavigationBarLoading() //完成停止加载
      wx.stopPullDownRefresh() //停止下拉刷新
      if (data) {
        that.setData({
          hires: (data.content),
        });
      }
    });
  },
/**
 * 跳转 机械详情
 */
  goMachineDetil: function (e) {
    wx.navigateTo({
      url: '../jxxq/jxxq?id=' + e.currentTarget.dataset.name
    })
  },
  /**
   * 获取 机械列表
   */
  getMachinerys: function(){
    var that = this;
    app.func.req('machineAsks/getAppList', {
      page: 0,
      size: 5
    }, function (data) {
      if (data) {
        that.setData({
          machinerys: that.data.machinerys.concat(data.content),
        });
      }
    });
  },
  /**
   * 获取 公告信息
   */
  getNotes:function(){
     //function 里面已经不是this所以使用this.setData不起作用
    var that = this;
    app.func.req('notes/getNotes', {
      status: 1,
      typeId: 1
    }, function (data) {
      if (data) {
        that.setData({
          notes: data
        });
      }
    });
  },
  test: function(e){
  }
})

