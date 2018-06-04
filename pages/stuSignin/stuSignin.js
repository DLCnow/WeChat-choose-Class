// pages/stuSignin/stuSignin.js

var app = getApp();
Page({

  /**
   * 页面的初始数据
   */
  data: {
    showText: '签到',
    time: '',
    isSubmitAble: false,
    id: 1,
    course: [],
    userData: [],
    siginId: '',
    courseIdList: '',
    reCourse: ''
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    // 再通过setData更改Page()里面的data，动态更新页面的数据  
    let that = this
    var time = formatTime(new Date());
    that.setData({
      time: time
    });  
    setInterval(function(){
      var time = formatTime(new Date());
      that.setData({
        time: time
      });  
    },1000)



  // table 


    wx.request({
      url: app.globalData.rootDocment + '/users/getAllCourse',
      data: {},
      method: 'get',
      header: { 'Content-Type': 'application/x-www-form-urlencoded' },
      success: function (res) {
        that.setData({
          course: res.data
        })

        let courseList = res.data
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
            let resList = courseList
           
            for (var j = 0; j < resList.length; j++) {
              resList[j].flag = ''
            }
          

            for (var j = 0; j < resList.length; j++) {
              for (var i = 0; i < arr.length; i++) {
                if (parseInt(arr[i]) == parseInt(resList[j].id)) {
                  resList[j].flag = '已选'
                } 
              }
            }

        

            let arrL = []
            for (var i = 0; i < resList.length; i++) {
              if (resList[i].flag === '已选'){
                arrL.push(resList[i])
              }
            }

            for (var j = 0; j < resList.length; j++) {
              resList[j].sigin = ''
            }



            that.setData({
              course: arrL
            })


            // 查查有没有这个签到
            let times = formatDate(new Date) // 获取今天的时间
            wx.request({
              url: app.globalData.rootDocment + '/users/getIdSignin',
              data: {
                id: options.id,
                time: times
              },
              method: 'get',
              header: { 'Content-Type': 'application/x-www-form-urlencoded' },
              success: function (res) {

                console.log(res)
                if (res.data.length>0){
                  let arr = res.data[0].course.split(',')
                  let resList = that.data.course
                  for (var j = 0; j < resList.length; j++) {
                    resList[j].sigin = ''
                  }


                  for (var j = 0; j < resList.length; j++) {
                    for (var i = 0; i < arr.length; i++) {
                      if (parseInt(arr[i]) == parseInt(resList[j].id)) {
                        resList[j].sigin = '已签到'
                      }
                    }
                  }
                  console.log(resList)



                  that.setData({
                    course: resList,
                    siginId: res.data[0].id,
                    courseIdList: res.data[0].course
                  })
                }
              





              }
            })
          }
        })
      }
    })
  // table 




  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  siginUp:  function(){

    let that = this
    if (this.data.isSubmitAble){
      // 签到操作
      let stu_name = wx.getStorageSync('username') ? wx.getStorageSync('username') : app.globalData.userInfo.nickName
      let sign  = 1
      let time = formatDate(new Date) + ' ' + formatTime(new Date())
      let stu_id = this.data.id
      console.log({
        stu_name: stu_name,
        sign: sign,
        time: time,
        stu_id: stu_id
      })
      wx.request({
        url: app.globalData.rootDocment + '/users/insertSignin',
        data: {
          stu_name: stu_name,
          sign: sign,
          time: time,
          stu_id: stu_id
        },
        method: 'get',
        header: { 'Content-Type': 'application/x-www-form-urlencoded' },
        success: function (res) {
            console.log(res)


            that.setData({
              showText: '已签到',
              isSubmitAble: !that.data.isSubmitAble
            })
            wx.showLoading({
              title: '签到成功!',
            })


            setTimeout(function () {
              wx.hideLoading()
            }, 1000)
        }
      })
    }else{

      wx.showLoading({
        title: '已签到!',
      })

      setTimeout(function () {
        wx.hideLoading()
      },1000)
    }
  },

  updateTap: function(e){
    // 改变签到状态

    let that = this
    let id = e.currentTarget.dataset.id
    let sigin = e.currentTarget.dataset.sigin
    let siginId = that.data.siginId  // 当前用户的签到课程id
    let courseIdList = that.data.courseIdList// 当前用户的签到情况
   



    if (e.currentTarget.dataset.sigin=='已签到'){


      wx.showLoading({
        title: '无法重复签到!',
      })


      setTimeout(function () {
        wx.hideLoading()
      }, 1000)



    }else{

      courseIdList = courseIdList + that.data.reCourse + (courseIdList.length == 0 ? id : (',' + id))

      console.log(courseIdList)


      // wx.request({
      //   url: app.globalData.rootDocment + '/users/updateSignin',
      //   data: {
      //     id: siginId,
      //     course: courseIdList
      //   },
      //   method: 'get',
      //   header: { 'Content-Type': 'application/x-www-form-urlencoded' },
      //   success: function (res) {
          let times = formatDate(new Date) // 获取今天的时间




          wx.request({
            url: app.globalData.rootDocment + '/users/getIdSignin',
            data: {
              id: wx.getStorageSync('userid'),
              time: times
            },
            method: 'get',
            header: { 'Content-Type': 'application/x-www-form-urlencoded' },
            success: function (res) {

            

              console.log(res.data.length)
              if (res.data.length>0){
                 // 需要修改
                console.log('需要修改')

                  wx.request({
                      url: app.globalData.rootDocment + '/users/updateSignin',
                      data: {
                        id: siginId,
                        course: courseIdList
                      },
                      method: 'get',
                      header: { 'Content-Type': 'application/x-www-form-urlencoded' },
                      success: function (res) {
                        let times = formatDate(new Date) // 获取今天的时间


                        wx.request({
                          url: app.globalData.rootDocment + '/users/getIdSignin',
                          data: {
                            id: wx.getStorageSync('userid'),
                            time: times
                          },
                          method: 'get',
                          header: { 'Content-Type': 'application/x-www-form-urlencoded' },
                          success: function (res) {




                                let arr = res.data[0].course.split(',')
                                            let resList = that.data.course
                                            for (var j = 0; j < resList.length; j++) {
                                              resList[j].sigin = ''
                                            }
                                            for (var j = 0; j < resList.length; j++) {
                                              for (var i = 0; i < arr.length; i++) {
                                                if (parseInt(arr[i]) == parseInt(resList[j].id)) {
                                                  resList[j].sigin = '已签到'
                                                }
                                              }
                                            }
                                            that.setData({
                                              course: resList,
                                              reCourse: res.data[0].course
                                            })



                          }
                        })
                  

                      }
                  })


              }else{

                console.log('需要添加')

                let stu_name = wx.getStorageSync('username') ? wx.getStorageSync('username') : app.globalData.userInfo.nickName
                let sign = 1
                let time = formatDate(new Date) + ' ' + formatTime(new Date())
                let stu_id = wx.getStorageSync('userid')
                console.log({
                  stu_name: stu_name,
                  sign: sign,
                  time: time,
                  stu_id: stu_id
                })
                wx.request({
                  url: app.globalData.rootDocment + '/users/insertSignin',
                  data: {
                    stu_name: stu_name,
                    sign: sign,
                    time: time,
                    stu_id: stu_id,
                    course: id
                  },
                  method: 'get',
                  header: { 'Content-Type': 'application/x-www-form-urlencoded' },
                  success: function (res) {

                    wx.request({
                      url: app.globalData.rootDocment + '/users/getIdSignin',
                      data: {
                        id: wx.getStorageSync('userid'),
                        time: times
                      },
                      method: 'get',
                      header: { 'Content-Type': 'application/x-www-form-urlencoded' },
                      success: function (res) {

                            let arr = res.data[0].course.split(',')
                                      let resList = that.data.course
                                      for (var j = 0; j < resList.length; j++) {
                                        resList[j].sigin = ''
                                      }
                                      for (var j = 0; j < resList.length; j++) {
                                        for (var i = 0; i < arr.length; i++) {
                                          if (parseInt(arr[i]) == parseInt(resList[j].id)) {
                                            resList[j].sigin = '已签到'
                                          }
                                        }
                                      }
                                      that.setData({
                                        course: resList,
                                        reCourse: res.data[0].course
                                      })

                      }
                      
                      
                      
                      })

                  }
                })



                // 需要插入新的签到记录
              }
              // let arr = res.data[0].course.split(',')
              // let resList = that.data.course
              // for (var j = 0; j < resList.length; j++) {
              //   resList[j].sigin = ''
              // }
              // for (var j = 0; j < resList.length; j++) {
              //   for (var i = 0; i < arr.length; i++) {
              //     if (parseInt(arr[i]) == parseInt(resList[j].id)) {
              //       resList[j].sigin = '已签到'
              //     }
              //   }
              // }
              // that.setData({
              //   course: resList,
              //   reCourse: res.data[0].course
              // })


            }
          })

        }
      // })










  },
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




function formatTime(date) {
  var year = date.getFullYear()
  var month = date.getMonth() + 1
  var day = date.getDate()

  var hour = date.getHours()
  var minute = date.getMinutes()
  var second = date.getSeconds()

  return [hour, minute, second].map(formatNumber).join(':')
}


function formatDate(date) {
  var year = date.getFullYear()
  var month = date.getMonth() + 1
  var day = date.getDate()

  var hour = date.getHours()
  var minute = date.getMinutes()
  var second = date.getSeconds()

  return [year, month, day].map(formatNumber).join('-');
}
function formatNumber(n) {
  n = n.toString()
  return n[1] ? n : '0' + n
}  