// pages/music-play/music-play.js

const Http = require("../../utils/music-http");
const audio = wx.getBackgroundAudioManager()
Page({
  data: {
    song:[],
    isPlay:false
  },
  async onLoad(options){
    var that = this;
    var id = options.id;
    var img = unescape(options.img);
    console.log(img)
    var res = await Http.getPlay(id);
    var song = res.data.data;
    console.log(song)
    var arr = []
    song.forEach(item=>{
      var obj={};
      obj.src = item.url;
      obj.img = img;
      arr.push(obj); 
    })
    that.setData({
      song:arr
    })
  },
  handleMusic(event){
    var url = event.currentTarget.dataset.url;
    console.log(url)
    if(this.data.isPlay){
      audio.pause();
    }else{
      audio.src = url;
      audio.title = "lijiaxin";
    }
    this.setData({
      isPlay:!this.data.isPlay
    })
  }
})