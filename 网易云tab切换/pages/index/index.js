const Http = require('../../models/HTTP')
Page({
  data: {
    offset: 0,
    chinese: [],
    europe: [],
    japanese: [],
    korean: [],
    cantonese: []
  },
  onShow() {
    Http.getchinese(this.data.offset).then(res => {
        var playlists = res.data.playlists;
        this.setData({
          playlists
        })
      }),
      Http.geteurope(this.data.offset).then(res => {
        var europe = res.data.playlists;
        this.setData({
          europe
        })
      }), Http.getjapanese(this.data.offset).then(res => {
        var japanese = res.data.playlists;
        this.setData({
          japanese
        })
      }),
      Http.getkorean(this.data.offset).then(res => {
        var korean = res.data.playlists;
        this.setData({
          korean
        })
      }),
      Http.getcantonese(this.data.offset).then(res => {
        var cantonese = res.data.playlists;
        this.setData({
          cantonese
        })
      })
  },
  onReachBottom(){
    var offset = this.data.offset;
      offset+=21;
    Http.getchinese(offset).then(res=>{
      var {playlists} = res.data;
      this.setData({
        offset,
        playlists:this.data.playlists.concat(playlists)
      })
    })
  },

})
/* Page({
  data: {
   musics:[]
  },
  onShow(){
    wx.request({
      url:`https://music.aityp.com/top/playlist?cat=华语`,
      header:{'content-type':'application/json'},
      method:"GET",
      dataType:'json',
      responseType:'text',
      success:(res)=>{
        var playlists = res.data.playlists;
        var musics = []
        playlists.forEach(item=>{
          var obj = {};
          obj.imgUrl=item.coverImgUrl;
          obj.name=item.name.length>7?item.name.slice(0,7)+"...":item.name;
          obj.creatorName=item.creator.nickname.length>5?item.creator.nickname.slice(0,5)+"...":item.creator.nickname;
          musics.push(obj)
        })
        this.setData({
          musics
        })
      }
    })
  }
}) */