const IndexModel = require('../../models/IndexModel')
Page({
  data: {
  programs:[]
  },
  async onLoad(){
    IndexModel.getCat().then(res=>{
    var programs = res.data.programs
    this.setData({
      programs
     })
    })
    } 
})

