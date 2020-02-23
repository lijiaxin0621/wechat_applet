// pages/read-detail/read-detail.js
var data = require('../../data/local');
var app = getApp();
var audio = wx.getBackgroundAudioManager();
Page({
  data: {
    isCollected:false,
    item:[],
    id:[],
    isPlay:false
  },
  onLoad: function (options) {
    var {id} = options;
    var {postList} = data;
    var item=[];
    item.push(postList[id])
    this.setData({
      item,
      id
    })
  /* 有缓存取得缓存，没有缓存设计缓存
  缓存的数据结构 
  {
    "0":"false",
    "1":"true",
    "2":"false",
    "3":"true"
  }
  */

   var collection = wx.getStorageSync('collection');
   /* 有缓存，获取缓存 */
   if(collection){
    var collected = collection[id];
    this.setData({
      isCollected:collected
    })
  }else{
    /* 没有缓存，就设置缓存 */
    var collection ={};
    collection[id] = false;
    wx.setStorageSync('collection',collection)
    /* {"0":"false","1":"false"} */
  }
 audio.onPlay(()=>{
   this.setData({
     isPlay:true
   })
 })
 audio.onPause(()=>{
   this.setData({
     isPlay:false
   })
 })
 if(app.globalData.g_isPlay && app.globalData.g_playId == id){
   this.setData({
     isPlay:true
   })
 }else{
   this.setData({
     isPlay:false
   })
 }
 console.log(this.data.id)
},
   handleCollect(){
     /* 获取缓存 */
     var collection = wx.getStorageSync('collection')
     var collected = !collection[this.data.id];
     collection[this.data.id] = collected;
     /* 更新缓存 */
     this.showModal(collected,collection)
   },
   share(){
    wx.showActionSheet({
      itemList: ['分享到微信','分享到朋友圈'],
      itemColor: '#000000',
      success: (res)=>{
         console.log(res.tapIndex)
      }
    })
   },
   showModal(collected,collection){
      wx.showModal({
       title: '收藏',
       content: '收藏文章',
       success: (res) => {
         if(res.confirm){
           if(collected){
             wx.setStorageSync('collection',collection)
             this.setData({
               isCollected:collected
             })
           }
         }else if(res.cancel){
           if(collected ==false){
             wx.setStorageSync('collection',collection)
             this.setData({
               isCollected:collected
             })
           }
         }
        }
      })  
    },
   handleMusic(){
      if(this.data.isPlay){
        audio.pause()
        this.setData({
          isPlay:false
        })
        app.globalData.g_isPlay = false
        console.log(app.globalData.g_isPlay)
      }else{
        audio.title= this.data.item[0].music.title
        audio.src = this.data.item[0].music.url
        this.setData({
          isPlay:true
        })
       /*  console.log(app) */
       app.globalData.g_playId = this.data.id
       app.globalData.g_isPlay = true
      }
    }
})