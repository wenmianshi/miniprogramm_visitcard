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
            imageUrl:'https://7969-yimiancaiwu-8gcpfdsgc4d1a9f2-1323094367.tcb.qcloud.la/comservice.jpg?sign=ee645bea6d44dc2ba005b99b98f2a0dd&t=1704635885' 
        }
    },
    onShareTimeline: function() {
        return {
        title: '逸勉财务App',
        path: 'pages/service/service',
        imageUrl:'https://7969-yimiancaiwu-8gcpfdsgc4d1a9f2-1323094367.tcb.qcloud.la/comservice.jpg?sign=ee645bea6d44dc2ba005b99b98f2a0dd&t=1704635885' 
        }
    },
})