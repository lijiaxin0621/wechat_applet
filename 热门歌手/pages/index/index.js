const IndexModel = require('../../models/IndexModel')
Page({
  data: {
  artists:[]
  },
  async onLoad(){
    IndexModel.getCat().then(res=>{
    var artists = res.data.artists
    this.setData({
       artists
     })
    })
    } 
})
