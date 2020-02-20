Page({
  data: {
   musics:[],
   id:[]
  },
  onLoad: function(){
    wx.request({
      url:`https://music.aityp.com/top/playlist?cat=华语&limit=48`,
      header:{'content-type':'application/json'},
      method:"GET",
      dataType:'json',
      responseType:'text',
      success:(res)=>{
        var playlists = res.data.playlists;
        var musics = [];
        playlists.forEach(item=>{
          var obj = {};
          obj.imgUrl=item.coverImgUrl;
          obj.id=item.id;
          obj.name=item.name.length>7?item.name.slice(0,7)+"...":item.name;
          obj.creatorName=item.creator.nickname.length>5?item.creator.nickname.slice(0,5)+"...":item.creator.nickname;
          musics.push(obj)
        })
        this.setData({
          musics
        })
      }
    })
  },
  handleClick(e){
    var id =e.currentTarget.dataset.id;
    wx.navigateTo({
      url:`/pages/list/list?id=`+id,
    })
  }
})
