// components/movie-item/movie-item.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    data:{
      type:Object,
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
      var id = this.properties.data.id; 
      if(id==undefined){
        var id = this.properties.data.subject.id;
      }else{
        var id = this.properties.data.id;
      }
     
     /*  var id = this.properties.data.subject.id; */
      wx.navigateTo({
        url: `/pages/movie-detail/movie-detail?id=`+id,
      });
    }
  }
})
