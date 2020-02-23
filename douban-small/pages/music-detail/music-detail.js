// pages/music-detail/music-detail.js
const Http = require("../../utils/music-http")
Page({
  data: {
    music: [],
    coverImgUrl:""
  },
  onLoad: async function (options) {
    var {id} = options;
    console.log(options)
    var res = await Http.getDetail(id)
    var playlist = res.data.playlist.tracks;
    var arr = []
    playlist.forEach(item => {
      var obj = {};
      obj.id = item.id;
      obj.img = item.al.picUrl;
      obj.name = item.name;
      obj.picUrl = item.al.picUrl;
      obj.arName = item.ar[0].name
      arr.push(obj)
    })
    this.setData({
      music: arr,
      coverImgUrl:res.data.playlist.coverImgUrl
    })
  },
  handleClick(event){
    var id = event.currentTarget.dataset.id;
    var img = escape(event.currentTarget.dataset.img)
    wx.navigateTo({
      url: `/pages/music-play/music-play?id=`+id+'&img='+img,
    })
  }
})