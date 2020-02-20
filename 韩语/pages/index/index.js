const IndexModel = require('../../models/IndexModel')
Page({
  data: {
    musics:[],
    id:[]
  },
 async onLoad(){
   var data = await IndexModel.getCat();
   var playlists = data.data.playlists;
   console.log(playlists)
   var arr =[]
   playlists.forEach(item=>{
     var obj ={};
     obj.name = item.name;
     obj.id = item.id;
     obj.coverImgUrl= item.coverImgUrl;
     obj.playCount = Math.floor(item.playCount/10000)+"万";
     obj.nickname = item.creator.nickname;
     arr.push(obj)
   })
   this.setData({
     musics:arr
   }) 
 },
})
