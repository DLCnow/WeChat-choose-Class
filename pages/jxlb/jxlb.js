const app = getApp()

// pages/jxlb/jxlb.js
Page({
  isMaskHidden: true,  //遮罩是否隐藏
  isShare: false,     //是否分享
  data: {
    page: {
      index: -1,
      size: 20,
      
      winWidth: 0,
      winHeight: 0,
      currentTab: 0, 
      duration: 100
    },
    currentTab: 0,
    queryWord: "",      //搜索关键字
    canLoadMore: true,  //是否有下一页
    hiddenLoading: false,

    areaNamesArray: [[], []],
    areaIdsArrayed: [[], []],
    areaIdsArray: [[], []],
    areaIdsArray2: [],
    areaIdsArraying: [[], []],
    areaIndex: [0, 0],
    areName: "全部地区",
    

    jxNamesArray: [[], []],
    jxIdsArrayed: [[], []],
    jxIdsArray: [[], []],
    jxIdsArray2: [],
    jxIdsArraying: [[], []],
    jxIndex: [0, 0],
    jxName: '机械地区',
 


    cityId: null,
    provinceId: null,
    machineries: [],
    height:1200,
    cityId: null,
    provinceId: null,

    name: "",
    typeArray: [[], []],
    typeIndex: [0, 0],
    typeId: '',
    mt: [],
    mtk: [],

    jxlNamesArray: [[], []],
    jxlIdsArray: [[], []],
    jxlIndex: [0, 0],
    jxlName: "全部机械",


    typeArray2: [[], []],
    typeIndex2: [0, 0],
    typeId2: '',
    mt2: [],
    mtk2: [],


    typeName: "机械分类",    //工种名称
    teams: [],
    shuoming: '',
    code: '',
    types: '',
    allMachineAsk: [],  // 机械分类总数据
    allArea: [],        // 地区分类总数据
    districtId: '', // 地区期筛选信息
    machineAskId: '', // 机械分类筛选信息 
    cateId: '', // 机械列表的机械分类选中 id
    


    allMachineAsk2: '',  // 机械分类总数据
    allArea2: [],        // 地区分类总数据
    districtId2: '', // 地区期筛选信息
    machineAskId2: '', // 机械分类筛选信息 
    cateId2: '', // 机械列表的机械分类选中 id




    // 提交验证信息
    isSubmitAble: false,
    warnStr: "型号规格未填写~",
    opacity: 0.5,    //设置透明度


    // 限定高度
    heighted: '',
    isInCode: 1,
    isCodeTime: 60
  },
  /** 验证输入值 */
  doVerifyValues: function () {
    var data = this.data;
    var isSubmitAble = false;
    var warnStr = "";
    if (this.isEmpty(data.machineShuoming)) {
      warnStr = "型号规格未填写 ~";
    } else if (this.isEmpty(data.jxlName)) {
      warnStr = "机械分类未填写~";
    } else if (this.isEmpty(data.machineAmount)) {
      warnStr = "数量未填写~";
    } else if (this.isEmpty(data.machinePrice)) {
      warnStr = "价格未填写~";
    } else if (this.isEmpty(data.jxName)) {
      warnStr = "机械地区未选择~";
    } else if (this.isEmpty(data.machineContacts)) {
      warnStr = "联系人未填写~";
    } else if (this.isEmpty(data.machineMoblie)) {
      warnStr = "联系电话未填写～";
    } 
    else if (this.isEmpty(data.code)) {
      warnStr = "验证码未填写";
    } else if (this.isEmpty(data.shuoming)) {
      warnStr = "招租说明未填写";
    } else if (this.isEmpty(data.streetAddress)){
      warnStr = "机械地区未填写";
    } else if (this.isEmpty(data.machineShuoming)) {
        warnStr = "机械分类未选择";
    }
    else {
      var reg = /^1[3|4|5|7|8][0-9]{9}$/; //验证规则

      var phoneNum = data.machineMoblie//手机号码

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
   * 点击验证码
  */
  isEmpty: function (str) {
    if (str == null || str == "") {
      return true;
    } else {
      return false;
    }
  },



 /** 
   * 获取验证码
  */
  getVerifyCode: function () {
    var that = this;
    if (this.isEmpty(that.data.machineMoblie)) {
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
    app.func.req('verifyCodes/sendVerifyCode', { userName: that.data.machineMoblie }, function (data) {
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









    // var that = this;




    // if (this.isEmpty(that.data.machineMoblie)) {
    //   wx.showModal({
    //     title: '提示',
    //     content: "手机号码不能为空~",
    //     success: function (res) {
    //     }
    //   })
    // } else {
    //   app.func.req('verifyCodes/sendVerifyCode', { userName: that.data.machineMoblie }, function (data) {
    //     wx.showToast({
    //       title: '发送成功',
    //     })
    //   });
    // }
  },


  /** 
  * 滑动切换tab 
  */
  bindChange: function (e) {
    var that = this;
    that.setData({
      currentTab: e.detail.current 
      });
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

    if (parseInt(this.data.currentTab) === 0) {
      // 班组列表
      this.setData({
        height: this.data.heighted
      })
    } else {
      //  我要入驻

      // 禁用上拉刷新
      wx.stopPullDownRefresh()
      let heighted = this.data.height
      this.setData({
        height: '1350',
        heighted: heighted
      })
    }
  },





   /** 
   * 上拉刷新
  */
  onPullDownRefresh: function () {
    wx.stopPullDownRefresh();
    this.setData({
      page: { index: -1, size: this.data.page.size },
      hiddenLoading: false
    });
    this.loadMoreMachineries();
  },


   /** 
   * 根据查询参数查询
  */
  doSearch: function () {
    this.setData({
      canLoadMore: true,
      hiddenLoading: false,
      page: { index: -1, size: this.data.page.size },
      machineries: []
    });
    this.loadMoreMachineries();
  },


   /** 
   * 根据长度和index查询
  */
  loadMoreMachineries: function () {
    if (this.data.canLoadMore) {
      this.setData({
        page: { index: ++this.data.page.index, size: this.data.page.size }
      });
      this.getMachineries();
    }
  },

    /** 
   * 访问接口数据
  */
  getMachineries: function () {
    var that = this;
    let types= ''


    app.func.req('machineAsks/getAppList',
     {
      page: that.data.page.index,
      size: that.data.page.size,
      districtId: that.data.districtId,
      cateId: that.data.cateId
    }, function (data) {
       console.log(data)
       let arr = []
       data.content.forEach(function(v,k,arr){
         v.type.text = v.type.text.replace(/-/g,'')
       })



      if (data) {
        that.setData({
          canLoadMore: !data.last,
          machineries: that.data.machineries.concat(data.content),
          hiddenLoading: true
        });
      }
      that.setData({
        height: (that.data.machineries.length+1) * 200+100,
        hiddenLoading: true
      });
    });
  },


  /** 
   * 机械分类导航二级元素改变
  */
  bindMechanicalColumnChange: function (e) {
    let result = this.data
    let that = this
    let fen = []   // 子级数组
    that.data.allMachineAsk[e.detail.value].titles.forEach((v, k) => {
      fen.push(v.title)
    })
    if (e.detail.column == 0) {
      this.setData({
        typeArray: [that.data.typeArray[0], fen],
        typeIndex: [e.detail.value, 0]
      })
    }
  },



  /** 
   *机械分类导航最后的改变
  */
  bindMechanicalChange: function (e) {
    // 判断选中
    var cateId = ''
    var typeName = ''
    if(e.detail.value[0]==0){
      // 只有第一分类
      cateId = this.data.allMachineAsk[e.detail.value].id
      typeName = this.data.allMachineAsk[e.detail.value].categroy
    }else{
      // 存在第二分类
      cateId = this.data.allMachineAsk[e.detail.value[0]].titles[e.detail.value[1]].id
      typeName = this.data.allMachineAsk[e.detail.value[0]].titles[e.detail.value[1]].title
    }
    
    this.setData({
      cateId: cateId,
      typeName: typeName
    })

    this.doSearch();
  },


/** 
   *表单机械分类
  */
  bindMechanicalFormChange: function (e) {
    var cateId = ''
    var typeName = ''
    if (e.detail.value[0] == 0) {
      // 只有第一分类
      cateId = this.data.allMachineAsk2[e.detail.value].id
      typeName = this.data.allMachineAsk2[e.detail.value].categroy
    } else {
      // 存在第二分类
      cateId = this.data.allMachineAsk2[e.detail.value[0]].titles[e.detail.value[1]].id
      typeName = this.data.allMachineAsk2[e.detail.value[0]].categroy +'/' +this.data.allMachineAsk2[e.detail.value[0]].titles[e.detail.value[1]].title
    }



    this.setData({
      cateId2: cateId,
      jxlName: typeName
    })

    this.doVerifyValues();
  },


  /** 
   * 机械列表地区筛选相关
  */
  getProvinces: function () {
    var that = this;
    var data = getApp().globalData.Address
    that.initProvince(data);
  },


  /** 
   *  获取机械入驻的地区信息
  */
  getJxProvinces: function(){
    var that = this;
    app.func.req('areas/getAllList', {}, function (data) {
      that.setData({
        allArea2: data
      })
      that.initJxProvince(data);
    });
  },

  /** 
   *  获取城市信息
  */
  getCitysByProvince: function (provinceId) {
    if (provinceId) {
      var that = this;
      that.initCity(provinceId);
    } else {
      this.setData({
        areaNamesArray: [this.data.areaNamesArray[0], ["全部"]],
        areaIdsArray: [this.data.areaIdsArray[0], [null]]
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



  /** 
   *  初始化机械列表地区信息
  */
  initProvince: function (data) {
    var provinces = ["全部地区"];
    var provinceEd = [null];
    var provinceIds = [];
    var provinceIdsed = [];

    for (var idx in data) {
      provinces.push(data[idx].province);
      provinceIds.push(data[idx].id-1)
      provinceEd[idx] = []
      provinceIdsed[idx] = []
      if (data[idx].citys.length > 0) {
        for (var ids in data[idx].citys) {
          provinceEd[idx].push(data[idx].citys[ids].city)
          provinceIdsed[idx].push(data[idx].citys[ids].id)
        }
      }
    }
    
    this.setData({
      areaNamesArray: [provinces, ["全部"]],
      areaIdsArrayed: provinceEd,  // 小分类名称
      areaIdsArray: provinceIds,
      areaIdsArraying: provinceIdsed,   //小分类id,
      areaIdsArray2: provinceIds
    })
  },


  /** 
   *  初始化机械招租地区信息
  */
  initJxProvince: function (data) {
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
    this.setData({
      jxNamesArray: [provinces, ["全部"]],
      jxIdsArrayed: provinceEd,  // 小分类名称
      jxIdsArray: provinceIds,
      jxIdsArraying: provinceIdsed,   //小分类id,
      jxIdsArray2: provinceIds
    })
  },

  initCity: function (id) {
    var cityIds = [null];
    this.setData({
      areaNamesArray: [this.data.areaNamesArray[0], this.data.areaIdsArrayed[id-1]],
      areaIdsArray: [this.data.areaIdsArray2[id - 1], this.data.areaIdsArraying[id - 1][0]]
    });

  },




  // 初始化机械地区的数据
  initCity3: function (id) {

    var cityIds = [null];
    this.setData({
      jxNamesArray: [this.data.jxNamesArray[0], this.data.jxIdsArrayed[id - 1]],
      jxIdsArray: [this.data.jxIdsArray2[id - 1], this.data.jxIdsArraying[id - 1][0]]
    });
  },


  bindMultiPickerAreaChange3: function(e){
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
      streetAddress: jxName
    });




    this.doVerifyValues();
  },

  /***
 *areaNamesArray : [["全部"] ,[]],
  areaIdsArray: [["全部"], []],
  areaIndex : [0, 0],
  areName: "全部",
  cityId: null,
  provinceId: null
 */
  bindMultiPickerAreaChange: function (e) {

    var cityId = null;
    var provinceId = null;
    var areaName = "全部地区";
    var that = this




    if (e.detail.value[0] > 0) {   //省份id>0  全部地区
      cityId = this.data.areaIdsArray[1]
      provinceId = this.data.areaIdsArray[0]
      areaName = this.data.areaNamesArray[1][e.detail.value[1]]
    }


    var pan = 0;
    if ((parseInt(e.detail.value[0]) - 1) < 0) {
      pan = 0
    } else {
      pan = that.data.allArea[parseInt(e.detail.value[0]) - 1].citys[parseInt(e.detail.value[1])].id
    }

    this.setData({
      areaIndex: e.detail.value,
      areName: areaName,
      cityId: cityId,
      provinceId: provinceId,
      districtId: pan
    });




    this.doSearch();
  },





  bindMultiPickerColumnAreaChange: function (e) {
    if (e.detail.column == 0) {
      this.getCitysByProvince(e.detail.value);
      this.setData({
        areaIndex: [e.detail.value, 0]
      });
    }
  },

  bindMultiPickerColumnAreaChange3: function (e) {
    if (e.detail.column == 0) {
      this.getCitysByProvince3(e.detail.value);
      this.setData({
        jxIndex: [e.detail.value, 0]
      });
    }
  },
  goMachineryDetail: function(e){
    wx.navigateTo({
      url: '../jxxq/jxxq?id=' + e.currentTarget.dataset.name
    })
  },

  /* 上拉 */
  onPullDownRefresh: function () {
    wx.stopPullDownRefresh();
    this.setData({
      page: { index: -1, size: this.data.page.size },
      hiddenLoading: false
    });
    this.loadMoreMachineries();
  },

  /*下拉加载更多*/
  onReachBottom: function () {
     if (parseInt(this.data.currentTab) === 0) {
      this.setData({
        hiddenLoading: false
      });
      this.loadMoreMachineries();
    }else{

    }
  },

  /**
   * 生命周期函数--监听页面加载
   */
  
  onLoad: function (options) {
    if (parseInt(options.type)=== 2){
      this.setData({
        currentTab: 1
      })
    }
    var that = this;

    // 列表导航
    this.getMechanicalMenu() // 初始化机械分类
    this.getProvinces();    // 初始化省份
    this.loadMoreMachineries();   // 加载列表数据








    // 机械入驻-表单数据初始化




    this.getMechanicalForm()   // 表单机械 
    this.getJxProvinces()       // 表单省份



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
     * 机械入驻-机械分类整体改变
     */
  bindMechanicalFormColumnChange: function (e) {
    let result = this.data
    let that = this
    let fen = []   // 子级数组
    that.data.allMachineAsk2[e.detail.value].titles.forEach((v, k) => {
      fen.push(v.title)
    })
    if (e.detail.column == 0) {
      this.setData({
        jxlNamesArray: [that.data.jxlNamesArray[0], fen],
        jxlIndex: [e.detail.value, 0]
      })
    }



  },


   /** 
     * 获取机械导航分类接口
     */
  getMechanicalMenu(){
    var that = this;
    app.func.req('dicts/getDictsCategory', {
      categoryKey: "MACHINE_CATEGORY"
    }, function (data) {
      var arr1 = []
      var allMachineAsk= []
      var titles = []
      data.forEach((v,k)=>{
        arr1.push(v.categroy)
        allMachineAsk.push(v)
      })
      data[0].titles.forEach((v,k)=>{
        titles.push(v.title)
      })
      that.setData({
        typeArray: [arr1, titles],
        allMachineAsk: allMachineAsk
      })
    });
  },


  
  /** 
     * 获取机械入驻表单的机械分类信息
     */
  getMechanicalForm() {
    var that = this;
    app.func.req('dicts/getDictsCategory', {
      categoryKey: "MACHINE_CATEGORY"
    }, function (data) {
      var arr1 = []
      var allMachineAsk2 = []
      var titles = []
      data.forEach((v, k) => {
        arr1.push(v.categroy)
        allMachineAsk2.push(v)
      })

      data[0].titles.forEach((v, k) => {
        titles.push(v.title)
      })
      that.setData({
        jxlNamesArray: [arr1, titles],
        allMachineAsk2: allMachineAsk2
      })





      // that.initMachineries2(data);
    });
  },








 /** 
     * 机械招租-机械分类数据初始化
     */
  initMachineries2: function (types) {
    var mapTitle = { "全部": [] };
    var mt = []
    var mtk = []
    var mtk2 = []
    var mapId = {};
    var map = {};
    var k = -1;
    var p = 0; //控制插入二维数组的状态
    for (let i = 0; i < types.length; i++) {
      if (types[i].id.length == 18) {
        //一级分类
        p = 0
        k++
        this.data.mtk2[k] = mt
        mt = []
      } else {
        mt[p] = types[i].text
        p++
      }
    }
    var k = 0;
    var p = 0; //控制插入二维数组的状态


    for (var idx in types) {
      if (types[idx].id.length == 18) {
        //一级分类
        map[types[idx].text] = types[idx].text
        p = 0
        k++
      } else {

      }
    }


    var catetory1 = ["全部"];
    for (var key in map) {
      catetory1.push(key);
    }


    this.data.mtk2[this.data.mtk2.length] = []


   
    this.setData({
      jxlTitles: mapTitle,
      jxlIds: mapId,
      jxlMap: map,
      jxlNamesArray: [catetory1, mapTitle[catetory1[0]]]
    });
  },

  initTeamType: function (types) {
    var mapTitle = { "全部": [] };
    var mapId = {};
    var map = {};

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
    var catetory1 = ["全部"];
    for (var key in map) {
      catetory1.push(key);
    }

    this.setData({
      typeTitles: mapTitle,
      typeIds: mapId,
      typeMap: map,
      typeArray: [catetory1, mapTitle[catetory1[0]]],
    });
  },



  getTeams: function () {
    var that = this;
    app.func.req('teams/query', {
      page: that.data.page.index,
      size: that.data.page.size,
      // status: 'TEAM_STATUS_NORMAL',
      queryWord: that.data.queryWord
    }, function (data) {
      if (data) {
        that.setData({
          canLoadMore: !data.last,
          machineries: that.data.teams.concat(data.content),
        });
      }
      that.setData({
        height: that.data.teams.length * 200,
        hiddenLoading: true
      });
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
      title: '建筑港机械列表',
      path: '/pages/jxlb/jxlb',
      success: function (res) {  // 转发成功
      },
      fail: function (res) { // 转发失败
      }
    }
  },





  /**
   * 机械发布表单值
   */
  //  机械分类
  bindTypesInput: function (e){
    this.setData({
      types: e.detail.value
    })
  },

  //机械名称
  bindTitleInput: function(e){
    this.setData({
      machineTitle: e.detail.value
    })
    this.doVerifyValues();
  },
  //型号规格
  bindShuomingInput: function (e) {
    this.setData({
      machineShuoming: e.detail.value
    })
    this.doVerifyValues();
  },
  //数量
  bindAmountInput: function (e) {
    this.setData({
      machineAmount: e.detail.value
    })

    this.doVerifyValues();
  },
  //价格
  bindPriceInput: function (e) {
    this.setData({
      machinePrice: e.detail.value
    })
    this.doVerifyValues();
  },
  //所在地
  bindStreetAddressInput: function (e) {
    this.setData({
      machineStreetAddress: e.detail.value
    })
  },
  //联系人
  bindContactsInput: function (e) {
    this.setData({
      machineContacts: e.detail.value
    })

    this.doVerifyValues();
  },
  //联系方式
  bindMoblieInput: function (e) {
    this.setData({
      machineMoblie: e.detail.value
    })

    this.doVerifyValues();
  },
  //备注
  bindMemoInput: function (e) {
    this.setData({
      machineMemo: e.detail.value
    })
  },
  // 招租说明
  bindShuoInput: function(e){
    this.setData({
      shuoming: e.detail.value
    })
    this.doVerifyValues();
  },

  //验证码
  bindCodeInput: function (e) {
    this.setData({
      code: e.detail.value
    })
    this.doVerifyValues();
  },
  /**
 * 跳转 机械详情
 */
  goMachineDetil: function (e) {
    wx.navigateTo({
      url: '../jxxq/jxxq?id=' + e.currentTarget.dataset.name
    })
  },
  
  /**
   * 机械发布求租--提交表单
   */
  machineSubmit: function(){
    var that = this;
    var types = ''



    console.log({
      title: that.data.machineTitle,
      xinghao: that.data.machineShuoming,
      types: that.data.cateId2,
      amount: that.data.machineAmount,
      price: that.data.machinePrice,
      streetAddress: that.data.streetAddress,
      contacts: that.data.machineContacts,
      mobile: that.data.machineMoblie,
      code: that.data.code,
      shuoming: that.data.shuoming,
      status: "ASK_LETING"
    })





    app.func.req('machineAsks/insertMachine',{
      title: that.data.machineTitle,
      xinghao: that.data.machineShuoming,
      types: that.data.cateId2,
      amount: that.data.machineAmount,
      price: that.data.machinePrice,
      streetAddress: that.data.streetAddress,
      contacts: that.data.machineContacts,
      mobile: that.data.machineMoblie,
      code: that.data.code,
      shuoming: that.data.shuoming,
      status: "ASK_LETING"
    },function(data){

      that.setData({
        isInCode: 1,
        isCodeTime: 60
      })
      if(data.status == 500 || data == 'fail'){
       wx.showToast({
          title: '验证码错误,入驻失败',
          icon: 'none',
          duration: 1000
        })
      }else{
       wx.showToast({
          title: '发布成功',
          icon: 'success',
          duration: 1000
        })
        setTimeout(()=>{
          wx.redirectTo({
            url: '../jxlb/jxlb',
          })
        },1000)
      }
    });
  }
})

