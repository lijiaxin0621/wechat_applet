// pages/movie-detail/movie-detail.js
const Http = require("../../utils/http")
Page({
  data: {
    movie:{},
    X:true 
  },
  onLoad:async function (options) {
    var {id} = options
    console.log(options)
    var res = await Http.getDetail(id)
    console.log(res)
    /* console.log(id) */
    this.setData({
      movie:res.data
    })
  },
  handleImage(e){
    /* console.log(e.currentTarget.dataset.url) */
    var url = e.currentTarget.dataset.url;
    var casts = this.data.movie.casts;
    var urls = casts.map(item=>{
      return item.avatars.small;
    });
    wx.previewImage({
      current:url,
      urls
    })
  }
})