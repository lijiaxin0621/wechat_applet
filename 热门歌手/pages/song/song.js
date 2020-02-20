const SongModel = require('../../models/SongModel')
Page({
  data: {
    songs:[]
  },
async onLoad(options){
  SongModel.getSong(options.id).then(res=>{
    var songs = res.data.hotSongs;
    this.setData({
      songs
    })
  })
}
})