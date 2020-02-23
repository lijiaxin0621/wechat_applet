// pages/search/search.js
const http = require("../../models/search-model")
Page({
  data: {
   lists:[]
  },
 onLoad:async function(event){ 
   
 },

 async handleSubmit(event){
  var keyword = event.detail.value.keyword;
  console.log(keyword)
  var res = await http.getSearch(keyword)
  var lists = res.data.books;
  console.log(lists)
  this.setData({
    lists
  })
/*   lists.forEach(item=>{
    obj={};
    obj.title = item.title;
    lists.push(obj)
  }) */
 
  }
})