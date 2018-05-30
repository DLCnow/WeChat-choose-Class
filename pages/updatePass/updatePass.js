// pages/updatePass/updatePass.js
const app = getApp()
Page({

  /**
   * 页面的初始数据
   */
  data: {
    username: '',
    repassword: '',
    password: '',
    isSubmitAble: false,
    warnStr: '',
    k_pan: false
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {


    this.setData({
      username: wx.getStorageSync('username') || app.globalData.userInfo.nickName
    })
  },
  passwordInput: function(e){
    let password = wx.getStorageSync('password')
    if (parseInt(e.detail.value) == parseInt(wx.getStorageSync('password'))) {
      this.setData({
        k_pan: true,
        password: e.detail.value
      })
    } else{
      this.setData({
        k_pan: false,
        password: e.detail.value
      })
    }
    this.doVerifyValues()
  },
  repasswordInput: function(e){
    this.setData({
      repassword : e.detail.value
    })
    this.doVerifyValues()
  },
  loginBtnClick: function(){
    let id = wx.getStorageSync('userid')
    let password = this.data.repassword


    wx.request({
      url: app.globalData.rootDocment + '/users/updatePass',
      data: {
        id: id,
        password: password
      },
      method: 'get',
      header: { 'Content-Type': 'application/x-www-form-urlencoded' },
      success: function (res) {
        console.log(res)
        wx.showLoading({
          title: '重置成功!',
        })

        setTimeout(function () {
          wx.hideLoading()
        }, 1000)
      }
    })
  },
  doVerifyValues: function () {
    var data = this.data;
    var isSubmitAble = false;
    var warnStr = "";
    var pan = 0
    if (this.isEmpty(data.repassword)) {
      warnStr = "新密码未填写";
      pan++
    } else if (this.isEmpty(data.password)) {
      warnStr = "旧密码未填写";
      pan++
    } else if (data.k_pan == false){
      warnStr = "旧密码错误";
      pan++
    }else {

    }
    if (pan === 0) {
      isSubmitAble = true;
    }

    console.log(pan)

    this.setData({
      isSubmitAble: isSubmitAble,
      warnStr: warnStr
    });
  },

  isEmpty: function (str) {
    if (str == null || str == "") {
      return true;
    } else {
      return false;
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