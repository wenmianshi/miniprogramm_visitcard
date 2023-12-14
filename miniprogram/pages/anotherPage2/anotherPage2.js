Page({
  shareFriends2: function(){
      wx.showShareMenu({
          withShareTicket: true
      })
  },
  share2: function(){
      var that = this
      wx.showModal({
          content:'分享给好友',
          success: function(res){
              if(res.confirm){
                  console.log('确定分享')
                  that.shareFriends2();
              }
              else{
                  console.log('取消分享')
              }
          }
      })
  },
  code2: function(){
      wx.showModal({
          content:'发送名片码',
      })
  },
  freeCall2:function(){
      wx.makePhoneCall({
          phoneNumber: '17321548170',
      })
  },
  anrufen2: function(){
      var that = this
      wx.showModal({
          title:'提示',
          content:'呼叫17321548170',
          success: function(res){
              if(res.confirm){
                  console.log('用户确定呼叫')
                  that.freeCall2();
              }
              else{
                  console.log('用户点击取消')
              }
          }
      })
  },
  freeCopy2: function (){
      wx.setClipboardData({
          data: 'wxid_k9ns7q9w264u22',
          success(){
              wx.hideToast();
          }
      })
  },
  copyWechat2: function(){
      var that = this
      wx.showModal({
          content:'复制微信ID',
          success: function(res){
              if(res.confirm){
                  console.log('用户确定复制')
                  that.freeCopy2();
              }
              else{
                  console.log('用户点击取消')
              }
          }
      })
  },
  nav2(e) {
      var item = e.currentTarget.dataset.item;
      wx.getLocation({
        type: 'wgs84',
        success: function (res) {
          wx.openLocation({
            latitude: 32.09374,
            longitude: 118.41501,
            address: '江苏省南京市软件园动漫大厦B座413室'
          })
        }
      })
  },
  /**
   * 保存到通讯录
   */
  saveMailList2(){
      wx.getSetting({
          success (res) {
              // 先判断是否授权通讯录
              if (res.authSetting["scope.addPhoneContact"]){
                  wx.addPhoneContact({
                      firstName: '刘星瑶', // firstName必传,不然报错
                      nickName: '逸勉会计刘星瑶',
                      mobilePhoneNumber: '17321548170', //手机号
                      addressState:'江苏省',
                      addressCity:'南京市软件园',
                      addressStreet:'星火路11号动漫大厦B座413室',
                      orgnization: '南京逸勉财务',
                      title:'财务会计',
                      success: function () {
                          wx.showToast({title: '保存成功'})
                      }
                  })
              }else{
                  wx.addPhoneContact({
                      firstName: '刘星瑶', // firstName必传,不然报错
                      nickName: '逸勉会计刘星瑶',
                      mobilePhoneNumber: '17321548170', //手机号
                      orgnization: '南京逸勉财务',
                      addressState:'江苏省',
                      addressCity:'南京市软件园',
                      addressStreet:'星火路11号动漫大厦B座413室',
                      title:'财务会计',
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