// pages/teaSignin/teaSignin.js
var app = getApp();
Page({

  /**
   * 页面的初始数据
   */
  data: {
    course: [],
    userData: []
  },
  // 跳转 修改
  updateTap: function (e) {

    let flag = e.currentTarget.dataset.flag
    let id = e.currentTarget.dataset.id
    let that = this

    if (flag == '已选'){
      // 删除
      let courseL = that.data.userData.course.split(",")
      let courseText = ''
      let userData = that.data.userData
      console.log(courseL)
      courseL.forEach((v,k,arr)=>{
        if (parseInt(v) == parseInt(id)){
        }else{
          courseText = courseText + v + ','
        }
      })


      courseText = courseText.substring(0, courseText.length-1)
      userData.course = courseText
  


      wx.request({
        url: app.globalData.rootDocment + '/users/updateCourseStatus',
        data: {
          id: userData.id,
          course: userData.course
        },
        method: 'get',
        header: { 'Content-Type': 'application/x-www-form-urlencoded' },
        success: function (res) {
          console.log(res)
            wx.showLoading({
              title: '修改成功!',
            })

            setTimeout(function () {
              wx.hideLoading()
            }, 1000)
        }
      })



      // 构建学生数据（1条）
      that.setData({
        userData: userData
      })


  









      let arr = that.data.userData.course.split(',')
      let resList = that.data.course


      for (var j = 0; j < resList.length; j++) {
        resList[j].flag = ''
      }

      for (var i = 0; i < arr.length; i++) {
        for (var j = 0; j < resList.length; j++) {
          if (parseInt(arr[i]) == parseInt(resList[j].id)) {
            resList[j].flag = '已选'
          }
        }
      }
      that.setData({
        course: resList
      })
    }else{
      // 添加
      let courseL = that.data.userData.course.split(",")
      let courseText = ''
      let userData = that.data.userData


      console.log(userData.course )
     

      courseText = courseText + userData.course + (userData.course.length == 0 ?id: (','+ id) )

      // courseText = courseText.substring(0, courseText.length - 1)
      userData.course = courseText
      console.log(courseText)



      wx.request({
        url: app.globalData.rootDocment + '/users/updateCourseStatus',
        data: {
          id: userData.id,
          course: userData.course
        },
        method: 'get',
        header: { 'Content-Type': 'application/x-www-form-urlencoded' },
        success: function (res) {
          console.log(res)
          wx.showLoading({
            title: '修改成功!',
          })

          setTimeout(function () {
            wx.hideLoading()
          }, 1000)
        }
      })



      // 构建学生数据（1条）
      that.setData({
        userData: userData
      })












      let arr = that.data.userData.course.split(',')
      let resList = that.data.course


      for (var j = 0; j < resList.length; j++) {
        resList[j].flag = ''
      }

      for (var i = 0; i < arr.length; i++) {
        for (var j = 0; j < resList.length; j++) {
          if (parseInt(arr[i]) == parseInt(resList[j].id)) {
            resList[j].flag = '已选'
          }
        }
      }
      that.setData({
        course: resList
      })









     
    }
    // wx.navigateTo({
    //   url: '../teaUpdateC/teaUpdateC?id=' + e.currentTarget.dataset.id,
    // })
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    let that = this





    wx.request({
      url: app.globalData.rootDocment + '/users/getAllCourse',
      data: {},
      method: 'get',
      header: { 'Content-Type': 'application/x-www-form-urlencoded' },
      success: function (res) {
        that.setData({
          course: res.data
        })













        wx.request({
          url: app.globalData.rootDocment + '/users/getIdStu',
          data: {
            id: options.id
          },
          method: 'get',
          header: { 'Content-Type': 'application/x-www-form-urlencoded' },
          success: function (res) {
            that.setData({
              userData: res.data[0]
            })
            let arr = that.data.userData.course.split(',')
            let resList = that.data.course


            console.log(resList)
            for (var j = 0; j < resList.length; j++) {
                resList[j].flag = ''
            }
            for (var i = 0; i < arr.length;i++){
              for (var j = 0; j < resList.length;j++){
                if (parseInt(arr[i]) == parseInt(resList[j].id)) {
                  console.log('已选')
                  resList[j].flag = '已选'
                }
              }


            }
            that.setData({
              course: resList
            })
          }
        })
      }
    })






    
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
  onPullDownRefresh: function (e) {
    wx.showNavigationBarLoading() //在标题栏中显示加载
    let that = this
    wx.request({
      url: app.globalData.rootDocment + '/users/getAllCourse',
      data: {},
      method: 'get',
      header: { 'Content-Type': 'application/x-www-form-urlencoded' },
      success: function (res) {
        wx.hideNavigationBarLoading() //完成停止加载
        wx.stopPullDownRefresh() //停止下拉刷新
        that.setData({
          course: res.data
        })
      }
    })
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