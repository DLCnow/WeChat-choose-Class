const app = getApp();
Page({
  data: {
    isMaskHidden: true,  //遮罩是否隐藏
    isShare: false,     //是否分享
    opacity: 0.5,    //设置透明度
    page: {
      index: -1,
      size: 20,
      winWidth: 0,
      winHeight: 0,
      // tab切换  
      currentTab: 0,  
      duration: 100
    },
    currentTab: 0,
    queryWord: "",      //搜索关键字
    canLoadMore: true,  //是否有下一页
    hiddenLoading: false,

    typeTitles: {},
    typeIds: {},
    typeName: "全部工种",    //工种名称

    typeId: null,       // 工种id
    typeArray: [[], []],
    typeArrayId: [[], []],
    allTypeArray: [],   // 全部工种信息
    typeResId: [],
    typeResArr: '',    //  存储被选中的id,第二分类
    typeResArr2: '',   // 存储被选中的id，第一分类
    idArr: [],      // 第二级的工种信息
    // areaNamesArray: [[], []],
    // areaIdsArray: [[], []],
    // areaIndex: [0, 0],
    areName: "全部地区",
    cityId: null,
    provinceId: null,


    name: "",
    phone: "",
    verificationCode: "",
    password: "",
    confirmPsw: "",
    typeArray: [[], []],
    typeIndex: [0, 0],
    areaNamesArray: [[], []],
    areaIdsArray: [[], []],
    areaIndex: [0, 0],




    teams: [],
    height: 1200,
    mapTitle: {},
    mapId: {},
    map: {},
    multiTitles: {},
    multiArray: [[], []],
    multiIndex: [0, 0],
    region: ['广东省', '深圳市', '福田区'],
    isSubmitAble: false,
    warnStr: "班组姓名未填写~",

    hireSalary: "",
    workerType: "",
    hireTitle: "",
    hireContacts: "",
    //hireDeadline:"",
    hireRegion: "",

    districtStr: null,    //区
    workerTypeId: null,
    address: '',
    allAddress: '',

    





    jxNamesArray: [[], []],
    jxIdsArrayed: [[], []],
    jxIdsArray: [[], []],
    jxIdsArray2: [],
    jxIdsArraying: [[], []],
    jxIndex: [0, 0],
    jxName: '班组地区',

    heighted: '',
    isInCode: 1,
    isCodeTime: 60,
    formId: ''
  },
  // 提交数据
  formSubmit: function(e){
    this.setData({
      formId: e.detail.formId
    });
    this.doSave();
  },
  // 初始化机械列表地区信息
  initProvince2: function (data) {
    var provinces = ["全部地区"];
    var provinceEd = [null];
    var provinceIds = [];
    var provinceIdsed = [];

    for (var idx in data) {
      provinces.push(data[idx].province);
      provinceIds.push(data[idx].id - 1)
      provinceEd[idx] = []
      provinceIdsed[idx] = []
      if (data[idx].citys.length > 0) {
        for (var ids in data[idx].citys) {
          provinceEd[idx].push(data[idx].citys[ids].city)
          provinceIdsed[idx].push(data[idx].citys[ids].id)
        }
      }
    }

    // provinceIds.push(data[idx].id);
    this.setData({
      jxNamesArray: [provinces, ["全部"]],
      jxIdsArrayed: provinceEd,  // 小分类名称
      jxIdsArray: provinceIds,
      jxIdsArraying: provinceIdsed,   //小分类id,
      jxIdsArray2: provinceIds
    })
  },
  /** 
    * 滑动切换tab 
    */
  bindChange: function (e) {
    var that = this;
    that.setData({ currentTab: e.detail.current });
    
  },
  /** 
   * 点击tab切换 
   */
  swichNav: function (e) {
    var that = this;

    if (this.data.currentTab === e.target.dataset.current) {
      return false;
    } else {
      that.setData({
        currentTab: e.target.dataset.current
      })
    } 

    if (parseInt(this.data.currentTab)===0 ){
      // 班组列表
      this.setData({
        height: this.data.heighted
      })
    }else{
      //  我要入驻

      // 禁用上拉刷新
      wx.stopPullDownRefresh()
      let heighted = this.data.height
      this.setData({
        height: '1200',
        heighted: heighted
      })
    }

  },
  /**
   * 跳转 班组详情
   */
  goTeamDetail: function (e) {
    wx.navigateTo({
      url: '../bztdxq/bztdxq?id=' + e.currentTarget.dataset.name
    })
  },

  /***地区筛选相关----start---*/
  getProvinces: function () {
    var that = this;
    app.func.req('areas/allProvince', {}, function (data) {
      that.initProvince(data);
    });
  },
  /***地区筛选相关----start---*/
  getProvinces2: function () {
    var that = this;
    app.func.req('areas/getAllList', {}, function (data) {
      that.setData({
        allArea: data
      })
      that.initProvince2(data);
    });
  },
  bindMultiPickerColumnAreaChange3: function (e) {
    if (e.detail.column == 0) {
      // this.getCitysByProvince3(this.data.jxIdsArray[0][e.detail.value]);
      this.getCitysByProvince3(e.detail.value);
      this.setData({
        jxIndex: [e.detail.value, 0]
      });
    }
  },

  getCitysByProvince3: function (provinceId) {
    if (provinceId) {
      var that = this;
      that.initCity3(provinceId);
    } else {
      this.setData({
        jxNamesArray: [this.data.jxNamesArray[0], ["全部"]],
        jxIdsArray: [this.data.jxIdsArray[0], [null]]
      });
    }

  },



  initCity3: function (id) {
    var cityIds = [null];


    this.setData({
      jxNamesArray: [this.data.jxNamesArray[0], this.data.jxIdsArrayed[id - 1]],
      jxIdsArray: [this.data.jxIdsArray2[id - 1], this.data.jxIdsArraying[id - 1][0]]
    });

    this.setData({
      jxNamesArray: [this.data.jxNamesArray[0], this.data.jxIdsArrayed[id - 1]],
      jxIdsArray: [this.data.jxIdsArray2[id - 1], this.data.jxIdsArraying[id - 1][0]]
    });

  },




  getCitysByProvince: function (provinceId) {
    if (provinceId) {
      var that = this;
      app.func.req('areas/getCitys', { provinceId: provinceId }, function (data) {
        that.initCity(data);
      });
    } else {
      this.setData({
        areaNamesArray: [this.data.areaNamesArray[0], ["全部"]],
        areaIdsArray: [this.data.areaIdsArray[0], [null]]
      });
    }
  },

  initProvince: function (data) {
    var provinces = ["全部地区"];
    var provinceIds = [null];
    for (var idx in data) {
      provinces.push(data[idx].title);
      provinceIds.push(data[idx].id);
    }
    this.setData({
      areaNamesArray: [provinces, ["全部"]],
      areaIdsArray: [provinceIds, [null]]
    })
  },
  initCity: function (data) {
    var citys = ["全部"];
    var cityIds = [null];
    if (data) {
      for (var idx in data) {
        citys.push(data[idx].title);
        cityIds.push(data[idx].id);
      }
    }
    this.setData({
      areaNamesArray: [this.data.areaNamesArray[0], citys],
      areaIdsArray: [this.data.areaIdsArray[0], cityIds]
    });
  },

  bindMultiPickerAreaChange3: function (e) {
    var cityId = null;
    var provinceId = null;
    var jxName = "全部地区";
    var that = this



    if (e.detail.value[0] > 0) {   //省份id>0  全部地区
      cityId = this.data.jxIdsArray[1]
      provinceId = this.data.jxIdsArray[0]
      jxName = this.data.jxNamesArray[0][e.detail.value[0]] + this.data.jxNamesArray[1][e.detail.value[1]]

    }




    this.setData({
      jxIndex: e.detail.value,
      jxName: jxName,
      cityId: cityId,
      provinceId: provinceId,
      hireRegion: e.detail.value[0] + e.detail.value[1],
      address: e.detail.value[0]
    });


    this.doVerifyValues()
  },



  bindMultiPickerColumnAreaChange2:function(){
    if (e.detail.column == 0) {
      this.getCitysByProvince2(this.data.areaIdsArray[0][e.detail.value]);
      this.setData({
        jxIndex: [e.detail.value, 0]
      });
    }
  },

  bindMultiPickerColumnAreaChange: function (e) {
    if (e.detail.column == 0) {
      this.getCitysByProvince(this.data.areaIdsArray[0][e.detail.value]);
      this.setData({
        areaIndex: [e.detail.value, 0]
      });
    }
  },


  bindMultiPickerAreaChange: function (e) {

    var cityId = null;
    var provinceId = null;
    var areaName = "全部地区";

    if (e.detail.value[0] > 0) {   //省份id>0  全部地区
      if (e.detail.value[1] > 0) {
        areaName = this.data.areaNamesArray[1][e.detail.value[1]];
        cityId = this.data.areaIdsArray[1][e.detail.value[1]];
      } else {
        areaName = this.data.areaNamesArray[0][e.detail.value[0]];
      }
      provinceId = this.data.areaIdsArray[0][e.detail.value[0]];
    }
    this.setData({
      areaIndex: e.detail.value,
      areName: areaName,
      cityId: cityId,
      provinceId: provinceId
    });
    this.doSearch();
  },

  bindMultiPickerChange2: function (e) {

    let that = this

    this.setData({
      typeName: that.data.allTypeArray[e.detail.value[0]].text + '/' + that.data.allTypeArray[e.detail.value[0]].titles[e.detail.value[1]].title
    })

    this.doSearch();
  },
  
  /* 上拉 */
  onPullDownRefresh: function () {
    wx.stopPullDownRefresh();
    this.setData({
      page: { index: -1, size: this.data.page.size },
      hiddenLoading: false
    });
    this.loadMoreTeams();
  },

  /*下拉加载更多*/
  onReachBottom: function () {
    if (parseInt(this.data.currentTab) === 0) {
      this.setData({
        hiddenLoading: false
      });
      this.loadMoreTeams();
    }else{
        console.log('不回加载')
    }
  },

  isEmpty: function (str) {
    if (str == null || str == "") {
      return true;
    } else {
      return false;
    }
  },

  loadMoreTeams: function () {
    if (this.data.canLoadMore) {
      this.setData({
        page: { index: ++this.data.page.index, size: this.data.page.size }
      });
      this.getTeams();
    }
  },

  getTeams: function () {
    var that = this;
 

    app.func.req('teams/query', {
      page: that.data.page.index,
      size: that.data.page.size,
      status: 'TEAM_STATUS_NORMAL',
      queryWord: that.data.queryWord
    }, function (data) {
      if (data) {
        that.setData({
          canLoadMore: !data.last,
          teams: that.data.teams.concat(data.content),
        });
      }
      that.setData({
        height: that.data.teams.length * 200,
        hiddenLoading: true
      });
    });
  },

  onShareAppMessage: function (ops) {
    var that = this;
    return {
      title: '建筑港招工信息',
      path: '/pages/index/index',
      success: function (res) {  // 转发成功
        that.setData({
          isShare: true,
          isMaskHidden: true
        });
      },
      fail: function (res) { // 转发失败
      }
    }
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this.loadMoreTeams();
    var that = this;  
    this.getNotes();
    var that = this;
    this.getTeamType();



    this.getProvinces();
    this.getProvinces2();
    this.getMultiArray()
    // this.doSearch();

    /** 
     * 获取系统信息 
     */
    wx.getSystemInfo({
      success: function (res) {
        that.setData({
          winWidth: res.windowWidth,
          winHeight: res.windowHeight
        });
      }
    });
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
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {
    var that = this;
    return {
      title: '建筑港招工信息',
      path: '/pages/bzlb/bzlb',
      success: function (res) {  // 转发成功
        that.setData({
          isShare: true,
          isMaskHidden: true
        });
      },
      fail: function (res) { // 转发失败
      }
    }
  },
  showMask: function () {
    this.setData({ isMaskHidden: false });
  },

  //消失
  hideMask: function () {
    this.setData({ isMaskHidden: true });
  
  },
  /**获取验证码 */
  getVerifyCode: function () {
    var that = this;
    if (this.isEmpty(that.data.phone)) {
      wx.showModal({
        title: '提示',
        content: "手机号码不能为空~",
        success: function (res) {
        }
      })
    }
    var isCodeFun = setInterval(() => {
      var isCodeTime = that.data.isCodeTime - 1
      that.setData({
        isCodeTime: isCodeTime
      })
    }, 1000)
    app.func.req('verifyCodes/sendVerifyCode', { userName: that.data.phone }, function (data) {
      wx.showToast({
        title: '发送成功',
      })
      that.setData({
        isInCode: 0   // 已经发送后要过1分钟才能在发送
      })
      that.data.isInCode = 0
      setTimeout(() => {
        that.setData({
          isInCode: 1,
          isCodeTime: 60
        })
        clearInterval(isCodeFun)

      }, 60000)








    });
  },
  /** 验证输入值 */
  doVerifyValues: function () {
    var data = this.data;
    var isSubmitAble = false;
    var warnStr = "";

    if (this.isEmpty(data.name)) {
      warnStr = "姓名未填写~";
    } else if (this.isEmpty(data.phone)) {
      warnStr = "手机号未填写~";
    } else if (this.isEmpty(data.verificationCode)) {
      warnStr = "验证码未填写~";
    } else if (this.isEmpty(data.workerTypeId)){
      warnStr = "工种未填写~";
    }  else if (this.isEmpty(data.password)) {
      warnStr = "密码未填写~";
    } else if (this.isEmpty(data.confirmPsw)) {
      warnStr = "确认密码未填写~";
    } else if (data.password != data.confirmPsw){
      warnStr = "两次输入密码不一致~";
    } else if (this.isEmpty(data.allAddress)){
      warnStr = "详细地址未填写";
    } else if ((data.address.length)>0) {
      warnStr = "地区未填写";
    }else {
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

  /**
   * 获取 公告信息
   */
  getNotes: function () {
    //function 里面已经不是this所以使用this.setData不起作用
    var that = this;
    app.func.req('notes/getNotes', {
      status: 1,
      typeId: 3
    }, function (data) {
      if (data) {
        that.setData({
          notes: data
        });
      }
    });
  },
  bindRegionChange: function (e) {
    this.setData({
      region: e.detail.value,
      districtStr: e.detail.value[2],
      hireRegion: e.detail.value[0] + e.detail.value[1] + e.detail.value[2]
    });
    this.doVerifyValues();
  },

  bindMultiPickerColumnChange: function (e) {
    let that =this
    let arr = []
    let idArr = []
    let idArr2  = []

   
  


    if (e.detail.column == 0) {
      for (var i = 0; i < that.data.allTypeArray[e.detail.value].titles.length; i++) {
        arr.push(that.data.allTypeArray[e.detail.value].titles[i].title)
        idArr.push(that.data.allTypeArray[e.detail.value].titles[i].id)
      }
  
      this.setData({
        typeArray: [that.data.typeArray[0],arr ],
        typeIndex: [e.detail.value, 0],
        idArr: idArr
      });
    }
    for (var i = 0; i < that.data.allTypeArray.length; i++) {
      idArr2.push(that.data.allTypeArray[i].id)
    }
    this.setData({
      typeResArr2: idArr2[e.detail.column],
      typeResArr: this.data.idArr[e.detail.value]
    })
  

    
    // console.log(this.data.typeResArr)

  },
  bindMultiPickerColumnChange2: function (e) {


    if (e.detail.column == 0) {
      this.setData({
        multiArray: [this.data.multiArray[0], this.data.multiTitles[this.data.multiArray[0][e.detail.value]]],
        multiIndex: [e.detail.value, 0]
      });
    }





  },

  bindMultiPickerChange: function (e) {


    var mWorkerType = this.data.multiArray[0][e.detail.value[0]]
      + "/"
      + this.data.multiArray[1][e.detail.value[1]];



    var mWorkerTypeId = this.data.mapId[this.data.multiArray[0][e.detail.value[0]]][e.detail.value[1]]



    this.setData({
      multiIndex: e.detail.value,
      workerType: mWorkerType,
      workerTypeId: mWorkerTypeId
    });




    this.doVerifyValues();
  },

  initMultiArray: function (types) {
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
      multiTitles: mapTitle,
      mapId: mapId,
      map: map,
      multiArray: [catetory1, mapTitle[catetory1[0]]]
    });
  },

  initTeamType: function (types) {
    let typeArray = this.data.typeArray
    let typeArrayId = this.data.typeArrayId
    let type1 = []
    let type2 = []
    let typeId1= []
    let typeId2 = []
    for (var i = 0; i < types.length; i++){
      type1.push(types[i].text)
      typeId1.push(types[i].id)
    }
    for (var i = 0; i < types[0].titles.length;i++) {
      type2.push(types[0].titles[i].title)
      typeId2.push(types[0].titles[i].id)
    }
    this.setData({
      typeArray: [type1, type2],
      typeArrayId: [typeId1, typeId2],
      allTypeArray: types
    })
  },


  // 班组列表全部工种
  getTeamType: function () {
    var that = this;
    app.func.req('teamTypes/getAllList', {}, function (data) {
      that.initTeamType(data);
    });
  },

  // 我要入驻的工种获取
  getMultiArray: function () {
    var that = this;
    app.func.req('teamTypes/listAll', {}, function (data) {
      that.initMultiArray(data);
    });
  },


  doSearch: function () {
    this.setData({
      canLoadMore: true,
      hiddenLoading: false,
      page: { index: -1, size: this.data.page.size },
      hires: [],
      teams: []
    });
    this.loadMoreHires();
  },


  loadMoreHires: function () {
    if (this.data.canLoadMore) {
      this.setData({
        page: { index: ++this.data.page.index, size: this.data.page.size }
      });
      this.getHires();
    }
  },

  getHires: function () {
    var that = this;

    // app.func.req('projectHires/query', {
    app.func.req('teams/query',{  
      page: that.data.page.index,
      size: that.data.page.size,
      // status: 'AUDITED',
      status: 'TEAM_STATUS_NORMAL',
      queryWord: that.data.queryWord,
      // typeId: that.data.typeId ? that.data.typeId : '',
      typeId: that.data.typeResArr ? that.data.typeResArr : '',
      category: that.data.typeResArr2 ? that.data.typeResArr2 : '',
      provinceId: that.data.provinceId ? that.data.provinceId : '',
      cityId: that.data.cityId ? that.data.cityId : '',
    }, function (data) {
      if (data) {
        that.setData({
          canLoadMore: !data.last,
          teams: that.data.teams.concat(data.content),
        });
      }
      that.setData({
        hiddenLoading: true
      });
    });
  },


  doSave: function(){



    // 插入formId


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






    app.func.req('teams/miniAppSignUp', {
      code: that.data.verificationCode,
      userName: that.data.phone,
      password: that.data.password,
      title: that.data.name,
      // address: that.data.hireRegion,
      address: that.data.allAddress,
      teamTypeId: that.data.workerTypeId,
      district_id: that.data.address
    }, function (data) {

      that.setData({
        isInCode: 1,
        isCodeTime: 60
      })
      if (data.message && data.status != 200){
        wx.showModal({
          title: '提示',
          content: data.message,
          success: function (res) {
          }
        })
      }else{
        wx.showToast({
          title: '入驻成功',
          icon: 'success',
          duration: 1500,
          complete: function () {
            setTimeout(function () {
              wx.redirectTo({
                url: '../bzlb/bzlb'
              });
            }, 1500);
          }
        });
      }
    });
  },

  bindPhone: function (e) {
    this.setData({
      phone: e.detail.value
    });
    this.doVerifyValues();
  },


  bindAllAddress: function (e) {
    this.setData({
      allAddress: e.detail.value
    });
    this.doVerifyValues();
  },

  bindAddress: function (e) {
    this.setData({
      address: e.detail.value
    });
    this.doVerifyValues();
  },


  bindName: function(e){
    this.setData({
      name: e.detail.value
    });
    this.doVerifyValues();
  },

  bindCode: function(e){
    this.setData({
      verificationCode: e.detail.value
    });
    this.doVerifyValues();
  },
  bindPsw: function(e){
    this.setData({
      password: e.detail.value
    });
    this.doVerifyValues();
  },
  bindConfirmPsw: function (e) {
    this.setData({
      confirmPsw: e.detail.value
    });
    this.doVerifyValues();
  }
})