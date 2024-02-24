Page({
  clickMe: function() {
    this.setData({ msg: "Hello World" })
  },
  shareFriends: function(){
    wx.showShareMenu({
        withShareTicket: true
    })
  },
  teilen: function(){
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
  onShareAppMessage: function({from, target}){
        console.log(from);
        console.log(target);
        if (from == 'button' && target.id == 'share1'){
          return {
            title: '逸勉财务App',
            path: 'pages/anotherPage1/anotherPage1',
            imageUrl:'https://7969-yimiancaiwu-8gcpfdsgc4d1a9f2-1323094367.tcb.qcloud.la/comservice.jpg?sign=ee645bea6d44dc2ba005b99b98f2a0dd&t=1704635885' 
        }
        } else if (from == 'button' && target.id == 'share2'){
          return {
            title: '逸勉财务App',
            path: 'pages/anotherPage2/anotherPage2',
            imageUrl:'https://7969-yimiancaiwu-8gcpfdsgc4d1a9f2-1323094367.tcb.qcloud.la/comservice.jpg?sign=ee645bea6d44dc2ba005b99b98f2a0dd&t=1704635885' 
        } 
        }else if (from == 'button' && target.id == 'share3'){
          return {
            title: '逸勉财务App',
            path: 'pages/anotherPage3/anotherPage3',
            imageUrl:'https://7969-yimiancaiwu-8gcpfdsgc4d1a9f2-1323094367.tcb.qcloud.la/comservice.jpg?sign=ee645bea6d44dc2ba005b99b98f2a0dd&t=1704635885' 
        }
        } else if (from == 'button' && target.id == 'share4'){
          return {
            title: '逸勉财务App',
            path: 'pages/anotherPage4/anotherPage4',
            imageUrl:'https://7969-yimiancaiwu-8gcpfdsgc4d1a9f2-1323094367.tcb.qcloud.la/comservice.jpg?sign=ee645bea6d44dc2ba005b99b98f2a0dd&t=1704635885' 
        }
        } else if (from == 'button' && target.id == 'share5'){
          return {
            title: '逸勉财务App',
            path: 'pages/anotherPage5/anotherPage5',
            imageUrl:'https://7969-yimiancaiwu-8gcpfdsgc4d1a9f2-1323094367.tcb.qcloud.la/comservice.jpg?sign=ee645bea6d44dc2ba005b99b98f2a0dd&t=1704635885' 
        }
        } else if (from == 'button' && target.id == 'share6'){
          return {
            title: '逸勉财务App',
            path: 'pages/anotherPage6/anotherPage6',
            imageUrl:'https://7969-yimiancaiwu-8gcpfdsgc4d1a9f2-1323094367.tcb.qcloud.la/comservice.jpg?sign=ee645bea6d44dc2ba005b99b98f2a0dd&t=1704635885' 
        }
        } else {
          return {
            title: '逸勉财务App',
            path: 'pages/visitcard/visitcard',
            imageUrl:'https://7969-yimiancaiwu-8gcpfdsgc4d1a9f2-1323094367.tcb.qcloud.la/comservice.jpg?sign=ee645bea6d44dc2ba005b99b98f2a0dd&t=1704635885' 
        }
    }
    },
    onShareTimeline: function() {
        return {
          title: '逸勉财务App',
          path: 'pages/visitcard/visitcard',
          imageUrl:'https://7969-yimiancaiwu-8gcpfdsgc4d1a9f2-1323094367.tcb.qcloud.la/comservice.jpg?sign=ee645bea6d44dc2ba005b99b98f2a0dd&t=1704635885' 
        }
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