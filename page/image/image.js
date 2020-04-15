Page({
  data:{
    imagePath: ''
  },
  handleChooseAlbum(){
    //系统API，让用户在相册中选择图片
    wx.chooseImage({
      complete: (res) => {
        // 1.取出路径
        const path = res.tempFilePaths[0]
        // 2.设置imagePath
        this.setData({
          imagePath: path
        })
      },
    })
  }
})