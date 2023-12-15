
Page({
  data:{
    indicator_dots:true,
    indicator_color: "#ffffff",
    indicator_active_color:"#F8626E",
    autoplay: true,
    interval: 3000,
    circular: true,
  },
  onLoad: function () {

  },
  onShareAppMessage() {
    return {
      title: 'scroll-view',
      path: 'page/component/pages/scroll-view/scroll-view'
    }
  },
  onReady: function () {
    const arr = []
    for (let i = 0; i < 20; i++) arr.push(i)
    this.setData({
      arr
    })
  }
})