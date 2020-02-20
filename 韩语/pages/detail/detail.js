const DetailModel = require('../../models/DetailModel')
Page({
  data: {
     lists:[]
  },
 async onLoad(options){
   var data = await DetailModel.getDetail(options.id);
   var playlists = data.data.playlist.tracks;
   var arr =[]
   playlists.forEach(item=>{
     var obj ={};
     obj.name=item.name;
     obj.id=item.id;
     obj.dt=(Math.floor(item.dt/60000)<10?"0"+Math.floor(item.dt/60000):Math.floor(item.dt/60000))+':'+((Math.floor(item.dt/1000))%60<10?"0"+(Math.floor(item.dt/1000))%60:(Math.floor(item.dt/1000))%60);
     obj.singer=item.ar[0].name;
     obj.al=item.al.name;
     arr.push(obj)
   })
   this.setData({
     lists:arr
   })
  },
})