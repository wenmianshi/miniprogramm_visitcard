
Page({
  shareFriends6: function(){
      wx.showShareMenu({
          withShareTicket: true
      })
  },
  onShareAppMessage: function(){
        return {
            title: '逸勉财务王荣祥',
            path: 'pages/anotherPage6/anotherPage6',
            imageUrl:'https://7969-yimiancaiwu-8gcpfdsgc4d1a9f2-1323094367.tcb.qcloud.la/comservice.jpg?sign=89803dae2ae890a1401b8d7d69feed96&t=1704635300'  
        }
    },
    onShareTimeline: function() {
        return {
        title: '逸勉财务王荣祥',
        path: 'pages/anotherPage6/anotherPage6',
        imageUrl:'https://7969-yimiancaiwu-8gcpfdsgc4d1a9f2-1323094367.tcb.qcloud.la/comservice.jpg?sign=89803dae2ae890a1401b8d7d69feed96&t=1704635300' 
        }
    },
  freeCall6:function(){
      wx.makePhoneCall({
          phoneNumber: '18051963452',
      })
  },
  anrufen6: function(){
      var that = this
      wx.showModal({
          title:'提示',
          content:'呼叫18051963452',
          success: function(res){
              if(res.confirm){
                  console.log('用户确定呼叫')
                  that.freeCall6();
              }
              else{
                  console.log('用户点击取消')
              }
          }
      })
  },
  freeCopy6: function (){
      wx.setClipboardData({
          data: 'wrx-0416',
          success(){
              wx.hideToast();
          }
      })
  },
  copyWechat6: function(){
      var that = this
      wx.showModal({
          content:'复制微信ID',
          success: function(res){
              if(res.confirm){
                  console.log('用户确定复制')
                  that.freeCopy6();
              }
              else{
                  console.log('用户点击取消')
              }
          }
      })
  },
  freeCopy1: function (){
    wx.setClipboardData({
        data: '南京市江北新区星火路11号南京软件园动漫大厦B座4-413室',
        success(){
            wx.hideToast();
        }
    })
},
copyLocation: function(){
    var that = this
    wx.showModal({
        content:'复制地址',
        success: function(res){
            if(res.confirm){
                console.log('用户确定复制')
                that.freeCopy1();
            }
            else{
                console.log('用户点击取消')
            }
        }
    })
},
  /*nav6(e) {
      var item = e.currentTarget.dataset.item;
      wx.getFuzzyLocation({
        type: 'wgs84',
        success: function (res) {
          wx.openLocation({
            latitude: 32.162729,
            longitude: 118.697326,
            address: '江苏省南京市软件园动漫大厦B座413室'
          })
        }
      })
  },
  /**
   * 保存到通讯录
   */
  saveMailList6(){
      wx.getSetting({
          success (res) {
              // 先判断是否授权通讯录
              if (res.authSetting["scope.addPhoneContact"]){
                  wx.addPhoneContact({
                      firstName: '王荣祥', // firstName必传,不然报错
                      nickName: '逸勉外勤会计王荣祥',
                      mobilePhoneNumber: '18051963452', //手机号
                      addressState:'江苏省',
                      addressCity:'南京市软件园',
                      addressStreet:'星火路11号动漫大厦B座413室',
                      orgnization: '南京逸勉财务',
                      title:'外勤会计',
                      success: function () {
                          wx.showToast({title: '保存成功'})
                      }
                  })
              }else{
                  wx.addPhoneContact({
                      firstName: '王荣祥', // firstName必传,不然报错
                      nickName: '逸勉外勤会计王荣祥',
                      mobilePhoneNumber: '18051963452', //手机号
                      orgnization: '南京逸勉财务',
                      addressState:'江苏省',
                      addressCity:'南京市软件园',
                      addressStreet:'星火路11号动漫大厦B座413室',
                      title:'外勤会计',
                      success: function () {
                          wx.showToast({title: '保存成功'})
                      },
                      fail: function (err) {
                          // wx.openSetting需要通过wx.showModal触发
                          // 用户拒绝授权才弹出, 取消不算
                          if(err.errMsg=="addPhoneContact:fail auth deny"){
                              wx.showModal({
                                  title: '温馨提示',
                                  content: '需要获取您的通讯录权限',
                                  success: tip=> {if (tip.confirm) {wx.openSetting()}}
                              })
                          }
                      }
                  });
              }
          }
      })  
  }
  
})