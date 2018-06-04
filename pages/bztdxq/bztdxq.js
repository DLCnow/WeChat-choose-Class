// pages/bztdxq/bztdxq.js
const app = getApp();
Page({

  /**
   * 页面的初始数据
   */
  data: {
    teamInfo:{},
    teamId:0,
    phone:"",
    starArr: '', // 用于模拟输出星级的数组
    enStarArr: ''
  },

/** 过滤空值 */
  doFileNull: function(str){
    if(str == null || str == ""){
      return "";
    }else {
      return str;
    }
  },

  // 　打电话

  doCallPhone: function () {
    let that = this
    wx.makePhoneCall({
      phoneNumber: that.data.phone
    })
  },

  
  filterPhone: function () {


   
    var phoneNum = "";
    if (this.data.teamInfo.phone !== null && this.data.teamInfo.phone !== '' ) {
      phoneNum = this.data.teamInfo.phone;
    } else {
      phoneNum = this.data.teamInfo.userName
    }



    console.log(phoneNum)
    if (phoneNum != '' && phoneNum != null) {
      this.setData({
        phone: phoneNum.replace(/(\d{3})(\d{4})(\d{4})/, "$1****$3")
      });
    }
  },

  /**
   * 获取 班组详情
   */
  getTeamInfo: function () {
    var that = this;
    console.log('teamid:' + that.data.teamId )
    app.func.req('teams/get', { id: that.data.teamId }, function (data) {
      if (data.starsLevel!=null){
        // 不等于空
        let star = [] 
        let enstar = []
        for (var i = 0;i < parseInt(data.starsLevel);i++){
          star.push('1')
        }
        for (var i = 0; i < 5 -parseInt(data.starsLevel); i++) {
          enstar.push('1')
        }

        that.setData({
          starArr: star,
          enStarArr: enstar
        })
      }else{
        let star = []
        let enstar = []
        // 等于空
        for (var i = 0; i < 5; i++) {
          star.push('1')
        }

        that.setData({
          starArr: [],
          enStarArr : []
        })
      }
    



      that.setData({
        teamInfo: data
      });
      if(data!==null){
        that.filterPhone();
      }
    });
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this.setData({
      teamId: options.id
    });
    this.getTeamInfo();
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