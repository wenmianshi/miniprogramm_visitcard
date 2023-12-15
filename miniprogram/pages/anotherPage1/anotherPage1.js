Page({
    shareFriends: function(){
        wx.showShareMenu({
            withShareTicket: true
        })
    },
    onShareAppMessage: function(){
        const promise = new Promise(resolve => {
            setTimeout(() => {
              resolve({
                title: '逸勉财务王总名片'
              })
            }, 2000)
          })
          return {
            title: '逸勉财务王总名片',
            path: 'pages/anotherPage1/anotherPage1',
            promise 
          }
    },
    onShareTimeline() {
        const promise = new Promise(resolve => {
          setTimeout(() => {
            resolve({
              title: '逸勉财务王总名片'
            })
          }, 2000)
        })
        return {
          title: '逸勉财务王总名片',
          imageUrl:'http://s59avscau.hd-bkt.clouddn.com/comservice.jpg' 
        }
      },
    freeCall:function(){
        wx.makePhoneCall({
            phoneNumber: '18921427150',
        })
    },
    anrufen: function(){
        var that = this
        wx.showModal({
            title:'提示',
            content:'呼叫18921427150',
            success: function(res){
                if(res.confirm){
                    console.log('用户确定呼叫')
                    that.freeCall();
                }
                else{
                    console.log('用户点击取消')
                }
            }
        })
    },
    freeCopy: function (){
        wx.setClipboardData({
            data: '18921427150',
            success(){
                wx.hideToast();
            }
        })
    },
    copyWechat: function(){
        var that = this
        wx.showModal({
            content:'复制微信ID',
            success: function(res){
                if(res.confirm){
                    console.log('用户确定复制')
                    that.freeCopy();
                }
                else{
                    console.log('用户点击取消')
                }
            }
        })
    },
    nav(e) {
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
    saveMailList(){
        wx.getSetting({
            success (res) {
                // 先判断是否授权通讯录
                if (res.authSetting["scope.addPhoneContact"]){
                    wx.addPhoneContact({
                        firstName: '王宋萍', // firstName必传,不然报错
                        nickName: '财务代理人王宋萍',
                        mobilePhoneNumber: '18921427150', //手机号
                        addressState:'江苏省',
                        addressCity:'南京市软件园',
                        addressStreet:'星火路11号动漫大厦B座413室',
                        orgnization: '南京逸勉财务',
                        title:'总经理',
                        success: function () {
                            wx.showToast({title: '保存成功'})
                        }
                    })
                }else{
                    wx.addPhoneContact({
                        firstName: '王宋萍', // firstName必传,不然报错
                        nickName: '财务代理人王宋萍',
                        mobilePhoneNumber: '18921427150', //手机号
                        orgnization: '南京逸勉财务',
                        addressState:'江苏省',
                        addressCity:'南京市软件园',
                        addressStreet:'星火路11号动漫大厦B座413室',
                        title:'总经理',
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