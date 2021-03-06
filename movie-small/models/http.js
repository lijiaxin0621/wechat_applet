var baseUrl = "https://douban.uieee.com/v2/movie/";
function http({url}){
    return new Promise((resolve,reject)=>{
        wx.request({
            url: baseUrl+url,
            data:{},
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
        })
    })
}
module.exports = {
    getInTheaters:()=>{
        return http({
            url:"in_theaters"
        })
    },
    getComingSoon:()=>{
        return http({
            url:"coming_soon"
        })
    },
    getTop250:()=>{
        return http({
            url:"top250"
        })
    },
    getUs_box:()=>{
        return http({
            url:"us_box"
        })
    },
    getMore:(url)=>{
        return http({
            url
        })
    },
    getDetail:(id)=>{
        return http({
            url:`subject/${id}`
        })
    }
}