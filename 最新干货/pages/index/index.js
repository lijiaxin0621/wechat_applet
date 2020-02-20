const IndexModel= require('../../models/IndexModel')
Page({
  data: {
    ios:[],
    android:[],
    app:[],
    relax:[],
    font:[],
    android:[],
    resource:[],    
    commend:[],    
    welfare:[],    
  },
async onLoad(){
  IndexModel.getCat().then(res=>{
    var ios = res.data.results.iOS;
    var android = res.data.results.Android;
    var relax = res.data.results.休息视频;
    var app = res.data.results.App;
    var font = res.data.results.前端;
    var resource = res.data.results.拓展资源;
    var commend = res.data.results.瞎推荐;
    var welfare = res.data.results.福利;
    this.setData({
      ios,
      android,
      relax,
      app,
      relax,
      font,
      resource,
      commend,
      welfare
    })
  })
}
})
