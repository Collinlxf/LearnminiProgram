// page/wxml/wxml.js
Page({
  data:{
    message:'你好小程序',
    firstname: 'kobe',
    lastname: 'bryant',
    age: 12,
    nowTime: new Date().toLocaleString(),
    isActive: false,
    isShow: true,
    score: 45
  },

  onLoad(){
    setInterval(() =>{
      this.setData({
        nowTime: new Date().toLocaleString()
      })
    }, 1000)
  },
  handleSwitchColor(){
   this.setData({
     isActive: !this.data.isActive
   })
  },

  handleSwitchShow(){
    this.setData({
      isShow: !this.data.isShow
    })
  },

  handleIncrement(){
    this.setData({
      score: this.data.score + 6
    })
  }

})

