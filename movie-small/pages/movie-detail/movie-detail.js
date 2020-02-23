// pages/movie-detail/movie-detail.js
const http = require("../../models/http")
Page({
  data: {
    movie:{},
    },
  onLoad: async function (options) {
    var {id} = options;
    var res = await http.getDetail(id)
    this.setData({
      movie:res.data
    })
  },
})