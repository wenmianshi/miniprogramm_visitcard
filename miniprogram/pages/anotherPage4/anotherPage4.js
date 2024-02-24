// pages/anotherPage4/anotherPage4.js
// pages/anotherPage3/anotherPage3.js
Page({
    shareFriends4: function(){
        wx.showShareMenu({
            withShareTicket: true
        })
    },
    onShareAppMessage: function(){
        return {
            title: '逸勉财务李晨',
            path: 'pages/anotherPage4/anotherPage4',
            imageUrl:'https://7969-yimiancaiwu-8gcpfdsgc4d1a9f2-1323094367.tcb.qcloud.la/comservice.jpg?sign=89803dae2ae890a1401b8d7d69feed96&t=1704635300' 
        }
    },
    onShareTimeline: function() {
        return {
        title: '逸勉财务李晨',
        path: 'pages/anotherPage4/anotherPage4',
        imageUrl:'https://7969-yimiancaiwu-8gcpfdsgc4d1a9f2-1323094367.tcb.qcloud.la/comservice.jpg?sign=89803dae2ae890a1401b8d7d69feed96&t=1704635300' 
        }
    },
  freeCall4:function(){
      wx.makePhoneCall({
          phoneNumber: '13814174916',
      })
  },
  anrufen4: function(){
      var that = this
      wx.showModal({
          title:'提示',
          content:'呼叫13814174916',
          success: function(res){
              if(res.confirm){
                  console.log('用户确定呼叫')
                  that.freeCall4();
              }
              else{
                  console.log('用户点击取消')
              }
          }
      })
  },
  freeCopy4: function (){
      wx.setClipboardData({
          data: 'la14174916',
          success(){
              wx.hideToast();
          }
      })
  },
  copyWechat4: function(){
      var that = this
      wx.showModal({
          content:'复制微信ID',
          success: function(res){
              if(res.confirm){
                  console.log('用户确定复制')
                  that.freeCopy4();
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
  /*nav4(e) {
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
  saveMailList4(){
      wx.getSetting({
          success (res) {
              // 先判断是否授权通讯录
              if (res.authSetting["scope.addPhoneContact"]){
                  wx.addPhoneContact({
                      firstName: '李晨', // firstName必传,不然报错
                      nickName: '逸勉会计李晨',
                      mobilePhoneNumber: '13814174916', //手机号
                      addressState:'江苏省',
                      addressCity:'南京市软件园',
                      addressStreet:'星火路11号动漫大厦B座413室',
                      orgnization: '南京逸勉财务',
                      title:'会计助理',
                      success: function () {
                          wx.showToast({title: '保存成功'})
                      }
                  })
              }else{
                  wx.addPhoneContact({
                      firstName: '李晨', // firstName必传,不然报错
                      nickName: '逸勉会计李晨',
                      mobilePhoneNumber: '13814174916 ', //手机号
                      orgnization: '南京逸勉财务',
                      addressState:'江苏省',
                      addressCity:'南京市软件园',
                      addressStreet:'星火路11号动漫大厦B座413室',
                      title:'会计助理',
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