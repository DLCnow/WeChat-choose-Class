
const app = getApp();
Page({
  data: {
    name: "",
    phone: "",
    area: "",
    remark: "",
    userName: "",
    tagState: [
      {
        name: '招工指南',
        active: 'hot-active',
        id: 1
      },
      {
        name: '入驻指南',
        active: '',
        id:2
      },
      {
        name: '防骗指南',
        active: '',
        id: 3
      },
    ],
    nowImg: 1,  //当前是第几个
    warnStr: "姓名未填写~",
  },
  // 数据空值校验
  isEmpty: function (str) {
    if (str == null || str == "") {
      return true;
    } else {
      return false;
    }
  },
  // 校验表单数据空值校验
  doVoritity(){
    // name
    // phone
    // area
    // remark
    // userName
    var data = this.data;
    var isSubmitAble = false;
    var warnStr = "";
    if (this.isEmpty(data.name)){
      warnStr = "姓名未填写~";
    } else if (this.isEmpty(data.phone)){
      warnStr = "电话号码未填写~";
    } else if (this.isEmpty(data.area)){
      warnStr = "地区未填写~";
    } else if (this.isEmpty(data.remark)){
      warnStr = "黑名单原因未填写~";
    } else if (this.isEmpty(data.userName)) {
      warnStr = "联系方式未填写~";
    } else {
      var reg = /^1[3|4|5|7|8][0-9]{9}$/; //验证规则

      var phoneNum = data.phone//手机号码

      var flag = reg.test(phoneNum); //true

      if (flag) {
        isSubmitAble = true;
      } else {
        warnStr = '电话号码格式不正确！'
      }
     
    }
    this.setData({
      isSubmitAble: isSubmitAble,
      opacity: isSubmitAble ? 1 : 0.5,
      warnStr: warnStr
    });
  }, 
  changeleft: function(){
    let nowImg = this.data.nowImg
    if (nowImg==1){

    }else{
      nowImg = nowImg-1
      this.setData({
        nowImg: nowImg
      })
    }
  },
  changeright: function(){

    let nowImg = this.data.nowImg
    if (nowImg == 4) {

    } else {
      nowImg = nowImg + 1
      this.setData({
        nowImg: nowImg
      })
    }
    console.log(this.data.nowImg)
  },
  changeMenu: function(e){
    let tagState = this.data.tagState
      console.log(e)
      for (var i = 0; i < tagState.length;i++){
        if (parseInt(tagState[i].id) === parseInt(e.target.dataset.id)){
          tagState[i].active = 'hot-active'
          }else{
          tagState[i].active = ''
          }
      }



      this.setData({
        tagState: tagState
      })
      console.log(this.data.tagState)
  },
  doSubmit: function () {
    var that = this;






    app.func.req('blacklists/save', {
      name: that.data.name,
      address: that.data.area,
      phone: that.data.phone,
      remark: that.data.remark,
      user_code: that.data.userName
    },function(data){
      if(data){
        wx.showToast({
          title: '发布成功',
          icon: 'success',
          duration: 1500,
          complete: function () {
            setTimeout(function () {
              wx.switchTab({
                url: '../sy/sy'
              });
            }, 1500);
          }
        });
        that.setData({
          name: "",
          phone: "",
          area: "",
          remark: "",
          userName: ""
        })
      }
    });
  },

  bindName: function(e) {



    this.setData({
      name: e.detail.value
    });

    this.doVoritity()
  },

  bindPhone: function (e) {
 
    this.setData({
      phone: e.detail.value
    });
    this.doVoritity()

  },

  bindArea: function (e) {
    this.setData({
      area: e.detail.value
    });
    this.doVoritity()
  },

  bindRemark: function (e) {
    this.setData({
      remark: e.detail.value
    });
    this.doVoritity()
  },

  bindUserName: function(e){
    this.setData({
      userName: e.detail.value
    });
    this.doVoritity()
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
  
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