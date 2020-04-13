App({
//声明周期函数：后台存活两个小时
  onLaunch: function () {
    console.log('小程序初始化完成')
    //异步调用
    //console.log('小程序初始化完成了：onLaunch')
    //wx.request({
      //url: '',
   // }),
    //wx.getUserInfo({
      //数据拿到之后才回调
      //success: function(res){
        //console.log(res)
      //}
    //})
    setTimeout(function() {
      const err = new Error()

      throw err
    }, 3000)
  },
  onShow: function (options) {
    console.log('界面显示出来：show')
  },
  onHide: function () {
    console.log('界面被隐藏')
  },
  onError: function (msg) {
    console.log('小程序中发现一些错误')
  }
})
