var data = require('../../data/local');
var http = require("../../models/http")
Page({
  data: {
    banners:[],
    postList:[],
    indicatorDots:true,
    indicatorColor:"rgba(11,44,22,.6)",
    active:"#c20c0c"
  },
  onLoad: async function (options) {
    var {bannerUrl,postList} = data;
    var res = await http(bannerUrl);
    var banners = res.data.banners.slice(0,3);
    this.setData({
      banners,
      postList
    })
  },
})