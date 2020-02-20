const CommentModel = require('../../models/CommentModel');
Page({
  data: {
    comment:[]
  },
  async onLoad(options) {
    var data = await CommentModel.getComment(options.id);
    console.log(options.id)
    var comments = data.data.hotComments;
    var arr=[]
    comments.forEach(item=>{
      var obj = {};
      obj.avatarUrl = item.user.avatarUrl;
      obj.nickname = item.user.nickname;
      obj.content = item.content.length>7?item.content.slice(0,40)+"...":item.content;
      obj.likedCount =item.likedCount;
      obj.id = item.id;
      arr.push(obj)
    })
    this.setData({
      comment:arr
    })
  },

})