const app = getApp()
const order = ['demo1', 'demo2', 'demo3', 'demo4', 'demo5', 'demo6']
Page({
  data:{
    indicator_dots:true,
    indicator_color: "#ffffff",
    indicator_active_color:"#F8626E",
    autoplay: true,
    interval: 3000,
    circular: true,

    messageyi: "asfkjfoiq",
    messageer: "efduyaWSGHEFU",
    messagesan: "efduyaWSjihuyEFU",

    linkyi:"http://s59avscau.hd-bkt.clouddn.com/logo.png",
    linker:"http://s59avscau.hd-bkt.clouddn.com/telefon.png",
    linksan:"http://s59avscau.hd-bkt.clouddn.com/logo.png"
  },

  
  onLoad: function () {

  },
  onShareAppMessage: function(){
    const promise = new Promise(resolve => {
        setTimeout(() => {
        resolve({
            title: '逸勉财务App'
            })
            }, 2000)
        })
        return {
            title: '逸勉财务App',
            path: 'pages/index/index',
            promise 
        }
    },
    onShareTimeline() {
        const promise = new Promise(resolve => {
        setTimeout(() => {
            resolve({
            title: '逸勉财务App'
            })
        }, 2000)
        })
        return {
        title: '逸勉财务App',
        imageUrl:'http://s59avscau.hd-bkt.clouddn.com/comservice.jpg' 
        }
    },
  onReady: function () {
    const arr = []
    for (let i = 0; i < 20; i++) arr.push(i)
    this.setData({
      arr
    })
  },
  anotherPage1(){
    wx.navigateTo({
      url: '/pages/anotherPage1/anotherPage1',
    })
  },
  allArticles(){
    wx.navigateTo({
      url: '/pages/articles/articles',
    })
  },
  teil1: function(){
    this.setData({
      messageyi: "小规模纳税人",
      linkyi:"http://s59avscau.hd-bkt.clouddn.com/mama.png"
    });
    this.setData({
      messageer: "小规模纳税人",
      linker:"http://s59avscau.hd-bkt.clouddn.com/mama.png"
    });
    this.setData({
      messagesan: "小规模纳税人",
      linksan:"http://s59avscau.hd-bkt.clouddn.com/mama.png"
    });
  },
  teil2: function(){
    this.setData({
      messageyi: "小规模",
      linkyi:"http://s59avscau.hd-bkt.clouddn.com/mama.png"
    });
    this.setData({
      messageer: "小规模",
      linker:"http://s59avscau.hd-bkt.clouddn.com/mama.png"
    });
    this.setData({
      messagesan: "小规模",
      linksan:"http://s59avscau.hd-bkt.clouddn.com/mama.png"
    });
  },
  teil3: function(){
    this.setData({
      messageyi: "纳税人",
      linkyi:"http://s59avscau.hd-bkt.clouddn.com/mama.png"
    });
    this.setData({
      messageer: "纳税人",
      linker:"http://s59avscau.hd-bkt.clouddn.com/mama.png"
    });
    this.setData({
      messagesan: "纳税人",
      linksan:"http://s59avscau.hd-bkt.clouddn.com/mama.png"
    });
  },
  teil4: function(){
    this.setData({
      messageyi: "小",
      linkyi:"http://s59avscau.hd-bkt.clouddn.com/mama.png"
    });
    this.setData({
      messageer: "小",
      linker:"http://s59avscau.hd-bkt.clouddn.com/mama.png"
    });
    this.setData({
      messagesan: "小",
      linksan:"http://s59avscau.hd-bkt.clouddn.com/mama.png"
    });
  },
})
