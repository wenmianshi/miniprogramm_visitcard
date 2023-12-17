
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
  aufsatz1() {
    wx.navigateTo({
      url: '/pages/aufsatz1/aufsatz1',
    })
  },
  aufsatz2() {
    wx.navigateTo({
      url: '/pages/aufsatz2/aufsatz2',
    })
  },
  aufsatz3() {
    wx.navigateTo({
      url: '/pages/aufsatz3/aufsatz3',
    })
  },
  aufsatz4() {
    wx.navigateTo({
      url: '/pages/aufsatz4/aufsatz4',
    })
  },
  aufsatz5() {
    wx.navigateTo({
      url: '/pages/aufsatz5/aufsatz5',
    })
  },
  aufsatz6() {
    wx.navigateTo({
      url: '/pages/aufsatz6/aufsatz6',
    })
  },
  aufsatz7() {
    wx.navigateTo({
      url: '/pages/aufsatz7/aufsatz7',
    })
  },
  aufsatz8() {
    wx.navigateTo({
      url: '/pages/aufsatz8/aufsatz8',
    })
  },
  aufsatz9() {
    wx.navigateTo({
      url: '/pages/aufsatz9/aufsatz9',
    })
  },
  aufsatz10() {
    wx.navigateTo({
      url: '/pages/aufsatz10/aufsatz10',
    })
  },
  aufsatz11() {
    wx.navigateTo({
      url: '/pages/aufsatz11/aufsatz11',
    })
  },
  aufsatz12() {
    wx.navigateTo({
      url: '/pages/aufsatz12/aufsatz12',
    })
  },
  aufsatz13() {
    wx.navigateTo({
      url: '/pages/aufsatz13/aufsatz13',
    })
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