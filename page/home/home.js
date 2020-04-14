// page/home/home.js
// getApp()获取App（）产生的示例对象
// const app = getApp()

// const name = app.globalData.name;
// const age = app.globalData.age;

// 注册一个页面
// -------------2.页面也有生命周期-------------
Page({
  // 初始化数据
  data:{
    message: '哈哈哈'
  },
  // -------------1.监听页面的生命周期函数----------------
  onLoad(){
    console.log('onLoad')
  },
  onReady(){
    console.log('onReady')
  },
  onShow(){
    console.log('onShow')
  },
  onHide(){
    console.log('onHide')
  },
  onUnload(){
    console.log('onUnload')
  },

   // -------------3.监听wxml中的事件----------------
   handleGetUserInfo(event){
    console.log(event)
  },
  handleViewClick(){
    console.log('被点击了哈哈哈哈')
  }
})