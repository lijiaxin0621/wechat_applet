// components/ItemSong/ItemSong.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    data:{
      type:Object,
      value:"",
    },
    index:{
      type:Number,
    }
  },

  /**
   * 组件的初始数据
   */
  data: {

  },

  /**
   * 组件的方法列表
   */
  methods: {
    handleClick(){
      var id=this.properties.data.ar[0].id; 
     wx.navigateTo({
       url: '/pages/works/works?id='+id
     })
   }
  },
 
  options:{
    multipleSlots:true
  }
})
