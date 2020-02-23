//Page Object
Page({
    data: {
        
    },
    //options(Object)
    onLoad: function(options){
        
    },
   handleToggle(){
       wx.switchTab({
           url:'/pages/read/read'
       })
   }
});