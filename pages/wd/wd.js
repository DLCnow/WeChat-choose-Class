const app = getApp();

// pages/wd/wd.js
Page({
  data: {
    userInfo: null,
    hasUserInfo: false
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {





    this.setData({mPhone: app.globalData.mPhone});





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
    this.onLoad()//再次加载，实现返回上一页页面刷新
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

  isBindPhone: function(){
    if (app.globalData.mPhone != null && app.globalData.mPhone != ''){
      return true;
    }else{
      return false;
    }
  },

  /**跳转 我的招工信息 */
  goMyHire:function () {

    if (this.auth()){
      if (this.isBindPhone()) {  //正式代码
        console.log('进入招工列表')
        wx.navigateTo({
          url: '../wdzg/wdzg?mPhone=' + app.globalData.mPhone
        })
      } else {
        wx.navigateTo({
          url: '../smrz/smrz',
        })

    }
     


    /// 测试下代码
    // if (!this.isBindPhone()) {
  }
  },
  /**
   * 跳转 我的求租
   */
  goMyMachine: function(){


    if(this.auth()){
      if (this.isBindPhone()) {
        wx.navigateTo({
          url: '../wdjx/wdjx?mPhone=' + app.globalData.mPhone
        })
      } else {
        wx.navigateTo({
          url: '../smrz/smrz',
        })
      }
    }
    
   
  },
  /**
   * 跳转 我的举报反馈
   */
  goMyFeedBlack:function(){


    wx.navigateTo({
      url: '../jbfk/jbfk',
    })
  },
  /**
   * 跳转 实名认证
   */
  goMyRealName:function(){
   
    if (this.auth()){
      wx.navigateTo({
        url: '../smrz/smrz',
      })
    }
   
  },
  auth: function(){



    console.log(app.globalData.userInfo)
    if (app.globalData.userInfo === null) {
      console.log('未授权')
      wx.navigateTo({
        url: '../auth/auth',
      })
      return false
    }else{
      return true
    }

    
  }
})