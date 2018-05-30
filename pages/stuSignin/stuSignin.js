// pages/stuSignin/stuSignin.js

var app = getApp();
Page({

  /**
   * 页面的初始数据
   */
  data: {
    showText: '签到',
    time: '',
    isSubmitAble: false,
    id: ''
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
   
    // 再通过setData更改Page()里面的data，动态更新页面的数据  
    let that = this
    var time = formatTime(new Date());
    that.setData({
      time: time
    });  
    setInterval(function(){
      var time = formatTime(new Date());
      that.setData({
        time: time
      });  
    },1000)







    // 判断是否签到
    let times = formatDate(new Date) // 获取今天的时间
    wx.request({
        url: app.globalData.rootDocment + '/users/getIdSignin',
      data: {
        id: options.id,
        time: times
      },
      method: 'get',
      header: { 'Content-Type': 'application/x-www-form-urlencoded' },
      success: function (res) {
        console.log(res.data.length)
        if (res.data.length>0){
          that.setData({
            showText: '已签到',
            isSubmitAble: false,
            id: options.id
          })
        }else{
          that.setData({
            showText: '未签到',
            isSubmitAble: true,
            id: options.id
          })
        }  
      }
    })

  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  siginUp:  function(){

    let that = this
    if (this.data.isSubmitAble){
      // 签到操作
      let stu_name = wx.getStorageSync('username') ? wx.getStorageSync('username') : app.globalData.userInfo.nickName
      let sign  = 1
      let time = formatDate(new Date) + ' ' + formatTime(new Date())
      let stu_id = this.data.id
      console.log({
        stu_name: stu_name,
        sign: sign,
        time: time,
        stu_id: stu_id
      })
      wx.request({
        url: app.globalData.rootDocment + '/users/insertSignin',
        data: {
          stu_name: stu_name,
          sign: sign,
          time: time,
          stu_id: stu_id
        },
        method: 'get',
        header: { 'Content-Type': 'application/x-www-form-urlencoded' },
        success: function (res) {
            console.log(res)


            that.setData({
              showText: '已签到',
              isSubmitAble: !that.data.isSubmitAble
            })
            wx.showLoading({
              title: '签到成功!',
            })


            setTimeout(function () {
              wx.hideLoading()
            }, 1000)
        }
      })
    }else{

      wx.showLoading({
        title: '已签到!',
      })

      setTimeout(function () {
        wx.hideLoading()
      },1000)
    }
  },
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




function formatTime(date) {
  var year = date.getFullYear()
  var month = date.getMonth() + 1
  var day = date.getDate()

  var hour = date.getHours()
  var minute = date.getMinutes()
  var second = date.getSeconds()

  return [hour, minute, second].map(formatNumber).join(':')
}


function formatDate(date) {
  var year = date.getFullYear()
  var month = date.getMonth() + 1
  var day = date.getDate()

  var hour = date.getHours()
  var minute = date.getMinutes()
  var second = date.getSeconds()

  return [year, month, day].map(formatNumber).join('-');
}
function formatNumber(n) {
  n = n.toString()
  return n[1] ? n : '0' + n
}  