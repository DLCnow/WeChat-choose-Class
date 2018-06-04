
const app = getApp();
// pages/smrz/smrz.js
Page({
    data: {
        name: "",
        phone: "",
        code: "",
        formId: "",
        hirePhone: ""
    },

    doSave: function(){
        var that = this;
        app.func.req('accounts/doShiming', {
            formId: that.data.formId,
            name: that.data.name,
            phone: that.data.phone,
            wxId: app.globalData.openId
        }, function (data) {
            console.log(data)
            if(data){
                app.globalData.mPhone = that.data.phone;
                console.log('返回保存的跳转为')
                wx.switchTab({
                    url: '/pages/wd/wd',
                })
            }
        });
    },

    formSubmit: function (e) {
        this.setData({
            formId: e.detail.formId
        });
        this.doSave();
    },

    isEmpty: function (str) {
        if (str == null || str == "") {
            return true;
        } else {
            return false;
        }
    },

    getVerifyCode: function(){
        var that = this;
        console.log(that.data.phone)
        if (this.isEmpty(that.data.phone)) {
            wx.showModal({
                title: '提示',
                content: "手机号码不能为空~",
                success: function (res) {
                }
            })
        }else{
            app.func.req('verifyCodes/sendVerifyCode', { userName: that.data.phone }, function (data) {
                console.log(data)
                wx.showToast({
                    title: '发送成功',
                })
            });
        }
    },

    bindCode: function(e){
        this.setData({
            code: e.detail.value
        });
    },

    bindName: function(e){
        this.setData({
            name: e.detail.value
        });
    },

    bindPhone: function(e){
        this.setData({
            phone: e.detail.value
        });
    },


    /**
     * 生命周期函数--监听页面加载
     */
    onLoad: function (options) {
        if(app.globalData.mPhone != null && app.globalData.mPhone != ''){
            this.setData({
                phone: app.globalData.mPhone
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