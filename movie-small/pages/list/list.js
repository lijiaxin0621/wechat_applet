// pages/list/list.js
const http = require('../../models/http')
Page({
  data: {
    movies:{}
  },
  async onLoad() {
    var storageData = wx.getStorageSync('movies')
    if(storageData){
      this.setData({
        movies:storageData
      })
    }else{
      var movies={};
    var inTheaters = await http.getInTheaters();
    var coming_soon = await http.getComingSoon();
    var top250 = await http.getTop250();
    var us_box = await http.getUs_box();

    movies.inTheaters = {};
    movies.inTheaters.title = "正在热映"
    movies.inTheaters.data=inTheaters.data.subjects;
    movies.inTheaters.subTitle="in_theaters";

    movies.coming_soon = {};
    movies.coming_soon.title = "即将上映"
    movies.coming_soon.data=coming_soon.data.subjects;
    movies.coming_soon.subTitle="coming_soon";

    movies.top250 = {};
    movies.top250.title = "TOP250"
    movies.top250.data=top250.data.subjects;
    movies.top250.subTitle="top250";

    movies.us_box = {};
    movies.us_box.title = "北美票房"
    movies.us_box.data=us_box.data.subjects;
    movies.us_box.subTitle="us_box";

    wx.getStorageSync("movies",movies)
    this.setData({
      movies
    })
    
    }
  },
  handleMore(e){
    var {title,url} = e.currentTarget.dataset;
    wx.navigateTo({
      url: `/pages/movie/movie?title=${title}&url=${url}`
    })
  }
})