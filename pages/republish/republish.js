//todo list 手机号码正确性验证
const app = getApp();

Page({
    /*mapTitle = {"土建"：["木工","瓦工","钢筋"]}
    mapId = {"土建"：["12","34","45"]}
    map = {"土建": "TUJIAN"}*/
  data: {
    //index: 0,
    mapTitle:{},
    mapId: {},
    map:{},
    multiArray: [[], []],
    multiIndex: [0, 0],
    region: [[],[],[]],
    warnStr:"招工标题未填写~",

    hireSalary :"",
    workerType:"",
    hireTitle:"",
    hireContacts:"",
    //hireDeadline:"",
    hireRegion: "",
    
    districtStr : null,    //区
    workerTypeId: null,
    hirePepoleNum: null,
    hireRequest: "",
    hirePhone: "",
    hireCode : null,
    // 地区修改参数
    localRegion: ['广东省', '深圳市', '福田区'],
    localArray: [[], [], []],
    localIndex: '',
    localType: "",
    pro: [],
    city: [],
    qu: [],
    proed: 0,
    cityed: 0,
    qued: 0,
    districtId: 0
  },
  bindLocalChange: function (e) {
    let region = getApp().globalData.Address
    this.setData({
      localType: region[this.data.proed].province + region[this.data.proed].citys[this.data.cityed].city + region[this.data.proed].citys[this.data.cityed].districts[this.data.qued].district,
      districtStr: region[this.data.proed].province + region[this.data.proed].citys[this.data.cityed].city + region[this.data.proed].citys[this.data.cityed].districts[this.data.qued].district,
      districtId: region[this.data.proed].citys[this.data.cityed].districts[this.data.qued].id
    })
  },
  bindPickerColumnChange: function (e) {
    //  重新初始化
    let region = getApp().globalData.Address
    let pro = []
    let city = []
    let qu = []
    let that = this
    if (e.detail.column == 0) {
      // 滚动第一栏  省级   重新初始化市级和区级
      if (region[e.detail.value].citys.length == 1) {
        city[0] = region[e.detail.value].citys[0].city
      } else {
        for (var i = 0; i < region[e.detail.value].citys.length; i++) {
          city.push(region[e.detail.value].citys[i].city)
        }
      }

      for (var i = 0; i < region[e.detail.value].citys[0].districts.length; i++) {
        qu.push(region[e.detail.value].citys[0].districts[i].district)
      }

      this.setData({
        localArray: [
          that.data.localArray[0],
          city,
          qu,
        ],
        proed: e.detail.value,
        cityed: 0,
        qued: 0
      })

    } else if (e.detail.column == 1) {
      // 滚动第二栏 市级
      for (var i = 0; i < region[that.data.proed].citys[e.detail.value].districts.length; i++) {
        qu.push(region[that.data.proed].citys[e.detail.value].districts[i].district)
      }

      that.setData({
        localArray: [
          that.data.localArray[0],
          that.data.localArray[1],
          qu,
        ],
        cityed: e.detail.value,
        qued: 0
      })
    } else {
      that.setData({
        qued: e.detail.value
      })
      // 滚动第三栏 区级
    }
  },


  isEmpty: function(str){
    if(str == null || str == ""){
      return true;
    }else{
      return false;
    }
  },

  /** 验证输入值 */
  doVerifyValues : function(){
    var data = this.data;
    var isSubmitAble = false;
    var warnStr = "";
    if (this.isEmpty(data.hireTitle)){
      warnStr = "招工标题未填写~"; 
    } else if (this.isEmpty(data.hireContacts)){
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
  doSubmit:function(){
    var that = this;
    console.log({
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
      districtId: that.data.districtId
    })
    console.log('------')
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
      districtStr: that.data.districtStr
    }, function (data) {
      if(data == true){
        wx.showToast({
          title: '发布成功',
          icon: 'success',
          duration: 1500,
          complete: function(){
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

      }else{
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
  getVerifyCode: function(){
    var that = this;
    if (this.isEmpty(that.data.hirePhone)){
      wx.showModal({
        title: '提示',
        content: "手机号码不能为空~",
        success: function (res) {
        }
      })
    }
    app.func.req('verifyCodes/sendVerifyCode', { userName : that.data.hirePhone}, function (data) {
      wx.showToast({
        title: '发送成功',
      })
    });
  },

  bindHiresalary : function(e){
    this.setData({
      hireSalary: e.detail.value
    })
  },

  bindHireCode:function(e){
    this.setData({
      hireCode: e.detail.value
    });
    this.doVerifyValues();
  },

  bindHirePhone: function(e){
    this.setData({
      hirePhone: e.detail.value
    });
    this.doVerifyValues();
  },

  bindHireRequest: function(e){
    this.setData({
      hireRequest: e.detail.value
    });
  },

  bindHirePepoleNum: function(e){
    this.setData({
      hirePepoleNum: e.detail.value
    });
  },

  bindHireContacts:function(e){
    this.setData({
      hireContacts: e.detail.value
    });
    this.doVerifyValues();
  },

  bindHireTitle: function(e){
    this.setData({
      hireTitle: e.detail.value
    });
    this.doVerifyValues();
  },

  bindDateChange: function(e){
    this.setData({
      hireDeadline: e.detail.value
    })
    this.doVerifyValues();
  },

  bindRegionChange: function(e){
    console.log(this.data.hireRegion)
    this.setData({
      region: e.detail.value,
      districtStr: e.detail.value[2],
      hireRegion: e.detail.value[0] + e.detail.value[1] + e.detail.value[2]
    });
    console.log(e);
    this.doVerifyValues();
  },

  bindMultiPickerColumnChange: function(e){
    if (e.detail.column == 0){
      this.setData({
        multiArray: [this.data.multiArray[0], this.data.mapTitle[this.data.multiArray[0][e.detail.value]]],
        multiIndex: [e.detail.value, 0]
      });
    }
  },

  //   mapTitle = { "土建"：["木工", "瓦工", "钢筋"]}
  //   mapId = { "土建"：["12", "34", "45"]}
  //   map = { "土建": "TUJIAN" }

  bindMultiPickerChange: function(e){
    var mWorkerType = this.data.multiArray[0][e.detail.value[0]]
      + "/"
      + this.data.mapTitle[this.data.multiArray[0][e.detail.value[0]]][e.detail.value[1]];
    var mWorkerTypeId = this.data.mapId[this.data.multiArray[0][e.detail.value[0]]][e.detail.value[1]]

    this.setData({
      multiIndex : e.detail.value,
      workerType: mWorkerType,
      workerTypeId: mWorkerTypeId
    });
  },

  initTeamType: function(types){
    var mapTitle = {};
    var mapId = {};
    var map = {};
    /*
    mapTitle = {"土建"：["木工","瓦工","钢筋"]}
    mapId
    map = {"TUJIAN": "土建"}
    catecry1 = [];
     */
    
    for (var idx in types){
      if (map[types[idx].category.text]){
        mapId[types[idx].category.text].push(types[idx].id);
        mapTitle[types[idx].category.text].push(types[idx].title);
      }else{
        map[types[idx].category.text] = types[idx].category.id;

        mapId[types[idx].category.text] = [types[idx].id];
        mapTitle[types[idx].category.text] = [types[idx].title];
      }
    }
    var catetory1 = [];
    for(var key in map){
      catetory1.push(key);
    }
    this.setData({
      mapTitle: mapTitle,
      mapId: mapId,
      map : map,
      multiArray: [catetory1, mapTitle[catetory1[0]]]
    });
  },


  getTeamType: function(){
    var that = this;
    app.func.req('teamTypes/listAll', {}, function (data) {
      that.initTeamType(data);
    });
  },

  getHireInfo: function () {
 
    var that = this;

   
    app.func.req('projectHires/get', { id: that.data.hireId }, function (data) {
      
      console.log(data)
      
      that.setData({
        hireInfo:data,
        hireTitle: data.project.name,
        hireContacts: data.contacts,
        hirePhone: data.phone,
        hireRegion: data.project.displayAddress,
        localType: data.project.displayAddress,

        workerType: data.teamNeeds[0] == null ? '' : data.teamNeeds[0].teamType.category.text + "/" + data.teamNeeds[0].teamType.title,
        hirePepoleNum: data.teamNeeds[0] == null ? 0 : data.teamNeeds[0].peopleNumber,
        hireSalary: data.salary,
        hireRequest:data.memo,
        districtStr: data.project.district.title,
        workerTypeId: data.teamNeeds[0] == null ? '' : data.teamNeeds[0].teamType.id
      });
    });
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this.getTeamType();
    this.setData({
      hireId: options.id
    });
    this.getHireInfo();
  },

  onPullDownRefresh: function () {
  
  }
})