// pages/my/my.js
Page({
  data: {
    location:true,
    imageUrl:"/images/avatar/1.png",
    longitude:114.504760,
    latitude:30.552550,
    scale:18,
    showCompass:true,
    markers: [{
      iconPath: "/images/icon/location.png",
      id: 0,
      latitude: 30.552550,
      longitude: 114.504760,
      width: 30,
      height: 30,
      label:{
        content:"极客营科技有限公司",
        color:"#EE5E7B",
        borderWidth:1,
        borderColor:"#EE5E78",
        borderRadius:5,
        padding:5,
      },
      callout:{
        content:"极客营科技有限公司",
        color:"#EE5E7B",
        borderWidth:1,
        borderColor:"#EE5E78",
        borderRadius:5,
        padding:5,
      }
    }],
    polyline: [{
      points: [{
        longitude: 114.504760,
        latitude: 30.552550
      }, {
        longitude:114.373340,
        latitude: 30.690800
      }],
      color:"#FF0000DD",
      width: 2,
      dottedLine: true
    }],
    circles:
      [
        {
          longitude: 114.504760,
          latitude: 30.552550,
          radius: 50,
          fillColor: "#C20C0C66"
        }
      ]
  },
  onLoad: function (options) {

  },
  handleImage(){
    wx.chooseImage({
      count: 9,	// 默认为9
      sizeType: ['original', 'compressed'],	// 指定原图或者压缩图
      sourceType: ['album', 'camera'],	// 指定图片来源
      success:(res)=>{
        const src = res.tempFilePaths[0]
        console.log(src)
        this.setData({
          imageUrl:src
        })
      }
    })
  }
})