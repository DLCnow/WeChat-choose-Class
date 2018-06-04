const app = getApp();

Page({
  data: {
    page: {
      index: -1,
      size: 20
    },
    queryWord: "",      //搜索关键字
    canLoadMore: true,  //是否有下一页
    hiddenLoading: false,

    typeTitles: {},
    typeIds: {},
    typeMap: {},
    typeName: "全部工种",    //工种名称
    typeId: null,       // 工种id
    typeArray: [[], []],
    typeIndex: [0, 0],

    areaNamesArray: [[], []],
    areaIdsArray: [[], []],
    areaIndex: [0, 0],
    areName: "全部地区",
    cityId: null,
    provinceId: null,

    teams: []
  },
/**
 * 跳转 班组详情
 */
  goTeamDetail: function(e){
    wx.navigateTo({
      url: '../bztdxq/bztdxq?id=' + e.currentTarget.dataset.name
    })

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
    this.setData({
      hiddenLoading: false
    });
    this.loadMoreTeams();
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
      typeArray: [catetory1, mapTitle[catetory1[0]]]
    });
  },

  bindMultiPickerColumnChange: function (e) {
    if (e.detail.column == 0) {
      this.setData({
        typeArray: [this.data.typeArray[0], this.data.typeTitles[this.data.typeArray[0][e.detail.value]]],
        typeIndex: [e.detail.value, 0]
      });
    }
  },

  bindMultiPickerChange: function (e) {
    var mWorkerType = "全部";
    var mWorkerTypeId = null;

    if (e.detail.value[0] > 0) {
      mWorkerType = this.data.typeArray[0][e.detail.value[0]]
        + "/"
        + this.data.typeTitles[this.data.typeArray[0][e.detail.value[0]]][e.detail.value[1]];
      mWorkerTypeId = this.data.typeIds[this.data.typeArray[0][e.detail.value[0]]][e.detail.value[1]];
    }
    this.setData({
      typeIndex: e.detail.value,
      typeName: mWorkerType,
      typeId: mWorkerTypeId
    });
    this.doSearch();
  },

  getTeamType: function () {
    var that = this;
    app.func.req('teamTypes/getTeamTypesForHire', {}, function (data) {
      that.initTeamType(data);
    });
  },

  bindSearchStr: function (e) {
    this.setData({
      queryWord: e.detail.value
    });
  },

  doSearch: function () {
    this.setData({
      canLoadMore: true,
      hiddenLoading: false,
      page: { index: -1, size: this.data.page.size },
      teams: []
    });
    this.loadMoreTeams();
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
        hiddenLoading: true
      });
    });
  },

  onShareAppMessage: function (ops) {
    var that = this;
    return {
      title: '建筑港招工信息',
      path: '/pages/tcbz/tcbz',
      success: function (res) {  // 转发成功
        
      },
      fail: function (res) { // 转发失败
      }
    }
  },

  /***地区筛选相关----start---*/
  getProvinces: function () {
    var that = this;
    app.func.req('areas/allProvince', {}, function (data) {
      that.initProvince(data);
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

  bindMultiPickerColumnAreaChange: function (e) {
    if (e.detail.column == 0) {
      this.getCitysByProvince(this.data.areaIdsArray[0][e.detail.value]);
      this.setData({
        areaIndex: [e.detail.value, 0]
      });
    }
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this.loadMoreTeams();
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