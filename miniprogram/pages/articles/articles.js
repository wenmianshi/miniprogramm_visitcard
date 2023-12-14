
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
  shareFriends: function(){
    wx.showShareMenu({
        withShareTicket: true
    })
  },
  share: function(){
    var that = this
    wx.showModal({
        content:'分享给好友',
        success: function(res){
            if(res.confirm){
                console.log('确定分享')
                that.shareFriends();
            }
            else{
                console.log('取消分享')
            }
        }
    })
  }
})