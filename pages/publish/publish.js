//todo list 手机号码正确性验证
const app = getApp();

Page({
    /*mapTitle = {"土建"：["木工","瓦工","钢筋"]}
    mapId = {"土建"：["12","34","45"]}
    map = {"土建": "TUJIAN"}*/
  data: {
    toView: 'red',
    //index: 0,
    mapTitle:{},
    mapId: {},
    map:{},
    multiArray: [[], []],
    multiIndex: [0, 0],
    region: ['广东省', '深圳市', '福田区'],
    isSubmitAble : false,
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
    record1_1: [],        // 生成下来的省市区
    record2_2: [],
    record3_3: [],
    record1:[],        // 生成下来的省市区
    record2: [],
    record3: [],


    generate1: [     // 保存的省市区
      '北京市',
      1
    ],
    generate2:[
      '北京市',
      1001
    ],
    generate3:[
       '东城区',
       10001 
    ],
    localRegion: ['广东省', '深圳市', '福田区'],
    localArray: [[], [], []],
    localIndex: '',
    localType: "",
    pro:[],
    city: [],
    qu: [],
    proed: 0,
    cityed: 0,
    qued: 0,
    districtId: 0,
    isInCode: 1,
    isCodeTime: 60,
    formId: ""
  },
  formSubmit: function(e){
    this.setData({
      formId: e.detail.formId
    });
    this.doSubmit();
  },
  scroll1_1: function(){
    // console.log(e)
  },
  distanceTop: function(){
  },
  // 省份滚动
  scroll1: function(e){
    // 判断第几个省份
    let region = getApp().globalData.Address
    let yu = parseInt(parseInt(e.detail.scrollTop) % 30)   // 余数
    let bei = parseInt(parseInt(e.detail.scrollTop) / 30)   //  倍数
    // 如果余数大于15，就算下一个
    if(yu>=15){
      bei = bei + 1
    }

    let arr = [region[bei].province,region[bei].id]
    let arr2 = [region[bei].citys[0].city, region[bei].citys[0].id]
    let arr3 = [region[bei].citys[0].districts[0].district, region[bei].citys[0].districts[0].id]
    // 重置所有的省市区
    this.setData({
      generate1: arr,
      generate2: arr2,
      generate3: arr3,
      bei: bei,
      bei2: 0,
      bei3: 0,
    })



    // 赋值市和区
    let that =this
    this.setData({
      record2: region[bei].citys,
      record3: region[bei].citys[0].districts,
    })
  },
  // 市级滚动
  scroll2: function(e){
    // console.log(e)
    // let region = getApp().globalData.Address
    // let yu = parseInt(parseInt(e.detail.scrollTop) % 30)   // 余数
    // let bei = parseInt(parseInt(e.detail.scrollTop) / 30)   //  倍数
    // //判断第几个市级
    // if (yu >= 15) {
    //   bei = bei + 1
    // }
    // let arr = [region[this.data.bei].citys[bei].city, region[this.data.bei].citys[bei].id]
    // let arr2 = [region[this.data.bei].citys[bei].districts[0].district, region[this.data.bei].citys[bei].districts[0].id]
    // this.setData({
    //   generate2: arr,
    //   generate3: arr2,
    //   bei2: bei,
    //   bei3: 0
    // })


    // // 赋值区
    this.setData({
      record3: region[bei].citys[0].districts,
    })
  },
  // 区级滚动
  scroll3:function(){
    let region = getApp().globalData.Address
    let yu = parseInt(parseInt(e.detail.scrollTop) % 30)   // 余数
    let bei = parseInt(parseInt(e.detail.scrollTop) / 30)   //  倍数
    //判断第几个市级
    if (yu >= 15) {
      bei = bei + 1
    }
    let arr = [region[this.data.bei].citys[this.data.bei2].districts[bei].district, region[this.data.bei].citys[this.data.bei2].districts[bei].id]
    this.setData({
      generate2: arr,
      generate3: arr2,
      bei3: bei
    })
  },







  isEmpty: function (str) {
    if (str == null || str == "") {
      return true;
    } else {
      return false;
    }
  },
  /** 验证输入值 */
  doVerifyValues : function(){
    var data = this.data;
    var isSubmitAble = false;
    var warnStr = "";
    var pan = 0
    if (this.isEmpty(data.hireTitle)){
      warnStr = "招工标题未填写~"; 
      pan++
    } else if (this.isEmpty(data.hireContacts)){
      warnStr = "联系人未填写~";
      pan++
    } else if (this.isEmpty(data.hirePhone)) {
      warnStr = "手机号未填写~";
      pan++
    } else if (this.isEmpty(data.hireCode)) {
      warnStr = "验证码未填写~";
      pan++
    } else if (this.isEmpty(data.districtId)) {
      warnStr = "地区未选择~";
      pan++
    } else {
      
    }
    if (pan===0){
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


    app.func.req('accounts/doShiming', {
      formId: that.data.formId,
      name: that.data.name,
      phone: that.data.phone,
      wxId: app.globalData.openId
    }, function (data) {
      console.log(data)
      if (data) {
        app.globalData.mPhone = that.data.phone;
      }
    });






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
      districtId: that.data.districtId,
    }, function (data) {
      if(data == true){
        wx.showToast({
          title: '发布成功',
          icon: 'success',
          duration: 1500,
          complete: function(){
              // wx.switchTab({
              wx.switchTab({
                url: '../index/index',
                complete: function(e){
                    console.log(e)
                }
              });
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
          // warnStr: "招工标题未填写~",

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
          hireCode: "",
          isInCode: 1,
          isCodeTime: 60
        });

      }else{
        wx.showModal({
          title: '提示',
          content: '发布失败:验证码错误',
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
    var isCodeFun = setInterval(()=>{
      var isCodeTime = that.data.isCodeTime -1
      that.setData({
        isCodeTime: isCodeTime
      })
    },1000)
    app.func.req('verifyCodes/sendVerifyCode', { userName : that.data.hirePhone}, function (data) {
      wx.showToast({
        title: '发送成功',
      })
    that.setData({
      isInCode: 0   // 已经发送后要过1分钟才能在发送
    })
      that.data.isInCode  = 0 
       setTimeout(()=>{
         that.setData({
           isInCode: 1,
           isCodeTime: 60 
         })
         clearInterval(isCodeFun)

       },60000)


       





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
    this.setData({
      region: e.detail.value,
      districtStr: e.detail.value[2],
      hireRegion: e.detail.value[0] + e.detail.value[1] + e.detail.value[2]
    });

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



  bindLocalChange: function(e){
    let region = getApp().globalData.Address
    this.setData({
      localType: region[this.data.proed].province + region[this.data.proed].citys[this.data.cityed].city + region[this.data.proed].citys[this.data.cityed].districts[this.data.qued].district,
      districtStr: region[this.data.proed].province + region[this.data.proed].citys[this.data.cityed].city + region[this.data.proed].citys[this.data.cityed].districts[this.data.qued].district,
      districtId: region[this.data.proed].citys[this.data.cityed].districts[this.data.qued].id
    })
    
    
    this.doVerifyValues()

    
  },






  bindPickerColumnChange: function(e){
      //  重新初始化
    let region = getApp().globalData.Address
    let pro = []
    let city = []
    let qu = []
    let that = this
    if (e.detail.column == 0){
      // 滚动第一栏  省级   重新初始化市级和区级
      if (region[e.detail.value].citys.length==1){
        city[0] = region[e.detail.value].citys[0].city
      }else{
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

    } else if (e.detail.column == 1){
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
    }else{
      that.setData({
        qued: e.detail.value
      })
      // 滚动第三栏 区级
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

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this.getTeamType();
   
    let region = getApp().globalData.Address
    let pro = []
    let city = [] 
    let qu  = []
    for (var i = 0; i < region.length; i++){
      pro.push(region[i].province)
    }
    for (var i = 0; i < region[0].citys.length; i++) {
      city.push(region[0].citys[i].city)
    }
    for (var i = 0; i < region[0].citys[0].districts.length; i++) {
      qu.push(region[0].citys[0].districts[i].district)
    }


    this.setData({
      localArray: [
        pro,
        city,
        qu
      ],
      pro: pro,
      city: city,
      qu: qu
    })


  },
  onPullDownRefresh: function () {
  
  }
})