// pages/movie/movie.js
const http = require('../../models/http')
Page({
  data: {
    movies:[],
    toptitle:""
  },
  onLoad:async function (options){
    var {url,title} = options;
    wx.setNavigationBarTitle({
      title
    });
    wx.showLoading({
      title:"数据加载",
    })
    var res = await http.getMore(url);
    var {subjects} = res.data;
    this.setData({
      movies:subjects,
      toptitle:res.data.title
    })
  },
})