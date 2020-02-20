const WorksModel = require('../../models/WorksModel')
Page({
  data: {
    works:[]
  },
  async onLoad(options){
    WorksModel.getWorks(options.id).then(res=>{
     var works = res.data.hotAlbums;
     console.log(works)
      this.setData({
        works
      })
    })
  }
})