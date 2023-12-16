Page({
  data: {
    biaoti1: "小规模纳税人",
    biaoti2: "小规模纳税人",
    beizhu1: "税务代理记账198元每月",
    beizhu2: "税务代理记账208元每月"
  },
  smallscopeTax: function() {
    this.setData({
      biaoti1: "小规模纳税人",
      biaoti2: "小规模纳税人",
      beizhu1: "税务代理记账198元每月",
      beizhu2: "税务代理记账208元每月"
    });
  },
  normalTax: function() {
    this.setData({
      biaoti1: "一般纳税人",
      biaoti2: "一般纳税人",
      beizhu1: "税务代理记账598元每月",
      beizhu2: "税务代理记账608元每月"
    });
  },
  contactUs(){
    wx.navigateTo({
      url: '/pages/contact/contact'
    })
  },
  onShareAppMessage: function(){
    const promise = new Promise(resolve => {
        setTimeout(() => {
        resolve({
            title: '逸勉财务App'
            })
            }, 2000)
        })
        return {
            title: '逸勉财务App',
            path: 'pages/service/service',
            promise 
        }
    },
    onShareTimeline() {
        const promise = new Promise(resolve => {
        setTimeout(() => {
            resolve({
            title: '逸勉财务App'
            })
        }, 2000)
        })
        return {
        title: '逸勉财务App',
        imageUrl:'http://s59avscau.hd-bkt.clouddn.com/comservice.jpg' 
        }
    },
})