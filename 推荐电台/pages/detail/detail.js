const DetailModel = require('../../models/DetailModel');
Page({
  data: {
    lists: [],
    isPlay: false
  },
  async onLoad(options) {
    console.log(options.id)
    DetailModel.getSong(options.id).then(res => {
      var lists = [res.data.program];
      this.setData({
        lists
      })
    })
  }
})