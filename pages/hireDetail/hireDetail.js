/**招工详情 */

const app = getApp()

Page({
  data: {
    hireInfo: {},
    hireId: 0,
    phone:'',
    kefuWeChat: 'Jzg-hg',
    phone: ''
  },

  doCallPhone: function () {
    let that = this
    wx.makePhoneCall({
      phoneNumber: that.data.phone
    })
  },
  onLoad: function (options) {
    this.getKeFuWeChat();
    this.setData({
      hireId: options.id   //
    });
    this.getHireInfo();
  },

  doPublish: function(){
    wx.switchTab({
      url: '../publish/publish'
    });
  },
  
  doCall: function (e) {
    var phoneNumber = "";
    app.func.req('virtualNums/getVirtualNumByHireId', {
      hireId: e.currentTarget.dataset.name
    }, function (data) {
      phoneNumber = data + "";
      wx.makePhoneCall({
        phoneNumber: phoneNumber,
      })
    })
  },

  doCallAbc: function(){
    wx.makePhoneCall({
      phoneNumber: '4008 - 6060 - 25'
    })
  },

  doCallNumber: function(){
    var phoneNum = '';
    if (this.data.hireInfo.phone == null || this.data.hireInfo.phone == ''){
      phoneNum = this.data.hireInfo.project.company.userName;
    }else{
      phoneNum = this.data.hireInfo.phone
    }

    wx.makePhoneCall({
      phoneNumber: phoneNum
    })
  },

  getHireInfo: function () {
    var that = this;
    app.func.req('projectHires/get', {id: that.data.hireId}, function (data) {

      console.log(data)
      that.setData({
        hireInfo: data,
        phone: data.phone
      });
      that.filterPhone();
    });
  },

  getKeFuWeChat: function(){
    var that = this;
    app.func.req('dicts/getKeFuWeChat', {}, function (data) {
      if(data){
        that.setData({
          kefuWeChat: data.text
        })
      }
    });
  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {
    //console.log("onPullDownRefresh...");
  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {
    //console.log("onReachBottom....");
  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {
    console.log('分享')
    let that = this



    wx.setStorageSync('isShare', true)


    wx.getStorage({
      key: 'isShare',
      success: function (res) {
        // success
        console.log('----')
        console.log(res.data)
      }
    })

   
    return {
      title: that.data.hireInfo.project.name,
      path: '/pages/hireDetail/hireDetail?id=' + that.data.hireId,
      
    }



    // return {
    //   title: '建筑港招工信息',
    //   path: '/pages/index/index',
    //   success: function (res) {  // 转发成功
    //     that.setData({
    //       isShare: true,
    //       isMaskHidden: true
    //     });
    //   },
    //   fail: function (res) { // 转发失败
    //   }
    // }
  },

  goIndex: function(){
    wx.navigateTo({
      url: "../zgxx/zgxx"
    });
  },

  //底部分享链接
  filterPhone: function(){
    var phoneNum = "";
    if (this.data.hireInfo.phone == null || this.data.hireInfo.phone == '') {
      phoneNum = this.data.hireInfo.project.company.userName;
    } else {
      phoneNum = this.data.hireInfo.phone
    }
    // 显示全部号码
    this.setData({
      phone: phoneNum
    });




    // if (phoneNum != '' && phoneNum != null){
    //   this.setData({
    //     phone: phoneNum.replace(/(\d{3})(\d{4})(\d{4})/, "$1****$3")
    //   });
    // }
  }
})

