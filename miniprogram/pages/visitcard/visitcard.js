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
  }
})