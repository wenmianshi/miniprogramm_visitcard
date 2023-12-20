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
      beizhu1: "税务代理记账398-798元每月（根据业务量）",
      beizhu2: "税务代理记账408-808元每月 （根据业务量）"
    });
  },
  contactUs(){
    wx.navigateTo({
      url: '/pages/contact/contact'
    })
  },
  onShareAppMessage: function(){
        return {
            title: '逸勉财务App',
            path: 'pages/service/service',
            imageUrl:'http://s59avscau.hd-bkt.clouddn.com/comservice.jpg' 
        }
    },
    onShareTimeline: function() {
        return {
        title: '逸勉财务App',
        path: 'pages/service/service',
        imageUrl:'http://s59avscau.hd-bkt.clouddn.com/comservice.jpg' 
        }
    },
})