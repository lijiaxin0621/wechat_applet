// components/DetailIndex/DetailIndex.js
const audio = wx.getBackgroundAudioManager();
const DetailModel = require('../../models/DetailModel');
Component({
  properties: {
    data:{
      type:Object,
      value:"",
    }
  },
  data: {
  },
  methods: {
    handleClick(){
      var id = this.properties.data.mainSong.id;
      DetailModel.getPlay(id).then(res => {
        var url= res.data.data[0].url;
        console.log(url)
       if(this.data.isPlay){
          audio.pause();
        }else{
          audio.src = url;
          audio.title = "lijiaxin"
        }
        this.setData({
          isPlay:!this.data.isPlay
        })
      })
    }
  },
  options:{
    multipleSlots:true
  }
})
