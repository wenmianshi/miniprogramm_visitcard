Page({
  data: {
    message: "一般纳税人",
    message1: "一般纳税人",
    message2: "税务代理记账188元每月",
  },
  smallscopeTax: function() {
    this.setData({message: "小规模纳税人"});
  },
  gaibian: function() {
    this.setData({message1: "小规模纳税人"});
  },
  change: function() {
    this.setData({message2: "税务代理记账88元每月"});
  },
  
})