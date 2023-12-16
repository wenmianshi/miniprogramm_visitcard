const app = getApp()
const order = ['demo1', 'demo2', 'demo3', 'demo4', 'demo5', 'demo6']
Page({
  data:{
    indicator_dots:true,
    indicator_color: "#ffffff",
    indicator_active_color:"#F8626E",
    autoplay: true,
    interval: 3000,
    circular: true,

    messageyi: "事关养老！12月31日前办理，才能享受这项个税优惠→",
    messageer: "事关钱袋子！2024年度个税专项附加扣除信息确认开始啦~",
    messagesan: "惠企政策查询+申报，宁企通“一站”汇聚！",

    linkyi:"http://s59avscau.hd-bkt.clouddn.com/one.gif",
    linker:"http://s59avscau.hd-bkt.clouddn.com/twoo.png",
    linksan:"http://s59avscau.hd-bkt.clouddn.com/three.png"
  },

  
  onLoad: function () {

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
            path: 'pages/index/index',
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
  teil1: function(){
    this.setData({
      messageyi: "事关养老！12月31日前办理，才能享受这项个税优惠→",
      linkyi:"http://s59avscau.hd-bkt.clouddn.com/one.gif"
    });
    this.setData({
      messageer: "事关钱袋子！2024年度个税专项附加扣除信息确认开始啦~",
      linker:"http://s59avscau.hd-bkt.clouddn.com/twoo.png"
    });
    this.setData({
      messagesan: "惠企政策查询+申报，宁企通“一站”汇聚！",
      linksan:"http://s59avscau.hd-bkt.clouddn.com/three.png"
    });
  },
  teil2: function(){
    this.setData({
      messageyi: "税务局提醒：2023年12月31日前，这项费用必须完成补缴，否则加收滞纳金！",
      linkyi:"http://s59avscau.hd-bkt.clouddn.com/four.jpeg"
    });
    this.setData({
      messageer: "2024年专项附加扣除开始确认！财务请马上转给全体员工！12月31日前必须完成！否则影响明年到手工资！",
      linker:"http://s59avscau.hd-bkt.clouddn.com/five.png"
    });
    this.setData({
      messagesan: "进销不匹配，严查！",
      linksan:"http://s59avscau.hd-bkt.clouddn.com/sixxx.png"
    });
  },
  teil3: function(){
    this.setData({
      messageyi: "科普：小规模纳税人和一般人纳税人",
      linkyi:"http://s59avscau.hd-bkt.clouddn.com/seven.png"
    });
    this.setData({
      messageer: "个人营业执照网上申请，个体工商户营业执照需要什么材料，一个人可以申请几个个体户呢？​",
      linker:"http://s59avscau.hd-bkt.clouddn.com/four.jpeg"
    });
    this.setData({
      messagesan: "大学生创业税费优惠政策",
      linksan:"http://s59avscau.hd-bkt.clouddn.com/nine.jpeg"
    });
  },
  teil4: function(){
    this.setData({
      messageyi: "2024年1月1日起实施！《企业知识产权合规管理体系 要求》标准换版",
      linkyi:"http://s59avscau.hd-bkt.clouddn.com/eight.png"
    });
    this.setData({
      messageer: "超出营业执照经营范围可以开票吗？国家税务总局正式回复！",
      linker:"http://s59avscau.hd-bkt.clouddn.com/four.jpeg"
    });
    this.setData({
      messagesan: "【涨知识】享受技术转让、技术开发免征增值税，这些要点请注意",
      linksan:"http://s59avscau.hd-bkt.clouddn.com/jishu.png"
    });
  },
})
