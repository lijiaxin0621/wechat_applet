var baseUrl = "https://douban.uieee.com/v2/book/";
function http({url,data}){
    return new Promise((resolve,reject)=>{
        wx.request({
            url: baseUrl+url,
            data,
            header: {'content-type':'json'},
            method: 'GET',
            dataType: 'json',
            responseType: 'text',
            success: (res)=>{
               resolve(res) 
            },
            fail: (err)=>{
                reject(err)
            }
        });
    })
}
module.exports= {
    getSearch:(keyword)=>{
        return http({
            url:`search?q=${keyword}`,
        })
    }
}