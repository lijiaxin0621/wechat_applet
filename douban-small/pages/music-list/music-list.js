// pages/music-list/music-list.js
const Http = require("../../utils/music-http")
Page({
  data: {
    musics: []
  },
  onLoad: async function (options) {
     var {url,title} = options; 
    /* switch(title){
      case "top/playlist?order=hot":
        console.log(1)
        break;
      case "top/playlist?cat=日语":
        console.log(2)
        break;
      case "personalized/djprogram":
        console.log(3)
        break; 
    }*/
     wx.setNavigationBarTitle({
      title
    });
     wx.showLoading({
      title:"数据加载" ,
    }); 
    var res = await Http.getMore(url);
    var {
      playlists
    } = res.data;
    this.setData({
      musics: playlists
    }) 
  },
})