var rootDocment = 'https://api.jianzhugang.com/';
// var rootDocment = 'http://14.29.128.31:9999/';
// var rootDocment = 'http://192.168.1.30:9999/'
//var rootDocment = 'http://192.168.1.13:9999/'
// var rootDocment = 'http://192.168.1.201:9999/'


function req(url, data, cb) {
  wx.request({
    url: rootDocment + url,
    data: data,
    method: 'post',
    header: { 'Content-Type': 'application/x-www-form-urlencoded' },
    success: function (res) {
      return typeof cb == "function" && cb(res.data)
    },
    fail: function () {
      return typeof cb == "function" && cb(false)
    }
  })
}

module.exports = {
  req: req,
  rootDocment: rootDocment
}  