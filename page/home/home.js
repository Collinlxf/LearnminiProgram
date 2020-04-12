Page({
  data: {
    name: 'Coderwhy',
    age: 18,
    students:[
      {id :110, name: 'kobe', age: 30},
      {id :111, name: 'james', age: 28},
      {id :112, name: 'curry', age: 25},
      {id :113, name: 'lxf', age: 20},
    ],
    counter: 0
  },
  handleBtnClick(){
    //错误做法界面不发生刷新
    //this.data.counter += 1
    //console.log(this.data.counter)

    // 2.this.setData
    this.setData({
      counter: this.data.counter + 1
    })
  },
  handleSubtraction(){
    //console.log('点击了-号')
    this.setData({
      counter: this.data.counter - 1
    })
  }
})


// 编程范式
// 1.命令式编程： 原生操作DOM
// 2. 声明式编程： Vue/React/Angular