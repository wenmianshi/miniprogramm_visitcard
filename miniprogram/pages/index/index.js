const app = getApp()
const order = ['demo1', 'demo2', 'demo3', 'demo4', 'demo5', 'demo6']
var globalArticlePageSelection = 1;

Page({
  data:{
    indicator_dots:true,
    indicator_color: "#ffffff",
    indicator_active_color:"#F8626E",
    autoplay: true,
    interval: 3000,
    circular: true,

    partSelected: 1,

    messageyi: "事关养老！12月31日前办理，才能享受",
    messageyiyi: "\n这项个税优惠→",
    messageer: "事关钱袋子！2024年度个税专项附加扣除",
    messageerer: "\n信息确认开始啦~",
    messagesan: "惠企政策查询+申报，宁企通“一站”汇",
    messagesansan: "\n聚！",

    linkyi:"https://7969-yimiancaiwu-8gcpfdsgc4d1a9f2-1323094367.tcb.qcloud.la/one.gif?sign=037e3ab817f52937a508ee76364b25b7&t=1704637047",
    linker:"https://7969-yimiancaiwu-8gcpfdsgc4d1a9f2-1323094367.tcb.qcloud.la/twoo.png?sign=7df130852f76fa8f9a2207150ab4a17a&t=1704637061",
    linksan:"https://7969-yimiancaiwu-8gcpfdsgc4d1a9f2-1323094367.tcb.qcloud.la/three.png?sign=509a573bcff42039e2bc4731598f5287&t=1704637076"
  },

  
  onLoad: function () {

  },
  onShareAppMessage: function(){
    return {
        title: '逸勉财务App',
        path: 'pages/index/index',
        imageUrl:'https://7969-yimiancaiwu-8gcpfdsgc4d1a9f2-1323094367.tcb.qcloud.la/comservice.jpg?sign=ee645bea6d44dc2ba005b99b98f2a0dd&t=1704635885' 
    }
    },
  onShareTimeline: function() {
    return {
      title: '逸勉财务App',
      path: 'pages/index/index',
      imageUrl:'https://7969-yimiancaiwu-8gcpfdsgc4d1a9f2-1323094367.tcb.qcloud.la/comservice.jpg?sign=ee645bea6d44dc2ba005b99b98f2a0dd&t=1704635885' 
    }
    },
  onReady: function () {
    const arr = []
    for (let i = 0; i < 20; i++) arr.push(i)
    this.setData({
      arr
    })
  },
  anotherPage1(){
    wx.navigateTo({
      url: '/pages/anotherPage1/anotherPage1',
    })
  },
  allArticles(){
    wx.navigateTo({
      url: '/pages/articles/articles',
    })
  },
  auf1: function() {
    if (globalArticlePageSelection == 1) {
      wx.navigateTo({
        url: '/pages/aufsatz1/aufsatz1',
      })
    } else if (globalArticlePageSelection == 2) {
      wx.navigateTo({
        url: '/pages/aufsatz5/aufsatz5',
      })
    } else if (globalArticlePageSelection == 3) {
      wx.navigateTo({
        url: '/pages/aufsatz8/aufsatz8',
      })
    } else if (globalArticlePageSelection == 4) {
      wx.navigateTo({
        url: '/pages/aufsatz11/aufsatz11',
      })
    }
  },
  auf2: function() {
    if (globalArticlePageSelection == 1) {
      wx.navigateTo({
        url: '/pages/aufsatz2/aufsatz2',
      })
    } else if (globalArticlePageSelection == 2) {
      wx.navigateTo({
        url: '/pages/aufsatz6/aufsatz6',
      })
    } else if (globalArticlePageSelection == 3) {
      wx.navigateTo({
        url: '/pages/aufsatz9/aufsatz9',
      })
    } else if (globalArticlePageSelection == 4) {
      wx.navigateTo({
        url: '/pages/aufsatz12/aufsatz12',
      })
    }
  },
  auf3: function() {
    if (globalArticlePageSelection == 1) {
      wx.navigateTo({
        url: '/pages/aufsatz3/aufsatz3',
      })
    } else if (globalArticlePageSelection == 2) {
      wx.navigateTo({
        url: '/pages/aufsatz7/aufsatz7',
      })
    } else if (globalArticlePageSelection == 3) {
      wx.navigateTo({
        url: '/pages/aufsatz10/aufsatz10',
      })
    } else if (globalArticlePageSelection == 4) {
      wx.navigateTo({
        url: '/pages/aufsatz13/aufsatz13',
      })
    }
  },
  teil1: function(){
    globalArticlePageSelection = 1;
    this.setData({
      messageyi: "事关养老！12月31日前办理，才能享受",
      messageyiyi: "\n这项个税优惠→",

      
      linkyi:"https://7969-yimiancaiwu-8gcpfdsgc4d1a9f2-1323094367.tcb.qcloud.la/one.gif?sign=6bb343ea496e996a5b1432d4739afcbc&t=1704634475"
    });
    this.setData({
      messageer: "事关钱袋子！2024年度个税专项附加扣除",
      messageerer: "\n信息确认开始啦~",
      linker:"https://7969-yimiancaiwu-8gcpfdsgc4d1a9f2-1323094367.tcb.qcloud.la/twoo.png?sign=c61b703e4d49e47e2271dac231b5d662&t=1704637208"
    });
    this.setData({
      messagesan: "惠企政策查询+申报，宁企通“一站”汇",
      messagesansan: "\n聚！",
      linksan:"https://7969-yimiancaiwu-8gcpfdsgc4d1a9f2-1323094367.tcb.qcloud.la/three.png?sign=509a573bcff42039e2bc4731598f5287&t=1704637076"
    });
  },
  teil2: function(){
    globalArticlePageSelection = 2;
    this.setData({
      messageyi: "税务局提醒：2023年12月31日前，这项费用",
      messageyiyi: "\n必须完成补缴，否则加收滞纳金！",
      linkyi:"https://7969-yimiancaiwu-8gcpfdsgc4d1a9f2-1323094367.tcb.qcloud.la/four.jpeg?sign=215642e82d2cc393af360fc7c86b2d7c&t=1704637189"
    });
    this.setData({
      messageer: "增值税进项税额转出6大知识点",
      messageerer: "\n",
      linker:"https://7969-yimiancaiwu-8gcpfdsgc4d1a9f2-1323094367.tcb.qcloud.la/liu.png?sign=55514bcba5ab9beb35167829a6c38493&t=1704637256"
    });
    this.setData({
      messagesan: "进销不匹配，严查！",
      messagesansan: "\n ",
      linksan:"https://7969-yimiancaiwu-8gcpfdsgc4d1a9f2-1323094367.tcb.qcloud.la/sixxx.png?sign=87179a6c1a031aa41df8bc02744f8ff6&t=1704637278"
    });
  },
  teil3: function(){
    globalArticlePageSelection = 3;
    this.setData({
      messageyi: "科普：小规模纳税人和一般人纳税人",
      messageyiyi: "\n",
      linkyi:"https://7969-yimiancaiwu-8gcpfdsgc4d1a9f2-1323094367.tcb.qcloud.la/seven.png?sign=6e221b693b09e8f4ce2fd7448ba291ec&t=1704637297"
    });
    this.setData({
      messageer: "个人营业执照网上申请，个体工商户营业执照​",
      messageerer: "\n需要什么材料，一个人可以申请几个个体户呢？",
      linker:"https://7969-yimiancaiwu-8gcpfdsgc4d1a9f2-1323094367.tcb.qcloud.la/four.jpeg?sign=b591f88754061b8a98b2c834a4e0f988&t=1704637317"
    });
    this.setData({
      messagesan: "大学生创业税费优惠政策",
      messagesansan: "\n",
      linksan:"https://7969-yimiancaiwu-8gcpfdsgc4d1a9f2-1323094367.tcb.qcloud.la/nine.jpeg?sign=6c6bf9b17a7ebd3a7f1a06db95260758&t=1704637338"
    });
  },
  teil4: function(){
    globalArticlePageSelection = 4;
    this.setData({
      messageyi: "2024年1月1日起实施！《企业知识产权合规",
      messageyiyi: "\n管理体系 要求》标准换版",
      linkyi:"https://7969-yimiancaiwu-8gcpfdsgc4d1a9f2-1323094367.tcb.qcloud.la/eight.png?sign=b79497df69f3af03e81aebafca73d4b9&t=1704637362"
    });
    this.setData({
      messageer: "超出营业执照经营范围可以开票吗？国家税务",
      messageerer: "\n总局正式回复！",
      linker:"https://7969-yimiancaiwu-8gcpfdsgc4d1a9f2-1323094367.tcb.qcloud.la/four.jpeg?sign=b1cedf57b27faecc5aeb276f286e09fb&t=1704637382"
    });
    this.setData({
      messagesan: "【涨知识】享受技术转让、技术开发免征增",
      messagesansan: "\n值税，这些要点请注意",
      linksan:"https://7969-yimiancaiwu-8gcpfdsgc4d1a9f2-1323094367.tcb.qcloud.la/jishu.png?sign=81a7de91f2a144039e477ea903fb49f8&t=1704637398"
    });
  },
})
