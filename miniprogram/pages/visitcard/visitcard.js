Page({
  clickMe: function() {
    this.setData({ msg: "Hello World" })
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
  },
  anotherPage1(){
    wx.navigateTo({
      url: '/pages/anotherPage1/anotherPage1',
    })
  },
  anotherPage2(){
    wx.navigateTo({
      url: '/pages/anotherPage2/anotherPage2',
    })
  },
  anotherPage3(){
    wx.navigateTo({
      url: '/pages/anotherPage3/anotherPage3',
    })
  },
  anotherPage4(){
    wx.navigateTo({
      url: '/pages/anotherPage4/anotherPage4',
    })
  },
  anotherPage5(){
    wx.navigateTo({
      url: '/pages/anotherPage5/anotherPage5',
    })
  },
  anotherPage6(){
    wx.navigateTo({
      url: '/pages/anotherPage6/anotherPage6',
    })
  }
})