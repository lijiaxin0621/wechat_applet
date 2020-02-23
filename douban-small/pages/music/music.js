// pages/music/music.js
const Http = require('../../utils/music-http')
Page({
  data: {
    musics:{}
  },
 async onLoad(){
   var storageData = wx.getStorageSync('musics');
   if(storageData){
     this.setData({
       musics:storageData
     })
   }else{
    var musics ={};
    var hot = await Http.getHot();
    musics.hot = {};
    musics.hot.title = "热门歌曲";
    musics.hot.data = hot.data.playlists.slice(0,3);
    musics.hot.subTitle = "top/playlist?order=hot";
 
    var japan = await Http.getJapan();
    musics.japan = {};
    musics.japan.title = "日本音乐";
    musics.japan.data = japan.data.playlists.slice(0,3);
    musics.japan.subTitle = "top/playlist?cat=日语";
    

    var dj = await Http.getDj();
    musics.dj = {};
    musics.dj.title = "推荐电台";
    musics.dj.data = dj.data.result.slice(0,3);
    musics.dj.subTitle = "personalized/djprogram";
    var sing =[]
    musics.dj.data.forEach(item=>{
      var obj = {};
      obj.coverImgUrl = item.picUrl;
      obj.name = item.name;
      sing.push(obj)
    })
    musics.dj.data=sing
    this.setData({
      musics
    })
   }
  },
  handleMore(e){
    var {title,url} = e.currentTarget.dataset;
    wx.navigateTo({
      url: `/pages/music-list/music-list?title=${title}&url=${url}`
    })
  }
})