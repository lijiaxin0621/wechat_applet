Page({
  data: {
    id:[],
   songs:[]
  },
  onLoad:function(options){
    var id = options.id
    wx.request({
      url:"https://music.aityp.com/playlist/detail?id="+id,
      header:{'content-type':'application/json'},
      method:"GET",
      dataType:'json',
      responseType:'text',
      success:(res)=>{
        var playlist = res.data.playlist.tracks;
        var songs = []
        playlist.forEach(item=>{
          var obj = {};
          obj.id = item.id;
          obj.img=item.al.picUrl;
          obj.name=item.name.length>7?item.name.slice(0,7)+"...":item.name;
          obj.artistsName=item.ar[0].name.length>5?item.ar[0].name.slice(0,5)+"...":item.ar[0].name;
          obj.time=(Math.floor(item.dt/60000)<10?
          "0"+Math.floor(item.dt/60000):Math.floor(item.dt/60000))
          +":"+
          (Math.floor(item.dt/1000)%60<10?
          "0"+Math.floor(item.dt/1000)%60:Math.floor(item.dt/1000)%60); 
         songs.push(obj)
        })
        this.setData({
          songs
        })
      }
    })
  },
  handleClick(event){
    var id = event.currentTarget.dataset.id;
    var img = escape(event.currentTarget.dataset.img);
    wx.navigateTo({
      url: '/pages/song/song?id='+id+'&img='+img,
    })
  }
})
