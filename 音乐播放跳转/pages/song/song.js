const audio = wx.getBackgroundAudioManager()
Page({
  data: {
    musics: [],
    isPlay: false
  },
  onLoad: function(options) {
    var that = this;
    var img = unescape(options.img);
    var id = options.id;
    wx.request({
      url: 'https://music.aityp.com/song/url?id=' + id,
      header: { 'content-type': 'application / json'},
      method: 'GET',
      dataType: 'json',
      responseType: 'text',
      success: function(res) {
        var songs = res.data.data[0];
        console.log(songs)
        var obj = {};
        var musics = [];
        obj.src = songs.url;
        obj.img = img;
        musics.push(obj);
        that.setData({
          musics
        })
      }
    })
  },
  handleMusic(event) {
    var url = event.currentTarget.dataset.url;
    console.log(url)
    if (this.data.isPlay) {
      audio.pause();
      
    } else {
      audio.src = url;
      audio.title = "lijiaxin";
    }
    this.setData({
      isPlay: !this.data.isPlay
    })
  },

})
