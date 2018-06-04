
const app = getApp();

// pages/fb/fb.js
Page({

  data: {
    mapTitle: {},
    mapId: {},
    map: {},
    multiArray: [[], []],
    multiIndex: [0, 0],
    region: ['广东省', '深圳市', '福田区'],
    isSubmitAble: false,
    warnStr: "招工标题未填写~",

    hireSalary: "",
    workerType: "",
    hireTitle: "",
    hireContacts: "",
    //hireDeadline:"",
    hireRegion: "",

    districtStr: null,    //区
    workerTypeId: null,
    hirePepoleNum: null,
    hireRequest: "",
    hirePhone: "",
    hireCode: null
  },

  isEmpty: function (str) {
    if (str == null || str == "") {
      return true;
    } else {
      return false;
    }
  },

  /** 验证输入值 */
  doVerifyValues: function () {
    var data = this.data;
    var isSubmitAble = false;
    var warnStr = "";
    if (this.isEmpty(data.hireTitle)) {
      warnStr = "招工标题未填写~";
    } else if (this.isEmpty(data.hireContacts)) {
      warnStr = "联系人未填写~";
    } /**else if (this.isEmpty(data.hireDeadline)){
      warnStr = "招工截止日期未填写~";
    }**/
    else if (this.isEmpty(data.hirePhone)) {
      warnStr = "手机号未填写~";
    } else if (this.isEmpty(data.hireCode)) {
      warnStr = "验证码未填写~";
    } else if (this.isEmpty(data.hireRegion)) {
      warnStr = "地区未选择~";
    } else {
      isSubmitAble = true;
    }

    this.setData({
      isSubmitAble: isSubmitAble,
      warnStr: warnStr
    });
  },

  /*提交 */
  doSubmit: function () {
    var that = this;
    app.func.req('projectHires/JZGaddHireByWX', {
      projectName: that.data.hireTitle,
      streetAddress: that.data.hireRegion,
      contacts: that.data.hireContacts,
      phone: that.data.hirePhone,
      memo: that.data.hireRequest,
      workerType: that.data.workerTypeId,
      workerNum: that.data.hirePepoleNum,
      //closeTime: that.data.hireDeadline,
      salary: that.data.hireSalary,
      hireCode: that.data.hireCode,
      districtStr: that.data.districtStr,
      wxId: app.globalData.openId
    }, function (data) {
      if (data == true) {
        wx.showToast({
          title: '举报成功',
          icon: 'success',
          duration: 1500,
          complete: function () {
            setTimeout(function () {
              wx.switchTab({
                url: '../index/index'
              });
            }, 1500);
          }
        });

        that.setData({
          mapTitle: {},
          mapId: {},
          map: {},
          multiArray: [[], []],
          multiIndex: [0, 0],
          region: ['广东省', '深圳市', '福田区'],
          isSubmitAble: false,
          warnStr: "招工标题未填写~",

          hireSalary: "",
          workerType: "",
          hireTitle: "",
          hireContacts: "",
          //hireDeadline:"",
          hireRegion: "",
          workerTypeId: null,
          hirePepoleNum: null,
          hireRequest: "",
          hirePhone: "",
          hireCode: ""
        });

      } else {
        wx.showModal({
          title: '提示',
          content: data.message,
          success: function (res) {
            if (res.confirm) {
              console.log('用户点击确定')
            } else if (res.cancel) {
              console.log('用户点击取消')
            }
          }
        })
      }
    });
  },

  /**获取验证码 */
  getVerifyCode: function () {
    var that = this;
    if (this.isEmpty(that.data.hirePhone)) {
      wx.showModal({
        title: '提示',
        content: "手机号码不能为空~",
        success: function (res) {
        }
      })
    }
    app.func.req('verifyCodes/sendVerifyCode', { userName: that.data.hirePhone }, function (data) {
      wx.showToast({
        title: '发送成功',
      })
    });
  },

  bindHiresalary: function (e) {
    this.setData({
      hireSalary: e.detail.value
    })
  },

  bindHireCode: function (e) {
    this.setData({
      hireCode: e.detail.value
    });
    this.doVerifyValues();
  },

  bindHirePhone: function (e) {
    this.setData({
      hirePhone: e.detail.value
    });
    this.doVerifyValues();
  },

  bindHireRequest: function (e) {
    this.setData({
      hireRequest: e.detail.value
    });
  },

  bindHirePepoleNum: function (e) {
    this.setData({
      hirePepoleNum: e.detail.value
    });
  },

  bindHireContacts: function (e) {
    this.setData({
      hireContacts: e.detail.value
    });
    this.doVerifyValues();
  },

  bindHireTitle: function (e) {
    this.setData({
      hireTitle: e.detail.value
    });
    this.doVerifyValues();
  },

  bindDateChange: function (e) {
    this.setData({
      hireDeadline: e.detail.value
    })
    this.doVerifyValues();
  },

  bindRegionChange: function (e) {
    this.setData({
      region: e.detail.value,
      districtStr: e.detail.value[2],
      hireRegion: e.detail.value[0] + e.detail.value[1] + e.detail.value[2]
    });
    console.log(e);
    this.doVerifyValues();
  },

  bindMultiPickerColumnChange: function (e) {
    if (e.detail.column == 0) {
      this.setData({
        multiArray: [this.data.multiArray[0], this.data.mapTitle[this.data.multiArray[0][e.detail.value]]],
        multiIndex: [e.detail.value, 0]
      });
    }
  },

  //   mapTitle = { "土建"：["木工", "瓦工", "钢筋"]}
  //   mapId = { "土建"：["12", "34", "45"]}
  //   map = { "土建": "TUJIAN" }

  bindMultiPickerChange: function (e) {
    var mWorkerType = this.data.multiArray[0][e.detail.value[0]]
      + "/"
      + this.data.mapTitle[this.data.multiArray[0][e.detail.value[0]]][e.detail.value[1]];
    var mWorkerTypeId = this.data.mapId[this.data.multiArray[0][e.detail.value[0]]][e.detail.value[1]]

    this.setData({
      multiIndex: e.detail.value,
      workerType: mWorkerType,
      workerTypeId: mWorkerTypeId
    });
  },

  initTeamType: function (types) {
    var mapTitle = {};
    var mapId = {};
    var map = {};
    /*
    mapTitle = {"土建"：["木工","瓦工","钢筋"]}
    mapId
    map = {"TUJIAN": "土建"}
    catecry1 = [];
     */

    for (var idx in types) {
      if (map[types[idx].category.text]) {
        mapId[types[idx].category.text].push(types[idx].id);
        mapTitle[types[idx].category.text].push(types[idx].title);
      } else {
        map[types[idx].category.text] = types[idx].category.id;

        mapId[types[idx].category.text] = [types[idx].id];
        mapTitle[types[idx].category.text] = [types[idx].title];
      }
    }
    var catetory1 = [];
    for (var key in map) {
      catetory1.push(key);
    }
    this.setData({
      mapTitle: mapTitle,
      mapId: mapId,
      map: map,
      multiArray: [catetory1, mapTitle[catetory1[0]]]
    });
  },


  getTeamType: function () {
    var that = this;
    app.func.req('teamTypes/listAll', {}, function (data) {
      that.initTeamType(data);
    });
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this.getTeamType();
    if (app.globalData.mPhone != null && app.globalData.mPhone != '') {
      this.setData({
        hirePhone: app.globalData.mPhone
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